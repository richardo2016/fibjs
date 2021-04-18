




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
	* @brief 数据库访问模块
	* @detail 基础模块。可用于创建和操作数据库资源，引用方式：,```JavaScript,var db = require('db');,```
	*/
declare module "db" {






	/**
	 * 
	 * @brief 打开一个数据库，此方法为通用入口，根据提供的 connString 不同调用不同的引擎
	 * @param connString 数据库描述，如：mysql://user:pass\@host/db
	 * @return 返回数据库连接对象
	 * 
	 * 
	 * @async
	 */
	export function open(connString: string, callback?: Fibjs.AsyncCallback<Class__object>/** = function (err: Error, result: Class__object) {}*/): Class__object;

	/**
	 * 
	 * @brief 打开一个 mysql 数据库
	 * @param connString 数据库描述，如：mysql://user:pass\@host/db
	 * @return 返回数据库连接对象
	 * 
	 * 
	 * @async
	 */
	export function openMySQL(connString: string, callback?: Fibjs.AsyncCallback<Class_MySQL>/** = function (err: Error, result: Class_MySQL) {}*/): Class_MySQL;

	/**
	 * 
	 * @brief 打开一个 mysql 数据库
	 * @param connString 数据库描述，如：mssql://user:pass\@host/db
	 * @return 返回数据库连接对象
	 * 
	 * 
	 * @async
	 */
	export function openMSSQL(connString: string, callback?: Fibjs.AsyncCallback<Class_MSSQL>/** = function (err: Error, result: Class_MSSQL) {}*/): Class_MSSQL;

	/**
	 * 
	 * @brief 打开一个 sqlite 数据库
	 * @param connString 数据库描述，如：sqlite:test.db 或者 test.db
	 * @return 返回数据库连接对象
	 * 
	 * 
	 * @async
	 */
	export function openSQLite(connString: string, callback?: Fibjs.AsyncCallback<Class_SQLite>/** = function (err: Error, result: Class_SQLite) {}*/): Class_SQLite;

	/**
	 * 
	 * @brief 打开一个 mongodb 数据库
	 * @param connString 数据库描述
	 * @return 返回数据库连接对象
	 * 
	 * 
	 * @async
	 */
	export function openMongoDB(connString: string, callback?: Fibjs.AsyncCallback<Class_MongoDB>/** = function (err: Error, result: Class_MongoDB) {}*/): Class_MongoDB;

	/**
	 * 
	 * @brief 打开一个 leveldb 数据库
	 * @param connString 数据库描述，如：level:test.db 或者 test.db
	 * @return 返回数据库对象
	 * 
	 * 
	 * @async
	 */
	export function openLevelDB(connString: string, callback?: Fibjs.AsyncCallback<Class_LevelDB>/** = function (err: Error, result: Class_LevelDB) {}*/): Class_LevelDB;

	/**
	 * 
	 * @brief 打开一个 Redis 数据库
	 * @param connString 数据库描述，如：redis://server:port 或者 "server"
	 * @return 返回数据库连接对象
	 * 
	 * 
	 * @async
	 */
	export function openRedis(connString: string, callback?: Fibjs.AsyncCallback<Class_Redis>/** = function (err: Error, result: Class_Redis) {}*/): Class_Redis;

	/**
	 * 
	 * @brief 格式化一个 sql 命令，并返回格式化结果
	 * 
	 * @param method 指定请求的方法
	 * @param opts 参数列表
	 * @return 返回格式化之后的 sql 命令
	 * 
	 * 
	 * 
	 */
	export function format(method: string, opts: Fibjs.AnyObject): string;

	/**
	 * 
	 * @brief 格式化一个 sql 命令，并返回格式化结果
	 * 
	 * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
	 * @param args 可选参数列表
	 * @return 返回格式化之后的 sql 命令
	 * 
	 * 
	 * 
	 */
	export function format(sql: string, ...args: any[]): string;

	/**
	 * 
	 * @brief 格式化一个 mysql 命令，并返回格式化结果
	 * 
	 * @param method 指定请求的方法
	 * @param opts 参数列表
	 * @return 返回格式化之后的 mysql 命令
	 * 
	 * 
	 * 
	 */
	export function formatMySQL(method: string, opts: Fibjs.AnyObject): string;

	/**
	 * 
	 * @brief 格式化一个 mysql 命令，并返回格式化结果
	 * 
	 * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
	 * @param args 可选参数列表
	 * @return 返回格式化之后的 sql 命令
	 * 
	 * 
	 * 
	 */
	export function formatMySQL(sql: string, ...args: any[]): string;

	/**
	 * 
	 * @brief 格式化一个 mssql 命令，并返回格式化结果
	 * 
	 * @param method 指定请求的方法
	 * @param opts 参数列表
	 * @return 返回格式化之后的 mssql 命令
	 * 
	 * 
	 * 
	 */
	export function formatMSSQL(method: string, opts: Fibjs.AnyObject): string;

	/**
	 * 
	 * @brief 格式化一个 mssql 命令，并返回格式化结果
	 * 
	 * @param sql 格式化字符串，可选参数用 ? 指定。例如：'SELECT FROM TEST WHERE [id]=?'
	 * @param args 可选参数列表
	 * @return 返回格式化之后的 sql 命令
	 * 
	 * 
	 * 
	 */
	export function formatMSSQL(sql: string, ...args: any[]): string;

	/**
	 * 
	 * @brief 将字符串编码为 SQL 安全编码字符串
	 * @param str 要编码的字符串
	 * @param mysql 指定 mysql 编码，缺省为 false
	 * @return 返回编码后的字符串
	 * 
	 * 
	 * 
	 */
	export function escape(str: string, mysql?: boolean/** = false*/): string;

}


