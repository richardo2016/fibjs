

/// <reference path="../entry/_common.d.ts" />
/// <reference path="../class/object.d.ts" />

/**
	* @brief Range 查询流读取对象
	* @detail RangeStream 对象用于对 SeekableStream 对象数据进行截取。创建方法：,```JavaScript,var stm = new io.RangeStream(stream, '0-10');,stm.end // 11,,var stm = new io.RangeStream(stream, 0, 10);,stm.end // 10,```
	*/
/// <reference path="../class/SeekableStream.d.ts" />
declare class Class_RangeStream extends Class_SeekableStream {


	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询 range 开始值
	 * 
	 * @readonly
	 * @type Long
	 */

	begin: number

	/**
	 * class prop 
	 *
	 * 
	 * @brief 查询 range 结束值
	 * 
	 * @readonly
	 * @type Long
	 */

	end: number



	/**
	 * 
	 * @brief RangeStream 构造函数
	 * @param stm RangeStream 的二进制基础流对象, 必须是 SeekableStream
	 * @param range 描述 range 的字符串, 格式为 'begin-[end]', '[begin]-end'
	 * 
	 * 
	 * 
	 */
	constructor(stm: Class_SeekableStream, range: string);

	/**
	 * 
	 * @brief RangeStream 构造函数
	 * @param stm RangeStream 的二进制基础流对象, 必须是 SeekableStream
	 * @param begin 从 stm 读取内容的起始位置
	 * @param end 从 stm 读取内容的结束位置
	 * 
	 * 
	 * 
	 */
	constructor(stm: Class_SeekableStream, begin: number, end: number);

} /** endof class */



