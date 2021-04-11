/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *	 build info: 								   						   *
 *   	- fibjs	: 0.32.0                                                   *
 *   	- date	: Mar 20 2021 19:45:41                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */




// give all internal defined classes as reference
/// <reference path="../entry/_common.d.ts" />

/// <reference path="../class/Buffer.d.ts" />

/// <reference path="../class/BufferedStream.d.ts" />

/// <reference path="../class/Chain.d.ts" />

/// <reference path="../class/ChildProcess.d.ts" />

/// <reference path="../class/Cipher.d.ts" />

/// <reference path="../class/Condition.d.ts" />

/// <reference path="../class/DbConnection.d.ts" />

/// <reference path="../class/DgramSocket.d.ts" />

/// <reference path="../class/Digest.d.ts" />

/// <reference path="../class/Event.d.ts" />

/// <reference path="../class/EventEmitter.d.ts" />

/// <reference path="../class/FSWatcher.d.ts" />

/// <reference path="../class/Fiber.d.ts" />

/// <reference path="../class/File.d.ts" />

/// <reference path="../class/Handler.d.ts" />

/// <reference path="../class/HeapGraphEdge.d.ts" />

/// <reference path="../class/HeapGraphNode.d.ts" />

/// <reference path="../class/HeapSnapshot.d.ts" />

/// <reference path="../class/HttpClient.d.ts" />

/// <reference path="../class/HttpCollection.d.ts" />

/// <reference path="../class/HttpCookie.d.ts" />

/// <reference path="../class/HttpHandler.d.ts" />

/// <reference path="../class/HttpMessage.d.ts" />

/// <reference path="../class/HttpRepeater.d.ts" />

/// <reference path="../class/HttpRequest.d.ts" />

/// <reference path="../class/HttpResponse.d.ts" />

/// <reference path="../class/HttpServer.d.ts" />

/// <reference path="../class/HttpUploadData.d.ts" />

/// <reference path="../class/HttpsServer.d.ts" />

/// <reference path="../class/Image.d.ts" />

/// <reference path="../class/LevelDB.d.ts" />

/// <reference path="../class/Lock.d.ts" />

/// <reference path="../class/LruCache.d.ts" />

/// <reference path="../class/MSSQL.d.ts" />

/// <reference path="../class/MemoryStream.d.ts" />

/// <reference path="../class/Message.d.ts" />

/// <reference path="../class/MongoCollection.d.ts" />

/// <reference path="../class/MongoCursor.d.ts" />

/// <reference path="../class/MongoDB.d.ts" />

/// <reference path="../class/MongoID.d.ts" />

/// <reference path="../class/MySQL.d.ts" />

/// <reference path="../class/PKey.d.ts" />

/// <reference path="../class/RangeStream.d.ts" />

/// <reference path="../class/Redis.d.ts" />

/// <reference path="../class/RedisHash.d.ts" />

/// <reference path="../class/RedisList.d.ts" />

/// <reference path="../class/RedisSet.d.ts" />

/// <reference path="../class/RedisSortedSet.d.ts" />

/// <reference path="../class/Routing.d.ts" />

/// <reference path="../class/SQLite.d.ts" />

/// <reference path="../class/SandBox.d.ts" />

/// <reference path="../class/SeekableStream.d.ts" />

/// <reference path="../class/Semaphore.d.ts" />

/// <reference path="../class/Service.d.ts" />

/// <reference path="../class/Smtp.d.ts" />

/// <reference path="../class/Socket.d.ts" />

/// <reference path="../class/SslHandler.d.ts" />

/// <reference path="../class/SslServer.d.ts" />

/// <reference path="../class/SslSocket.d.ts" />

/// <reference path="../class/Stat.d.ts" />

/// <reference path="../class/StatsWatcher.d.ts" />

/// <reference path="../class/Stream.d.ts" />

/// <reference path="../class/StringDecoder.d.ts" />

/// <reference path="../class/TcpServer.d.ts" />

/// <reference path="../class/Timer.d.ts" />

/// <reference path="../class/UrlObject.d.ts" />

/// <reference path="../class/WebSocket.d.ts" />

/// <reference path="../class/WebSocketMessage.d.ts" />

/// <reference path="../class/WebView.d.ts" />

/// <reference path="../class/Worker.d.ts" />

/// <reference path="../class/X509Cert.d.ts" />

/// <reference path="../class/X509Crl.d.ts" />

/// <reference path="../class/X509Req.d.ts" />

/// <reference path="../class/XmlAttr.d.ts" />

/// <reference path="../class/XmlCDATASection.d.ts" />

/// <reference path="../class/XmlCharacterData.d.ts" />

/// <reference path="../class/XmlComment.d.ts" />

/// <reference path="../class/XmlDocument.d.ts" />

/// <reference path="../class/XmlDocumentType.d.ts" />

/// <reference path="../class/XmlElement.d.ts" />

/// <reference path="../class/XmlNamedNodeMap.d.ts" />

/// <reference path="../class/XmlNode.d.ts" />

/// <reference path="../class/XmlNodeList.d.ts" />

/// <reference path="../class/XmlProcessingInstruction.d.ts" />

/// <reference path="../class/XmlText.d.ts" />

/// <reference path="../class/ZipFile.d.ts" />

/// <reference path="../class/object.d.ts" />


/** module Or Internal Object */
/**
	* @brief gui 模块
	* @detail 使用方法：,```JavaScript,var gui = require('gui');,```
	*/
declare module "gui" {


	module gui {

		/**
		 * 
		 * @brief WebView ie 模拟版本，指定 ie7
		 * 
		 * 
		 */
		export const IE7 = 7000;

		/**
		 * 
		 * @brief WebView ie 模拟版本，指定 ie8
		 * 
		 * 
		 */
		export const IE8 = 8000;

		/**
		 * 
		 * @brief WebView ie 模拟版本，指定 ie9
		 * 
		 * 
		 */
		export const IE9 = 9000;

		/**
		 * 
		 * @brief WebView ie 模拟版本，指定 ie10
		 * 
		 * 
		 */
		export const IE10 = 10000;

		/**
		 * 
		 * @brief WebView ie 模拟版本，指定 ie11
		 * 
		 * 
		 */
		export const IE11 = 11000;

		/**
		 * 
		 * @brief WebView ie 模拟版本，指定 edge
		 * 
		 * 
		 */
		export const EDGE = 11001;





		/**
		 * 
		 * 设置 WebView 内 ie 最高模拟版本，当系统 ie 版本低于此版本时，将模拟系统安装版本
		 * @param ver 指定 ie 模拟版本
		 * 
		 * 
		 * 
		 */
		export function setVersion(ver: number): void;

		/**
		 * 
		 * @brief 设置 gui 全局参数，config 只对 cef gui 有效，不会影响 native webview
		 * 
		 * 支持以下参数:
		 * ```JavaScript
		 * {
		 * "cache_path": "", // 设置数据持久化目录，缺省为空，退出进程后，客户端临时数据将不会被保存
		 * "cef_path": "", // 设置 runtime 路径，缺省时在当前目录寻找 runtime
		 * "debug": true, // 全局设置是否输出 WebView 内的错误和 console 信息，缺省显示
		 * "popup": true, // 全局设置是否允许弹出新的网页，缺省允许
		 * "menu": true, // 全局设置是否允许右键菜单，缺省允许
		 * "headless": false, // 设置 gui 全局无窗口，缺省不使用无窗口，当命令行指定 --headless 时，此属性将被忽略
		 * "backend": { // 设置 cef 后端处理器，可用于处理 WebView 内部请求
		 * "http://app1/": handler1,
		 * "fibjs://app2/": handler2,
		 * },
		 * "proxy": { // 全局设置 cef 访问代理
		 * "mode": "fixed_servers|pac_script|auto_detect|system|direct", // 指定代理模式
		 * "server": "localhost:8888" // 指定代理服务器地址，当 mode 为 pac_script 时，指定 pac url
		 * }
		 * }
		 * ```
		 * @param opt 指定设置的参数
		 * 
		 * 
		 * 
		 */
		export function config(opt?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/): void;

		/**
		 * 
		 * @brief 打开一个窗口并访问指定网址
		 * 
		 * 支持以下参数:
		 * ```JavaScript
		 * {
		 * "type": "cef", // 指定 WenView 引擎，允许值为 "native" 和 "cef"，缺省为 "cef"
		 * "left": 100, // 窗口左上角 x，缺省系统自动设定
		 * "right": 100, // 窗口左上角 y，缺省系统自动设定
		 * "width": 100, // 窗口宽度，缺省系统自动设定
		 * "height": 100, // 窗口高度，缺省系统自动设定
		 * "border": true, // 是否有边框，缺省有边框
		 * "caption": true, // 是否有标题栏，缺省有标题栏
		 * "resizable": true, // 是否可改变尺寸，缺省可以改变
		 * "maximize": false, // 是否最大化显示，缺省不最大化
		 * "fullscreen": false, // 是否显示全屏窗口，缺省不全屏
		 * "debug": true, // 是否输出 WebView 内的错误和 console 信息，缺省显示或继承全局设置
		 * 
		 * // 以下配置仅用于 cef 模式
		 * "popup": true, // 是否允许弹出新的网页，缺省允许或继承全局设置
		 * "menu": true, // 是否允许右键菜单，缺省允许或继承全局设置
		 * "headless": false, // 是否使用无窗口模式加载页面，缺省不使用无窗口，当命令行指定 --headless 时，此属性将被忽略
		 * "proxy": { // 设置访问代理，为设置时继承s全局设置
		 * "mode": "fixed_servers|pac_script|auto_detect|system|direct", // 指定代理模式
		 * "server": "localhost:8888" // 指定代理服务器地址，当 mode 为 pac_script 时，指定 pac url
		 * }
		 * }
		 * ```
		 * 当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中
		 * @param url 指定的网址，，可以使用 fs:path 访问本地文件系统
		 * @param opt 打开窗口参数
		 * @return 返回打开的窗口对象
		 * 
		 * 
		 * 
		 */
		export function open(url: string, opt?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/): Class_WebView;

		/**
		 * 
		 * @brief 打开一个空的浏览器窗口
		 * 
		 * 支持以下参数:
		 * ```JavaScript
		 * {
		 * "left": 100, // 窗口左上角 x，缺省系统自动设定
		 * "right": 100, // 窗口左上角 y，缺省系统自动设定
		 * "width": 100, // 窗口宽度，缺省系统自动设定
		 * "height": 100, // 窗口高度，缺省系统自动设定
		 * "border": true, // 是否有边框，缺省有边框
		 * "caption": true, // 是否有标题栏，缺省有标题栏
		 * "resizable": true, // 是否可改变尺寸，缺省可以改变
		 * "maximize": false, // 是否最大化显示，缺省不最大化
		 * "fullscreen": false, // 是否显示全屏窗口，缺省不全屏
		 * "debug": true, // 是否输出 WebView 内的错误和 console 信息，缺省显示或继承全局设置
		 * 
		 * // 以下配置仅用于 cef 模式
		 * "popup": true, // 是否允许弹出新的网页，缺省允许或继承全局设置
		 * "menu": true, // 是否允许右键菜单，缺省允许或继承全局设置
		 * "headless": false, // 是否使用无窗口模式加载页面，缺省不使用无窗口，当命令行指定 --headless 时，此属性将被忽略
		 * "proxy": { // 设置访问代理，为设置时继承s全局设置
		 * "mode": "fixed_servers|pac_script|auto_detect|system|direct", // 指定代理模式
		 * "server": "localhost:8888" // 指定代理服务器地址，当 mode 为 pac_script 时，指定 pac url
		 * }
		 * }
		 * ```
		 * 当设定 width 和 height，而未设定 left 或 right 时，窗口将自动居中
		 * @param opt 打开窗口参数
		 * @return 返回打开的窗口对象
		 * 
		 * 
		 * 
		 */
		export function open(opt?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/): Class_WebView;

	} /** end of `module gui` */
	export = gui
}

/** endof `module Or Internal Object` */


