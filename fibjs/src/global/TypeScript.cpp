/**
 * @author richardo2016@gmail.com
 * @email richardo2016
 * @create date 2021-04-01 16:28:54
 * @modify date 2021-04-01 16:28:54
 * 
 * @desc TypeScript class implementation
 */

#include "ifs/global.h"
#include "TypeScript.h"

namespace fibjs {

obj_ptr<TypeScript_base> g_tsinstance;

result_t global_base::get_TypeScript(obj_ptr<TypeScript_base>& retVal)
{
    if (!g_tsinstance)
        TypeScript_base::_new(g_tsinstance);

    retVal = g_tsinstance;

    return 0;
}

result_t TypeScript_base::_new(obj_ptr<TypeScript_base>& retVal, v8::Local<v8::Object> This)
{
    obj_ptr<TypeScript_base> tsi = new TypeScript();

    tsi->wrap(This);

    retVal = tsi;

    return 0;
}

result_t TypeScript::getTsModule(v8::Local<v8::Object>& retVal)
{
    Isolate* isolate = holder();

    v8::Local<v8::Object> _global = isolate->context()->Global();

    JSValue v;
    global_base::require("@fibjs/internal-ts/lib/typescript", v);

    retVal = isolate->toLocalObject(v);

    return 0;
}

static exlib::string s_ts_version;
result_t TypeScript::get_version(exlib::string& retVal)
{
    if (!s_ts_version.length()) {
        Isolate* isolate = holder();

        v8::Local<v8::Object> tsi;
        getTsModule(tsi);

        JSValue jsVersion = tsi->Get(isolate->NewString("version", 7));
        v8::String::Utf8Value _version(isolate->m_isolate, jsVersion);

        s_ts_version = exlib::string(*_version, _version.length());
    }

    retVal = s_ts_version;

    return 0;
}

} // namespace fibjs
