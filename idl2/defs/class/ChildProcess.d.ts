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
	* @brief 子进程对象
	* @detail ```JavaScript,var child_process = require("child_process");,var child = child_process.spwan("ls");,```
	*/
/// <reference path="../class/EventEmitter.d.ts" />
declare class Class_ChildProcess extends Class_EventEmitter {


	/**
	 * class prop 
	 *
	 * 
	 * @brief 读取当前对象指向的进程的 id
	 * 
	 * 
	 * @readonly
	 * @type Integer
	 */

	pid: number

	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置当前进程的退出码
	 * 
	 * @readonly
	 * @type Integer
	 */

	exitCode: number

	/**
	 * class prop 
	 *
	 * 
	 * @brief 读取当前对象指向的进程的标准输入对象
	 * 
	 * 
	 * @readonly
	 * @type Stream
	 */

	stdin: Class_Stream

	/**
	 * class prop 
	 *
	 * 
	 * @brief 读取当前对象指向的进程的标准输出对象
	 * 
	 * 
	 * @readonly
	 * @type Stream
	 */

	stdout: Class_Stream

	/**
	 * class prop 
	 *
	 * 
	 * @brief 读取当前对象指向的进程的标准错误对象
	 * 
	 * 
	 * @readonly
	 * @type Stream
	 */

	stderr: Class_Stream

	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和绑定进程退出事件，相当于 on("exit", func);
	 * 
	 * 
	 * @type Function
	 */

	onexit: Function



	/**
	 * 
	 * @brief 杀掉当前对象指向的进程，并传递信号
	 * @param signal 传递的信号
	 * 
	 * 
	 * 
	 */
	kill(signal: number): void;

	/**
	 * 
	 * @brief 等待当前对象指向的进程结束，并返回进程结束代码
	 * @return 进程的结束代码
	 * 
	 * 
	 * @async
	 */
	join(): void;

} /** endof class */

/** endof `module Or Internal Object` */


