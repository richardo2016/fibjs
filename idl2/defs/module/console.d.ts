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
	* @brief 控制台访问对象
	* @detail 全局对象。可用于提示信息，警告和错误记录。通过启动配置文件，可将日志定位到不同的设备，以便于跟踪。日志支持格式化输出，例如：,```JavaScript,console.log("%d + %d = %d", 100, 200, 100 + 200);,```,可以使用的格式化参数如下：,- %s - 字符串,- %d - 数字，包括整数和数字,- %j - 以 JSON 格式输出对象,- %% - 输出字符 '%' 本身
	*/
declare module "console" {


	module console {

		/**
		 * 
		 * @brief loglevel 级别常量
		 * 
		 * 
		 */
		export const FATAL = 0;

		/**
		 * 
		 * @brief loglevel 级别常量
		 * 
		 * 
		 */
		export const ALERT = 1;

		/**
		 * 
		 * @brief loglevel 级别常量
		 * 
		 * 
		 */
		export const CRIT = 2;

		/**
		 * 
		 * @brief loglevel 级别常量
		 * 
		 * 
		 */
		export const ERROR = 3;

		/**
		 * 
		 * @brief loglevel 级别常量
		 * 
		 * 
		 */
		export const WARN = 4;

		/**
		 * 
		 * @brief loglevel 级别常量
		 * 
		 * 
		 */
		export const NOTICE = 5;

		/**
		 * 
		 * @brief loglevel 级别常量
		 * 
		 * 
		 */
		export const INFO = 6;

		/**
		 * 
		 * @brief loglevel 级别常量
		 * 
		 * 
		 */
		export const DEBUG = 7;

		/**
		 * 
		 * @brief loglevel 仅用于输出，信息输出后不换行，file 和 syslog 不保存此级别信息
		 * 
		 * 
		 */
		export const PRINT = 9;

		/**
		 * 
		 * @brief loglevel 级别常量
		 * 
		 * 
		 */
		export const NOTSET = 10;


		/**
		 * 
		 * @brief 输出级别，用以过滤输出信息，缺省为 NOTSET，全部输出。信息过滤之后才会输出给 add 设定的各个设备。
		 * 
		 * 
		 * 
		 */
		export const loglevel: number;

		/**
		 * 
		 * @brief 查询终端每行字符数
		 * 
		 * 
		 */
		export const width: number;

		/**
		 * 
		 * @brief 查询终端行数
		 * 
		 * 
		 */
		export const height: number;




		/**
		 * 
		 * @brief 添加 console 输出系统，支持的设备为 console, syslog, event，最多可以添加 10 个输出
		 * 
		 * 通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。
		 * 
		 * type 为配置，为设备名称字符串：
		 * 
		 * ```JavaScript
		 * console.add("console");
		 * ```
		 * 
		 * syslog 仅在 posix 平台有效：
		 * ```JavaScript
		 * console.add("syslog");
		 * ```
		 * 
		 * event 仅在 windows 平台有效：
		 * ```JavaScript
		 * console.add("event");
		 * ```
		 * 
		 * @param type 输出设备
		 * 
		 * 
		 * 
		 */
		export function add(type: string): void;

		/**
		 * 
		 * @brief 添加 console 输出系统，支持的设备为 console, syslog, event 和 file，最多可以添加 10 个输出
		 * 
		 * 通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。
		 * 
		 * cfg 可以为一个设备配置对象：
		 * ```JavaScript
		 * console.add({
		 * type: "console",
		 * levels: [console.INFO, console.ERROR]  // 选项，省略则输出全部级别日志
		 * });
		 * ```
		 * 
		 * syslog 仅在 posix 平台有效：
		 * ```JavaScript
		 * console.add({
		 * type: "syslog",
		 * levels: [console.INFO, console.ERROR]
		 * });
		 * ```
		 * 
		 * event 仅在 windows 平台有效：
		 * ```JavaScript
		 * console.add({
		 * type: "event",
		 * levels: [console.INFO, console.ERROR]
		 * });
		 * ```
		 * 
		 * file 日志：
		 * ```JavaScript
		 * console.add({
		 * type: "file",
		 * levels: [console.INFO, console.ERROR],
		 * // 必选项，指定日志输出文件，可使用 s% 指定插入日期位置，不指定则添加在结尾
		 * path: "path/to/file_%s.log",
		 * // 选项，可选值为 "day", "hour", "minute", "###k", "###m", "###g"，缺省为 "1m"
		 * split: "30m",
		 * // 选项，可选范围为 2-128，缺省为 128
		 * count: 10
		 * });
		 * ```
		 * 
		 * @param cfg 输出配置
		 * 
		 * 
		 * 
		 */
		export function add(cfg: Fibjs.AnyObject): void;

		/**
		 * 
		 * @brief 批量添加 console 输出系统，支持的设备为 console, syslog, event 和 file，最多可以添加 10 个输出
		 * 
		 * 通过配置 console，可以将程序输出和系统错误发往不同设备，用于运行环境信息收集。
		 * 
		 * ```JavaScript
		 * console.add(["console", {
		 * type: "syslog",
		 * levels: [console.INFO, console.ERROR]
		 * }]);
		 * ```
		 * 
		 * @param cfg 输出配置数组
		 * 
		 * 
		 * 
		 */
		export function add(cfg: any[]): void;

		/**
		 * 
		 * @brief 初始化到缺省设置，只在 console 输出信息
		 * 
		 * 
		 */
		export function reset(): void;

		/**
		 * 
		 * @brief 记录普通日志信息，与 info 等同
		 * 
		 * 记录一般等级的日志信息。通常用于输出非错误性提示信息。
		 * @param fmt 格式化字符串
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function log(fmt: string, ...args: any[]): void;

		/**
		 * 
		 * @brief 记录普通日志信息，与 info 等同
		 * 
		 * 记录一般等级的日志信息。通常用于输出非错误性提示信息。
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function log(...args: any[]): void;

		/**
		 * 
		 * @brief 记录调试日志信息
		 * 
		 * 记录调试日志信息。通常用于输出调试信息。不重要。
		 * @param fmt 格式化字符串
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function debug(fmt: string, ...args: any[]): void;

		/**
		 * 
		 * @brief 记录调试日志信息
		 * 
		 * 记录调试日志信息。通常用于输出调试信息。不重要。
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function debug(...args: any[]): void;

		/**
		 * 
		 * @brief 记录普通日志信息，与 log 等同
		 * 
		 * 记录一般等级的日志信息。通常用于输出非错误性提示信息。
		 * @param fmt 格式化字符串
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function info(fmt: string, ...args: any[]): void;

		/**
		 * 
		 * @brief 记录普通日志信息，与 log 等同
		 * 
		 * 记录一般等级的日志信息。通常用于输出非错误性提示信息。
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function info(...args: any[]): void;

		/**
		 * 
		 * @brief 记录警告日志信息
		 * 
		 * 记录警告日志信息。通常用于输出提示性调试信息。一般重要。
		 * @param fmt 格式化字符串
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function notice(fmt: string, ...args: any[]): void;

		/**
		 * 
		 * @brief 记录警告日志信息
		 * 
		 * 记录警告日志信息。通常用于输出提示性调试信息。一般重要。
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function notice(...args: any[]): void;

		/**
		 * 
		 * @brief 记录警告日志信息
		 * 
		 * 记录警告日志信息。通常用于输出警告性调试信息。重要。
		 * @param fmt 格式化字符串
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function warn(fmt: string, ...args: any[]): void;

		/**
		 * 
		 * @brief 记录警告日志信息
		 * 
		 * 记录警告日志信息。通常用于输出警告性调试信息。重要。
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function warn(...args: any[]): void;

		/**
		 * 
		 * @brief 记录错误日志信息
		 * 
		 * 记录用于错误日志信息。通常用于输出错误信息。非常重要。系统的出错信息也会以此等级记录。
		 * @param fmt 格式化字符串
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function error(fmt: string, ...args: any[]): void;

		/**
		 * 
		 * @brief 记录错误日志信息
		 * 
		 * 记录用于错误日志信息。通常用于输出错误信息。非常重要。系统的出错信息也会以此等级记录。
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function error(...args: any[]): void;

		/**
		 * 
		 * @brief 记录关键错误日志信息
		 * 
		 * 记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。
		 * @param fmt 格式化字符串
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function crit(fmt: string, ...args: any[]): void;

		/**
		 * 
		 * @brief 记录关键错误日志信息
		 * 
		 * 记录用于关键错误日志信息。通常用于输出关键错误信息。非常重要。
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function crit(...args: any[]): void;

		/**
		 * 
		 * @brief 记录警报错误日志信息
		 * 
		 * 记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。
		 * @param fmt 格式化字符串
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function alert(fmt: string, ...args: any[]): void;

		/**
		 * 
		 * @brief 记录警报错误日志信息
		 * 
		 * 记录用于警报错误日志信息。通常用于输出警报错误信息。非常重要。为最高级别信息。
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function alert(...args: any[]): void;

		/**
		 * 
		 * @brief 用 JSON 格式输出对象
		 * @param obj 给定要显示的对象
		 * 
		 * 
		 * 
		 */
		export function dir(obj: any): void;

		/**
		 * 
		 * @brief 启动一个计时器
		 * 
		 * @param label 标题，缺省为空字符串。
		 * 
		 * 
		 * 
		 */
		export function time(label?: string/** = "time"*/): void;

		/**
		 * 
		 * @brief 输出指定计时器当前计时值
		 * 
		 * @param label 标题，缺省为空字符串。
		 * 
		 * 
		 * 
		 */
		export function timeElapse(label?: string/** = "time"*/): void;

		/**
		 * 
		 * @brief 结束指定计时器，并输出最后计时值
		 * 
		 * @param label 标题，缺省为空字符串。
		 * 
		 * 
		 * 
		 */
		export function timeEnd(label?: string/** = "time"*/): void;

		/**
		 * 
		 * @brief 输出当前调用堆栈
		 * 
		 * 通过日志输出当前调用堆栈。
		 * @param label 标题，缺省为空字符串。
		 * 
		 * 
		 * 
		 */
		export function trace(label?: string/** = "trace"*/): void;

		/**
		 * 
		 * @brief 断言测试，如果测试值为假，则报错
		 * @param value 测试的数值
		 * @param msg 报错信息
		 * 
		 * 
		 * 
		 */
		export function assert(value: any, msg?: string/** = ""*/): void;

		/**
		 * 
		 * @brief 向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出
		 * @param fmt 格式化字符串
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function print(fmt: string, ...args: any[]): void;

		/**
		 * 
		 * @brief 向控制台输出格式化文本，输出内容不会记入日志系统，输出文本后不会自动换行，可连续输出
		 * @param args 可选参数列表
		 * 
		 * 
		 * 
		 */
		export function print(...args: any[]): void;

		/**
		 * 
		 * @brief 移动控制台光标到指定位置
		 * @param row 指定新光标的行坐标
		 * @param column 指定新光标的列坐标
		 * 
		 * 
		 * 
		 */
		export function moveTo(row: number, column: number): void;

		/**
		 * 
		 * @brief 隐藏控制台光标
		 * 
		 * 
		 */
		export function hideCursor(): void;

		/**
		 * 
		 * @brief 显示控制台光标
		 * 
		 * 
		 */
		export function showCursor(): void;

		/**
		 * 
		 * @brief 清除控制台
		 * 
		 * 
		 */
		export function clear(): void;

		/**
		 * 
		 * @brief 按下一个按键
		 * 
		 * 参数 key 可以使用字符串传入功能键：
		 * - 功能键：f1 - f12
		 * - 方向键：up, down,left, right, home, end, pageup, pagedown
		 * - 编辑键：backspace, delete, insert, enter, tab, escape, space
		 * - 控制键：control, alt, shift, command
		 * @param key 指定按键，单字符直接传入，功能键传入名称
		 * @param modifier 指定控制键，可以为：control, alt, shift, command
		 * 
		 * 
		 * 
		 */
		export function keyDown(key: string, modifier?: string/** = ""*/): void;

		/**
		 * 
		 * @brief 按下一个按键
		 * 
		 * 参数 key 可以使用字符串传入功能键：
		 * - 功能键：f1 - f12
		 * - 方向键：up, down,left, right, home, end, pageup, pagedown
		 * - 编辑键：backspace, delete, insert, enter, tab, escape, space
		 * - 控制键：control, alt, shift, command
		 * @param key 指定按键，单字符直接传入，功能键传入名称
		 * @param modifier 指定控制键数组，可以为：control, alt, shift, command
		 * 
		 * 
		 * 
		 */
		export function keyDown(key: string, modifier: any[]): void;

		/**
		 * 
		 * @brief 松开一个按键
		 * 
		 * 参数 key 可以使用字符串传入功能键：
		 * - 功能键：f1 - f12
		 * - 方向键：up, down,left, right, home, end, pageup, pagedown
		 * - 编辑键：backspace, delete, insert, enter, tab, escape, space
		 * - 控制键：control, alt, shift, command
		 * @param key 指定按键，单字符直接传入，功能键传入名称
		 * @param modifier 指定控制键，可以为：control, alt, shift, command
		 * 
		 * 
		 * 
		 */
		export function keyUp(key: string, modifier?: string/** = ""*/): void;

		/**
		 * 
		 * @brief 松开一个按键
		 * 
		 * 参数 key 可以使用字符串传入功能键：
		 * - 功能键：f1 - f12
		 * - 方向键：up, down,left, right, home, end, pageup, pagedown
		 * - 编辑键：backspace, delete, insert, enter, tab, escape, space
		 * - 控制键：control, alt, shift, command
		 * @param key 指定按键，单字符直接传入，功能键传入名称
		 * @param modifier 指定控制键数组，可以为：control, alt, shift, command
		 * 
		 * 
		 * 
		 */
		export function keyUp(key: string, modifier: any[]): void;

		/**
		 * 
		 * @brief 点击并松开一个按键
		 * 
		 * 参数 key 可以使用字符串传入功能键：
		 * - 功能键：f1 - f12
		 * - 方向键：up, down,left, right, home, end, pageup, pagedown
		 * - 编辑键：backspace, delete, insert, enter, tab, escape, space
		 * - 控制键：control, alt, shift, command
		 * @param key 指定按键，单字符直接传入，功能键传入名称
		 * @param modifier 指定控制键，可以为：control, alt, shift, command
		 * 
		 * 
		 * 
		 */
		export function keyTap(key: string, modifier?: string/** = ""*/): void;

		/**
		 * 
		 * @brief 点击并松开一个按键
		 * 
		 * 参数 key 可以使用字符串传入功能键：
		 * - 功能键：f1 - f12
		 * - 方向键：up, down,left, right, home, end, pageup, pagedown
		 * - 编辑键：backspace, delete, insert, enter, tab, escape, space
		 * - 控制键：control, alt, shift, command
		 * @param key 指定按键，单字符直接传入，功能键传入名称
		 * @param modifier 指定控制键数组，可以为：control, alt, shift, command
		 * 
		 * 
		 * 
		 */
		export function keyTap(key: string, modifier: any[]): void;

		/**
		 * 
		 * @brief 输入一个字符串
		 * @param text 指定输入的字符串
		 * 
		 * 
		 * 
		 */
		export function typeString(text: string): void;

		/**
		 * 
		 * @brief 移动鼠标到指定的位置
		 * @param x 指定 x 坐标
		 * @param y 指定 y 坐标
		 * 
		 * 
		 * 
		 */
		export function moveMouse(x: number, y: number): void;

		/**
		 * 
		 * @brief 按下一个鼠标键
		 * @param button 指定鼠标键名称，允许值为: left, right, moddle
		 * 
		 * 
		 * 
		 */
		export function mouseUp(button: string): void;

		/**
		 * 
		 * @brief 放开一个鼠标键
		 * @param button 指定鼠标键名称，允许值为: left, right, moddle
		 * 
		 * 
		 * 
		 */
		export function mouseDown(button: string): void;

		/**
		 * 
		 * @brief 点击一个鼠标键
		 * @param button 指定鼠标键名称，允许值为: left, right, moddle
		 * @param dbclick 指定是否双击，缺省为 false
		 * 
		 * 
		 * 
		 */
		export function clickMouse(button: string, dbclick?: boolean/** = false*/): void;

		/**
		 * 
		 * @brief 从控制台读取用户输入
		 * @param msg 提示信息
		 * @return 返回用户输入的信息
		 * 
		 * 
		 * @async
		 */
		export function readLine(msg?: string/** = ""*/, callback?: Fibjs.AsyncCallback<string>/** = function (err: Error, result: string) {}*/): string;

		/**
		 * 
		 * @brief 从控制台读取用户输入的密码
		 * @param msg 提示信息
		 * @return 返回用户输入的密码
		 * 
		 * 
		 * @async
		 */
		export function getpass(msg?: string/** = ""*/, callback?: Fibjs.AsyncCallback<string>/** = function (err: Error, result: string) {}*/): string;

	} /** end of `module console` */
	export = console
}

/** endof `module Or Internal Object` */


