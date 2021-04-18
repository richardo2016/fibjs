

/// <reference path="../entry/_common.d.ts" />
/// <reference path="../class/object.d.ts" />

/**
	* @brief XmlDocumentType 对象用于访问 XML 所定义的实体
	* @detail 
	*/
/// <reference path="../class/XmlNode.d.ts" />
declare class Class_XmlDocumentType extends Class_XmlNode {


	/**
	 * class prop 
	 *
	 * 
	 * @brief 返回 DTD 的名称
	 * 
	 * 
	 * @readonly
	 * @type String
	 */

	name: string

	/**
	 * class prop 
	 *
	 * 
	 * @brief 可返回外部 DTD 的公共识别符
	 * 
	 * 
	 * @readonly
	 * @type String
	 */

	publicId: string

	/**
	 * class prop 
	 *
	 * 
	 * @brief 可返回外部 DTD 的系统识别符
	 * 
	 * 
	 * @readonly
	 * @type String
	 */

	systemId: string



} /** endof class */



