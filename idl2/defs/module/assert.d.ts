




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
	* @brief 断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出
	* @detail 引用方法：,```JavaScript,var assert = require('assert');,```,或者通过 test 模块引用：,```JavaScript,var test = require('test');,var assert = test.assert;,```,或者通过 test.setup 配置：,```JavaScript,require("test").setup();,```
	*/
declare module "assert" {






	/**
	 * 
	 * @brief 测试数值为真，为假则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function Function(actual?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为真，为假则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function ok(actual?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为假，为真则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notOk(actual?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值等于预期值，不相等则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function equal(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不等于预期值，相等则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值严格等于预期值，不相等则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function strictEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不严格等于预期值，相等则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notStrictEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值深度等于预期值，不相等则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function deepEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不深度等于预期值，相等则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notDeepEqual(actual?: any/** = v8::Undefined(isolate)*/, expected?: any/** = v8::Undefined(isolate)*/, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值近似等于预期值，否则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param delta 近似的小数精度
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function closeTo(actual: any, expected: any, delta: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不近似等于预期值，否则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param delta 近似的小数精度
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notCloseTo(actual: any, expected: any, delta: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值小于预期值，大于或等于则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function lessThan(actual: any, expected: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不小于预期值，小于则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notLessThan(actual: any, expected: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值大于预期值，小于或等于则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function greaterThan(actual: any, expected: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不大于预期值，大于则断言失败
	 * @param actual 要测试的数值
	 * @param expected 预期的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notGreaterThan(actual: any, expected: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试变量存在，为假则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function exist(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试变量不存在，为真则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notExist(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为布尔值真，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isTrue(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为布尔值真，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNotTrue(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为布尔值假，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isFalse(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为布尔值假，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNotFalse(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为 Null，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNull(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为 Null，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNotNull(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为 undefined，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isUndefined(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为 undefined，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isDefined(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为函数，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isFunction(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为函数，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNotFunction(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为对象，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isObject(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为对象，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNotObject(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为数组，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isArray(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为数组，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNotArray(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为字符串，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isString(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为字符串，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNotString(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为数字，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNumber(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为数字，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNotNumber(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为布尔，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isBoolean(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为布尔，否则断言失败
	 * @param actual 要测试的数值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function isNotBoolean(actual: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值为给定类型，否则断言失败
	 * @param actual 要测试的数值
	 * @param type 指定的类型
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function typeOf(actual: any, type: string, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试数值不为给定类型，否则断言失败
	 * @param actual 要测试的数值
	 * @param type 指定的类型
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notTypeOf(actual: any, type: string, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试对象中包含指定属性，否则断言失败
	 * @param object 要测试的对象
	 * @param prop 要测试的属性
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function property(object: any, prop: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试对象中不包含指定属性，否则断言失败
	 * @param object 要测试的对象
	 * @param prop 要测试的属性
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notProperty(object: any, prop: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 深度测试对象中包含指定属性，否则断言失败
	 * @param object 要测试的对象
	 * @param prop 要测试的属性，以“.”分割
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function deepProperty(object: any, prop: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 深度测试对象中不包含指定属性，否则断言失败
	 * @param object 要测试的对象
	 * @param prop 要测试的属性，以“.”分割
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function notDeepProperty(object: any, prop: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试对象中指定属性的值为给定值，否则断言失败
	 * @param object 要测试的对象
	 * @param prop 要测试的属性
	 * @param value 给定的值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function propertyVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试对象中指定属性的值不为给定值，否则断言失败
	 * @param object 要测试的对象
	 * @param prop 要测试的属性
	 * @param value 给定的值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function propertyNotVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 深度测试对象中指定属性的值为给定值，否则断言失败
	 * @param object 要测试的对象
	 * @param prop 要测试的属性，以“.”分割
	 * @param value 给定的值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function deepPropertyVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 深度测试对象中指定属性的值不为给定值，否则断言失败
	 * @param object 要测试的对象
	 * @param prop 要测试的属性，以“.”分割
	 * @param value 给定的值
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function deepPropertyNotVal(object: any, prop: any, value: any, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试给定的代码会抛出错误，未抛出则断言失败
	 * @param block 指定测试的代码，以函数形式给出
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function throws(block: Function, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 测试给定的代码不会抛出错误，抛出则断言失败
	 * @param block 指定测试的代码，以函数形式给出
	 * @param msg 断言失败时的提示信息
	 * 
	 * 
	 * 
	 */
	export function doesNotThrow(block: Function, msg?: string/** = ""*/): void;

	/**
	 * 
	 * @brief 如果参数为真，则抛出
	 * @param object 参数
	 * 
	 * 
	 * 
	 */
	export function ifError(object?: any/** = v8::Undefined(isolate)*/): void;

}


