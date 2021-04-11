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
	* @brief 操作系统与文件系统处理模块
	* @detail 使用方法：,```JavaScript,var os = require('os');,```
	*/
declare module "os" {


	module os {


		/**
		 * 
		 * @brief 查询运行环境当前时区
		 * 
		 * 
		 */
		export const timezone: number;

		/**
		 * 
		 * @brief 查询当前运行环境行结尾标识，posix:\"\\n\"；windows:\"\\r\\n\"
		 * 
		 * 
		 */
		export const EOL: string;

		/**
		 * 
		 * @brief 查询当前运行执行文件完整路径
		 * 
		 * 
		 */
		export const execPath: string;


		/**
		 * 
		 * @brief Service 构造函数，参见 Service
		 * 
		 * 
		 */
		export const Service: typeof Class_Service




		/**
		 * 
		 * @brief 查询当前运行环境主机名
		 * @return 返回主机名
		 * 
		 * 
		 * 
		 */
		export function hostname(): string;

		/**
		 * 
		 * @brief 查询当前 CPU 的字节顺序
		 * @return 返回字节顺序
		 * 
		 * 
		 * 
		 */
		export function endianness(): string;

		/**
		 * 
		 * @brief 查询当前运行环境操作系统名称
		 * @return 返回系统名称
		 * 
		 * 
		 * 
		 */
		export function type(): string;

		/**
		 * 
		 * @brief 查询当前运行环境操作系统版本
		 * @return 返回版本信息
		 * 
		 * 
		 * 
		 */
		export function release(): string;

		/**
		 * 
		 * @brief 查询当前用户目录
		 * @return 返回目录字符串
		 * 
		 * 
		 * 
		 */
		export function homedir(): string;

		/**
		 * 
		 * @brief 查询当前 cpu 环境
		 * @return 返回 cpu 类型，可能的结果为 'amd64', 'arm', 'arm64', 'ia32'
		 * 
		 * 
		 * 
		 */
		export function arch(): string;

		/**
		 * 
		 * @brief 查询运行环境运行时间，以秒为单位
		 * @return 返回表示时间的数值
		 * 
		 * 
		 * 
		 */
		export function uptime(): number;

		/**
		 * 
		 * @brief 查询运行环境 1分钟，5分钟，15分钟平均负载
		 * @return 返回包含三个负载数据的数组
		 * 
		 * 
		 * 
		 */
		export function loadavg(): any[];

		/**
		 * 
		 * @brief 查询运行环境总内存，以字节为单位
		 * @return 返回内存数据
		 * 
		 * 
		 * 
		 */
		export function totalmem(): number;

		/**
		 * 
		 * @brief 查询运行环境可用内存，以字节为单位
		 * @return 返回内存数据
		 * 
		 * 
		 * 
		 */
		export function freemem(): number;

		/**
		 * 
		 * @brief 查询当前运行环境 cpu 个数和参数
		 * @return 返回包含 cpu 参数的数组，每一项对应一个 cpu
		 * 
		 * 
		 * 
		 */
		export function cpus(): any[];

		/**
		 * 
		 * @brief 查询当前运行环境 cpu 个数
		 * @return 返回 cpu 个数
		 * 
		 * 
		 * 
		 */
		export function cpuNumbers(): number;

		/**
		 * 
		 * @brief 查询当前运行环境临时文件目录
		 * @return 返回临时文件目录
		 * 
		 * 
		 * 
		 */
		export function tmpdir(): string;

		/**
		 * 
		 * @brief 返回当前有效执行用户信息
		 * @param options 用于解释结果字符串的字符编码
		 * @return 当前有效执行用户信息
		 * 
		 * 
		 * 
		 */
		export function userInfo(options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/): Fibjs.AnyObject;

		/**
		 * 
		 * @brief 查询当前运行环境网络信息
		 * @return 返回网卡信息
		 * 
		 * 
		 * 
		 */
		export function networkInterfaces(): Fibjs.AnyObject;

		/**
		 * 
		 * @brief 查询当前主机的打印机信息
		 * @return 返回打印机信息
		 * 
		 * 
		 * 
		 */
		export function printerInfo(): any[];

		/**
		 * 
		 * @brief 创建一个打印机输出对象
		 * @param name 打印机名称
		 * @return 返回打印机输出对象
		 * 
		 * 
		 * @async
		 */
		export function openPrinter(name: string, callback?: Fibjs.AsyncCallback<Class_BufferedStream>/** = function (err: Error, result: Class_BufferedStream) {}*/): Class_BufferedStream;

		/**
		 * 
		 * @brief 查询当前平台名称
		 * @return 返回平台名称，可能的结果为 'darwin', 'freebsd', 'linux', 或 'win32'
		 * 
		 * 
		 * 
		 */
		export function platform(): string;

		/**
		 * 
		 * @brief 解析时间字符串或查询运行环境当前时间
		 * @param tmString 时间字符串，缺省则查询当前时间
		 * @return 返回 javascript Date 对象
		 * 
		 * 
		 * 
		 */
		export function time(tmString?: string/** = ""*/): Date;

		/**
		 * 
		 * @brief 时间计算函数，根据 part 指定计算时间
		 * @param d 指定用于计算 Date 对象
		 * @param num 指定运算的数值
		 * @param part 指定运算的时间部位，接收值为："year", "month", "day", "hour", "minute", "second"
		 * @return 返回 javascript Date 对象
		 * 
		 * 
		 * 
		 */
		export function dateAdd(d: Date, num: number, part: string): Date;

		/**
		 * 
		 * @brief 查询当前进程内存使用报告
		 * 
		 * 内存报告生成类似以下结果：
		 * ```JavaScript
		 * {
		 * "rss": 8622080,
		 * "heapTotal": 4083456,
		 * "heapUsed": 1621800,
		 * "nativeObjects": 122
		 * }
		 * ```
		 * 其中：
		 * - rss 返回进程当前占用物理内存大小
		 * - heapTotal 返回 v8 引擎堆内存大小
		 * - heapUsed 返回 v8 引擎正在使用堆内存大小
		 * - nativeObjects 返回当前有效内置对象数
		 * @return 返回包含内存报告
		 * 
		 * 
		 * 
		 */
		export function memoryUsage(): Fibjs.AnyObject;

	} /** end of `module os` */
	export = os
}

/** endof `module Or Internal Object` */


