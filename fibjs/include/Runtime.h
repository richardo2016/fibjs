/*
 * Runtime.h
 *
 *  Created on: Jul 23, 2012
 *      Author: lion
 */

#include "utils.h"
#include <jssdk/fibjs_runtime/include/jssdk-fibjs.h>

#ifndef RUNTIME_H_
#define RUNTIME_H_

namespace fibjs {

class Runtime : public js::FiberRuntime {
public:
    Runtime(Isolate* isolate)
        : js::FiberRuntime(isolate)
    {
    }

public:
    static Runtime* current()
    {
        return (Runtime*)js::FiberRuntime::current();
    };

    static result_t setError(result_t hr)
    {
        Runtime* rt = Runtime::current();

        rt->m_code = hr;
        return rt->m_code;
    }

    static result_t setError(exlib::string err)
    {
        Runtime* rt = Runtime::current();

        rt->m_code = CALL_E_EXCEPTION;
        rt->m_error = err;
        return rt->m_code;
    }

    static result_t setError(const char* err = NULL)
    {
        Runtime* rt = Runtime::current();

        rt->m_code = CALL_E_EXCEPTION;
        rt->m_error.assign(err ? err : "");
        return rt->m_code;
    }

    static const exlib::string& errMessage()
    {
        return Runtime::current()->m_error;
    }

    static result_t errNumber()
    {
        return Runtime::current()->m_code;
    }

    Isolate* isolate()
    {
        assert(v8::Locker::IsLocked(getV8Isolate()));
        return (Isolate*)getIsolate();
    }

    static bool is_current(Isolate* isolate)
    {
        Runtime* rt = current();
        if (rt == NULL)
            return false;

        Isolate* isolate1 = (Isolate*)rt->getIsolate();

        if (isolate1 && !v8::Locker::IsLocked(isolate1->m_isolate))
            isolate1 = NULL;
        return isolate1 == isolate;
    }

    static bool check()
    {
        return !is_current(NULL);
    }

private:
    result_t m_code;
    exlib::string m_error;
};

} /* namespace fibjs */
#endif /* RUNTIME_H_ */
