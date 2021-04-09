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

namespace fibjs {

class TTYStream_base;

class tty_base : public object_base {
    DECLARE_CLASS(tty_base);

public:
    // tty_base
    static result_t isatty(int32_t fd, bool& retVal);
    static result_t get_readStream(obj_ptr<TTYStream_base>& retVal);

public:
    static void s__new(const v8::FunctionCallbackInfo<v8::Value>& args)
    {
        CONSTRUCT_INIT();

        Isolate* isolate = Isolate::current();

        isolate->m_isolate->ThrowException(
            isolate->NewString("not a constructor"));
    }

public:
    static void s_static_isatty(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_static_get_readStream(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
};
}

#include "ifs/TTYStream.h"

namespace fibjs {
inline ClassInfo& tty_base::class_info()
{
    static ClassData::ClassMethod s_method[] = {
        { "isatty", s_static_isatty, true }
    };

    static ClassData::ClassProperty s_property[] = {
        { "readStream", s_static_get_readStream, block_set, true }
    };

    static ClassData s_cd = {
        "tty", true, s__new, NULL,
        ARRAYSIZE(s_method), s_method, 0, NULL, ARRAYSIZE(s_property), s_property, 0, NULL, NULL, NULL,
        &object_base::class_info()
    };

    static ClassInfo s_ci(s_cd);
    return s_ci;
}

inline void tty_base::s_static_isatty(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    bool vr;

    METHOD_NAME("tty.isatty");
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(int32_t, 0);

    hr = isatty(v0, vr);

    METHOD_RETURN();
}

inline void tty_base::s_static_get_readStream(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    obj_ptr<TTYStream_base> vr;

    METHOD_NAME("tty.readStream");
    PROPERTY_ENTER();

    hr = get_readStream(vr);

    METHOD_RETURN();
}
}
