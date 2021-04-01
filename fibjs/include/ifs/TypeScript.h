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

class TypeScript_base : public object_base {
    DECLARE_CLASS(TypeScript_base);

public:
    // TypeScript_base
    static result_t _new(obj_ptr<TypeScript_base>& retVal, v8::Local<v8::Object> This = v8::Local<v8::Object>());
    virtual result_t get_version(exlib::string& retVal) = 0;

public:
    template <typename T>
    static void __new(const T& args);

public:
    static void s__new(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_get_version(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args);
};
}

namespace fibjs {
inline ClassInfo& TypeScript_base::class_info()
{
    static ClassData::ClassProperty s_property[] = {
        { "version", s_get_version, block_set, false }
    };

    static ClassData s_cd = {
        "TypeScript", false, s__new, NULL,
        0, NULL, 0, NULL, ARRAYSIZE(s_property), s_property, 0, NULL, NULL, NULL,
        &object_base::class_info()
    };

    static ClassInfo s_ci(s_cd);
    return s_ci;
}

inline void TypeScript_base::s__new(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    CONSTRUCT_INIT();
    __new(args);
}

template <typename T>
void TypeScript_base::__new(const T& args)
{
    obj_ptr<TypeScript_base> vr;

    METHOD_NAME("new TypeScript()");
    CONSTRUCT_ENTER();

    METHOD_OVER(0, 0);

    hr = _new(vr, args.This());

    CONSTRUCT_RETURN();
}

inline void TypeScript_base::s_get_version(v8::Local<v8::Name> property, const v8::PropertyCallbackInfo<v8::Value>& args)
{
    exlib::string vr;

    METHOD_NAME("TypeScript.version");
    METHOD_INSTANCE(TypeScript_base);
    PROPERTY_ENTER();

    hr = pInst->get_version(vr);

    METHOD_RETURN();
}
}
