




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
	* @brief 内存 profiler 模块
	* @detail 使用方法：,```JavaScript,var profiler = require('profiler');,```
	*/
declare module "profiler" {


	/**
	 * 
	 * @brief 隐藏节点，当显示给用户时可以被过滤掉
	 * 
	 * 
	 */
	export const Node_Hidden = 0;

	/**
	 * 
	 * @brief 数组
	 * 
	 * 
	 */
	export const Node_Array = 1;

	/**
	 * 
	 * @brief 字符串
	 * 
	 * 
	 */
	export const Node_String = 2;

	/**
	 * 
	 * @brief JS对象（字符串和数组除外）
	 * 
	 * 
	 */
	export const Node_Object = 3;

	/**
	 * 
	 * @brief 编译后的代码
	 * 
	 * 
	 */
	export const Node_Code = 4;

	/**
	 * 
	 * @brief 函数闭包
	 * 
	 * 
	 */
	export const Node_Closure = 5;

	/**
	 * 
	 * @brief 正则表达式
	 * 
	 * 
	 */
	export const Node_RegExp = 6;

	/**
	 * 
	 * @brief 堆中排好序的数字
	 * 
	 * 
	 */
	export const Node_HeapNumber = 7;

	/**
	 * 
	 * @brief Native对象（非v8堆上的）
	 * 
	 * 
	 */
	export const Node_Native = 8;

	/**
	 * 
	 * @brief Synthetic对象
	 * 
	 * 
	 */
	export const Node_Synthetic = 9;

	/**
	 * 
	 * @brief 拼接的字符串
	 * 
	 * 
	 */
	export const Node_ConsString = 10;

	/**
	 * 
	 * @brief 分割的字符串
	 * 
	 * 
	 */
	export const Node_SlicedString = 11;

	/**
	 * 
	 * @brief 符号（ES6）
	 * 
	 * 
	 */
	export const Node_Symbol = 12;

	/**
	 * 
	 * @brief 堆中排好序的SIMD值(ES7)
	 * 
	 * 
	 */
	export const Node_SimdValue = 13;

	/**
	 * 
	 * @brief 函数中的变量
	 * 
	 * 
	 */
	export const Edge_ContextVariable = 0;

	/**
	 * 
	 * @brief 数组中的元素
	 * 
	 * 
	 */
	export const Edge_Element = 1;

	/**
	 * 
	 * @brief 有名对象的属性
	 * 
	 * 
	 */
	export const Edge_Property = 2;

	/**
	 * 
	 * @brief JS无法进入的链接
	 * 
	 * 
	 */
	export const Edge_Internal = 3;

	/**
	 * 
	 * @brief 指向需要事先计算出空间大小的节点
	 * 
	 * 
	 */
	export const Edge_Hidden = 4;

	/**
	 * 
	 * @brief 指向无法事先计算出空间大小的节点
	 * 
	 * 
	 */
	export const Edge_Shortcut = 5;

	/**
	 * 
	 * @brief 一个弱引用（被GC忽视）
	 * 
	 * 
	 */
	export const Edge_Weak = 6;





	/**
	 * 
	 * @brief 根据指定名称保存一个堆快照
	 * @param fname 堆快照名称
	 * 
	 * 
	 * 
	 */
	export function saveSnapshot(fname: string): void;

	/**
	 * 
	 * @brief 根据指定名称读取一个堆快照
	 * @param fname 堆快照名称
	 * @return 返回读取到的堆快照
	 * 
	 * 
	 * 
	 */
	export function loadSnapshot(fname: string): Class_HeapSnapshot;

	/**
	 * 
	 * @brief 获取当前时间节点的堆快照，堆快照记录了当前时刻JS堆的状态
	 * @return 返回获取到的堆信息快照
	 * 
	 * 
	 * 
	 */
	export function takeSnapshot(): Class_HeapSnapshot;

	/**
	 * 
	 * @brief 执行给定的函数，并对比执行前后 v8 堆的变化
	 * @param test 给定要测试的函数
	 * @return 返回对比的结果
	 * 
	 * 
	 * 
	 */
	export function diff(test: Function): Fibjs.AnyObject;

	/**
	 * 
	 * @brief 启动一次运行状态采样日志
	 * @param fname 给定日志存储文件名
	 * @param time 指定采样时间，缺省 1 分钟
	 * @param interval 指定间隔时间，缺省 100 毫秒
	 * @return 返回采样定时器，可以通过 clear 方法提前停止采样
	 * 
	 * 
	 * 
	 */
	export function start(fname: string, time?: number/** = 60000*/, interval?: number/** = 100*/): Class_Timer;

}


