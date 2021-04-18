

/// <reference path="../entry/_common.d.ts" />
/// <reference path="../class/object.d.ts" />

/**
	* @brief http 响应消息对象
	* @detail 
	*/
/// <reference path="../class/HttpMessage.d.ts" />
declare class Class_HttpResponse extends Class_HttpMessage {


	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置响应消息的返回状态
	 * 
	 * 
	 * @type Integer
	 */

	statusCode: number

	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置响应消息的返回消息
	 * 
	 * 
	 * @type String
	 */

	statusMessage: string

	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回当前消息的 HttpCookie 对象列表
	 * 
	 * @readonly
	 * @type NArray
	 */

	cookies: any[]



	/**
	 * 
	 * @brief HttpResponse 构造函数，创建一个新的 HttpResponse 对象
	 * 
	 * 
	 */
	constructor();

	/**
	 * 
	 * @brief 设置响应消息的返回状态，返回消息，并添加响应头
	 * @param statusCode 指定响应消息的返回状态
	 * @param statusMessage 指定响应消息的返回消息
	 * @param headers 指定响应消息添加的响应头
	 * 
	 * 
	 * 
	 */
	writeHead(statusCode: number, statusMessage: string, headers?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/): void;

	/**
	 * 
	 * @brief 设置响应消息的返回状态，返回消息，并添加响应头
	 * @param statusCode 指定响应消息的返回状态
	 * @param headers 指定响应消息添加的响应头
	 * 
	 * 
	 * 
	 */
	writeHead(statusCode: number, headers?: Fibjs.AnyObject/** = v8::Object::New(isolate)*/): void;

	/**
	 * 
	 * @brief 向 cookies 添加一个 HttpCookie 对象
	 * @param cookie 指定要添加的 HttpCookie 对象
	 * 
	 * 
	 * 
	 */
	addCookie(cookie: Class_HttpCookie): void;

	/**
	 * 
	 * @brief 发送重定向到客户端
	 * @param url 重定向的地址
	 * 
	 * 
	 * 
	 */
	redirect(url: string): void;

	/**
	 * 
	 * @brief 发送重定向到客户端
	 * @param statusCode 指定响应消息的返回状态，接受的状态为：301, 302, 307
	 * @param url 重定向的地址
	 * 
	 * 
	 * 
	 */
	redirect(statusCode: number, url: string): void;

	/**
	 * 
	 * @brief 仅发送格式化 http 头到给定的流对象
	 * @param stm 指定接收格式化消息的流对象
	 * 
	 * 
	 * @async
	 */
	sendHeader(stm: Class_Stream, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

} /** endof class */



