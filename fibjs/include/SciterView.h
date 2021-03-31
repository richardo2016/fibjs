/**
 * @author richardo2016@gmail.com
 * @email richardo2016
 * @create date 2021-04-01 01:37:04
 * @modify date 2021-04-01 01:37:04
 * @desc [description]
 */

#pragma once

#include "ifs/SciterView.h"

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
