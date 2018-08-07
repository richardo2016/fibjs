#ifdef __APPLE__
#ifndef __GUI_ABOUT__
#define __GUI_ABOUT__

/**
 * @author Richard
 * @email richardo2016@gmail.com
 * @create date 2018-04-23 04:17:45
 * @modify date 2018-04-23 04:17:45
 *
 * @desc support gui module in MAC OSX >= OS X 10.10 only
 */

#include "EventInfo.h"
#include "WebView.h"
#include "ifs/gui.h"
#include "object.h"
#include "utf8.h"
#include <exlib/include/thread.h>

namespace fibjs {
  
void send_open_event();
void _NSRunner();
// for test
void openWViewControllerInstance();
void RegMainClass();

static exlib::LockedList<AsyncEvent> s_uiPool;
static pthread_t s_thread;
static exlib::OSThread* original_thread;
static exlib::OSThread* gui_thread;

} /* namespace fibjs */
#endif /* __GUI_ABOUT__ */
#endif /* __APPLE__ */