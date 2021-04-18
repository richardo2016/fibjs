




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
	* @brief 网络访问模块
	* @detail 基础模块。可用于创建和操作网络资源，引用方式：,```JavaScript,var net = require('net');,```
	*/
declare module "net" {


	/**
	 * 
	 * @brief 地址集常量，指定 ipv4
	 * 
	 * 
	 */
	export const AF_INET = 2;

	/**
	 * 
	 * @brief 地址集常量，指定 ipv6
	 * 
	 * 
	 */
	export const AF_INET6 = 10;

	/**
	 * 
	 * @brief 协议族常量，指定 tcp
	 * 
	 * 
	 */
	export const SOCK_STREAM = 1;

	/**
	 * 
	 * @brief 协议族常量，指定 udp
	 * 
	 * 
	 */
	export const SOCK_DGRAM = 2;



	/**
	 * 
	 * @brief 创建一个 Socket 对象，参见 Socket
	 * 
	 * 
	 */
	export const Socket: typeof Class_Socket


	/**
	 * 
	 * @brief 创建一个 Smtp 对象，参见 Smtp
	 * 
	 * 
	 */
	export const Smtp: typeof Class_Smtp


	/**
	 * 
	 * @brief 创建一个 TcpServer 对象，参见 TcpServer
	 * 
	 * 
	 */
	export const TcpServer: typeof Class_TcpServer


	/**
	 * 
	 * @brief 创建一个 UrlObject 对象，参见 UrlObject
	 * 
	 * 
	 */
	export const Url: typeof Class_UrlObject




	/**
	 * 
	 * @brief 查询当前运行环境网络信息
	 * @return 返回网卡信息
	 * 
	 * 
	 * 
	 */
	export function info(): Fibjs.AnyObject;

	/**
	 * 
	 * @brief 查询给定的主机名的地址
	 * @param name 指定主机名
	 * @param family 指定查询返回类型，缺省为 AF_INET
	 * @return 返回查询的 ip 字符串
	 * 
	 * 
	 * @async
	 */
	export function resolve(name: string, family?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<string>/** = function (err: Error, result: string) {}*/): string;

	/**
	 * 
	 * @brief 快速查询的主机地址，等效与 resolve(name)
	 * @param name 指定主机名
	 * @return 返回查询的 ip 字符串
	 * 
	 * 
	 * @async
	 */
	export function ip(name: string, callback?: Fibjs.AsyncCallback<string>/** = function (err: Error, result: string) {}*/): string;

	/**
	 * 
	 * @brief 快速查询的主机 ipv6 地址，等效与 resolve(name, net.AF_INET6)
	 * @param name 指定主机名
	 * @return 返回查询的 ipv6 字符串
	 * 
	 * 
	 * @async
	 */
	export function ipv6(name: string, callback?: Fibjs.AsyncCallback<string>/** = function (err: Error, result: string) {}*/): string;

	/**
	 * 
	 * @brief 创建一个 Socket 或 SslSocket 对象并建立连接
	 * @param url 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
	 * @param timeout 指定超时时间，单位是毫秒，默认为0
	 * @return 返回连接成功的 Socket 或者 SslSocket 对象
	 * 
	 * 
	 * @async
	 */
	export function connect(url: string, timeout?: number/** = 0*/, callback?: Fibjs.AsyncCallback<Class_Stream>/** = function (err: Error, result: Class_Stream) {}*/): Class_Stream;

	/**
	 * 
	 * @brief 创建一个 Smtp 对象并建立连接，参见 Smtp
	 * @param url 指定连接的协议，可以是：tcp://host:port 或者 ssl://host:port
	 * @param timeout 指定超时时间，单位是毫秒，默认为0
	 * @return 返回连接成功的 Smtp 对象
	 * 
	 * 
	 * @async
	 */
	export function openSmtp(url: string, timeout?: number/** = 0*/, callback?: Fibjs.AsyncCallback<Class_Smtp>/** = function (err: Error, result: Class_Smtp) {}*/): Class_Smtp;

	/**
	 * 
	 * @brief 查询当前系统异步网络引擎
	 * @return 返回网络引擎名称
	 * 
	 * 
	 * 
	 */
	export function backend(): string;

	/**
	 * 
	 * @brief 检测输入是否是 IP 地址
	 * @param ip 指定要检测的字符串
	 * @return 非合法的 IP 地址，返回 0, 如果是 IPv4 则返回 4，如果是 IPv6 则返回 6
	 * 
	 * 
	 * 
	 */
	export function isIP(ip?: string/** = ""*/): number;

	/**
	 * 
	 * @brief 检测输入是否是 IPv4 地址
	 * @param ip 指定要检测的字符串
	 * @return 如果是 IPv4 则返回 true.否则返回 false
	 * 
	 * 
	 * 
	 */
	export function isIPv4(ip?: string/** = ""*/): boolean;

	/**
	 * 
	 * @brief 检测输入是否是 IPv6 地址
	 * @param ip 指定要检测的字符串
	 * @return 如果是 IPv6 则返回 true.否则返回 false
	 * 
	 * 
	 * 
	 */
	export function isIPv6(ip?: string/** = ""*/): boolean;

}


