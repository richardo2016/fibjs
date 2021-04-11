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
	* @brief 文件操作对象，用于二进制文件读写
	* @detail 文件操作对象用于对二进制文件进行操作，可使用 fs 模块打开和创建文件：,```JavaScript,var f = fs.openFile('test.txt');,```
	*/
/// <reference path="../class/SeekableStream.d.ts" />
declare class Class_File extends Class_SeekableStream {


	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询当前文件名
	 * 
	 * @readonly
	 * @type String
	 */

	name: string

	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询当前文件描述符
	 * 
	 * @readonly
	 * @type Integer
	 */

	fd: number



	/**
	 * 
	 * @brief 查询当前文件的访问权限，Windows 不支持此方法
	 * @param mode 指定设定的访问权限
	 * 
	 * 
	 * @async
	 */
	chmod(mode: number, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

} /** endof class */

/** endof `module Or Internal Object` */


