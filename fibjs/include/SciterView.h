/**
 * @author richardo2016@gmail.com
 * @email richardo2016
 * @create date 2021-04-01 01:37:04
 * @modify date 2021-04-01 01:37:04
 * @desc [description]
 */

#pragma once

#include "ifs/SciterView.h"

// #include <SDKDDKVer.h>
// #define WIN32_LEAN_AND_MEAN // Exclude rarely-used stuff from Windows headers
// // Windows Header Files:
// #include <windows.h>

// // C RunTime Header Files
// #include <stdlib.h>
// #include <malloc.h>
// #include <memory.h>
// #include <tchar.h>

// #include "sciter/include/sciter-x.h"
// #include "sciter/include/sciter-x-window.hpp"

namespace fibjs {

class SciterView : public SciterView_base {
    FIBER_FREE();

public:
    SciterView();

    EVENT_SUPPORT();

public:
    // SciterView_base
    virtual result_t show();
};

} /* namespace fibjs */
