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
	* @brief 编码与解码模块，用于处理不同的数据编码格式与二进制之间的转换
	* @detail 引用方式：,```JavaScript,var encoding = require('encoding');,```
	*/
declare module "encoding" {

	import base32NS = require('base32')
	import base64NS = require('base64')
	import base64vlqNS = require('base64vlq')
	import hexNS = require('hex')
	import iconvNS = require('iconv')
	import jsonNS = require('json')
	import msgpackNS = require('msgpack')
	import bsonNS = require('bson')

	module encoding {



		/**
		 * 
		 * @brief base32 编码与解码模块
		 * 
		 * 
		 */

		export const base32: typeof base32NS

		/**
		 * 
		 * @brief base64 编码与解码模块
		 * 
		 * 
		 */

		export const base64: typeof base64NS

		/**
		 * 
		 * @brief base64vlq 编码与解码模块
		 * 
		 * 
		 */

		export const base64vlq: typeof base64vlqNS

		/**
		 * 
		 * @brief hex 编码与解码模块
		 * 
		 * 
		 */

		export const hex: typeof hexNS

		/**
		 * 
		 * @brief iconv 编码与解码模块
		 * 
		 * 
		 */

		export const iconv: typeof iconvNS

		/**
		 * 
		 * @brief json 编码与解码模块
		 * 
		 * 
		 */

		export const json: typeof jsonNS

		/**
		 * 
		 * @brief msgpack 编码与解码模块
		 * 
		 * 
		 */

		export const msgpack: typeof msgpackNS

		/**
		 * 
		 * @brief bson 编码与解码模块
		 * 
		 * 
		 */

		export const bson: typeof bsonNS



		/**
		 * 
		 * @brief 将字符串编码为 javascript 转义字符串，用以在 javascript 代码中包含文本
		 * @param str 要编码的字符串
		 * @param json 是否生成json兼容字符串
		 * @return 返回编码的字符串
		 * 
		 * 
		 * 
		 */
		export function jsstr(str: string, json?: boolean/** = false*/): string;

		/**
		 * 
		 * @brief url 字符串安全编码
		 * @param url 要编码的 url
		 * @return 返回编码的字符串
		 * 
		 * 
		 * 
		 */
		export function encodeURI(url: string): string;

		/**
		 * 
		 * @brief url 部件字符串安全编码
		 * @param url 要编码的 url
		 * @return 返回编码的字符串
		 * 
		 * 
		 * 
		 */
		export function encodeURIComponent(url: string): string;

		/**
		 * 
		 * @brief url 安全字符串解码
		 * @param url 要解码的 url
		 * @return 返回解码的字符串
		 * 
		 * 
		 * 
		 */
		export function decodeURI(url: string): string;

	} /** end of `module encoding` */
	export = encoding
}

/** endof `module Or Internal Object` */


