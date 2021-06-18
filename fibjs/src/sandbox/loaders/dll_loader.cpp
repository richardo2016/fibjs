/*
 * js_loader.cpp
 *
 *  Created on: Jun 3, 2017
 *      Author: lion
 */

#include "object.h"
#include "path.h"
#include "SandBox.h"
#include "loaders.h"
#include "ifs/util.h"

// #include "jssdk/fapi/macros.h"
#include "jssdk/fapi/fapi.h"
#include "exlib/include/dl_func.h"

namespace fibjs {

void _dll_loader(const v8::FunctionCallbackInfo<v8::Value>& args)
{
    v8::Isolate* isolate = args.GetIsolate();
    v8::Local<v8::Object> module = v8::Local<v8::Object>::Cast(args.Data());

    assert(args.Length() == 2);

    v8::Local<v8::Function> OnInitializeCjs = v8::Local<v8::Function>::Cast(args[0]);
    v8::Local<v8::String> id = v8::Local<v8::String>::Cast(args[1]);

    v8::Local<v8::Value> exports = v8::Undefined(isolate);

    printf("[_dll_loader] herehrerer \n");
    printf("[_dll_loader] id is %s \n", ToCString(v8::String::Utf8Value(isolate, id)));

    module->Set(NewString(isolate, "exports"), exports);
}

result_t DllLoader::run(SandBox::Context* ctx, Buffer_base* src, exlib::string name,
    exlib::string arg_names, std::vector<v8::Local<v8::Value>>& args)
{
    void* module_init_handle = NULL;
    printf("[DllLoader::compile] [0] \n");
    printf("[DllLoader::compile] name is %s \n", name.c_str());
    printf("[DllLoader::compile] fapi::dllInitHandle is %s \n", fapi::dllInitHandle);

    auto OnInitializeCjsHandle = exlib::dl_func(module_init_handle, name.c_str(), fapi::dllInitHandle, fapi::TOnInitializeCjs);
    printf("[DllLoader::compile] [1] \n");

    // --------------------------------------- implement generate new module
    Isolate* isolate = ctx->m_sb->holder();

    v8::Local<v8::Object> module = v8::Local<v8::Object>::Cast(args[5]);
    v8::Local<v8::Object> exports = v8::Local<v8::Object>::Cast(args[4]);
    module->Set(isolate->NewString("exports"), exports);

    OnInitializeCjsHandle(exports, args[5], isolate->context());

    return 0;
}
}