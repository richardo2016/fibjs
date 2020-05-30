/*
 * Runtime.cpp
 *
 *  Created on: Jul 23, 2012
 *      Author: lion
 */

#include <locale.h>
#include <string.h>
#include <time.h>
#include "object.h"
#include "Runtime.h"
#include "Fiber.h"
#include "SandBox.h"
#include "HttpClient.h"
#include "console.h"
#include "LruCache.h"
#include "EventEmitter.h"
#include "ifs/global.h"
#include "ifs/os.h"
#include "ifs/process.h"
#include "ifs/coroutine.h"
#include "ifs/profiler.h"
#include "path.h"
#include "options.h"
#include <jssdk/fibjs_runtime/include/jssdk-fibjs.h>

namespace fibjs {

void init_date();
void init_acThread();
void init_aio();
void init_process();
void init_sym();

void init_argv(int32_t argc, char** argv);
void init_start_argv(int32_t argc, char** argv);
void options(int32_t& pos, char* argv[]);
result_t ifZipFile(exlib::string filename, bool& retVal);

exlib::string s_root;

static void init(v8::Platform* (*get_platform)())
{
    ::setlocale(LC_ALL, "");

    int32_t cpus = 0;

    process_base::cwd(s_root);

    os_base::cpuNumbers(cpus);
    if (cpus < 2)
        cpus = 2;

    // TODO: throw/log error if there's mistake in internal engine.
    if (!js::jssdk_setup_fibjs()) {
        errorLog("[init] js::jssdk_setup_fibjs() failed! check if engine number & name matched!");
        return;
    }

    exlib::Service::init(cpus + 1);

    init_date();
    init_acThread();
    init_aio();
    init_process();

#ifdef Linux
    init_sym();
#endif

    srand((unsigned int)time(0));

    js::getFibjsApi()->init();
}

void start(int32_t argc, char** argv, result_t (*main)(Isolate*), v8::Platform* (*get_platform)())
{
    class MainThread : public exlib::OSThread {
    public:
        MainThread(int32_t argc, char** argv, result_t (*main)(Isolate*), v8::Platform* (*get_platform)())
            : m_argc(argc)
            , m_argv(argv)
            , m_main(main)
            , m_get_platform(get_platform)
        {
        }

    public:
        static void start_fiber(void* p)
        {
            MainThread* th = (MainThread*)p;
            Isolate* isolate = new Isolate(th->m_start);
            syncCall(isolate, th->m_main, isolate);
        }

        virtual void Run()
        {
            int32_t argc = m_argc;
            char** argv = m_argv;

            exlib::string exePath;
            std::vector<char*> ptrArg;

            process_base::get_execPath(exePath);

            bool bZip;
            ifZipFile(exePath, bZip);
            if (bZip) {

                exePath.append(1, '$');
                ptrArg.resize(argc + 1);

                ptrArg[0] = argv[0];
                ptrArg[1] = exePath.c_buffer();

                int32_t i;
                for (i = 1; i < argc; i++)
                    ptrArg[i + 1] = argv[i];

                argv = &ptrArg[0];
                argc++;
            }

            init_start_argv(argc, argv);

            int32_t pos = argc;
            options(pos, argv);

            init(m_get_platform);

            if (pos < argc) {
                if (argv[pos][0] == '-')
                    m_start = argv[pos];
                else {
                    m_start = s_root;
                    resolvePath(m_start, argv[pos]);
                }

                if (pos != 1) {
                    int32_t p = 1;
                    for (; pos < argc; pos++)
                        argv[p++] = argv[pos];
                    argc = p;
                }
            }

            init_argv(argc, argv);
            exlib::Service::Create(start_fiber, this, 256 * 1024, "start");

            m_sem.Post();
            exlib::Service::dispatch();
        }

    public:
        exlib::OSSemaphore m_sem;

    private:
        int32_t m_argc;
        char** m_argv;
        exlib::string m_start;
        result_t (*m_main)(Isolate*);
        v8::Platform* (*m_get_platform)();
    };

    MainThread* main_thread = new MainThread(argc, argv, main, get_platform);
    main_thread->start();

    main_thread->m_sem.Wait();
}

exlib::LockedList<Isolate> s_isolates;
exlib::atomic s_iso_id;
exlib::atomic s_iso_ref;

Isolate::rt_base::rt_base(Isolate* cur)
    : m_isolate((cur ? cur : Isolate::current()))
{
    JSFiber* fb = JSFiber::current();
    V8FrameInfo _fi = save_fi(m_isolate->m_isolate);

    fb->m_c_entry_fp_ = _fi.entry_fp;
    fb->m_handler_ = _fi.handle;
}

Isolate::rt_base::~rt_base()
{
}

static void fb_GCCallback(v8::Isolate* js_isolate, v8::GCType type, v8::GCCallbackFlags flags)
{
    Isolate* isolate = Isolate::current();
    exlib::linkitem* p;
    exlib::List<exlib::linkitem> freelist;

    while (true) {
        isolate->m_weakLock.lock();
        isolate->m_weak.getList(freelist);
        isolate->m_weakLock.unlock();

        if (freelist.empty())
            break;

        while ((p = freelist.getHead()) != 0)
            object_base::gc_delete(p);
    }
}

void init_proc(void* p)
{
    Isolate* isolate = (Isolate*)p;
    Runtime rt(isolate);

    isolate->init();
    JSFiber::fiber_proc(p);
}

Isolate::Isolate(exlib::string fname)
    : js::Isolate()
    , m_id((int32_t)s_iso_id.inc())
    , m_hr(0)
    , m_test(NULL)
    , m_currentFibers(0)
    , m_idleFibers(0)
    , m_fid(1)
    , m_flake_tm(0)
    , m_flake_host(0)
    , m_flake_count(0)
    , m_loglevel(console_base::_NOTSET)
    , m_console_colored(true)
    , m_defaultMaxListeners(10)
    , m_exitCode(0)
    , m_enable_FileSystem(true)
    , m_safe_buffer(false)
    , m_max_buffer_size(-1)
{
    m_fname = fname;

    m_jsruntime->getV8Isolate()->AddGCEpilogueCallback(fb_GCCallback, v8::kGCTypeMarkSweepCompact);

    m_currentFibers++;
    m_idleFibers++;

    exlib::Service::Create(init_proc, this, stack_size * 1024, "JSFiber");
}

Isolate* Isolate::current()
{
    return (Isolate*)js::Isolate::current();
}

void Isolate::init()
{
    s_isolates.putTail(this);

    v8::Isolate* v8_isolate = m_jsruntime->getV8Isolate();

    js::Locker locker(m_jsruntime);
    js::Scope isolate_scope(m_jsruntime);
    js::HandleScope handle_scope(m_jsruntime);

    JSFiber::scope s;

    v8::Local<v8::Context> _context = v8::Context::New(v8_isolate);
    m_context.Reset(v8_isolate, _context);

    v8::Context::Scope context_scope(_context);

    if (g_cov && m_id == 1)
        beginCoverage(v8_isolate);

    _context->SetEmbedderData(1, v8::Object::New(v8_isolate)->GetPrototype());

    static const char* skips[] = { "Master", "repl", "argv", "__filename", "__dirname", NULL };
    global_base::class_info().Attach(this, _context->Global(), skips);

    m_topSandbox = new SandBox();
    m_topSandbox->initRoot();

    auto assertion_error = "class AssertionError extends Error {"
                           "   constructor(options) {"
                           "       var { actual, expected, message, operator } = options;"
                           "       if (message) {"
                           "           super(message);"
                           "       } else {"
                           "           if (actual && actual.stack && actual instanceof Error)"
                           "               actual = `${actual.name}: ${actual.message}`;"
                           "           if (expected && expected.stack && expected instanceof Error)"
                           "               expected = `${expected.name}: ${expected.message}`;"
                           "           super(`${JSON.stringify(actual).slice(0, 128)} ` +"
                           "               `${operator} ${JSON.stringify(expected).slice(0, 128)}`);"
                           "       }"
                           "       this.generatedMessage = !message;"
                           "       this.name = 'AssertionError [ERR_ASSERTION]';"
                           "       this.code = 'ERR_ASSERTION';"
                           "       this.actual = actual;"
                           "       this.expected = expected;"
                           "       this.operator = operator;"
                           "   }"
                           "}"
                           "AssertionError;";

    v8::Local<v8::Script> script = v8::Script::Compile(NewString(assertion_error));
    v8::Local<v8::Object> AssertionError = script->Run().As<v8::Object>();
    m_AssertionError.Reset(v8_isolate, AssertionError);
}

static result_t syncExit(Isolate* isolate)
{
    js::HandleScope handle_scope(isolate->m_jsruntime);

    JSFiber::scope s;
    JSTrigger t(isolate->m_isolate, process_base::class_info().getModule(isolate));
    v8::Local<v8::Value> code = v8::Number::New(isolate->m_isolate, isolate->m_exitCode);
    bool r;

    t._emit("beforeExit", &code, 1, r);
    if (s_iso_ref == 1) {
        if (isolate->m_hr >= 0)
            process_base::exit();
        else
            process_base::exit(isolate->m_hr);
    }

    return 0;
}

void Isolate::Ref()
{
    s_iso_ref.inc();
}

void Isolate::Unref(int32_t hr)
{
    if (s_iso_ref.dec() == 0) {
        Isolate* isolate = s_isolates.head();
        isolate->m_hr = hr;
        syncCall(isolate, syncExit, isolate);
    }
}

void Isolate::start_profiler()
{
    if (g_prof) {
        char name[32];
        obj_ptr<Timer_base> tm;
        sprintf(name, "fibjs-%08x.log", (uint32_t)(intptr_t)this);
        profiler_base::start(name, -1, g_prof_interval, tm);
    }
}
void InvokeApiInterruptCallbacks(v8::Isolate* isolate);
static result_t js_timer(Isolate* isolate)
{
    JSFiber::scope s;
    isolate->m_has_timer = 0;
    InvokeApiInterruptCallbacks(isolate->m_isolate);
    return 0;
}

void Isolate::RequestInterrupt(v8::InterruptCallback callback, void* data)
{
    m_isolate->RequestInterrupt(callback, data);
    if (m_has_timer.CompareAndSwap(0, 1) == 0)
        syncCall(this, js_timer, this);
}

} /* namespace fibjs */
