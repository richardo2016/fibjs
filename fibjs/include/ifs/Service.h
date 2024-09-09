/***************************************************************************
 *                                                                         *
 *   This file was automatically generated using idlc.js                   *
 *   PLEASE DO NOT EDIT!!!!                                                *
 *                                                                         *
 ***************************************************************************/

#pragma once

/**
 @author Leo Hoo <lion@9465.net>
 */

#include "../object.h"
#include "ifs/EventEmitter.h"

namespace fibjs {

class EventEmitter_base;

class Service_base : public EventEmitter_base {
    DECLARE_CLASS(Service_base);

public:
    // Service_base
    static result_t _new(exlib::string name, v8::Local<v8::Function> worker, v8::Local<v8::Object> event, obj_ptr<Service_base>& retVal, v8::Local<v8::Object> This = v8::Local<v8::Object>());
    virtual result_t run(AsyncEvent* ac) = 0;
    virtual result_t get_name(exlib::string& retVal) = 0;
    virtual result_t set_name(exlib::string newVal) = 0;
    virtual result_t get_onstop(v8::Local<v8::Function>& retVal) = 0;
    virtual result_t set_onstop(v8::Local<v8::Function> newVal) = 0;
    virtual result_t get_onpause(v8::Local<v8::Function>& retVal) = 0;
    virtual result_t set_onpause(v8::Local<v8::Function> newVal) = 0;
    virtual result_t get_oncontinue(v8::Local<v8::Function>& retVal) = 0;
    virtual result_t set_oncontinue(v8::Local<v8::Function> newVal) = 0;
    static result_t install(exlib::string name, exlib::string cmd, exlib::string displayName, exlib::string description);
    static result_t remove(exlib::string name);
    static result_t start(exlib::string name);
    static result_t stop(exlib::string name);
    static result_t restart(exlib::string name);
    static result_t isInstalled(exlib::string name, bool& retVal);
    static result_t isRunning(exlib::string name, bool& retVal);

public:
    template <typename T>
    static void __new(const T& args);

public:
    static void s__new(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_run(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_get_name(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_set_name(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_get_onstop(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_set_onstop(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_get_onpause(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_set_onpause(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_get_oncontinue(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_set_oncontinue(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_static_install(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_static_remove(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_static_start(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_static_stop(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_static_restart(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_static_isInstalled(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_static_isRunning(const v8::FunctionCallbackInfo<v8::Value>& args);

public:
    ASYNC_MEMBER0(Service_base, run);
};
}

namespace fibjs {
inline ClassInfo& Service_base::class_info()
{
    static ClassData::ClassMethod s_method[] = {
        { "run", s_run, false, ClassData::ASYNC_ASYNC },
        { "install", s_static_install, true, ClassData::ASYNC_SYNC },
        { "remove", s_static_remove, true, ClassData::ASYNC_SYNC },
        { "start", s_static_start, true, ClassData::ASYNC_SYNC },
        { "stop", s_static_stop, true, ClassData::ASYNC_SYNC },
        { "restart", s_static_restart, true, ClassData::ASYNC_SYNC },
        { "isInstalled", s_static_isInstalled, true, ClassData::ASYNC_SYNC },
        { "isRunning", s_static_isRunning, true, ClassData::ASYNC_SYNC }
    };

    static ClassData::ClassProperty s_property[] = {
        { "name", s_get_name, s_set_name, false },
        { "onstop", s_get_onstop, s_set_onstop, false },
        { "onpause", s_get_onpause, s_set_onpause, false },
        { "oncontinue", s_get_oncontinue, s_set_oncontinue, false }
    };

    static ClassData s_cd = {
        "Service", false, s__new, NULL,
        ARRAYSIZE(s_method), s_method, 0, NULL, ARRAYSIZE(s_property), s_property, 0, NULL, NULL, NULL,
        &EventEmitter_base::class_info(),
        true
    };

    static ClassInfo s_ci(s_cd);
    return s_ci;
}

inline void Service_base::s__new(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    CONSTRUCT_INIT();
    __new(args);
}

template <typename T>
void Service_base::__new(const T& args)
{
    obj_ptr<Service_base> vr;

    CONSTRUCT_ENTER();

    METHOD_OVER(3, 2);

    ARG(exlib::string, 0);
    ARG(v8::Local<v8::Function>, 1);
    OPT_ARG(v8::Local<v8::Object>, 2, v8::Object::New(isolate->m_isolate));

    hr = _new(v0, v1, v2, vr, args.This());

    CONSTRUCT_RETURN();
}

inline void Service_base::s_run(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    ASYNC_METHOD_INSTANCE(Service_base);
    METHOD_ENTER();

    ASYNC_METHOD_OVER(0, 0);

    if (!cb.IsEmpty())
        hr = pInst->acb_run(cb, args);
    else
        hr = pInst->ac_run();

    METHOD_VOID();
}

inline void Service_base::s_get_name(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    exlib::string vr;

    METHOD_INSTANCE(Service_base);
    METHOD_ENTER();

    METHOD_OVER(0, 0);

    hr = pInst->get_name(vr);

    METHOD_RETURN();
}

inline void Service_base::s_set_name(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    METHOD_INSTANCE(Service_base);
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(exlib::string, 0);

    hr = pInst->set_name(v0);

    METHOD_VOID();
}

inline void Service_base::s_get_onstop(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    v8::Local<v8::Function> vr;

    METHOD_INSTANCE(Service_base);
    METHOD_ENTER();

    METHOD_OVER(0, 0);

    hr = pInst->get_onstop(vr);

    METHOD_RETURN();
}

inline void Service_base::s_set_onstop(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    METHOD_INSTANCE(Service_base);
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(v8::Local<v8::Function>, 0);

    hr = pInst->set_onstop(v0);

    METHOD_VOID();
}

inline void Service_base::s_get_onpause(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    v8::Local<v8::Function> vr;

    METHOD_INSTANCE(Service_base);
    METHOD_ENTER();

    METHOD_OVER(0, 0);

    hr = pInst->get_onpause(vr);

    METHOD_RETURN();
}

inline void Service_base::s_set_onpause(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    METHOD_INSTANCE(Service_base);
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(v8::Local<v8::Function>, 0);

    hr = pInst->set_onpause(v0);

    METHOD_VOID();
}

inline void Service_base::s_get_oncontinue(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    v8::Local<v8::Function> vr;

    METHOD_INSTANCE(Service_base);
    METHOD_ENTER();

    METHOD_OVER(0, 0);

    hr = pInst->get_oncontinue(vr);

    METHOD_RETURN();
}

inline void Service_base::s_set_oncontinue(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    METHOD_INSTANCE(Service_base);
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(v8::Local<v8::Function>, 0);

    hr = pInst->set_oncontinue(v0);

    METHOD_VOID();
}

inline void Service_base::s_static_install(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    METHOD_ENTER();

    METHOD_OVER(4, 2);

    ARG(exlib::string, 0);
    ARG(exlib::string, 1);
    OPT_ARG(exlib::string, 2, "");
    OPT_ARG(exlib::string, 3, "");

    hr = install(v0, v1, v2, v3);

    METHOD_VOID();
}

inline void Service_base::s_static_remove(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(exlib::string, 0);

    hr = remove(v0);

    METHOD_VOID();
}

inline void Service_base::s_static_start(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(exlib::string, 0);

    hr = start(v0);

    METHOD_VOID();
}

inline void Service_base::s_static_stop(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(exlib::string, 0);

    hr = stop(v0);

    METHOD_VOID();
}

inline void Service_base::s_static_restart(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(exlib::string, 0);

    hr = restart(v0);

    METHOD_VOID();
}

inline void Service_base::s_static_isInstalled(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    bool vr;

    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(exlib::string, 0);

    hr = isInstalled(v0, vr);

    METHOD_RETURN();
}

inline void Service_base::s_static_isRunning(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    bool vr;

    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(exlib::string, 0);

    hr = isRunning(v0, vr);

    METHOD_RETURN();
}
}
