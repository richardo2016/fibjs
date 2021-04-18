




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
	* @brief Windows 注册表访问模块
	* @detail 引用方式：,```JavaScript,var registry = require('registry');,var value = registry.get(registry.CLASSES_ROOT, "\node1\node2\value");,```
	*/
declare module "registry" {


	/**
	 * 
	 * @brief 注册表根，存储Windows可识别的文件类型的详细列表，以及相关联的程序
	 * 
	 * 
	 */
	export const CLASSES_ROOT = 0;

	/**
	 * 
	 * @brief 注册表根，存储当前用户设置的信息
	 * 
	 * 
	 */
	export const CURRENT_USER = 1;

	/**
	 * 
	 * @brief 注册表根，包括安装在计算机上的硬件和软件的信息
	 * 
	 * 
	 */
	export const LOCAL_MACHINE = 2;

	/**
	 * 
	 * @brief 注册表根，包含使用计算机的用户的信息
	 * 
	 * 
	 */
	export const USERS = 3;

	/**
	 * 
	 * @brief 注册表根，这个分支包含计算机当前的硬件配置信息
	 * 
	 * 
	 */
	export const CURRENT_CONFIG = 5;

	/**
	 * 
	 * @brief 注册表数据类型，字符串
	 * 
	 * 
	 */
	export const SZ = 1;

	/**
	 * 
	 * @brief 注册表数据类型，扩展字符串
	 * 
	 * 
	 */
	export const EXPAND_SZ = 2;

	/**
	 * 
	 * @brief 注册表数据类型，32 位数值
	 * 
	 * 
	 */
	export const DWORD = 4;

	/**
	 * 
	 * @brief 注册表数据类型，64 位数值
	 * 
	 * 
	 */
	export const QWORD = 11;





	/**
	 * 
	 * @brief 返回指定键值下的所有子健
	 * @param root 指定注册表根
	 * @param key 指定键值
	 * @return 返回该键值下所有子健
	 * 
	 * 
	 * 
	 */
	export function listSubKey(root: number, key: string): any[];

	/**
	 * 
	 * @brief 返回指定键值下的所有数据的健
	 * @param root 指定注册表根
	 * @param key 指定键值
	 * @return 返回该键值下所有数据的健
	 * 
	 * 
	 * 
	 */
	export function listValue(root: number, key: string): any[];

	/**
	 * 
	 * @brief 查询指定键值的数值
	 * @param root 指定注册表根
	 * @param key 指定键值
	 * @return 返回指定键值的数值
	 * 
	 * 
	 * 
	 */
	export function get(root: number, key: string): any;

	/**
	 * 
	 * @brief 设置指定键值为数字
	 * @param root 指定注册表根
	 * @param key 指定键值
	 * @param value 指定数字
	 * @param type 指定类型，允许的类型为 DWORD 和 QWORD，缺省为 DWORD
	 * 
	 * 
	 * 
	 */
	export function set(root: number, key: string, value: number, type?: number/** = undefined*/): void;

	/**
	 * 
	 * @brief 设置指定键值为字符串
	 * @param root 指定注册表根
	 * @param key 指定键值
	 * @param value 指定字符串
	 * @param type 指定类型，允许的类型为 SZ 和 EXPAND_SZ，缺省为 SZ
	 * 
	 * 
	 * 
	 */
	export function set(root: number, key: string, value: string, type?: number/** = undefined*/): void;

	/**
	 * 
	 * @brief 设置指定键值为多字符串
	 * @param root 指定注册表根
	 * @param key 指定键值
	 * @param value 指定多字符串数组
	 * 
	 * 
	 * 
	 */
	export function set(root: number, key: string, value: any[]): void;

	/**
	 * 
	 * @brief 设置指定键值为二进制
	 * @param root 指定注册表根
	 * @param key 指定键值
	 * @param value 指定二进制数据
	 * 
	 * 
	 * 
	 */
	export function set(root: number, key: string, value: Class_Buffer): void;

	/**
	 * 
	 * @brief 删除指定键值的数值
	 * @param root 指定注册表根
	 * @param key 指定键值
	 * 
	 * 
	 * 
	 */
	export function del(root: number, key: string): void;
}


