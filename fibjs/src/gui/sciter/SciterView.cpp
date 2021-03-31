/**
 * @author richardo2016@gmail.com
 * @email richardo2016
 * @create date 2021-04-01 01:33:20
 * @modify date 2021-04-01 01:33:20
 * @desc [description]
 */

#include "object.h"
#include "ifs/vm.h"
#include "SciterView.h"

namespace fibjs {

#if defined(Darwin)
const char* s_sciter_sdk = "Chromium Embedded Framework";
#elif defined(Windows)
const char* s_sciter_sdk = "libcef.dll";
#else
const char* s_sciter_sdk = "libcef.so";
#endif

result_t SciterView_base::_new(v8::Local<v8::Object> config, obj_ptr<SciterView_base>& retVal,
    v8::Local<v8::Object> This)
{
    obj_ptr<SciterView> sv = new SciterView();

    retVal = sv;

    return 0;
}

SciterView::SciterView()
{
}

result_t SciterView::show()
{
    return 0;
}

}