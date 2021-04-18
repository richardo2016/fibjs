




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
	* @brief dgram 模块提供了 UDP 数据包 socket 的实现
	* @detail 基础模块，引用方式：,```JavaScript,var dgram = require('dgram');,```
	*/
declare module "dgram" {




	/**
	 * 
	 * @brief dgram.Socket 对象是一个封装了数据包函数功能的 EventEmitter。参见 DgramSocket
	 * dgram.Socket 实例是由 dgram.createSocket() 创建的。创建 dgram.Socket 实例不需要使用 new 关键字。
	 * 
	 * 
	 * 
	 */
	export const Socket: typeof Class_DgramSocket




	/**
	 * 
	 * @brief 创建一个 dgram.Socket 对象
	 * 
	 * opts 允许的选项是:
	 * ```JavaScript
	 * {
	 * "type": "udp4" | "udp6",   // 必填
	 * "reuseAddr": true | false, //若设置为 true，socket.bind() 则会重用地址，即时另一个进程已经在其上面绑定了一个套接字。 默认是 false
	 * "recvBufferSize": 1024,     // 设置 SO_RCVBUF 套接字值
	 * "sendBufferSize": 1024      //设置 SO_RCVBUF 套接字值
	 * }
	 * ```
	 * @param opts
	 * @return 返回创建的 Socket 对象
	 * 
	 * 
	 * 
	 */
	export function createSocket(opts: Fibjs.AnyObject): Class_DgramSocket;

	/**
	 * 
	 * @brief 创建一个 dgram.Socket 对象
	 * 
	 * opts 允许的选项是:
	 * ```JavaScript
	 * {
	 * "type": "udp4" | "udp6",   // 必填
	 * "reuseAddr": true | false, //若设置为 true，socket.bind() 则会重用地址，即时另一个进程已经在其上面绑定了一个套接字。 默认是 false
	 * "recvBufferSize": ###,     // 设置 SO_RCVBUF 套接字值
	 * "sendBufferSize": ###      //设置 SO_RCVBUF 套接字值
	 * }
	 * ```
	 * @param opts
	 * @param callback 为 'message' 事件添加一个监听器。
	 * @return 返回创建的 Socket 对象
	 * 
	 * 
	 * 
	 */
	export function createSocket(opts: Fibjs.AnyObject, callback: Function): Class_DgramSocket;

	/**
	 * 
	 * @brief 创建一个 dgram.Socket 对象
	 * @param type 套接字族，'udp4' 或 'udp6'。
	 * @return 返回创建的 Socket 对象
	 * 
	 * 
	 * 
	 */
	export function createSocket(type: string): Class_DgramSocket;

	/**
	 * 
	 * @brief 创建一个 dgram.Socket 对象
	 * @param type 套接字族，'udp4' 或 'udp6'。
	 * @param callback 为 'message' 事件添加一个监听器。
	 * @return 返回创建的 Socket 对象
	 * 
	 * 
	 * 
	 */
	export function createSocket(type: string, callback: Function): Class_DgramSocket;

}


