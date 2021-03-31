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

class SciterView_base : public EventEmitter_base {
    DECLARE_CLASS(SciterView_base);

public:
    // SciterView_base
    static result_t _new(v8::Local<v8::Object> config, obj_ptr<SciterView_base>& retVal, v8::Local<v8::Object> This = v8::Local<v8::Object>());
    virtual result_t show() = 0;

public:
    template <typename T>
    static void __new(const T& args);

public:
    static void s__new(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_show(const v8::FunctionCallbackInfo<v8::Value>& args);
};
}

namespace fibjs {
inline ClassInfo& SciterView_base::class_info()
{
    static ClassData::ClassMethod s_method[] = {
        { "show", s_show, false }
    };

    static ClassData s_cd = {
        "SciterView", false, s__new, NULL,
        ARRAYSIZE(s_method), s_method, 0, NULL, 0, NULL, 0, NULL, NULL, NULL,
        &EventEmitter_base::class_info()
    };

    static ClassInfo s_ci(s_cd);
    return s_ci;
}

inline void SciterView_base::s__new(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    CONSTRUCT_INIT();
    __new(args);
}

template <typename T>
void SciterView_base::__new(const T& args)
{
    obj_ptr<SciterView_base> vr;

    METHOD_NAME("new SciterView()");
    CONSTRUCT_ENTER();

    METHOD_OVER(1, 0);

    OPT_ARG(v8::Local<v8::Object>, 0, v8::Object::New(isolate));

    hr = _new(v0, vr, args.This());

    CONSTRUCT_RETURN();
}

inline void SciterView_base::s_show(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    METHOD_NAME("SciterView.show");
    METHOD_INSTANCE(SciterView_base);
    METHOD_ENTER();

    METHOD_OVER(0, 0);

    hr = pInst->show();

    METHOD_VOID();
}
}
