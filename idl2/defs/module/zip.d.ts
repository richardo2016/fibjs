




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
	* @brief zip 格式文件压缩解压模块
	* @detail 使用方法：,```JavaScript,var zip = require('zip');,```
	*/
declare module "zip" {


	/**
	 * 
	 * @brief 压缩类型常量, 不压缩, 仅存储
	 * 
	 * 
	 */
	export const ZIP_STORED = 0;

	/**
	 * 
	 * @brief 压缩类型常量, 需要依赖zlib库进行压缩
	 * 
	 * 
	 */
	export const ZIP_DEFLATED = 1;





	/**
	 * 
	 * @brief  判断文件是否是zip格式
	 * @param filename 文件名
	 * @return 返回true代表文件是zip文件
	 * 
	 * 
	 * @async
	 */
	export function isZipFile(filename: string, callback?: Fibjs.AsyncCallback<boolean>/** = function (err: Error, result: boolean) {}*/): boolean;

	/**
	 * 
	 * @brief 打开一个zip文件
	 * @param path 文件路径
	 * @param mod 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
	 * @param compress_type 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。
	 * @return 返回zip文件对象
	 * 
	 * 
	 * @async
	 */
	export function open(path: string, mod?: string/** = "r"*/, compress_type?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<Class_ZipFile>/** = function (err: Error, result: Class_ZipFile) {}*/): Class_ZipFile;

	/**
	 * 
	 * @brief 打开一个zip文件
	 * @param data zip文件数据
	 * @param mod 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
	 * @param compress_type 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。
	 * @return 返回zip文件对象
	 * 
	 * 
	 * @async
	 */
	export function open(data: Class_Buffer, mod?: string/** = "r"*/, compress_type?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<Class_ZipFile>/** = function (err: Error, result: Class_ZipFile) {}*/): Class_ZipFile;

	/**
	 * 
	 * @brief 打开一个zip文件
	 * @param strm zip文件流
	 * @param mod 打开文件模式, "r"代表读取, "w"代表创建, "a"代表在zip文件后追加
	 * @param compress_type 压缩类型, ZIP_STORED 代表不压缩, 仅存储。 默认使用ZIP_DEFLATED 代表使用zlib库进行压缩。
	 * @return 返回zip文件对象
	 * 
	 * 
	 * @async
	 */
	export function open(strm: Class_SeekableStream, mod?: string/** = "r"*/, compress_type?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<Class_ZipFile>/** = function (err: Error, result: Class_ZipFile) {}*/): Class_ZipFile;

}


