#include <stdio.h>

#include <jssdk/fapi/fapi.h>

using v8::Context;
using v8::Function;
using v8::FunctionCallbackInfo;
using v8::FunctionTemplate;
using v8::Int32;
using v8::Isolate;
using v8::Local;
using v8::MaybeLocal;
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;

static int seq;
// 定义一个工具函数，生成seq
void GenSeq(const FunctionCallbackInfo<Value>& args)
{
    // Isolate* isolate = args.GetIsolate();
    // args.GetReturnValue().Set(Number::New(isolate, ++seq));
}

// 定义一个加法函数
void Add(const FunctionCallbackInfo<Value>& args)
{
    // Isolate* isolate = args.GetIsolate();
    // int a = args[0].As<Int32>()->Value();
    // int b = args[1].As<Int32>()->Value();
    // args.GetReturnValue().Set(Number::New(isolate, a + b));
}

void Initialize(
    v8::Local<v8::Object> exports,
    v8::Local<v8::Value> module,
    v8::Local<v8::Context> context)
{
    printf("Hello world \n");

    // Isolate* isolate = context->GetIsolate();
    // // 新建一个函数模版
    // Local<FunctionTemplate> func = FunctionTemplate::New(isolate);
    // // 新建一个字符串表示函数名
    // Local<String> zaylee = String::NewFromUtf8(isolate, "zaylee", v8::NewStringType::kNormal).ToLocalChecked();
    // // 设置函数名
    // func->SetClassName(zaylee);
    // // 设置原型属性
    // func->PrototypeTemplate()->Set(isolate, "protoField", Number::New(isolate, 1));
    // // 设置对象属性
    // func->InstanceTemplate()->Set(isolate, "instanceField", Number::New(isolate, 2));
    // func->InstanceTemplate()->Set(isolate, "add", FunctionTemplate::New(isolate, Add));
    // // 设置函数对象本身的属性
    // func->Set(isolate, "funcField", Number::New(isolate, 3));
    // // 根据函数模版创建一个函数
    // Local<Function> ret = func->GetFunction(context).ToLocalChecked();
    // Local<String> Demo = String::NewFromUtf8(isolate, "Demo", v8::NewStringType::kNormal).ToLocalChecked();
    // // 导出函数
    // exports->Set(context, Demo, ret).Check();
}

FAPI_JS_CJS(Initialize);