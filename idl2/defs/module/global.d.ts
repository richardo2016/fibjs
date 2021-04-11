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
	* @brief 全局对象，所有脚本均可以访问的基础对象
	* @detail 
	*/
declare module "global" {

	import consoleNS = require('console')
	import processNS = require('process')

	module global {


		/**
		 * 
		 * @brief Worker 宿主对象，仅在 Worker 入口脚本有效
		 * 
		 * 
		 */
		export const Master: Class_Worker;

		/**
		 * 
		 * @brief 全局对象
		 * 
		 * 
		 */
		export const global: Fibjs.AnyObject;

		/**
		 * 
		 * @brief 获取当前脚本的运行参数，启动 js 获取进程启动参数，run 执行的脚本获取传递的参数
		 * 
		 * 
		 */
		export const argv: any[];

		/**
		 * 
		 * @brief 当前脚本文件名
		 * 
		 * 
		 */
		export const __filename: string;

		/**
		 * 
		 * @brief 当前脚本所在目录
		 * 
		 * 
		 */
		export const __dirname: string;


		/**
		 * 
		 * @brief 二进制数据缓存对象，用于 io 读写的数据处理，参见 Buffer 对象。
		 * 
		 * 
		 */
		export const Buffer: typeof Class_Buffer


		/**
		 * 
		 * @brief 控制台访问对象
		 * 
		 * 
		 */

		export const console: typeof consoleNS

		/**
		 * 
		 * @brief 进程对象
		 * 
		 * 
		 */

		export const process: typeof processNS



		/**
		 * 
		 * @brief 运行一个脚本
		 * @param fname 指定要运行的脚本路径
		 * @param argv 指定要运行的参数，此参数可在脚本内使用 argv 获取
		 * 
		 * 
		 * 
		 */
		export function run(fname: string, argv?: any[]/** = v8::Array::New(isolate)*/): void;

		/**
		 * 
		 * @brief 加载一个模块并返回模块对象，更多信息参阅 @ref module
		 * 
		 * require 可用于加载基础模块，文件模块。
		 * 
		 * 基础模块是沙箱创建时初始化的模块，引用时只需传递相应的 id，比如 require("net")。
		 * 
		 * 文件模块是用户自定义模块，引用时需传递以 ./ 或 ../ 开头的相对路径。文件模块支持 .js, .jsc 和 .json 文件。
		 * 
		 * 文件模块也支持 package.json 格式，当模块为目录结构时，require 会先查询 package.json 中的 main，未发现则尝试加载路径下的 index.js, index.jsc 或 index.json。
		 * 
		 * 若引用路径不是 ./ 或 ../ 开头，并且非基础模块，require 从当前模块所在路径下的 node_modules 查找，并上级目录递归。
		 * 
		 * 基础流程如下:
		 * 
		 * ```dot
		 * digraph{
		 * node [fontname = "Helvetica,sans-Serif", fontsize = 10];
		 * edge [fontname = "Helvetica,sans-Serif", fontsize = 10];
		 * 
		 * start [label="start"];
		 * resolve [label="path.resolve" shape="rect"];
		 * search [label="recursive lookup\nnode_modules\nfrom the current path" shape="rect"];
		 * load [label="load" shape="rect"];
		 * end [label="end" shape="doublecircle"];
		 * 
		 * is_native [label="is internal module?" shape="diamond"];
		 * is_mod [label="is module?" shape="diamond"];
		 * is_abs [label="is absolute?" shape="diamond"];
		 * has_file [label="module exists?" shape="diamond"];
		 * has_ext [label="module.js exists?" shape="diamond"];
		 * has_package [label="/package.json\nexists?" shape="diamond"];
		 * has_main [label="main exists?" shape="diamond"];
		 * has_index [label="index.js exists?" shape="diamond"];
		 * 
		 * start -> is_native;
		 * is_native -> end [label="Yes"];
		 * is_native -> is_mod [label="No"];
		 * is_mod -> search [label="Yes"];
		 * search -> has_file;
		 * is_mod -> is_abs [label="No"];
		 * is_abs -> has_file [label="Yes"];
		 * is_abs -> resolve [label="No"];
		 * resolve -> has_file;
		 * has_file -> load [label="Yes"];
		 * has_file -> has_ext [label="No"];
		 * has_ext -> load [label="Yes"];
		 * has_ext -> has_package [label="No"];
		 * has_package -> has_main [label="Yes"];
		 * has_package -> has_index [label="No"];
		 * has_main -> load [label="Yes"];
		 * has_main -> has_index [label="No"];
		 * has_index -> load [label="Yes"];
		 * has_index -> end [label="No"];
		 * load -> end;
		 * }
		 * ```
		 * 
		 * @param id 指定要加载的模块名称
		 * @return 返回加载模块的引出对象
		 * 
		 * 
		 * 
		 */
		export function require(id: string): any;

		/**
		 * 
		 * @brief 在指定的时间后调用函数
		 * @param callback 指定回调函数
		 * @param timeout 指定延时的时间，以毫秒为单位。超过 2^31 的话,立即执行。
		 * @param args 额外的参数，传入到指定的 callback 内，可选。
		 * @return 返回定时器对象
		 * 
		 * 
		 * 
		 */
		export function setTimeout(callback: Function, timeout?: number/** = 1*/, ...args: any[]): Class_Timer;

		/**
		 * 
		 * @brief 清除指定的定时器
		 * @param t 指定要清除的定时器
		 * 
		 * 
		 * 
		 */
		export function clearTimeout(t: any): void;

		/**
		 * 
		 * @brief 每间隔指定的时间后调用函数
		 * @param callback 指定回调函数
		 * @param timeout 指定间隔的时间，以毫秒为单位。超过 2^31 的话,立即执行。
		 * @param args 额外的参数，传入到指定的 callback 内，可选。
		 * @return 返回定时器对象
		 * 
		 * 
		 * 
		 */
		export function setInterval(callback: Function, timeout: number, ...args: any[]): Class_Timer;

		/**
		 * 
		 * @brief 清除指定的定时器
		 * @param t 指定要清除的定时器
		 * 
		 * 
		 * 
		 */
		export function clearInterval(t: any): void;

		/**
		 * 
		 * @brief 每间隔指定的时间后调用函数，这是个高精度定时器，会主动打断正在运行的 JavaScript 脚本执行定时器
		 * 由于 setHrInterval 的定时器会中断正在运行的代码执行回调，因此不要在回调函数内修改可能影响其它模块的数据，或者在回调中调用任何标记为 async 的 api 函数，否则将会产生不可预知的结果。例如：
		 * ```JavaScript
		 * var timers = require('timers');
		 * 
		 * var cnt = 0;
		 * timers.setHrInterval(() => {
		 * cnt++;
		 * }, 100);
		 * 
		 * while (cnt < 10);
		 * 
		 * console.error("===============================> done");
		 * ```
		 * 这段代码中，第 8 行的循环并不会因为 cnt 的改变而结束，因为 JavaScript 在优化代码时会认定在这个循环过程中 cnt 不会被改变。
		 * @param callback 指定回调函数
		 * @param timeout 指定间隔的时间，以毫秒为单位。超过 2^31 的话,立即执行。
		 * @param args 额外的参数，传入到指定的 callback 内，可选。
		 * @return 返回定时器对象
		 * 
		 * 
		 * 
		 */
		export function setHrInterval(callback: Function, timeout: number, ...args: any[]): Class_Timer;

		/**
		 * 
		 * @brief 清除指定的定时器
		 * @param t 指定要清除的定时器
		 * 
		 * 
		 * 
		 */
		export function clearHrInterval(t: any): void;

		/**
		 * 
		 * @brief 下一个空闲时间立即执行回调函数
		 * @param callback 指定回调函数
		 * @param args 额外的参数，传入到指定的 callback 内，可选。
		 * @return 返回定时器对象
		 * 
		 * 
		 * 
		 */
		export function setImmediate(callback: Function, ...args: any[]): Class_Timer;

		/**
		 * 
		 * @brief 清除指定的定时器
		 * @param t 指定要清除的定时器
		 * 
		 * 
		 * 
		 */
		export function clearImmediate(t: any): void;

		/**
		 * 
		 * @brief 强制要求进行垃圾回收
		 * 
		 * 
		 */
		export function GC(): void;

	} /** end of `module global` */
	export = global
}

/** endof `module Or Internal Object` */


