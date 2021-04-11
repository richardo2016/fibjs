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
	* @brief 子进程管理模块
	* @detail 引用方式：,```JavaScript,var child_process = require("child_process");,var child = child_process.spwan("ls");,```,,对于同时使用 nodejs 的用户, 需注意,- fibjs 的 `child_process.exec(command, args)` 和 nodejs 的同名 api 功能类似, 但在 windows 上, 并不会自动将 cmd.exe 作为 command 参数的执行环境;,- fibjs 的 child_process.[spawn|exec|execFile|run] 是同步/回调一体的 async 风格函数:,  - 如果最后一个参数不是函数, 则是同步的,  - 如果传递了函数作为最后一个参数, 则是异步的;,- fibjs 的 child_process.[exec|execFile] 的返回结果是一个对象, 该对象和 nodejs 同名 api 返回的对象**完全不相同**,- fibjs 的 `child_process.run` 在 nodejs 中没有对应 API
	*/
declare module "child_process" {






	/**
	 * 
	 * @brief 用给定的命令发布一个子进程
	 * options 支持的内容如下：
	 * ```JavaScript
	 * {
	 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
	 * "stdio": Array | String, // 子进程 stdio 配置
	 * "env": {}, // 环境变量的键值对
	 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
	 * "uid": 0, // 设置用户进程的ID
	 * "gid": 0, // 设置进程组的ID
	 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
	 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
	 * }
	 * ```
	 * @param command 指定要运行的命令
	 * @param args 指定字符串参数列表
	 * @param options 指定创建参数
	 * @return 返回子进程对象
	 * 
	 * 
	 * 
	 */
	export function spawn(command: string, args: any[], options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/): Class_ChildProcess;

	/**
	 * 
	 * @brief 用给定的命令发布一个子进程
	 * options 支持的内容如下：
	 * ```JavaScript
	 * {
	 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
	 * "stdio": Array | String, // 子进程 stdio 配置
	 * "env": {}, // 环境变量的键值对
	 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
	 * "uid": 0, // 设置用户进程的ID
	 * "gid": 0, // 设置进程组的ID
	 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
	 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
	 * }
	 * ```
	 * @param command 指定要运行的命令
	 * @param options 指定创建参数
	 * @return 返回子进程对象
	 * 
	 * 
	 * 
	 */
	export function spawn(command: string, options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/): Class_ChildProcess;

	/**
	 * 
	 * @brief 在 shell 中执行一个命令并缓冲输出，当以回调方式执行时，函数将返回子进程对象
	 * options 支持的内容如下：
	 * ```JavaScript
	 * {
	 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
	 * "env": {}, // 环境变量的键值对
	 * "encoding": "utf8", // 指定返回结果的编码，缺省为 utf8
	 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
	 * "uid": 0, // 设置用户进程的ID
	 * "gid": 0, // 设置进程组的ID
	 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
	 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
	 * }
	 * ```
	 * @param command 指定要运行的命令
	 * @param options 指定创建参数
	 * @return 返回子进程的 stdio 输出内容
	 * 
	 * 
	 * @async
	 */
	export function exec(command: string, options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<undefined>/** = function (err: Error, result: undefined) {}*/): void;

	/**
	 * 
	 * @brief 直接执行所指定的文件并缓冲输出，当以回调方式执行时，函数将返回子进程对象
	 * options 支持的内容如下：
	 * ```JavaScript
	 * {
	 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
	 * "env": {}, // 环境变量的键值对
	 * "encoding": "utf8", // 指定返回结果的编码，缺省为 utf8
	 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
	 * "uid": 0, // 设置用户进程的ID
	 * "gid": 0, // 设置进程组的ID
	 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
	 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
	 * }
	 * ```
	 * @param command 指定要运行的命令
	 * @param args 指定字符串参数列表
	 * @param options 指定创建参数
	 * @return 返回子进程的 stdio 输出内容
	 * 
	 * 
	 * @async
	 */
	export function execFile(command: string, args: any[], options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<undefined>/** = function (err: Error, result: undefined) {}*/): void;

	/**
	 * 
	 * @brief 直接执行所指定的文件并缓冲输出，当以回调方式执行时，函数将返回子进程对象
	 * options 支持的内容如下：
	 * ```JavaScript
	 * {
	 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
	 * "env": {}, // 环境变量的键值对
	 * "encoding": "utf8", // 指定返回结果的编码，缺省为 utf8
	 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
	 * "uid": 0, // 设置用户进程的ID
	 * "gid": 0, // 设置进程组的ID
	 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
	 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
	 * }
	 * ```
	 * @param command 指定要运行的命令
	 * @param options 指定创建参数
	 * @return 返回子进程的 stdio 输出内容
	 * 
	 * 
	 * @async
	 */
	export function execFile(command: string, options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<undefined>/** = function (err: Error, result: undefined) {}*/): void;

	/**
	 * 
	 * @brief 直接执行所指定的文件并返回 exitCode，当以回调方式执行时，函数将返回子进程对象
	 * options 支持的内容如下：
	 * ```JavaScript
	 * {
	 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
	 * "env": {}, // 环境变量的键值对
	 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
	 * "uid": 0, // 设置用户进程的ID
	 * "gid": 0, // 设置进程组的ID
	 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
	 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
	 * }
	 * ```
	 * @param command 指定要运行的命令
	 * @param args 指定字符串参数列表
	 * @param options 指定创建参数
	 * @return 返回子进程的 exitCode
	 * 
	 * 
	 * @async
	 */
	export function run(command: string, args: any[], options?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/, callback?: Fibjs.AsyncCallback<number>/** = function (err: Error, result: number) {}*/): number;

	/**
	 * 
	 * @brief 直接执行所指定的文件并返回 exitCode，当以回调方式执行时，函数将返回子进程对象
	 * options 支持的内容如下：
	 * ```JavaScript
	 * {
	 * "cwd": "", // 子进程的当前的工作目录，缺省使用当前目录
	 * "env": {}, // 环境变量的键值对
	 * "detached": false, // 子进程将会变成一个进程组的领导者，缺省为 false
	 * "uid": 0, // 设置用户进程的ID
	 * "gid": 0, // 设置进程组的ID
	 * "windowsVerbatimArguments": false, // 在 Windows上不执行引号或转义参数。 在 Unix 上被忽略。 当指定外壳且为 CMD 时，此选项将自动设置为true，缺省为 false
	 * "windowsHide": false // 隐藏通常在Windows系统上创建的子进程控制台窗口，缺省为 false
	 * }
	 * ```
	 * @param command 指定要运行的命令
	 * @param options 指定创建参数
	 * @return 返回子进程的 exitCode
	 * 
	 * 
	 * @async
	 */
}

/** endof `module Or Internal Object` */


