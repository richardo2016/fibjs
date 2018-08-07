#ifdef __APPLE__

#include "gui_about.h"

#import <Cocoa/Cocoa.h>
#import <WebKit/WebKit.h>

namespace fibjs {
  
DECLARE_MODULE(gui);

class osx_gui_thread : public exlib::OSThread {

public:
  /* call on non-gui thread */
  virtual void Run() {
    fibjs::RegMainClass();

    while (true) {
      AsyncEvent *p = s_uiPool.getHead();
      if (p) {
        // original_thread->bindCurrent();
        p->invoke();
        // gui_thread->bindCurrent();
        // notice NSApp to open browser
      }
    }

    return;
  };
};

void putGuiPool(AsyncEvent *ac) {
  s_uiPool.putTail(ac);
}

/**
 * called by main thread, and fork one UI thread `osx_gui_thread` to
 * **manage** window
 */
void run_gui() {
  osx_gui_thread *_wTh = new osx_gui_thread();

  _wTh->bindCurrent();
  s_thread = _wTh->thread_;

  _wTh->Run();
}

/**
 * would be called on `p->invoke()`, which with same thread environment
 */
static result_t defer_open(obj_ptr<WebView> w) {
  w->open();
  return 0;
}

result_t gui_base::open(exlib::string url, v8::Local<v8::Object> opt,
                        obj_ptr<WebView_base> &retVal) {
  obj_ptr<NObject> o = new NObject();
  o->add(opt);

  obj_ptr<WebView> w = new WebView(url, o);
  w->wrap();

  printf("gui_base::open asyncCall 1 \n");
  
  asyncCall(defer_open, w, CALL_E_GUICALL);
  
  printf("gui_base::open asyncCall 2 \n");
  retVal = w;

  return 0;
}

result_t gui_base::setVersion(int32_t ver) { return 0; }
}

void fibjs::send_open_event() {
  // 每个进程默认有一个通知队列，默认是没有开启的，底层通过队列实现，队列维护一个调度表
  NSNotification *notifi =
      [NSNotification notificationWithName:@"openBrowser" object:nil];
  NSNotificationQueue *queue = [NSNotificationQueue defaultQueue];

  // FIFO
  NSLog(@"notifi before");
  [queue
      enqueueNotification:notifi
             postingStyle:NSPostWhenIdle
             coalesceMask:NSNotificationCoalescingOnName
                 forModes:[NSArray arrayWithObjects:NSDefaultRunLoopMode, nil]];
  NSLog(@"notifi after");

  NSPort *port = [[NSPort alloc] init];
  [[NSRunLoop currentRunLoop] addPort:port forMode:NSRunLoopCommonModes];
  [[NSRunLoop currentRunLoop] run];
  NSLog(@"runloop over");
}

#endif
