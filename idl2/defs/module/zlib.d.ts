




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
	* @brief zlib 压缩解压模块
	* @detail 使用方法：,```JavaScript,var zlib = require('zlib');,```
	*/
declare module "zlib" {


	/**
	 * 
	 * @brief deflate 压缩级别，设定不压缩
	 * 
	 * 
	 */
	export const NO_COMPRESSION = 0;

	/**
	 * 
	 * @brief deflate 压缩级别，设定最快压缩
	 * 
	 * 
	 */
	export const BEST_SPEED = 1;

	/**
	 * 
	 * @brief deflate 压缩级别，设定最高压缩
	 * 
	 * 
	 */
	export const BEST_COMPRESSION = 9;

	/**
	 * 
	 * @brief deflate 压缩级别，设定缺省设置
	 * 
	 * 
	 */
	export const DEFAULT_COMPRESSION = -1;





	/**
	 * 
	 * @brief 创建一个 deflate 流对象
	 * @param to 用于存储处理结果的流
	 * @return 返回封装过的流对象
	 * 
	 * 
	 */
	export function createDeflate(to: Class_Stream): Class_Stream;

	/**
	 * 
	 * @brief 创建一个 deflateRaw 流对象
	 * @param to 用于存储处理结果的流
	 * @return 返回封装过的流对象
	 * 
	 * 
	 */
	export function createDeflateRaw(to: Class_Stream): Class_Stream;

	/**
	 * 
	 * @brief 创建一个 gunzip 流对象
	 * @param to 用于存储处理结果的流
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * @return 返回封装过的流对象
	 * 
	 * 
	 */
	export function createGunzip(to: Class_Stream, maxSize?: number/** = -1*/): Class_Stream;

	/**
	 * 
	 * @brief 创建一个 gzip 流对象
	 * @param to 用于存储处理结果的流
	 * @return 返回封装过的流对象
	 * 
	 * 
	 */
	export function createGzip(to: Class_Stream): Class_Stream;

	/**
	 * 
	 * @brief 创建一个 inflate 流对象
	 * @param to 用于存储处理结果的流
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * @return 返回封装过的流对象
	 * 
	 * 
	 */
	export function createInflate(to: Class_Stream, maxSize?: number/** = -1*/): Class_Stream;

	/**
	 * 
	 * @brief 创建一个 inflateRaw 流对象
	 * @param to 用于存储处理结果的流
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * @return 返回封装过的流对象
	 * 
	 * 
	 */
	export function createInflateRaw(to: Class_Stream, maxSize?: number/** = -1*/): Class_Stream;

	/**
	 * 
	 * @brief 使用 deflate 算法压缩数据(zlib格式)
	 * @param data 给定要压缩的数据
	 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
	 * @return 返回压缩后的二进制数据
	 * 
	 * 
	 * @async
	 */
	export function deflate(data: Class_Buffer, level?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

	/**
	 * 
	 * @brief 使用 deflate 算法压缩数据到流对象中(zlib格式)
	 * @param data 给定要压缩的数据
	 * @param stm 指定存储压缩数据的流
	 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
	 * 
	 * 
	 * @async
	 */
	export function deflateTo(data: Class_Buffer, stm: Class_Stream, level?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 使用 deflate 算法压缩源流中的数据到流对象中(zlib格式)
	 * @param src 给定要压缩的数据所在的流
	 * @param stm 指定存储压缩数据的流
	 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
	 * 
	 * 
	 * @async
	 */
	export function deflateTo(src: Class_Stream, stm: Class_Stream, level?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 解压缩 deflate 算法压缩的数据(zlib格式)
	 * @param data 给定压缩后的数据
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * @return 返回解压缩后的二进制数据
	 * 
	 * 
	 * @async
	 */
	export function inflate(data: Class_Buffer, maxSize?: number/** = -1*/, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

	/**
	 * 
	 * @brief 解压缩 deflate 算法压缩的数据到流对象中(zlib格式)
	 * @param data 给定要解压缩的数据
	 * @param stm 指定存储解压缩数据的流
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * 
	 * 
	 * @async
	 */
	export function inflateTo(data: Class_Buffer, stm: Class_Stream, maxSize?: number/** = -1*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 解压缩源流中 deflate 算法压缩的数据到流对象中(zlib格式)
	 * @param src 给定要解压缩的数据所在的流
	 * @param stm 指定存储解压缩数据的流
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * 
	 * 
	 * @async
	 */
	export function inflateTo(src: Class_Stream, stm: Class_Stream, maxSize?: number/** = -1*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 使用 gzip 算法压缩数据
	 * @param data 给定要压缩的数据
	 * @return 返回压缩后的二进制数据
	 * 
	 * 
	 * @async
	 */
	export function gzip(data: Class_Buffer, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

	/**
	 * 
	 * @brief 使用 gzip 算法压缩数据到流对象中
	 * @param data 给定要压缩的数据
	 * @param stm 指定存储压缩数据的流
	 * 
	 * 
	 * @async
	 */
	export function gzipTo(data: Class_Buffer, stm: Class_Stream, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 使用 gzip 算法压缩源流中的数据到流对象中
	 * @param src 给定要压缩的数据所在的流
	 * @param stm 指定存储压缩数据的流
	 * 
	 * 
	 * @async
	 */
	export function gzipTo(src: Class_Stream, stm: Class_Stream, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 解压缩 gzip 算法压缩的数据
	 * @param data 给定压缩后的数据
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * @return 返回解压缩后的二进制数据
	 * 
	 * 
	 * @async
	 */
	export function gunzip(data: Class_Buffer, maxSize?: number/** = -1*/, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

	/**
	 * 
	 * @brief 解压缩 gzip 算法压缩的数据到流对象中
	 * @param data 给定要解压缩的数据
	 * @param stm 指定存储解压缩数据的流
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * 
	 * 
	 * @async
	 */
	export function gunzipTo(data: Class_Buffer, stm: Class_Stream, maxSize?: number/** = -1*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 解压缩源流中 gzip 算法压缩的数据到流对象中
	 * @param src 给定要解压缩的数据所在的流
	 * @param stm 指定存储解压缩数据的流
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * 
	 * 
	 * @async
	 */
	export function gunzipTo(src: Class_Stream, stm: Class_Stream, maxSize?: number/** = -1*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 使用 deflate 算法压缩数据(deflateRaw)
	 * @param data 给定要压缩的数据
	 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
	 * @return 返回压缩后的二进制数据
	 * 
	 * 
	 * @async
	 */
	export function deflateRaw(data: Class_Buffer, level?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

	/**
	 * 
	 * @brief 使用 deflate 算法压缩数据到流对象中(deflateRaw)
	 * @param data 给定要压缩的数据
	 * @param stm 指定存储压缩数据的流
	 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
	 * 
	 * 
	 * @async
	 */
	export function deflateRawTo(data: Class_Buffer, stm: Class_Stream, level?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 使用 deflate 算法压缩源流中的数据到流对象中(deflateRaw)
	 * @param src 给定要压缩的数据所在的流
	 * @param stm 指定存储压缩数据的流
	 * @param level 指定压缩级别，缺省为 DEFAULT_COMPRESSION
	 * 
	 * 
	 * @async
	 */
	export function deflateRawTo(src: Class_Stream, stm: Class_Stream, level?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 解压缩 deflate 算法压缩的数据(inflateRaw)
	 * @param data 给定压缩后的数据
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * @return 返回解压缩后的二进制数据
	 * 
	 * 
	 * @async
	 */
	export function inflateRaw(data: Class_Buffer, maxSize?: number/** = -1*/, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

	/**
	 * 
	 * @brief 解压缩 deflate 算法压缩的数据到流对象中(inflateRaw)
	 * @param data 给定要解压缩的数据
	 * @param stm 指定存储解压缩数据的流
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * 
	 * 
	 * @async
	 */
	export function inflateRawTo(data: Class_Buffer, stm: Class_Stream, maxSize?: number/** = -1*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 解压缩源流中 deflate 算法压缩的数据到流对象中(inflateRaw)
	 * @param src 给定要解压缩的数据所在的流
	 * @param stm 指定存储解压缩数据的流
	 * @param maxSize 指定解压缩尺寸限制，缺省为 -1，不限制
	 * 
	 * 
	 * @async
	 */
	export function inflateRawTo(src: Class_Stream, stm: Class_Stream, maxSize?: number/** = -1*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

}


