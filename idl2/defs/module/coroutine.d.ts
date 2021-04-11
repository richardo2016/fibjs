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
	* @brief 并发控制模块
	* @detail 引用方法：,```JavaScript,var coroutine = require('coroutine');,```
	*/
declare module "coroutine" {


	module coroutine {


		/**
		 * 
		 * @brief 返回当前正在运行的全部 fiber 数组
		 * 
		 * 
		 */
		export const fibers: any[];

		/**
		 * 
		 * @brief 查询和设置空闲 Fiber 数量，服务器抖动较大时可适度增加空闲 Fiber 数量。缺省为 256
		 * 
		 * 
		 */
		export const spareFibers: number;

		/**
		 * 
		 * @brief 查询当前 vm 编号
		 * 
		 * 
		 */
		export const vmid: number;

		/**
		 * 
		 * @brief 修改和查询本 vm 的输出级别，用以过滤输出信息，缺省为 console.NOTSET，全部输出
		 * 
		 * 
		 * 
		 */
		export const loglevel: number;


		/**
		 * 
		 * @brief 锁对象，参见 Lock
		 * 
		 * 
		 */
		export const Lock: typeof Class_Lock


		/**
		 * 
		 * @brief 信号量对象，参见 Semaphore
		 * 
		 * 
		 */
		export const Semaphore: typeof Class_Semaphore


		/**
		 * 
		 * @brief 条件变量对象，参见 Condition
		 * 
		 * 
		 */
		export const Condition: typeof Class_Condition


		/**
		 * 
		 * @brief 事件对象，参见 Event
		 * 
		 * 
		 */
		export const Event: typeof Class_Event


		/**
		 * 
		 * @brief 独立线程工作对象，参见 Worker
		 * 
		 * 
		 */
		export const Worker: typeof Class_Worker




		/**
		 * 
		 * @brief 启动一个纤程并返回纤程对象
		 * @param func 制定纤程执行的函数
		 * @param args 可变参数序列，此序列会在纤程内传递给函数
		 * @return 返回纤程对象
		 * 
		 * 
		 * 
		 */
		export function start(func: Function, ...args: any[]): Class_Fiber;

		/**
		 * 
		 * @brief 并行执行一组函数，并等待返回
		 * @param funcs 并行执行的函数数组
		 * @param fibers 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber
		 * @return 返回函数执行结果的数组
		 * 
		 * 
		 * 
		 */
		export function parallel(funcs: any[], fibers?: number/** = -1*/): any[];

		/**
		 * 
		 * @brief 并行执行一个函数处理一组数据，并等待返回
		 * @param datas 并行执行的数据数组
		 * @param func 并行执行的函数
		 * @param fibers 限制并发 fiber 数量，缺省为 -1，启用与 datas 数量相同 fiber
		 * @return 返回函数执行结果的数组
		 * 
		 * 
		 * 
		 */
		export function parallel(datas: any[], func: Function, fibers?: number/** = -1*/): any[];

		/**
		 * 
		 * @brief 并行执行一个函数多次，并等待返回
		 * @param func 并行执行的函数数
		 * @param num 重复任务数量
		 * @param fibers 限制并发 fiber 数量，缺省为 -1，启用与 funcs 数量相同 fiber
		 * @return 返回函数执行结果的数组
		 * 
		 * 
		 * 
		 */
		export function parallel(func: Function, num: number, fibers?: number/** = -1*/): any[];

		/**
		 * 
		 * @brief 并行执行一组函数，并等待返回
		 * @param funcs 一组并行执行的函数
		 * @return 返回函数执行结果的数组
		 * 
		 * 
		 * 
		 */
		export function parallel(...funcs: any[]): any[];

		/**
		 * 
		 * @brief 返回当前纤程
		 * @return 当前纤程对象
		 * 
		 * 
		 * 
		 */
		export function current(): Class_Fiber;

		/**
		 * 
		 * @brief 暂停当前纤程指定的时间
		 * @param ms 指定要暂停的时间，以毫秒为单位，缺省为 0，即有空闲立即回恢复运行
		 * 
		 * 
		 * @async
		 */
		export function sleep(ms?: number/** = 0*/, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	} /** end of `module coroutine` */
	export = coroutine
}

/** endof `module Or Internal Object` */


