/*
 * Fiber.cpp
 *
 *  Created on: Jul 23, 2012
 *      Author: lion
 */

#include "object.h"
#include "Fiber.h"
#include "ifs/os.h"
#include "ifs/process.h"
#include "options.h"
#include <jssdk/fibjs_runtime/include/jssdk-fibjs.h>

namespace fibjs {

#define MAX_IDLE 256

int32_t g_spareFibers;
static int32_t g_tlsCurrent;

class fiber_initer {
public:
    fiber_initer()
    {
        g_spareFibers = MAX_IDLE;
        g_tlsCurrent = exlib::Fiber::tlsAlloc();
    }
} s_fiber_initer;

void JSFiber::fiber_proc(void* p)
{
    result_t hr = 0;
    Isolate* isolate = (Isolate*)p;

    {
        Runtime rt(isolate);
        js::Locker locker(isolate->m_jsruntime);
        js::Scope isolate_scope(isolate->m_jsruntime);

        js::HandleScope handle_scope(isolate->m_jsruntime);
        v8::Context::Scope context_scope(
            v8::Local<v8::Context>::New(isolate->m_isolate, isolate->m_context));

        isolate->decreaseIdleFibers();
        while (1) {
            if (!isolate->m_sem.trywait()) {
                isolate->increaseIdleFibers();
                if (isolate->getIdleFibersCount() > g_spareFibers) {
                    isolate->decreaseIdleFibers();
                    break;
                }

                {
                    js::Unlocker unlocker(isolate->m_jsruntime);
                    isolate->m_sem.wait();
                }

                isolate->decreaseIdleFibers();
            }

            if (isolate->getIdleFibersCount() == 0) {
                isolate->increaseCurrentFibers();
                isolate->increaseIdleFibers();

                exlib::Service::Create(fiber_proc, isolate, stack_size * 1024, "JSFiber");
            }

            {
                js::HandleScope handle_scope(isolate->m_jsruntime);
                AsyncEvent* ae = (AsyncEvent*)isolate->m_jobs.getHead();

                hr = ae->js_invoke();
            }

            isolate->Unref(hr);
        }

        isolate->decreaseCurrentFibers();
    }

    isolate->m_isolate->DiscardThreadSpecificMetadata();
}

void JSFiber::set_caller(Fiber_base* caller)
{
    m_caller = caller;

    if (m_caller) {
        v8::Local<v8::Object> co = m_caller->wrap();
        v8::Local<v8::Object> o = wrap();

        v8::Local<v8::Array> ks = co->GetOwnPropertyNames();
        int32_t len = ks->Length();

        int32_t i;

        for (i = 0; i < len; i++) {
            JSValue k = ks->Get(i);
            o->Set(k, JSValue(co->Get(k)));
        }
    }
}

result_t sync_invoke(JSFiber* fiber)
{
    return fiber->js_invoke();
}

void JSFiber::start()
{
    Ref();
    set_caller(JSFiber::current());
    syncCall(holder(), sync_invoke, this);
}

result_t JSFiber::join()
{
    if (!m_quit.isSet()) {
        Isolate::rt _rt(holder());
        m_quit.wait();
    }

    return 0;
}

save_method_name::save_method_name(const char* name)
{
    m_fb = JSFiber::current();

    m_name = m_fb->m_native_name;
    m_fb->m_native_name = name;
}

save_method_name::~save_method_name()
{
    m_fb->m_native_name = m_name;

    if (m_fb->m_termed && !m_fb->holder()->m_isolate->IsExecutionTerminating())
        m_fb->holder()->m_isolate->TerminateExecution();
}

result_t JSFiber::get_id(int64_t& retVal)
{
    retVal = m_id;
    return 0;
}

result_t JSFiber::get_stack(exlib::string& retVal)
{
    if (JSFiber::current() == this)
        retVal = traceInfo(holder()->m_isolate, 300);
    else {
        exlib::string str;

        if (m_native_name) {
            str = "    at ";
            str += m_native_name;
            str += " (native code)";
        }

        exlib::string str1 = traceInfo(holder()->m_isolate, 300, m_c_entry_fp_, m_handler_);
        if (!str1.empty()) {
            if (m_native_name)
                str += '\n';
            str += str1;
        }

        retVal = str;
    }

    return 0;
}

result_t JSFiber::get_caller(obj_ptr<Fiber_base>& retVal)
{
    if (m_caller == NULL)
        return CALL_RETURN_NULL;

    retVal = m_caller;
    return 0;
}

JSFiber* JSFiber::current()
{
    return (JSFiber*)exlib::Fiber::tlsGet(g_tlsCurrent);
}

result_t JSFiber::js_invoke()
{
    scope s(this);
    v8::Local<v8::Value> retVal;

    size_t i;
    Isolate* isolate = holder();
    std::vector<v8::Local<v8::Value>> argv;
    v8::Local<v8::Function> func = v8::Local<v8::Function>::New(isolate->m_isolate, m_func);
    v8::Local<v8::Object> pThis = v8::Local<v8::Object>::New(isolate->m_isolate, m_this);

    argv.resize(m_argv.size());
    for (i = 0; i < m_argv.size(); i++)
        argv[i] = v8::Local<v8::Value>::New(isolate->m_isolate, m_argv[i]);

    clear();

    retVal = func->Call(pThis, (int32_t)argv.size(), argv.data());

    if (!IsEmpty(retVal))
        m_result.Reset(isolate->m_isolate, retVal);

    Unref();

    return 0;
}

JSFiber::scope::scope(JSFiber* fb)
    : m_hr(0)
    , m_pFiber(fb)
{
    if (fb == NULL)
        m_pFiber = new JSFiber();

    exlib::Fiber::tlsPut(g_tlsCurrent, m_pFiber);
    m_pFiber->holder()->m_fibers.putTail(m_pFiber);
}

JSFiber::scope::~scope()
{
    m_pFiber->holder()->m_isolate->RunMicrotasks();

    m_pFiber->m_message = ReportException(try_catch, m_hr);

    m_pFiber->m_quit.set();

    m_pFiber->holder()->m_fibers.remove(m_pFiber);
    exlib::Fiber::tlsPut(g_tlsCurrent, 0);
}

} /* namespace fibjs */
