/**
 * @author Richard
 * @email richardo2016@gmail.com
 * @create date 2018-04-23 03:25:07
 * @modify date 2018-04-23 03:25:42
 * @desc Webview Object for Mac OSX
 */
#ifdef __APPLE__

#include "ifs/WebView.h"

#ifndef WEBVIEW_H_
#define WEBVIEW_H_

namespace fibjs {

class WebView : public WebView_base {
  FIBER_FREE();

public:
  WebView(exlib::string url, NObject *opt);
  ~WebView();

  result_t open();

  EVENT_SUPPORT();

public:
  // WebView_base
  virtual result_t setHtml(exlib::string html, AsyncEvent *ac);
  virtual result_t print(int32_t mode, AsyncEvent *ac);
  virtual result_t close(AsyncEvent *ac);
  virtual result_t wait(AsyncEvent *ac);
  virtual result_t postMessage(exlib::string msg, AsyncEvent *ac);
  virtual result_t get_visible(bool &retVal);
  virtual result_t set_visible(bool newVal);

public:
  EVENT_FUNC(load);
  EVENT_FUNC(move);
  EVENT_FUNC(resize);
  EVENT_FUNC(closed);
  EVENT_FUNC(message);

private:
  void GoBack();
  void GoForward();
  void Refresh();
  void Navigate(exlib::string szUrl);

public:
  // result_t AddRef(void);
  // result_t Release(void);

private:
  void clear();

  // result_t postMessage(exlib::string msg, _variant_t& retVal);
  // result_t WebView::postClose(_variant_t& retVal);

protected:
  exlib::string m_url;
  obj_ptr<NObject> m_opt;

  // IDispatch* _onmessage;
  // IDispatch* _onclose;

  bool m_visible;
  bool m_maximize;
  bool m_bSilent;

  AsyncEvent *m_ac;
};
} /* namespace fibjs */

#endif /* WEBVIEW_H_ */
#endif /* __APPLE__ */