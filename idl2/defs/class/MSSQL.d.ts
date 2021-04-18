

/// <reference path="../entry/_common.d.ts" />
/// <reference path="../class/object.d.ts" />

/**
	* @brief SQL Server 数据库连接对象
	* @detail 使用 db.open 或 db.openMySQL 创建，创建方式：,```JavaScript,var sql = db.openMSSQL("mssql://user:pass@host/db");,```
	*/
/// <reference path="../class/DbConnection.d.ts" />
declare class Class_MSSQL extends Class_DbConnection {




	/**
	 * 
	 * @brief 选择当前数据库连接的缺省数据库
	 * @param dbName 指定数据库名
	 * 
	 * 
	 * @async
	 */
	use(dbName: string, callback?: Fibjs.AsyncCallback<void>/** = function (err: Error, result: void) {}*/): void;

} /** endof class */



