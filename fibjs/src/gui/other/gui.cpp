/*
 * gui.cpp
 *
 *  Created on: Sep 23, 2016
 *      Author: lion
 */

#if !defined(_WIN32) && !defined(__APPLE__)

#include "object.h"

namespace fibjs {

void run_gui()
{
    exlib::OSThread th;

    th.bindCurrent();
    th.suspend();
}

void putGuiPool(AsyncEvent* ac)
{
}
}

#endif
