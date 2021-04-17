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
	* @brief 流操作对象，用于二进制数据流读写
	* @detail Stream 为基础对象，用于为流处理定义标准借口，不能独立创建
	*/

declare class Class_Stream extends Class__object {


	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询 Stream 对应的文件描述符值, 由子类实现
	 * 
	 * @readonly
	 * @type Integer
	 */

	fd: number



	/**
	 * 
	 * @brief 从流内读取指定大小的数据
	 * @param bytes 指定要读取的数据量，缺省为读取随机大小的数据块，读出的数据尺寸取决于设备
	 * @return 返回从流内读取的数据，若无数据可读，或者连接中断，则返回 null
	 * 
	 * 
	 * @async
	 */
	read(bytes?: number/** = -1*/, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

	/**
	 * 
	 * @brief 将给定的数据写入流
	 * @param data 给定要写入的数据
	 * 
	 * 
	 * @async
	 */
	write(data: Class_Buffer, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

	/**
	 * 
	 * @brief 将文件缓冲区内容写入物理设备
	 * 
	 * @async
	 */
	flush(): void;

	/**
	 * 
	 * @brief 关闭当前流对象
	 * 
	 * @async
	 */
	close(): void;

	/**
	 * 
	 * @brief 复制流数据到目标流中
	 * @param stm 目标流对象
	 * @param bytes 复制的字节数
	 * @return 返回复制的字节数
	 * 
	 * 
	 * @async
	 */
	copyTo(stm: Class_Stream, bytes?: number/** = -1*/, callback?: Fibjs.AsyncCallback<number>/** = function (err: Error, result: number) {}*/): number;

} /** endof class */

/** endof `module Or Internal Object` */


