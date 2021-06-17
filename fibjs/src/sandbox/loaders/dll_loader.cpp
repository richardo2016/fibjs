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

#include "jssdk/fapi/macros.h"
#include "exlib/include/dl_func.h"

static void OnInitializeCjs()
{
    return;
}

namespace fibjs {

result_t DllLoader::compile(SandBox::Context* ctx, Buffer_base* src, exlib::string name,
    exlib::string arg_names, v8::Local<v8::Script>& script)
{
    Isolate* isolate = ctx->m_sb->holder();
    v8::Local<v8::String> soname = isolate->NewString(name);

    void* module_init_handle = NULL;
    printf("[DllLoader::compile] [0] \n");
    printf("[DllLoader::compile] name is %s \n", name.c_str());
    printf("[DllLoader::compile] fapi::dllInitHandle is %s \n", fapi::dllInitHandle);
    // TODO: you should make init_func associated with v8::Local<v8::Function> func below, maybe
    // 1. just call init_func by provide one `v8::Local<v8::Object> mod`, with module name <name>
    // 2. make func equals to `call init_func`.
    // I like the 1st approach : )
    auto init_func = exlib::dl_func(module_init_handle, name.c_str(), fapi::dllInitHandle, OnInitializeCjs);
    printf("[DllLoader::compile] [1] \n");

    exlib::string funcKey = name;
    os_basename(funcKey, ".dll", funcKey);
    os_basename(funcKey, ".so", funcKey);
    // just for debug, you should give some ok thing;
    funcKey = "lalalalaa";

    printf("[DllLoader::compile] funcKey is %s \n", funcKey.c_str());
    exlib::string randomFunName = fapi::dllInitHandle + funcKey + "123456";
    printf("[DllLoader::compile] randomFunName is %s \n", randomFunName.c_str());

    // create one function template
    v8::Local<v8::FunctionTemplate> funcTpl = v8::FunctionTemplate::New(isolate->m_isolate);
    v8::Local<v8::Context> context = isolate->m_isolate->GetCurrentContext();

    funcTpl->SetClassName(isolate->NewString(randomFunName));
    v8::Local<v8::Function> func = funcTpl->GetFunction(context).ToLocalChecked();
    // isolate->NewFunction(randomFunName.c_str(), v8::FunctionCallback());

    v8::Local<v8::Object> _global = context->Global();
    _global->Set(isolate->NewString(randomFunName), func);

    // --------------------------------------- do you have better approach get one v8::Script?
    exlib::string strScript = "module.exports = " + randomFunName + ";";
    exlib::string src1 = arg_names + strScript + "\n});";

    TryCatch try_catch;
    v8::ScriptOrigin so_origin(soname);

    // TODO: try to generate this `lscript` programmatically from one v8::Local<v8::Object>;
    v8::MaybeLocal<v8::Script> lscript = v8::Script::Compile(
        context,
        isolate->NewString(src1), &so_origin);

    if (lscript.IsEmpty()) {
        TryCatch try_catch1;

        v8::ScriptCompiler::Source script_source(
            isolate->NewString(strScript),
            so_origin);

        if (v8::ScriptCompiler::CompileUnboundScript(
                isolate->m_isolate, &script_source)
                .IsEmpty()) {
            try_catch.Reset();
            return throwSyntaxError(try_catch1);
        }

        return throwSyntaxError(try_catch);
    }

    script = lscript.ToLocalChecked();

    return 0;
}
}