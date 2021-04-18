




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
	* @brief 消息队列模块
	* @detail 
	*/
declare module "mq" {




	/**
	 * 
	 * @brief 创建一个消息对象，参见 Message
	 * 
	 * 
	 */
	export const Message: typeof Class_Message


	/**
	 * 
	 * @brief 创建一个 http 协议处理器对象，参见 HttpHandler
	 * 
	 * 
	 */
	export const HttpHandler: typeof Class_HttpHandler


	/**
	 * 
	 * @brief 创建一个消息处理器对象，传递值内置处理器则直接返回
	 * 
	 * hdlr 接受内置消息处理器，处理函数，链式处理数组，路由对象：
	 * - Function javascript 函数，将使用此函数进行处理
	 * - Handler 内置处理器，将使用此处理器进行处理
	 * - 链式处理数组，等同于返回 new mq.Chain(hdlr)，参见 Chain
	 * - 路由对象，等同于返回 new mq.Routing(hdlr)，参见 Routing
	 * 
	 * 消息处理函数语法如下：
	 * ```JavaScript
	 * function func(v){
	 * }
	 * ```
	 * 参数 v 为正在处理的消息，返回结果允许有四种:
	 * - Function javascript 函数，将使用此函数进行下一阶段处理
	 * - Handler 内置处理器，将使用此处理器进行下一阶段处理
	 * - 链式处理数组，等同于 new mq.Chain(v)，参见 Chain
	 * - 路由对象，等同于 new mq.Routing(v)，参见 Routing
	 * 
	 * 无返回或者其他的返回结果将结束消息处理。
	 * @param hdlr 内置消息处理器，处理函数，链式处理数组，路由对象
	 * @return 返回封装了处理函数的处理器
	 * 
	 * 
	 * 
	 */
	export const Handler: typeof Class_Handler


	/**
	 * 
	 * @brief 创建一个消息处理器链处理对象，参见 Chain
	 * 
	 * 
	 */
	export const Chain: typeof Class_Chain


	/**
	 * 
	 * @brief 创建一个消息处理器路由对象，参见 Routing
	 * 
	 * 
	 */
	export const Routing: typeof Class_Routing




	/**
	 * 
	 * @brief 创建一个空处理器对象，次处理对象不做任何处理直接返回
	 * @return 返回空处理函数
	 * 
	 * 
	 * 
	 */
	export function nullHandler(): Class_Handler;

	/**
	 * 
	 * @brief 使用给定的处理器处理一个消息或对象
	 * 
	 * 不同于处理器的 invoke 方法，此方法将循环调用每个处理器的返回处理器，直到处理器返回 null 为止。
	 * @param hdlr 指定使用的处理器
	 * @param v 指定要处理的消息或对象
	 * 
	 * 
	 * @async
	 */
	export function invoke(hdlr: Class_Handler, v: Class__object, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

}


