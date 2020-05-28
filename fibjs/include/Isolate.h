/*
 * Isolate.h
 *
 *  Created on: May 2, 2015
 *      Author: lion
 */

#ifndef ISOLATE_H_
#define ISOLATE_H_

#include <exlib/include/list.h>
#include <exlib/include/service.h>
#include <jssdk/include/jssdk-fibjs.h>

#include "QuickArray.h"
#include "utf8.h"

namespace fibjs {

inline v8::Local<v8::String> NewString(v8::Isolate* isolate, const char* data, int32_t length = -1)
{
    exlib::wstring wstr = utf8to16String(data, length);

    return v8::String::NewFromTwoByte(isolate, (const uint16_t*)wstr.c_str(),
        v8::String::kNormalString, (int32_t)wstr.length());
}

inline v8::Local<v8::String> NewString(v8::Isolate* isolate, exlib::string str)
{
    return NewString(isolate, str.c_str(), (int32_t)str.length());
}

class SandBox;
class JSFiber;
class HttpClient;
class LruCache;
class File_base;
class ValueHolder;

class Isolate : public js::Isolate {
public:
    class rt_base {
    public:
        rt_base(Isolate* cur = NULL);
        ~rt_base();

    protected:
        Isolate* m_isolate;
    };

    class rt : public rt_base {
    public:
        rt(Isolate* cur = NULL)
            : rt_base(cur)
            , unlocker(m_isolate->m_isolate)
        {
        }

    private:
        v8::Unlocker unlocker;
    };

public:
    Isolate(exlib::string fname);

public:
    static Isolate* current();
    void init();

    void RequestInterrupt(v8::InterruptCallback callback, void* data);

    void start_profiler();

    void Ref();
    void Unref(int32_t hr = 0);

    v8::Local<v8::String> NewString(const char* data, int length = -1)
    {
        return fibjs::NewString(m_isolate, data, length);
    }

    v8::Local<v8::String> NewString(exlib::string str)
    {
        return fibjs::NewString(m_isolate, str);
    }

    v8::Local<v8::Function> NewFunction(const char* funcName, v8::FunctionCallback callback,
        v8::Local<v8::Value> data = v8::Local<v8::Value>())
    {
        v8::Local<v8::Function> func = v8::Function::New(m_isolate, callback, data);
        if (!func.IsEmpty())
            func->SetName(NewString(funcName));
        return func;
    }

    v8::Local<v8::Context> context()
    {
        return m_isolate->GetCurrentContext();
    }

private:
    int32_t m_idleFibers;

public:
    int32_t increaseIdleFibers()
    {
        return ++m_idleFibers;
    }
    int32_t decreaseIdleFibers()
    {
        return --m_idleFibers;
    }
    int32_t getIdleFibersCount()
    {
        return m_idleFibers;
    }

private:
    int32_t m_currentFibers;

public:
    int32_t increaseCurrentFibers()
    {
        return ++m_currentFibers;
    }
    int32_t decreaseCurrentFibers()
    {
        return --m_currentFibers;
    }
    int32_t getCurrentFibersCount()
    {
        return m_currentFibers;
    }

public:
    int32_t m_id;
    int32_t m_hr;
    exlib::string m_fname;

    QuickArray<void*> m_classInfo;

    obj_ptr<SandBox> m_topSandbox;
    obj_ptr<HttpClient> m_httpclient;

    obj_ptr<File_base> m_stdin;
    obj_ptr<File_base> m_stdout;
    obj_ptr<File_base> m_stderr;

    void* m_test;

    int64_t m_fid;

    int64_t m_flake_tm;
    int32_t m_flake_host;
    int32_t m_flake_count;

    bool m_console_colored;
    int32_t m_loglevel;

    int32_t m_defaultMaxListeners;

    int32_t m_exitCode;

    bool m_enable_FileSystem;
    bool m_safe_buffer;
    int32_t m_max_buffer_size;
};

} /* namespace fibjs */
#endif /* ISOLATE_H_ */
