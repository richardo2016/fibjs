/**
 * @author Richard
 * @email richardo2016@gmail.com
 * @create date 2020-05-04 22:27:54
 * @modify date 2020-05-04 22:27:54
 * @desc fibjs's Module
 */

#ifndef _fj_module_H_
#define _fj_module_H_

#include <jssdk/include/jssdk-fibjs.h>
#include <Isolate.h>
#include <ClassInfo.h>

namespace fibjs {

class RootModule : public js::CJSModule {
public:
    RootModule()
        : js::CJSModule()
    {
    }

public:
    void install()
    {
        if (!g_root)
            g_root = this;
        else
            g_last->setNext(this);

        g_last = this;
    }

public:
    virtual ClassInfo& class_info() = 0;

    virtual v8::Local<v8::Object> getModule(js::Isolate* isolate)
    {
        return class_info().getModule((Isolate*)isolate);
    }

    virtual const char* name()
    {
        return class_info().name();
    }

public:
    static void initGlobalModulesOnJSFiber(Isolate* js_fiber_isolate)
    {
        RootModule* pModule = RootModule::g_root;
        v8::Local<v8::Context> _context = js_fiber_isolate->context();
        v8::Local<v8::Object> glob = _context->Global();

        while (pModule) {
            glob->DefineOwnProperty(_context,
                    js_fiber_isolate->NewString(pModule->name()),
                    pModule->getModule(js_fiber_isolate),
                    (v8::PropertyAttribute)(v8::DontEnum))
                .IsJust();
            pModule = (RootModule*)pModule->getNext();
        }
    }

    static void findModuleByName(Isolate* isolate, exlib::string name, v8::Local<v8::Value>& retVal)
    {
        RootModule* pModule = RootModule::g_root;

        while (pModule)
            if (name == pModule->name()) {
                retVal = pModule->getModule(isolate);
                break;
            } else
                pModule = (RootModule*)pModule->getNext();
    }

    static void getModuleNames(Isolate* isolate, v8::Local<v8::Array>& modules)
    {
        RootModule* pModule = RootModule::g_root;
        intptr_t icnt = 0;

        while (pModule) {
            modules->Set((int32_t)(icnt++), isolate->NewString(pModule->name()));
            pModule = (RootModule*)pModule->getNext();
        }
    }

public:
    static RootModule* g_root;
    static RootModule* g_last;
};

}

#endif // _fj_module_H_
