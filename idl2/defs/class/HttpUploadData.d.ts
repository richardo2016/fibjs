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
	* @brief 包含 multipart 的一个条目数据
	* @detail 
	*/

declare class Class_HttpUploadData extends Class__object {


	/**
	 * class prop 
	 *
	 * 
	 * @brief 包含本条目数据的文件名
	 * 
	 * @readonly
	 * @type String
	 */

	fileName: string

	/**
	 * class prop 
	 *
	 * 
	 * @brief 包含本条目数据的类型
	 * 
	 * @readonly
	 * @type String
	 */

	contentType: string

	/**
	 * class prop 
	 *
	 * 
	 * @brief 包含本条目数据的传输编码类型
	 * 
	 * @readonly
	 * @type String
	 */

	contentTransferEncoding: string

	/**
	 * class prop 
	 *
	 * 
	 * @brief 包含本条目数据部分的流对象
	 * 
	 * @readonly
	 * @type SeekableStream
	 */

	body: Class_SeekableStream



} /** endof class */

/** endof `module Or Internal Object` */


