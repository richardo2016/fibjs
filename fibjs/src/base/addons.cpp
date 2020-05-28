/**
 * @author Richard
 * @email richardo2016@gmail.com
 * @create date 2020-05-05 03:46:19
 * @modify date 2020-05-05 03:46:19
 * @desc fibjs's addons module
 */
#include "ifs/addons.h"

#include "Module.h"
#include "path.h"

namespace fibjs {

DECLARE_MODULE(addons);

result_t addons_base::load(exlib::string addon_filename, v8::Local<v8::Value>& retVal)
{
    Isolate* isolate = Isolate::current();

    v8::Local<v8::Value> _adm;
    RootModule::findModuleByName(isolate, "addons", _adm);

    v8::Local<v8::Object> addons_modules = v8::Local<v8::Object>::Cast(_adm);
    v8::Local<v8::String> akey = isolate->NewString(addon_filename);

    if (!addons_modules->Has(akey)) {
        // TODO: process crash/error here
        js::loadAddon(addon_filename.c_str(), retVal);

        addons_modules->Set(akey, retVal);
    } else
        retVal = addons_modules->Get(akey);

    return 0;
}

result_t addons_base::loadModule(exlib::string module_name, exlib::string addon_filename, v8::Local<v8::Value>& retVal)
{
    Isolate* isolate = Isolate::current();

    result_t hr = load(addon_filename, retVal);
    if (hr < 0)
        return hr;

    // TODO: register retVal as RootModule
    return 0;
}
}