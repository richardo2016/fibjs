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
	* @brief ssl/tls 模块，模块别名：tls
	* @detail 
	*/
declare module "ssl" {


	module ssl {

		/**
		 * 
		 * @brief 证书验证模式，不验证
		 * 
		 * 
		 */
		export const VERIFY_NONE = 0;

		/**
		 * 
		 * @brief 证书验证模式，可选验证，允许验证不通过
		 * 
		 * 
		 */
		export const VERIFY_OPTIONAL = 1;

		/**
		 * 
		 * @brief 证书验证模式，要求验证，验证不通过则中断
		 * 
		 * 
		 */
		export const VERIFY_REQUIRED = 2;

		/**
		 * 
		 * @brief 证书验证结果，证书超时
		 * 
		 * 
		 */
		export const BADCERT_EXPIRED = 1;

		/**
		 * 
		 * @brief 证书验证结果，证书被撤销
		 * 
		 * 
		 */
		export const BADCERT_REVOKED = 2;

		/**
		 * 
		 * @brief 证书验证结果，证书名错误
		 * 
		 * 
		 */
		export const BADCERT_CN_MISMATCH = 4;

		/**
		 * 
		 * @brief 证书验证结果，证书不可信
		 * 
		 * 
		 */
		export const BADCERT_NOT_TRUSTED = 8;

		/**
		 * 
		 * @brief ssl 协议版本 ssl 3.0
		 * 
		 * 
		 */
		export const ssl3 = 0;

		/**
		 * 
		 * @brief ssl 协议版本 tls 1.0
		 * 
		 * 
		 */
		export const tls1 = 1;

		/**
		 * 
		 * @brief ssl 协议版本 tls 1.1
		 * 
		 * 
		 */
		export const tls1_1 = 2;

		/**
		 * 
		 * @brief ssl 协议版本 tls 1.2
		 * 
		 * 
		 */
		export const tls1_2 = 3;


		/**
		 * 
		 * @brief 全局证书，用于 ssl 客户端模式验证服务器证书
		 * 
		 * 
		 */
		export const ca: Class_X509Cert;

		/**
		 * 
		 * @brief 设定证书验证模式，缺省为 VERIFY_REQUIRED
		 * 
		 * 
		 */
		export const verification: number;

		/**
		 * 
		 * @brief 设定最低版本支持，缺省 ssl3
		 * 
		 * 
		 */
		export const min_version: number;

		/**
		 * 
		 * @brief 设定最高版本支持，缺省 tls1_1
		 * 
		 * 
		 */
		export const max_version: number;


		/**
		 * 
		 * @brief 创建一个 SslSocket 对象，参见 SslSocket
		 * 
		 * 
		 */
		export const Socket: typeof Class_SslSocket


		/**
		 * 
		 * @brief 创建一个 SslHandler 对象，参见 SslHandler
		 * 
		 * 
		 */
		export const Handler: typeof Class_SslHandler


		/**
		 * 
		 * @brief 创建一个 SslServer 对象，参见 SslServer
		 * 
		 * 
		 */
		export const Server: typeof Class_SslServer




		/**
		 * 
		 * @brief 创建一个 SslSocket 对象并建立连接
		 * @param url 指定连接的协议，可以是：ssl://host:port
		 * @param timeout 指定超时时间，单位是毫秒，默认为0
		 * @return 返回连接成功的 SslSocket 对象
		 * 
		 * 
		 * @async
		 */
		export function connect(url: string, timeout?: number/** = 0*/, callback?: Fibjs.AsyncCallback<Class_Stream>/** = function (err: Error, result: Class_Stream) {}*/): Class_Stream;

		/**
		 * 
		 * @brief 创建一个 SslSocket 对象并建立连接
		 * @param url 指定连接的协议，可以是：ssl://host:port
		 * @param crt X509Cert 证书，用于客户端验证服务器
		 * @param key PKey 私钥，用于与客户端会话
		 * @param timeout 指定超时时间，单位是毫秒，默认为0
		 * @return 返回连接成功的 SslSocket 对象
		 * 
		 * 
		 * @async
		 */
		export function connect(url: string, crt: Class_X509Cert, key: Class_PKey, timeout?: number/** = 0*/, callback?: Fibjs.AsyncCallback<Class_Stream>/** = function (err: Error, result: Class_Stream) {}*/): Class_Stream;

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
		 * @brief 从文件中加载缺省客户端证书
		 * @param crtFile X509Cert 证书文件，用于客户端验证服务器
		 * @param keyFile PKey 私钥文件，用于与客户端会话
		 * @param password 解密密码
		 * 
		 * 
		 * 
		 */
		export function loadClientCertFile(crtFile: string, keyFile: string, password?: string/** = ""*/): void;

		/**
		 * 
		 * @brief 加载自带的缺省根证书，等同于 ssl.ca.loadRootCerts
		 * 此证书内容源自：http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt
		 * 
		 * 
		 */
		export function loadRootCerts(): void;

	} /** end of `module ssl` */
	export = ssl
}

/** endof `module Or Internal Object` */


