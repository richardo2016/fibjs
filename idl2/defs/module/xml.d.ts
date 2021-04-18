




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
	* @brief xml 处理模块
	* @detail 
	*/
declare module "xml" {


	/**
	 * 
	 * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlElement 对象
	 * 
	 * 
	 * 
	 */
	export const ELEMENT_NODE = 1;

	/**
	 * 
	 * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlAttr 对象
	 * 
	 * 
	 * 
	 */
	export const ATTRIBUTE_NODE = 2;

	/**
	 * 
	 * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlText 对象
	 * 
	 * 
	 * 
	 */
	export const TEXT_NODE = 3;

	/**
	 * 
	 * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlCDATASection 对象
	 * 
	 * 
	 * 
	 */
	export const CDATA_SECTION_NODE = 4;

	/**
	 * 
	 * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlProcessingInstruction 对象
	 * 
	 * 
	 * 
	 */
	export const PROCESSING_INSTRUCTION_NODE = 7;

	/**
	 * 
	 * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlComment 对象
	 * 
	 * 
	 * 
	 */
	export const COMMENT_NODE = 8;

	/**
	 * 
	 * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlDocument 对象
	 * 
	 * 
	 * 
	 */
	export const DOCUMENT_NODE = 9;

	/**
	 * 
	 * @brief XmlNode 的 nodeType 属性常量，表示节点为 XmlDocumentType 对象
	 * 
	 * 
	 * 
	 */
	export const DOCUMENT_TYPE_NODE = 10;



	/**
	 * 
	 * @brief xml 文档对象，参见 XmlDocument 对象
	 * 
	 * 
	 */
	export const Document: typeof Class_XmlDocument




	/**
	 * 
	 * @brief 解析 xml/html 文本，并创建 XmlDocument 对象，不支持多语种
	 * @param source 指定需要解析的 xml/html 文本
	 * @param type 指定文本类型，缺省为 text/xml，也可指定为 text/html
	 * @return 返回创建的 XmlDocument 对象
	 * 
	 * 
	 * 
	 */
	export function parse(source: string, type?: string/** = "text/xml"*/): Class_XmlDocument;

	/**
	 * 
	 * @brief 解析 xml/html，并创建 XmlDocument 对象，解析时会根据指定的语种转换
	 * @param source 指定需要解析的 xml/html 二进制数据
	 * @param type 指定文本类型，缺省为 text/xml，也可指定为 text/html
	 * @return 返回创建的 XmlDocument 对象
	 * 
	 * 
	 * 
	 */
	export function parse(source: Class_Buffer, type?: string/** = "text/xml"*/): Class_XmlDocument;

	/**
	 * 
	 * @brief 序列化 XmlNode 为字符串
	 * @param node 指定需要序列化的 XmlNode
	 * @return 返回序列化的字符串
	 * 
	 * 
	 * 
	 */
	export function serialize(node: Class_XmlNode): string;

}


