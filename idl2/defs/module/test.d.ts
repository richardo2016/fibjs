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






// give all internal defined classes as reference
/// <reference path="../entry/_common.d.ts" />

/// <reference path="../class/Buffer.d.ts" />

/// <reference path="../class/BufferedStream.d.ts" />

/// <reference path="../class/Chain.d.ts" />

/// <reference path="../class/ChildProcess.d.ts" />

/// <reference path="../class/Cipher.d.ts" />

/// <reference path="../class/Condition.d.ts" />

/// <reference path="../class/DbConnection.d.ts" />

/// <reference path="../class/DgramSocket.d.ts" />

/// <reference path="../class/Digest.d.ts" />

/// <reference path="../class/Event.d.ts" />

/// <reference path="../class/EventEmitter.d.ts" />

/// <reference path="../class/FSWatcher.d.ts" />

/// <reference path="../class/Fiber.d.ts" />

/// <reference path="../class/File.d.ts" />

/// <reference path="../class/Handler.d.ts" />

/// <reference path="../class/HeapGraphEdge.d.ts" />

/// <reference path="../class/HeapGraphNode.d.ts" />

/// <reference path="../class/HeapSnapshot.d.ts" />

/// <reference path="../class/HttpClient.d.ts" />

/// <reference path="../class/HttpCollection.d.ts" />

/// <reference path="../class/HttpCookie.d.ts" />

/// <reference path="../class/HttpHandler.d.ts" />

/// <reference path="../class/HttpMessage.d.ts" />

/// <reference path="../class/HttpRepeater.d.ts" />

/// <reference path="../class/HttpRequest.d.ts" />

/// <reference path="../class/HttpResponse.d.ts" />

/// <reference path="../class/HttpServer.d.ts" />

/// <reference path="../class/HttpUploadData.d.ts" />

/// <reference path="../class/HttpsServer.d.ts" />

/// <reference path="../class/Image.d.ts" />

/// <reference path="../class/LevelDB.d.ts" />

/// <reference path="../class/Lock.d.ts" />

/// <reference path="../class/LruCache.d.ts" />

/// <reference path="../class/MSSQL.d.ts" />

/// <reference path="../class/MemoryStream.d.ts" />

/// <reference path="../class/Message.d.ts" />

/// <reference path="../class/MongoCollection.d.ts" />

/// <reference path="../class/MongoCursor.d.ts" />

/// <reference path="../class/MongoDB.d.ts" />

/// <reference path="../class/MongoID.d.ts" />

/// <reference path="../class/MySQL.d.ts" />

/// <reference path="../class/PKey.d.ts" />

/// <reference path="../class/RangeStream.d.ts" />

/// <reference path="../class/Redis.d.ts" />

/// <reference path="../class/RedisHash.d.ts" />

/// <reference path="../class/RedisList.d.ts" />

/// <reference path="../class/RedisSet.d.ts" />

/// <reference path="../class/RedisSortedSet.d.ts" />

/// <reference path="../class/Routing.d.ts" />

/// <reference path="../class/SQLite.d.ts" />

/// <reference path="../class/SandBox.d.ts" />

/// <reference path="../class/SeekableStream.d.ts" />

/// <reference path="../class/Semaphore.d.ts" />

/// <reference path="../class/Service.d.ts" />

/// <reference path="../class/Smtp.d.ts" />

/// <reference path="../class/Socket.d.ts" />

/// <reference path="../class/SslHandler.d.ts" />

/// <reference path="../class/SslServer.d.ts" />

/// <reference path="../class/SslSocket.d.ts" />

/// <reference path="../class/Stat.d.ts" />

/// <reference path="../class/StatsWatcher.d.ts" />

/// <reference path="../class/Stream.d.ts" />

/// <reference path="../class/StringDecoder.d.ts" />

/// <reference path="../class/TcpServer.d.ts" />

/// <reference path="../class/Timer.d.ts" />

/// <reference path="../class/UrlObject.d.ts" />

/// <reference path="../class/WebSocket.d.ts" />

/// <reference path="../class/WebSocketMessage.d.ts" />

/// <reference path="../class/WebView.d.ts" />

/// <reference path="../class/Worker.d.ts" />

/// <reference path="../class/X509Cert.d.ts" />

/// <reference path="../class/X509Crl.d.ts" />

/// <reference path="../class/X509Req.d.ts" />

/// <reference path="../class/XmlAttr.d.ts" />

/// <reference path="../class/XmlCDATASection.d.ts" />

/// <reference path="../class/XmlCharacterData.d.ts" />

/// <reference path="../class/XmlComment.d.ts" />

/// <reference path="../class/XmlDocument.d.ts" />

/// <reference path="../class/XmlDocumentType.d.ts" />

/// <reference path="../class/XmlElement.d.ts" />

/// <reference path="../class/XmlNamedNodeMap.d.ts" />

/// <reference path="../class/XmlNode.d.ts" />

/// <reference path="../class/XmlNodeList.d.ts" />

/// <reference path="../class/XmlProcessingInstruction.d.ts" />

/// <reference path="../class/XmlText.d.ts" />

/// <reference path="../class/ZipFile.d.ts" />

/// <reference path="../class/object.d.ts" />


/** module Or Internal Object */
/**
	* @brief 测试套件模块，用以定义管理测试套件
	* @detail 使用方法 ：,,```JavaScript,var test = require('test');,test.setup();,,describe('test', () => {,  before(() => {,      // setup before the whole test,  });,,  beforeEach(() => {,      // setup before each test,  });,,  after(() => {,      // cleanup after the whole test,  });,,  afterEach(() => {,      // cleanup after each test,  });,,  it('case', () => {,      assert.ok(true);,  });,,  // ignored test case,  xit('case', () => {,      assert.ok(true);,  });,,  // ignored test case,  it.skip('case', () => {,      assert.ok(true);,  });,,  // only test case,  oit('case', () => {,      assert.ok(true);,  });,,  // only test case,  it.only('case', () => {,      assert.ok(true);,  });,});,,// async function test,describe('test async', () => {,it('pass case', async() => {,  assert.ok(true);,});,,it('error case', async() => {,    throw new Error('some thing wrong!');,});,});,,// callback function test,// cannot use callback mode in jsc,describe('test callback', () => {,it('pass case', done => {,  setTimeout(() => {,    assert.ok(true);,    done();,  }, 0);,});,,it('error case', done => {,  setTimeout(() => {,    done(new Error('some thing wrong!'));,  }, 0);,});,});,,process.exit(-test.run(console.DEBUG));,```
	*/
declare module "test" {

	import consoleNS = require('console')
	import assertNS = require('assert')

	module test {


		/**
		 * 
		 * @brief 设置和查询慢速测试警告阀值，以 ms 为单位，缺省为 75
		 * 
		 * 
		 * 
		 */
		export const slow: number;


		/**
		 * 
		 * @brief 断言测试模块，如果测试值为假，则报错，报错行为可设定继续运行或者错误抛出
		 * 
		 * 
		 */

		export const assert: typeof assertNS



		/**
		 * 
		 * @brief 定义一个测试模块，可嵌套定义
		 * @param name 定义模块名称
		 * @param block 模块初始化代码
		 * 
		 * 
		 * 
		 */
		export function describe(name: string, block: Function): void;

		/**
		 * 
		 * @brief 暂停测试的模块定义，test.setup 后可使用 describe.skip 调用
		 * @param name 定义模块名称
		 * @param block 模块初始化代码
		 * 
		 * 
		 * 
		 */
		export function xdescribe(name: string, block: Function): void;

		/**
		 * 
		 * @brief 独立测试的模块定义，test.setup 后可使用 describe.only 调用
		 * @param name 定义模块名称
		 * @param block 模块初始化代码
		 * 
		 * 
		 * 
		 */
		export function odescribe(name: string, block: Function): void;

		/**
		 * 
		 * @brief 定义一个测试项目
		 * @param name 定义项目名称
		 * @param block 测试内容
		 * 
		 * 
		 * 
		 */
		export function it(name: string, block: Function): void;

		/**
		 * 
		 * @brief 暂停测试的项目定义，test.setup 后可使用 it.skip 调用
		 * @param name 定义项目名称
		 * @param block 测试内容
		 * 
		 * 
		 * 
		 */
		export function xit(name: string, block: Function): void;

		/**
		 * 
		 * @brief 独立测试的项目定义，test.setup 后可使用 it.only 调用
		 * @param name 定义项目名称
		 * @param block 测试内容
		 * 
		 * 
		 * 
		 */
		export function oit(name: string, block: Function): void;

		/**
		 * 
		 * @brief 定义当前测试模块进入事件
		 * @param func 事件函数
		 * 
		 * 
		 * 
		 */
		export function before(func: Function): void;

		/**
		 * 
		 * @brief 定义当前测试模块退出事件
		 * @param func 事件函数
		 * 
		 * 
		 * 
		 */
		export function after(func: Function): void;

		/**
		 * 
		 * @brief 定义当前测试模块测试项目进入事件
		 * @param func 事件函数
		 * 
		 * 
		 * 
		 */
		export function beforeEach(func: Function): void;

		/**
		 * 
		 * @brief 定义当前测试模块测试项目退出事件
		 * @param func 事件函数
		 * 
		 * 
		 * 
		 */
		export function afterEach(func: Function): void;

		/**
		 * 
		 * @brief 开始执行定义的测试模块
		 * @param loglevel 指定进行测试时的日志输出级别，ERROR 时，项目报错信息集中在报告后显示，低于 ERROR 时，输出信息随时显示，高于 ERROR 时，只显示报告
		 * @return 返回测试用例统计结果，正确则返回 0，错误则返回错误个数
		 * 
		 * 
		 * 
		 */
		export function run(loglevel?: number/** = undefined*/): number;

		/**
		 * 
		 * @brief 初始化当前脚本的测试环境，将 test 模块方法复制为当前脚本全局变量
		 * 
		 * 
		 */
		export function setup(): void;

	} /** end of `module test` */
	export = test
}

/** endof `module Or Internal Object` */


