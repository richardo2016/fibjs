




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

/**
	* @brief websocket 支持模块
	* @detail 使用方法：,```JavaScript,var ws = require('ws');,```,创建一个服务器：,```JavaScript,var ws = require('ws');,var http = require('http');,,var svr = new http.Server(80, {,    '/ws': ws.upgrade((conn, req) => {,        conn.onmessage = e => console.log(e.data);,    }),});,svr.start();,```,使用 WebSocket 客户端：,```JavaScript,var ws = require('ws');,,var conn = new ws.Socket('ws://127.0.0.1/ws');,conn.onmessage = e => console.log(e.data);,```
	*/
declare module "ws" {


	/**
	 * 
	 * @brief 指定 websocket 消息类型 0，代表一个继续帧
	 * 
	 * 
	 */
	export const CONTINUE = 0;

	/**
	 * 
	 * @brief 指定 websocket 消息类型 1，代表一个文本帧
	 * 
	 * 
	 */
	export const TEXT = 1;

	/**
	 * 
	 * @brief 指定 websocket 消息类型 2，代表一个二进制帧
	 * 
	 * 
	 */
	export const BINARY = 2;

	/**
	 * 
	 * @brief 指定 websocket 消息类型 8，连接关闭
	 * 
	 * 
	 */
	export const CLOSE = 8;

	/**
	 * 
	 * @brief 指定 websocket 消息类型 9，代表一个 ping 帧
	 * 
	 * 
	 */
	export const PING = 9;

	/**
	 * 
	 * @brief 指定 websocket 消息类型 10，代表一个 pong 帧
	 * 
	 * 
	 */
	export const PONG = 10;

	/**
	 * 
	 * @brief 指定 WebSocket 状态，表示正在连接中
	 * 
	 * 
	 */
	export const CONNECTING = 0;

	/**
	 * 
	 * @brief 指定 WebSocket 状态，表示打开状态
	 * 
	 * 
	 */
	export const OPEN = 1;

	/**
	 * 
	 * @brief 指定 WebSocket 状态，表示已发送 CLOSE 消息，等待关闭中
	 * 
	 * 
	 */
	export const CLOSING = 2;

	/**
	 * 
	 * @brief 指定 WebSocket 状态，表示已经关闭
	 * 
	 * 
	 */
	export const CLOSED = 3;



	/**
	 * 
	 * @brief 创建一个 websocket 消息对象，参见 WebSocketMessage
	 * 
	 * 
	 */
	export const Message: typeof Class_WebSocketMessage


	/**
	 * 
	 * @brief WebSocket 对象，参见 WebSocket
	 * 
	 * 
	 */
	export const Socket: typeof Class_WebSocket




	/**
	 * 
	 * @brief 创建一个 websocket 协议处理器，从 http 接收 upgrade 请求并握手，生成 WebSocket 对象
	 * ```
	 * @param accept 连接成功处理函数，回调将传递两个参数，第一个参数为接收到的 WebSocket 对象，第二个参数为握手时的 HttpRequest 对象
	 * @return 返回协议处理器，可与 HttpServer, Chain, Routing 等对接
	 * 
	 * 
	 * 
	 */
	export function upgrade(accept: Function): Class_Handler;

	/**
	 * 
	 * @brief 创建一个 websocket 协议处理器，从 http 接收 upgrade 请求并握手，生成 WebSocket 对象
	 * opts 包含请求的附加选项，支持的内容如下：
	 * ```JavaScript
	 * {
	 * "perMessageDeflate": true, // 指定是否支持压缩，缺省支持
	 * "maxPayload": 67108864 // 指定最大数据包尺寸，缺省为 67108864
	 * }
	 * ```
	 * @param opts 连接选项，缺省是 {}
	 * @param accept 连接成功处理函数，回调将传递两个参数，第一个参数为接收到的 WebSocket 对象，第二个参数为握手时的 HttpRequest 对象
	 * @return 返回协议处理器，可与 HttpServer, Chain, Routing 等对接
	 * 
	 * 
	 * 
	 */
	export function upgrade(opts: Fibjs.AnyObject, accept: Function): Class_Handler;

}


