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

/// <reference path="../entry/_common.d.ts" />
/// <reference path="../class/object.d.ts" />





/** module Or Internal Object */
/**
	* @brief tcp 服务器对象，可方便创建一个标准多纤程 tcp 服务器
	* @detail 使用 TcpServer 对象可以迅速创建一个多纤程并发处理的 tcp 服务器。,```JavaScript,function func(conn),{,    var data;,,    while(data = conn.read()),        conn.write(data);,,    conn.close();,},,new net.TcpServer(8080, func).start();,```
	*/

declare class Class_TcpServer extends Class__object {


	/**
	 * class prop 
	 *
	 * 
	 * @brief 服务器当前侦听的 Socket 对象
	 * 
	 * @readonly
	 * @type Socket
	 */

	socket: Class_Socket

	/**
	 * class prop 
	 *
	 * 
	 * @brief 服务器当前事件处理接口对象
	 * 
	 * 
	 * @type Handler
	 */

	handler: Class_Handler



	/**
	 * 
	 * @brief TcpServer 构造函数，在所有本机地址侦听
	 * @param port 指定 tcp 服务器侦听端口
	 * @param listener 指定 tcp 接收到的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * 
	 * 
	 * 
	 */
	constructor(port: number, listener: Class_Handler);

	/**
	 * 
	 * @brief TcpServer 构造函数
	 * @param addr 指定 tcp 服务器侦听地址，为 "" 则在本机所有地址侦听
	 * @param port 指定 tcp 服务器侦听端口
	 * @param listener 指定 tcp 接收到的连接的内置消息处理器，处理函数，链式处理数组，路由对象，详见 mq.Handler
	 * 
	 * 
	 * 
	 */
	constructor(addr: string, port: number, listener: Class_Handler);

	/**
	 * 
	 * @brief 启动当前服务器
	 * 
	 * 
	 */
	start(): void;

	/**
	 * 
	 * @brief 关闭 socket中止正在运行的服务器
	 * 
	 * @async
	 */
	stop(): void;

} /** endof class */

/** endof `module Or Internal Object` */


