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
	* @brief 信息摘要计算模块，可用于计算信息摘要和摘要签名
	* @detail 
	*/
declare module "hash" {


	module hash {

		/**
		 * 
		 * @brief MD2 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const MD2 = 1;

		/**
		 * 
		 * @brief MD4 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const MD4 = 2;

		/**
		 * 
		 * @brief MD5 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const MD5 = 3;

		/**
		 * 
		 * @brief SHA1 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SHA1 = 4;

		/**
		 * 
		 * @brief SHA224 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SHA224 = 5;

		/**
		 * 
		 * @brief SHA256 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SHA256 = 6;

		/**
		 * 
		 * @brief SHA384 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SHA384 = 7;

		/**
		 * 
		 * @brief SHA512 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SHA512 = 8;

		/**
		 * 
		 * @brief RIPEMD160 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const RIPEMD160 = 9;

		/**
		 * 
		 * @brief SM3 信息摘要算法标识常量
		 * 
		 * 
		 */
		export const SM3 = 10;





		/**
		 * 
		 * @brief 根据指定的算法标识创建一个信息摘要运算对象
		 * @param algo 指定摘要运算算法
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function digest(algo: number, data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 根据指定的算法标识创建一个信息摘要运算对象
		 * @param algo 指定摘要运算算法
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function digest(algo: number): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 MD2 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function md2(data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 MD4 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function md4(data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 MD5 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function md5(data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SHA1 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sha1(data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SHA224 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sha224(data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SHA256 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sha256(data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SHA384 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sha384(data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SHA512 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sha512(data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 RIPEMD160 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function ripemd160(data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SM3 信息摘要运算对象
		 * @param data 创建同时更新的二进制数据
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function sm3(data: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 根据指定的算法标识创建一个信息摘要签名运算对象
		 * @param algo 指定摘要运算算法
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac(algo: number, key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 MD2 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_md2(key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 MD4 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_md4(key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 MD5 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_md5(key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SHA1 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sha1(key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SHA224 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sha224(key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SHA256 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sha256(key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SHA384 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sha384(key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SHA512 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sha512(key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 RIPEMD160 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_ripemd160(key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 创建一个 SM3 信息摘要签名运算对象
		 * @param key 二进制签名密钥
		 * @return 返回构造的信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function hmac_sm3(key: Class_Buffer): Class_Digest;

	} /** end of `module hash` */
	export = hash
}

/** endof `module Or Internal Object` */


