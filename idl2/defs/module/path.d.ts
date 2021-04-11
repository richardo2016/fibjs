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
	* @brief 文件路径处理模块
	* @detail 引用方法：,```JavaScript,var path = require('path');,```
	*/
declare module "path" {


	module path {


		/**
		 * 
		 * @brief 查询当前操作系统的路径分割字符，posix 返回 '/', windows 返回  '\\'
		 * 
		 * 
		 * 
		 */
		export const sep: string;

		/**
		 * 
		 * @brief 查询当前操作系统的多路径组合字符，posix 返回 ':', windows 返回  ';'
		 * 
		 * 
		 * 
		 */
		export const delimiter: string;

		/**
		 * 
		 * @brief posix 实现，参见 path_posix
		 * 
		 * 
		 * 
		 */
		export const posix: Fibjs.AnyObject;

		/**
		 * 
		 * @brief windows 实现，参见 path_win32
		 * 
		 * 
		 * 
		 */
		export const win32: Fibjs.AnyObject;




		/**
		 * 
		 * @brief 标准化路径，处理路径中父目录等信息
		 * 
		 * @param path 给定的未处理的路径
		 * @return 返回经过处理的路径
		 * 
		 * 
		 * 
		 */
		export function normalize(path: string): string;

		/**
		 * 
		 * @brief 查询路径中的文件名称，若指定扩展名，则自动取消匹配的扩展名
		 * 
		 * @param path 给定查询的路径
		 * @param ext 指定扩展名，若文件名中有符合条件的扩展名，将自动取消
		 * @return 返回文件名称
		 * 
		 * 
		 * 
		 */
		export function basename(path: string, ext?: string/** = ""*/): string;

		/**
		 * 
		 * @brief 查询路径中的文件扩展名
		 * 
		 * @param path 给定查询的路径
		 * @return 返回得到的扩展名
		 * 
		 * 
		 * 
		 */
		export function extname(path: string): string;

		/**
		 * 
		 * @brief 尝试将一个对象格式化为路径
		 * 
		 * pathObject 支持的参数如下：
		 * ```JavaScript
		 * {
		 * "root": "/",
		 * "dir": "/a/b",
		 * "base": "c.ext",
		 * "ext": ".ext",
		 * "name": "c"
		 * }
		 * ```
		 * 
		 * @param pathObject 对象
		 * 
		 * @return 返回格式化后的路径
		 * 
		 * 
		 * 
		 */
		export function format(pathObject: Fibjs.AnyObject): string;

		/**
		 * 
		 * @brief 解析路径为路径对象
		 * 
		 * @param path 路径
		 * @return 返回 pathObject 对象
		 * 
		 * 
		 * 
		 */
		export function parse(path: string): any;

		/**
		 * 
		 * @brief 查询路径中的目录路径
		 * 
		 * @param path 给定查询的路径
		 * @return 返回得到的目录的路径
		 * 
		 * 
		 * 
		 */
		export function dirname(path: string): string;

		/**
		 * 
		 * @brief 转换给定路径为全路径
		 * 
		 * @param path 给定转换的路径
		 * @return 返回转换的全路径
		 * 
		 * 
		 * 
		 */
		export function fullpath(path: string): string;

		/**
		 * 
		 * @brief 识别给定的路径是否是绝对路径
		 * 
		 * @param path 给定需要识别的路径
		 * @return 是绝对路径则返回 true
		 * 
		 * 
		 * 
		 */
		export function isAbsolute(path: string): boolean;

		/**
		 * 
		 * @brief 合并一系列路径成为一个单一路径
		 * 
		 * @param ps 一个或多个相关的路径
		 * @return 返回得到的新路径
		 * 
		 * 
		 * 
		 */
		export function join(...ps: any[]): string;

		/**
		 * 
		 * @brief 合并一系列路径成为一个绝对路径
		 * 
		 * @param ps 一个或多个相关的路径
		 * @return 返回得到的新路径
		 * 
		 * 
		 * 
		 */
		export function resolve(...ps: any[]): string;

		/**
		 * 
		 * @brief 求 _from 到 to 的相对路径
		 * 
		 * @param _from 源路径
		 * @param to 目标路径
		 * @return 返回得到的相对路径
		 * 
		 * 
		 * 
		 */
		export function relative(_from: string, to: string): string;

		/**
		 * 
		 * @brief 转换成 namespace-prefixed 路径。只在 windows 有效，其他系统直接返回。
		 * see: https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
		 * @param path 给定的路径。
		 * @return 返回得到的新路径
		 * 
		 * 
		 * 
		 */
		export function toNamespacedPath(path?: any/** = v8::Undefined(isolate)*/): any;

	} /** end of `module path` */
	export = path
}

/** endof `module Or Internal Object` */


