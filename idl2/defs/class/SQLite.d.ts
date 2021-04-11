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
	* @brief sqlite 数据库连接对象
	* @detail 使用 db.open 或 db.openSQLite 创建，创建方式：,```JavaScript,var slite = db.openSQLite("sqlite:/path/to/db");,```
	*/
/// <reference path="../class/DbConnection.d.ts" />
declare class Class_SQLite extends Class_DbConnection {


	/**
	 * class prop 
	 *
	 * 
	 * @brief 当前数据库文件名
	 * 
	 * @readonly
	 * @type String
	 */

	fileName: string

	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询和设置数据库超时时间，以毫秒为单位
	 * 
	 * 
	 * @type Integer
	 */

	timeout: number



	/**
	 * 
	 * @brief 备份当前数据库到新文件
	 * @param fileName 指定备份的数据库文件名
	 * 
	 * @async
	 */
	backup(fileName: string, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

} /** endof class */

/** endof `module Or Internal Object` */


