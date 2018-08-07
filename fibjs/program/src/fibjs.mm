#include "fibjs.h"
#include "object.h"

#ifdef __APPLE__

#import <Cocoa/Cocoa.h>
#import <WebKit/WebKit.h>

/* start of AppDelegate */
@interface AppDelegate : NSObject <NSApplicationDelegate> {
	IBOutlet id webView;
	IBOutlet NSWindow *window;
}

- (IBAction)bringMainWindowToFront:(id)sender;
// - (void)changeIcon:(NSString *)iconName;
- (NSString *)appURL;
// - (IBAction)changeGreeting:(id)sender;

@end

@implementation AppDelegate
- (void)applicationDidFinishLaunching:(NSNotification *)aNotification {
    [webView setMainFrameURL:[self appURL]];
}

- (BOOL)applicationShouldHandleReopen:(NSApplication *)theApplication hasVisibleWindows:(BOOL)flag {
	[self bringMainWindowToFront:nil];
	return YES;
}

- (IBAction)bringMainWindowToFront:(id)sender {
	[window makeKeyAndOrderFront:sender];
	if ([[webView mainFrameURL] isEqualTo:@""]) {
		[webView setMainFrameURL:[self appURL]];
	}
}

- (void)windowWillClose:(NSNotification *)notification {
	[webView setMainFrameURL:@""];
}

- (NSString *)appURL {
	return [[[NSBundle mainBundle] URLForResource:@"http://fibjs.org" withExtension:@""] absoluteString];
}

// This delegate method gets triggered every time the page loads, but before the JavaScript runs
- (void)webView:(WebView *)webView windowScriptObjectAvailable:(WebScriptObject *)windowScriptObject {
    // TODO: inject script here
	[windowScriptObject setValue:self forKey:@"app"];
}


- (void)applicationWillTerminate:(NSNotification *)aNotification {
    // Tear down here
}
@end
/* end of AppDelegate */

int main(int argc, const char *argv[])
{
    // NSApplication *app = [NSApplication sharedApplication];
    // app.delegate = [[AppDelegate alloc] initWithArgc:argc argv:argv];

    // int result_p = NSApplicationMain(argc, argv);
	
    fibjs::main(argc, (char**) argv);
    
    return 0;
}

#endif /* endof __APPLE__ */