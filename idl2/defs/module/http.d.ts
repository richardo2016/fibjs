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
	* @brief 超文本传输协议模块，用以支持 http 协议处理，模块别名：https
	* @detail 
	*/
declare module "http" {


	module http {


		/**
		 * 
		 * @brief 返回标准的 HTTP 响应状态码的集合，以及各自的简短描述。
		 * 
		 * 
		 */
		export const STATUS_CODES: any[];

		/**
		 * 
		 * @brief 返回http客户端的 HttpCookie 对象列表
		 * 
		 * 
		 */
		export const cookies: any[];

		/**
		 * 
		 * @brief 查询和设置超时时间
		 * 
		 * 
		 */
		export const timeout: number;

		/**
		 * 
		 * @brief cookie 功能开关，默认开启
		 * 
		 * 
		 */
		export const enableCookie: boolean;

		/**
		 * 
		 * @brief 自动 redirect 功能开关，默认开启
		 * 
		 * 
		 */
		export const autoRedirect: boolean;

		/**
		 * 
		 * @brief 自动解压缩功能开关，默认开启
		 * 
		 * 
		 */
		export const enableEncoding: boolean;

		/**
		 * 
		 * @brief 查询和设置 body 最大尺寸，以 MB 为单位，缺省为 -1，不限制尺寸
		 * 
		 * 
		 */
		export const maxBodySize: number;

		/**
		 * 
		 * @brief 查询和设置 http 请求中的浏览器标识
		 * 
		 * 
		 */
		export const userAgent: string;

		/**
		 * 
		 * @brief 查询和设置 keep-alive 最大缓存连接数，缺省 128
		 * 
		 * 
		 */
		export const poolSize: number;

		/**
		 * 
		 * @brief 查询和设置 keep-alive 缓存连接超时时间，缺省 10000 ms
		 * 
		 * 
		 */
		export const poolTimeout: number;

		/**
		 * 
		 * @brief 查询和设置代理服务器
		 * 
		 * 
		 */
		export const proxyAgent: string;


		/**
		 * 
		 * @brief 创建一个 http 请求对象，参见 HttpRequest
		 * 
		 * 
		 */
		export const Request: typeof Class_HttpRequest


		/**
		 * 
		 * @brief 创建一个 http 响应对象，参见 HttpResponse
		 * 
		 * 
		 */
		export const Response: typeof Class_HttpResponse


		/**
		 * 
		 * @brief 创建一个 http cookie 对象，参见 HttpCookie
		 * 
		 * 
		 */
		export const Cookie: typeof Class_HttpCookie


		/**
		 * 
		 * @brief 创建一个 http 服务器，参见 HttpServer
		 * 
		 * 
		 */
		export const Server: typeof Class_HttpServer


		/**
		 * 
		 * @brief 创建一个 http 客户端，参见 HttpClient
		 * 
		 * 
		 */
		export const Client: typeof Class_HttpClient


		/**
		 * 
		 * @brief 创建一个 https 服务器，参见 HttpsServer
		 * 
		 * 
		 */
		export const HttpsServer: typeof Class_HttpsServer


		/**
		 * 
		 * @brief 创建一个 http 协议处理器对象，参见 HttpHandler
		 * 
		 * 
		 */
		export const Handler: typeof Class_HttpHandler


		/**
		 * 
		 * @brief 创建一个 http 请求转发处理器对象，参见 HttpRepeater
		 * 
		 * 
		 */
		export const Repeater: typeof Class_HttpRepeater




		/**
		 * 
		 * @brief 创建一个 http 静态文件处理器，用以用静态文件响应 http 消息
		 * 
		 * fileHandler 支持 gzip 预压缩，当请求接受 gzip 编码，且相同路径下 filename.ext.gz 文件存在时，将直接返回此文件，
		 * 从而避免重复压缩带来服务器负载。
		 * @param root 文件根路径
		 * @param mimes 扩展 mime 设置
		 * @param autoIndex 是否支持浏览目录文件，缺省为 false，不支持
		 * @return 返回一个静态文件处理器用于处理 http 消息
		 * 
		 * 
		 * 
		 */
		export function fileHandler(root: string, mimes?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, autoIndex?: boolean/** = false*/): Class_Handler;

		/**
		 * 
		 * @brief 设定缺省客户端证书
		 * @param crt X509Cert 证书，用于客户端验证服务器
		 * @param key PKey 私钥，用于与客户端会话
		 * 
		 * 
		 * 
		 */
		export function setClientCert(crt: Class_X509Cert, key: Class_PKey): void;

		/**
		 * 
		 * @brief 发送 http 请求到指定的流对象，并返回结果
		 * @param conn 指定处理请求的流对象
		 * @param req 要发送的 HttpRequest 对象
		 * @return 返回服务器响应
		 * 
		 * 
		 * @async
		 */
		export function request(conn: Class_Stream, req: Class_HttpRequest, callback?: Fibjs.AsyncCallback<Class_HttpResponse>/** = function (err: Error, result: Class_HttpResponse) {}*/): Class_HttpResponse;

		/**
		 * 
		 * @brief 发送 http 请求到指定的流对象，并返回结果
		 * @param conn 指定处理请求的流对象
		 * @param req 要发送的 HttpRequest 对象
		 * @param response_body 指定 response.body 的流
		 * @return 返回服务器响应
		 * 
		 * 
		 * @async
		 */
		export function request(conn: Class_Stream, req: Class_HttpRequest, response_body: Class_SeekableStream, callback?: Fibjs.AsyncCallback<Class_HttpResponse>/** = function (err: Error, result: Class_HttpResponse) {}*/): Class_HttpResponse;

		/**
		 * 
		 * @brief 请求指定的 url，并返回结果
		 * opts 包含请求的附加选项，支持的内容如下：
		 * ```JavaScript
		 * {
		 * "query": {},
		 * "body": SeekableStream | Buffer | String | {},
		 * "json": {},
		 * "headers": {},
		 * "response_body": SeekableStream //指定接受 resposne 数据的流
		 * }
		 * ```
		 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		 * @param method 指定 http 请求方法：GET, POST 等
		 * @param url 指定 url，必须是包含主机的完整 url
		 * @param opts 指定附加信息
		 * @return 返回服务器响应
		 * 
		 * 
		 * @async
		 */
		export function request(method: string, url: string, opts?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<Class_HttpResponse>/** = function (err: Error, result: Class_HttpResponse) {}*/): Class_HttpResponse;

		/**
		 * 
		 * @brief 用 GET 方法请求指定的 url，并返回结果，等同于 request("GET", ...)
		 * opts 包含请求的附加选项，支持的内容如下：
		 * ```JavaScript
		 * {
		 * "query": {},
		 * "body": SeekableStream | Buffer | String | {},
		 * "json": {},
		 * "headers": {}
		 * }
		 * ```
		 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		 * @param url 指定 url，必须是包含主机的完整 url
		 * @param opts 指定附加信息
		 * @return 返回服务器响应
		 * 
		 * 
		 * @async
		 */
		export function get(url: string, opts?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<Class_HttpResponse>/** = function (err: Error, result: Class_HttpResponse) {}*/): Class_HttpResponse;

		/**
		 * 
		 * @brief 用 POST 方法请求指定的 url，并返回结果，等同于 request("POST", ...)
		 * opts 包含请求的附加选项，支持的内容如下：
		 * ```JavaScript
		 * {
		 * "query": {},
		 * "body": SeekableStream | Buffer | String | {},
		 * "json": {},
		 * "headers": {}
		 * }
		 * ```
		 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		 * @param url 指定 url，必须是包含主机的完整 url
		 * @param opts 指定附加信息
		 * @return 返回服务器响应
		 * 
		 * 
		 * @async
		 */
		export function post(url: string, opts?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<Class_HttpResponse>/** = function (err: Error, result: Class_HttpResponse) {}*/): Class_HttpResponse;

		/**
		 * 
		 * @brief 用 DELETE 方法请求指定的 url，并返回结果，等同于 request("DELETE", ...)
		 * opts 包含请求的附加选项，支持的内容如下：
		 * ```JavaScript
		 * {
		 * "query": {},
		 * "body": SeekableStream | Buffer | String | {},
		 * "json": {},
		 * "headers": {}
		 * }
		 * ```
		 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		 * @param url 指定 url，必须是包含主机的完整 url
		 * @param opts 指定附加信息
		 * @return 返回服务器响应
		 * 
		 * 
		 * @async
		 */
		export function del(url: string, opts?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<Class_HttpResponse>/** = function (err: Error, result: Class_HttpResponse) {}*/): Class_HttpResponse;

		/**
		 * 
		 * @brief 用 PUT 方法请求指定的 url，并返回结果，等同于 request("PUT", ...)
		 * opts 包含请求的附加选项，支持的内容如下：
		 * ```JavaScript
		 * {
		 * "query": {},
		 * "body": SeekableStream | Buffer | String | {},
		 * "json": {},
		 * "headers": {}
		 * }
		 * ```
		 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		 * @param url 指定 url，必须是包含主机的完整 url
		 * @param opts 指定附加信息
		 * @return 返回服务器响应
		 * 
		 * 
		 * @async
		 */
		export function put(url: string, opts?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<Class_HttpResponse>/** = function (err: Error, result: Class_HttpResponse) {}*/): Class_HttpResponse;

		/**
		 * 
		 * @brief 用 PATCH 方法请求指定的 url，并返回结果，等同于 request("PATCH", ...)
		 * opts 包含请求的附加选项，支持的内容如下：
		 * ```JavaScript
		 * {
		 * "query": {},
		 * "body": SeekableStream | Buffer | String | {},
		 * "json": {},
		 * "headers": {}
		 * }
		 * ```
		 * 其中 body，json 不得同时出现。缺省为 {}，不包含任何附加信息
		 * @param url 指定 url，必须是包含主机的完整 url
		 * @param opts 指定附加信息
		 * @return 返回服务器响应
		 * 
		 * 
		 * @async
		 */
		export function patch(url: string, opts?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<Class_HttpResponse>/** = function (err: Error, result: Class_HttpResponse) {}*/): Class_HttpResponse;

	} /** end of `module http` */
	export = http
}

/** endof `module Or Internal Object` */


