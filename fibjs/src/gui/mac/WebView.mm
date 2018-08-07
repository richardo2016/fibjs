#ifdef __APPLE__

#include "gui_about.h"
#include "WebView.h"
#include "EventInfo.h"
#include "ifs/fs.h"
#include "ifs/gui.h"
#include "ifs/os.h"
#include "ifs/registry.h"
#include "object.h"
#include "path.h"
#include "utf8.h"
#include <exlib/include/thread.h>

#import <Cocoa/Cocoa.h>
#import <WebKit/WebKit.h>

static CGFloat DEFAULT_WIN_W = 800; // default window width
static CGFloat DEFAULT_WIN_H = 600; // default window height

@interface OSXNSAppDelegate : NSObject {
}
- (void)applicationDidFinishLaunching:(NSApplication *)application;
- (BOOL)applicationShouldTerminateAfterLastWindowClosed:
    (NSApplication *)theApplication;
- (BOOL)windowShouldClose:(id)window;
// - (void)viewDidLoad;
@end

@implementation OSXNSAppDelegate
- (void)applicationDidFinishLaunching:(NSApplication *)application {
  fibjs::openWViewControllerInstance();
}
// TODO: make it customizable
- (BOOL)applicationShouldTerminateAfterLastWindowClosed:
    (NSApplication *)theApplication {
  // if set YES, make sure call `CHECK_ERROR(CALL_E_NOSYNC)`
  return FALSE;
}
- (BOOL)windowShouldClose:(id)window {
  NSAlert *alert = [[NSAlert alloc] init];
  [alert setAlertStyle:NSInformationalAlertStyle];
  [alert setMessageText:@"确定退出吗?"];
  [alert addButtonWithTitle:@"退出"];
  [alert addButtonWithTitle:@"取消"];
  NSInteger result = [alert runModal];
  if (result != NSAlertFirstButtonReturn) {
    [alert release];
    return NO;
  }

  [alert release];
  return YES;
}
@end

@interface OSXWebviewSuperView : NSView {
  // other instance variables
}
@property(strong) NSWindow *win;
@property(strong) WKWebView *theWebView;

// other properties and methods
@end
@implementation OSXWebviewSuperView
- (id)initWithFrame:(NSRect)pNsrectFrameRect {
  if ((self = [super initWithFrame:pNsrectFrameRect]) == nil) {
    return self;
  } // end if

  [super setWantsLayer:YES];
  [super setAutoresizingMask:NSViewMaxXMargin | NSViewHeightSizable |
                             NSViewWidthSizable | NSViewMaxYMargin];

  return self;
}

- (id)_setupWin {
  printf("_setupWin inner :start\n");
  // Create the main window
  NSUInteger uiStyle = NSTitledWindowMask | NSResizableWindowMask |
                       NSClosableWindowMask | NSFullSizeContentViewWindowMask;
  NSBackingStoreType backingStoreStyle = NSBackingStoreBuffered;
  NSWindow *win =
      [[NSWindow alloc] initWithContentRect:NSMakeRect(0, 0, 800, 600)
                                  styleMask:uiStyle
                                    backing:backingStoreStyle
                                      defer:NO];

  if (win == nil) {
    return win;
  }

  self.win = win;

  OSXNSAppDelegate *appDelegate = [NSApp delegate];
  [self.win setDelegate:appDelegate];
  [self.win setTitle:@"Webview by Fibjs"];

  [self.win.contentView
      setAutoresizingMask:NSViewMaxXMargin | NSViewHeightSizable |
                          NSViewWidthSizable | NSViewMaxYMargin];

  [self.win center];
  [self.win makeKeyAndOrderFront:win];

  printf("_setupWin inner :end\n");

  return 0;
}

- (id)_setupWKWebView {
  printf("_setupWKWebView inner: before\n");
  NSURL *url = [NSURL URLWithString:@"http://fibjs.org"];
  NSURLRequest *request = [NSURLRequest requestWithURL:url];

  WKWebViewConfiguration *theConfiguration =
      [[WKWebViewConfiguration alloc] init];
  // [theConfiguration.userContentController addScriptMessageHandler:self
  //                                                            name:@"interOp"];

  _theWebView = [[WKWebView alloc] initWithFrame:self.frame
                                   configuration:theConfiguration];

  if (_theWebView == nil) {
    return _theWebView;
  }

  if (self.win.contentView != nil) {
    _theWebView.UIDelegate = self.win.contentView;
  }
  [_theWebView setWantsLayer:YES];
  [_theWebView setAutoresizingMask:NSViewMaxXMargin | NSViewHeightSizable |
                                   NSViewWidthSizable | NSViewMaxYMargin];

  self.theWebView = _theWebView;
  [_theWebView loadRequest:request];

  printf("_setupWKWebView inner: end\n");

  return 0;
}

- (id)_linkAllViews {
  printf("_linkAllViews start\n");
  [self.win.contentView addSubview:self.theWebView];
  printf("_linkAllViews end\n");
  return 0;
}

@end

// @see https://developer.apple.com/documentation/appkit/nsapplication?language=objc
void fibjs::_NSRunner() {
  return;
}

void fibjs::openWViewControllerInstance() {
  [NSApplication sharedApplication];

  printf("openWViewControllerInstance start");
  OSXWebviewSuperView *wv_controller = [[OSXWebviewSuperView alloc]
      initWithFrame:NSMakeRect /* CGRectMake */ (0, 0, 800, 600)];

  [wv_controller _setupWin];
  [wv_controller _setupWKWebView];

  [wv_controller _linkAllViews];

  NSModalSession session = [NSApp beginModalSessionForWindow:wv_controller.win];
  while (true) {
      if ([NSApp runModalSession:session] != NSRunContinuesResponse) {
        break;
      }
  }
  [NSApp endModalSession:session];

  printf("openWViewControllerInstance end");
}

namespace fibjs {
  
void RegMainClass() {
  static bool s_init = false;

  if (!s_init) {
    s_init = true;
    
    [NSApplication sharedApplication];

    OSXNSAppDelegate *appDelegate = [[OSXNSAppDelegate alloc] init];
    [NSApp setDelegate:appDelegate];
    // [NSApp run];
  }
}

WebView::WebView(exlib::string url, NObject *opt) {
  m_url = url;
  m_opt = opt;

  m_ac = NULL;
  // _onmessage = NULL;
  // _onclose = NULL;

  m_visible = true;
}

WebView::~WebView() { clear(); }

result_t WebView::open() {
  // this method is running in main-thread
  printf("\nWebView::open");

  fibjs::openWViewControllerInstance();

  printf("\nWebView::webview_initWhenOpenxxx");

  return 0;
}

void WebView::clear() {
  if (m_ac) {
    m_ac->post(0);
    m_ac = NULL;
  }
}

result_t WebView::setHtml(exlib::string html, AsyncEvent *ac) { return 0; };

result_t WebView::print(int32_t mode, AsyncEvent *ac) {
  if (ac->isSync())
    return CHECK_ERROR(CALL_E_GUICALL);

  return 0;
};

result_t WebView::close(AsyncEvent *ac) {
  isolate_unref();

  if (m_ac && m_ac->isSync())
    return CHECK_ERROR(CALL_E_GUICALL);

  return 0;
};

result_t WebView::wait(AsyncEvent *ac) {
  if (ac->isSync())
    return CHECK_ERROR(CALL_E_GUICALL);

  m_ac = ac;
  return CALL_E_PENDDING;
};

result_t WebView::postMessage(exlib::string msg, AsyncEvent *ac) {
  if (ac->isSync())
    return CHECK_ERROR(CALL_E_GUICALL);

  return 0;
};

result_t WebView::get_visible(bool &retVal) { return 0; };

result_t WebView::set_visible(bool newVal) { return 0; };
} /* namespace fibjs */
#endif /* __APPLE__ */