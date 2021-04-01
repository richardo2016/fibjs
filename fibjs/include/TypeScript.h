/**
 * @author richardo2016@gmail.com
 * @email richardo2016
 * @create date 2021-04-01 16:27:20
 * @modify date 2021-04-01 16:27:20
 * 
 * @desc TypeScript class
 */

#pragma once

#include "ifs/TypeScript.h"

namespace fibjs {

class TypeScript : public TypeScript_base {
public:
    // TypeScript_base
    virtual result_t get_version(exlib::string& retVal);

public:
    result_t getTsModule(v8::Local<v8::Object>& retVal);

private:
    v8::Local<v8::Object> m_tsModule;
};
}
