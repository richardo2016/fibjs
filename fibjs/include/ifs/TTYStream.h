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
#include "ifs/Stream.h"

namespace fibjs {

class Stream_base;

class TTYStream_base : public Stream_base {
    DECLARE_CLASS(TTYStream_base);

public:
    // TTYStream_base
    virtual result_t get_isRaw(bool& retVal) = 0;
    virtual result_t get_isTTY(bool& retVal) = 0;
    virtual result_t setRawMode(bool isRawMode, obj_ptr<TTYStream_base>& retVal) = 0;

public:
    static void s__new(const v8::FunctionCallbackInfo<v8::Value>& args)
    {
        CONSTRUCT_INIT();

        Isolate* isolate = Isolate::current();

        isolate->m_isolate->ThrowException(
            isolate->NewString("not a constructor"));
    }

public:
    static void s_get_isRaw(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_get_isTTY(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
    static void s_setRawMode(const v8::FunctionCallbackInfo<v8::Value>& args);
};
}

namespace fibjs {
inline ClassInfo& TTYStream_base::class_info()
{
    static ClassData::ClassMethod s_method[] = {
        { "setRawMode", s_setRawMode, false }
    };

    static ClassData::ClassProperty s_property[] = {
        { "isRaw", s_get_isRaw, block_set, false },
        { "isTTY", s_get_isTTY, block_set, false }
    };

    static ClassData s_cd = {
        "TTYStream", false, s__new, NULL,
        ARRAYSIZE(s_method), s_method, 0, NULL, ARRAYSIZE(s_property), s_property, 0, NULL, NULL, NULL,
        &Stream_base::class_info()
    };

    static ClassInfo s_ci(s_cd);
    return s_ci;
}

inline void TTYStream_base::s_get_isRaw(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    bool vr;

    METHOD_NAME("TTYStream.isRaw");
    METHOD_INSTANCE(TTYStream_base);
    PROPERTY_ENTER();

    hr = pInst->get_isRaw(vr);

    METHOD_RETURN();
}

inline void TTYStream_base::s_get_isTTY(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    bool vr;

    METHOD_NAME("TTYStream.isTTY");
    METHOD_INSTANCE(TTYStream_base);
    PROPERTY_ENTER();

    hr = pInst->get_isTTY(vr);

    METHOD_RETURN();
}

inline void TTYStream_base::s_setRawMode(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    obj_ptr<TTYStream_base> vr;

    METHOD_NAME("TTYStream.setRawMode");
    METHOD_INSTANCE(TTYStream_base);
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(bool, 0);

    hr = pInst->setRawMode(v0, vr);

    METHOD_RETURN();
}
}
