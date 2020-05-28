/***************************************************************************
 *                                                                         *
 *   This file was automatically generated using idlc.js                   *
 *   PLEASE DO NOT EDIT!!!!                                                *
 *                                                                         *
 ***************************************************************************/

#ifndef _addons_base_H_
#define _addons_base_H_

/**
 @author Leo Hoo <lion@9465.net>
 */

#include "../object.h"

namespace fibjs {

class addons_base : public object_base {
    DECLARE_CLASS(addons_base);

public:
    enum {
        _ADDON_MODULE = 0
    };

public:
    // addons_base
    static result_t load(exlib::string addon_filename, v8::Local<v8::Value>& retVal);
    static result_t loadModule(exlib::string module_name, exlib::string addon_filename, v8::Local<v8::Value>& retVal);

public:
    static void s__new(const v8::FunctionCallbackInfo<v8::Value>& args)
    {
        CONSTRUCT_INIT();

        Isolate* isolate = Isolate::current();

        isolate->m_isolate->ThrowException(
            isolate->NewString("not a constructor"));
    }

public:
    static void s_static_load(const v8::FunctionCallbackInfo<v8::Value>& args);
    static void s_static_loadModule(const v8::FunctionCallbackInfo<v8::Value>& args);
};
}

namespace fibjs {
inline ClassInfo& addons_base::class_info()
{
    static ClassData::ClassMethod s_method[] = {
        { "load", s_static_load, true },
        { "loadModule", s_static_loadModule, true }
    };

    static ClassData::ClassConst s_const[] = {
        { "ADDON_MODULE", _ADDON_MODULE }
    };

    static ClassData s_cd = {
        "addons", true, s__new, NULL,
        ARRAYSIZE(s_method), s_method, 0, NULL, 0, NULL, ARRAYSIZE(s_const), s_const, NULL, NULL,
        &object_base::class_info()
    };

    static ClassInfo s_ci(s_cd);
    return s_ci;
}

inline void addons_base::s_static_load(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    v8::Local<v8::Value> vr;

    METHOD_NAME("addons.load");
    METHOD_ENTER();

    METHOD_OVER(1, 1);

    ARG(exlib::string, 0);

    hr = load(v0, vr);

    METHOD_RETURN();
}

inline void addons_base::s_static_loadModule(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    v8::Local<v8::Value> vr;

    METHOD_NAME("addons.loadModule");
    METHOD_ENTER();

    METHOD_OVER(2, 2);

    ARG(exlib::string, 0);
    ARG(exlib::string, 1);

    hr = loadModule(v0, v1, vr);

    METHOD_RETURN();
}
}

#endif
