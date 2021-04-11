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
	* @brief 加密算法模块
	* @detail 使用方法：,```JavaScript,var crypto = require('crypto');,```
	*/
declare module "crypto" {


	module crypto {

		/**
		 * 
		 * @brief 指定对称加密算法 AES，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM，CCM，XTS
		 * 
		 * 
		 */
		export const AES = 1;

		/**
		 * 
		 * @brief 指定对称加密算法 CAMELLIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM，CCM
		 * 
		 * 
		 */
		export const CAMELLIA = 2;

		/**
		 * 
		 * @brief 指定对称加密算法 DES，支持 64 位 key，分组密码工作模式支持 ECB, CBC
		 * 
		 * 
		 */
		export const DES = 3;

		/**
		 * 
		 * @brief 指定对称加密算法 DES-EDE，支持 128 位 key，分组密码工作模式支持 ECB, CBC
		 * 
		 * 
		 */
		export const DES_EDE = 4;

		/**
		 * 
		 * @brief 指定对称加密算法 DES-EDE3，支持 192 位 key，分组密码工作模式支持 ECB, CBC
		 * 
		 * 
		 */
		export const DES_EDE3 = 5;

		/**
		 * 
		 * @brief 指定对称加密算法 BLOWFISH，支持 192 位 key，分组密码工作模式支持 ECB, CBC, CFB64, CTR
		 * 
		 * 
		 */
		export const BLOWFISH = 6;

		/**
		 * 
		 * @brief 指定对称加密算法 ARC4，支持 40, 56, 64, 128 位 key
		 * 
		 * 
		 */
		export const ARC4 = 7;

		/**
		 * 
		 * @brief 指定对称加密算法 ARIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM，CCM
		 * 
		 * 
		 */
		export const ARIA = 8;

		/**
		 * 
		 * @brief 指定对称加密算法 CHACHA20，支持 256 位 key，分组密码工作模式支持 POLY1305
		 * 
		 * 
		 */
		export const CHACHA20 = 9;

		/**
		 * 
		 * @brief 指定对称加密算法 SM4, 分组密码工作模式支持 ECB, CBC
		 * 
		 * 
		 */
		export const SM4 = 10;

		/**
		 * 
		 * @brief 指定分组密码工作模式支持 ECB
		 * 
		 * 
		 */
		export const ECB = 1;

		/**
		 * 
		 * @brief 指定分组密码工作模式支持 CBC
		 * 
		 * 
		 */
		export const CBC = 2;

		/**
		 * 
		 * @brief 指定分组密码工作模式支持 CFB64
		 * 
		 * 
		 */
		export const CFB64 = 3;

		/**
		 * 
		 * @brief 指定分组密码工作模式支持 CFB128
		 * 
		 * 
		 */
		export const CFB128 = 4;

		/**
		 * 
		 * @brief 指定分组密码工作模式支持 OFB
		 * 
		 * 
		 */
		export const OFB = 5;

		/**
		 * 
		 * @brief 指定分组密码工作模式支持 CTR
		 * 
		 * 
		 */
		export const CTR = 6;

		/**
		 * 
		 * @brief 指定分组密码工作模式支持 GCM
		 * 
		 * 
		 */
		export const GCM = 7;

		/**
		 * 
		 * @brief 指定流密码模式
		 * 
		 * 
		 */
		export const STREAM = 8;

		/**
		 * 
		 * @brief 指定分组密码工作模式支持 CCM
		 * 
		 * 
		 */
		export const CCM = 9;

		/**
		 * 
		 * @brief 指定分组密码工作模式支持 XTS
		 * 
		 * 
		 */
		export const XTS = 10;

		/**
		 * 
		 * @brief 指定分组密码工作模式支持 POLY1305
		 * 
		 * 
		 */
		export const POLY1305 = 11;

		/**
		 * 
		 * @brief 指定填充模式为 PKCS7
		 * 
		 * 
		 */
		export const PKCS7 = 0;

		/**
		 * 
		 * @brief 指定填充模式为 ONE_AND_ZEROS
		 * 
		 * 
		 */
		export const ONE_AND_ZEROS = 1;

		/**
		 * 
		 * @brief 指定填充模式为 ZEROS_AND_LEN
		 * 
		 * 
		 */
		export const ZEROS_AND_LEN = 2;

		/**
		 * 
		 * @brief 指定填充模式为 ZEROS
		 * 
		 * 
		 */
		export const ZEROS = 3;

		/**
		 * 
		 * @brief 指定填充模式为 NOPADDING
		 * 
		 * 
		 */
		export const NOPADDING = 4;



		/**
		 * 
		 * @brief Cipher 构造函数，参见 Cipher
		 * 
		 * 
		 */
		export const Cipher: typeof Class_Cipher


		/**
		 * 
		 * @brief PKey 构造函数，参见 PKey
		 * 
		 * 
		 */
		export const PKey: typeof Class_PKey


		/**
		 * 
		 * @brief X509Cert 构造函数，参见 X509Cert
		 * 
		 * 
		 */
		export const X509Cert: typeof Class_X509Cert


		/**
		 * 
		 * @brief X509Crl 构造函数，参见 X509Crl
		 * 
		 * 
		 */
		export const X509Crl: typeof Class_X509Crl


		/**
		 * 
		 * @brief X509Req 构造函数，参见 X509Req
		 * 
		 * 
		 */
		export const X509Req: typeof Class_X509Req




		/**
		 * 
		 * @brief 根据给定的算法名称创建一个信息摘要对象
		 * @param algo 指定信息摘要对象的算法
		 * @return 返回信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function createHash(algo: string): Class_Digest;

		/**
		 * 
		 * @brief 根据给定的算法名称创建一个 hmac 信息摘要对象
		 * @param algo 指定信息摘要对象的算法
		 * @param key 二进制签名密钥
		 * @return 返回信息摘要对象
		 * 
		 * 
		 * 
		 */
		export function createHmac(algo: string, key: Class_Buffer): Class_Digest;

		/**
		 * 
		 * @brief 加载一个 PEM/DER 格式的密钥文件
		 * @param filename 密钥文件名
		 * @param password 解密密码
		 * @return 返回包含密钥的对象
		 * 
		 * 
		 * 
		 */
		export function loadPKey(filename: string, password?: string/** = ""*/): Class_PKey;

		/**
		 * 
		 * @brief 加载一个 CRT/PEM/DER/TXT 格式的证书，可多次调用
		 * 
		 * loadFile 加载 mozilla 的 certdata,txt， 可于 http://hg.mozilla.org/releases/mozilla-release/raw-file/default/security/nss/lib/ckfw/builtins/certdata.txt 下载使用
		 * @param filename 证书文件名
		 * @return 返回包含证书的对象
		 * 
		 * 
		 * 
		 */
		export function loadCert(filename: string): Class_X509Cert;

		/**
		 * 
		 * @brief 加载一个 PEM/DER 格式的撤销证书，可多次调用
		 * @param filename 撤销证书文件名
		 * @return 返回包含撤销证书的对象
		 * 
		 * 
		 * 
		 */
		export function loadCrl(filename: string): Class_X509Crl;

		/**
		 * 
		 * @brief 加载一个 PEM/DER 格式的证书请求，可多次调用
		 * @param filename 证书请求文件名
		 * @return 返回包含请求证书的对象
		 * 
		 * 
		 * 
		 */
		export function loadReq(filename: string): Class_X509Req;

		/**
		 * 
		 * @brief 生成指定尺寸的随机数，使用 havege 生成器
		 * @param size 指定生成的随机数尺寸
		 * @return 返回生成的随机数
		 * 
		 * 
		 * @async
		 */
		export function randomBytes(size: number, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

		/**
		 * 
		 * @brief 生成指定尺寸的低强度随机数，使用快速的算法
		 * @param size 指定生成的随机数尺寸
		 * @return 返回生成的随机数
		 * 
		 * 
		 * @async
		 */
		export function simpleRandomBytes(size: number, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

		/**
		 * 
		 * @brief 生成指定尺寸的伪随机数，使用 entropy 生成器
		 * @param size 指定生成的随机数尺寸
		 * @return 返回生成的随机数
		 * 
		 * 
		 * @async
		 */
		export function pseudoRandomBytes(size: number, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

		/**
		 * 
		 * @brief 生成给定数据的可视化字符图像
		 * @param data 指定要展示的数据
		 * @param title 指定字符图像的标题，多字节字符会导致宽度错误
		 * @param size 字符图像尺寸
		 * @return 返回生成的可视化字符串图像
		 * 
		 * 
		 * 
		 */
		export function randomArt(data: Class_Buffer, title: string, size?: number/** = 8*/): string;

		/**
		 * 
		 * @brief 生成一个 RSA 私钥
		 * @param size 指定 RSA 密钥长度，bit 为单位
		 * @return 返回包含生成私钥的对象
		 * 
		 * 
		 * @async
		 */
		export function genRsaKey(size: number, callback?: Fibjs.AsyncCallback<Class_PKey>/** = function (err: Error, result: Class_PKey) {}*/): Class_PKey;

		/**
		 * 
		 * @brief 生成一个 EC 私钥
		 * @param curve 指定预置椭圆曲线，可选值为："secp521r1", "brainpoolP512r1", "secp384r1", "brainpoolP384r1", "secp256r1", "secp256k1", "brainpoolP256r1", "secp224r1", "secp224k1", "secp192r1", "secp192k1"
		 * @return 返回包含生成私钥的对象
		 * 
		 * 
		 * @async
		 */
		export function genEcKey(curve?: string/** = "secp521r1"*/, callback?: Fibjs.AsyncCallback<Class_PKey>/** = function (err: Error, result: Class_PKey) {}*/): Class_PKey;

		/**
		 * 
		 * @brief 生成一个 SM2 私钥
		 * @return 返回包含生成私钥的对象
		 * 
		 * 
		 * @async
		 */
		export function genSm2Key(): Class_PKey;

		/**
		 * 
		 * @brief 依据 pbkdf1 根据明文 password 生成要求的二进制钥匙
		 * @param password 指定使用的密码
		 * @param salt 指定 hmac 使用的 salt
		 * @param iterations 指定迭代次数
		 * @param size 指定钥匙尺寸
		 * @param algo 指定要使用的 hash 算法，详见 hash 模块
		 * @return 返回生成的二进制钥匙
		 * 
		 * 
		 * @async
		 */
		export function pbkdf1(password: Class_Buffer, salt: Class_Buffer, iterations: number, size: number, algo: number, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

		/**
		 * 
		 * @brief 依据 pbkdf1 根据明文 password 生成要求的二进制钥匙
		 * @param password 指定使用的密码
		 * @param salt 指定 hmac 使用的 salt
		 * @param iterations 指定迭代次数
		 * @param size 指定钥匙尺寸
		 * @param algoName 指定要使用的 hash 算法，详见 hash 模块
		 * @return 返回生成的二进制钥匙
		 * 
		 * 
		 * @async
		 */
		export function pbkdf1(password: Class_Buffer, salt: Class_Buffer, iterations: number, size: number, algoName: string, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

		/**
		 * 
		 * @brief 依据 rfc2898 根据明文 password 生成要求的二进制钥匙
		 * @param password 指定使用的密码
		 * @param salt 指定 hmac 使用的 salt
		 * @param iterations 指定迭代次数
		 * @param size 指定钥匙尺寸
		 * @param algo 指定要使用的 hash 算法，详见 hash 模块
		 * @return 返回生成的二进制钥匙
		 * 
		 * 
		 * @async
		 */
		export function pbkdf2(password: Class_Buffer, salt: Class_Buffer, iterations: number, size: number, algo: number, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

		/**
		 * 
		 * @brief 依据 rfc2898 根据明文 password 生成要求的二进制钥匙
		 * @param password 指定使用的密码
		 * @param salt 指定 hmac 使用的 salt
		 * @param iterations 指定迭代次数
		 * @param size 指定钥匙尺寸
		 * @param algoName 指定要使用的 hash 算法，详见 hash 模块
		 * @return 返回生成的二进制钥匙
		 * 
		 * 
		 * @async
		 */
		export function pbkdf2(password: Class_Buffer, salt: Class_Buffer, iterations: number, size: number, algoName: string, callback?: Fibjs.AsyncCallback<Class_Buffer>/** = function (err: Error, result: Class_Buffer) {}*/): Class_Buffer;

	} /** end of `module crypto` */
	export = crypto
}

/** endof `module Or Internal Object` */


