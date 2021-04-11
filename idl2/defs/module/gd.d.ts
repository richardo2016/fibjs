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
	* @brief 图像文件处理模块
	* @detail 基础模块。可用于创建和操作图像文件，引用方式：,```JavaScript,var gd = require('gd');,```
	*/
declare module "gd" {


	module gd {

		/**
		 * 
		 * @brief 图像格式常量，标示当前图像来源为未知
		 * 
		 * 
		 */
		export const NONE = 0;

		/**
		 * 
		 * @brief 图像格式常量，标示当前图像来源为 jpeg 格式数据
		 * 
		 * 
		 */
		export const JPEG = 1;

		/**
		 * 
		 * @brief 图像格式常量，标示当前图像来源为 gif 格式数据
		 * 
		 * 
		 */
		export const GIF = 2;

		/**
		 * 
		 * @brief 图像格式常量，标示当前图像来源为 png 格式数据
		 * 
		 * 
		 */
		export const PNG = 3;

		/**
		 * 
		 * @brief 图像格式常量，标示当前图像来源为 tiff 格式数据
		 * 
		 * 
		 */
		export const TIFF = 4;

		/**
		 * 
		 * @brief 图像格式常量，标示当前图像来源为 bmp 格式数据
		 * 
		 * 
		 */
		export const BMP = 5;

		/**
		 * 
		 * @brief 图像格式常量，标示当前图像来源为 webp 格式数据
		 * 
		 * 
		 */
		export const WEBP = 6;

		/**
		 * 
		 * @brief 图像类型常量，标示当前图像为真彩色图像
		 * 
		 * 
		 */
		export const TRUECOLOR = 0;

		/**
		 * 
		 * @brief 图像类型常量，标示当前图像为调色板图像
		 * 
		 * 
		 */
		export const PALETTE = 1;

		/**
		 * 
		 * @brief 扇形绘制样式，绘制一条连接开始和结束点的圆弧
		 * 
		 * 
		 */
		export const ARC = 0;

		/**
		 * 
		 * @brief 扇形绘制样式，绘制一条连接原点，开始和结束点的直线
		 * 
		 * 
		 */
		export const CHORD = 1;

		/**
		 * 
		 * @brief 扇形绘制样式，绘制不填充的扇形
		 * 
		 * 
		 */
		export const NOFILL = 2;

		/**
		 * 
		 * @brief 扇形绘制样式，绘制一条连接起点和终点的弧和连接原点的直线
		 * 
		 * 
		 */
		export const EDGED = 4;

		/**
		 * 
		 * @brief 镜像方向，横向做镜像处理
		 * 
		 * 
		 */
		export const HORIZONTAL = 1;

		/**
		 * 
		 * @brief 镜像方向，纵向做镜像处理
		 * 
		 * 
		 */
		export const VERTICAL = 2;

		/**
		 * 
		 * @brief 镜像方向，横向和纵向都做镜像处理
		 * 
		 * 
		 */
		export const BOTH = 3;

		/**
		 * 
		 * @brief 旋转方向，向左旋转
		 * 
		 * 
		 */
		export const LEFT = 1;

		/**
		 * 
		 * @brief 旋转方向，向右旋转
		 * 
		 * 
		 */
		export const RIGHT = 2;

		/**
		 * 
		 * @brief 滤波器类型：用平均移除法来达到轮廓效果
		 * 
		 * 
		 */
		export const MEAN_REMOVAL = 0;

		/**
		 * 
		 * @brief 滤波器类型：用边缘检测来突出图像的边缘
		 * 
		 * 
		 */
		export const EDGEDETECT = 1;

		/**
		 * 
		 * @brief 滤波器类型：使图像浮雕化
		 * 
		 * 
		 */
		export const EMBOSS = 2;

		/**
		 * 
		 * @brief 滤波器类型：模糊图像
		 * 
		 * 
		 */
		export const SELECTIVE_BLUR = 3;

		/**
		 * 
		 * @brief 滤波器类型：用高斯算法模糊图像
		 * 
		 * 
		 */
		export const GAUSSIAN_BLUR = 4;

		/**
		 * 
		 * @brief 滤波器类型：将图像中所有颜色反转
		 * 
		 * 
		 */
		export const NEGATE = 5;

		/**
		 * 
		 * @brief 滤波器类型：将图像转换为灰度图
		 * 
		 * 
		 */
		export const GRAYSCALE = 6;

		/**
		 * 
		 * @brief 滤波器类型：使图像更柔滑，用arg1设定柔滑级别
		 * 
		 * 
		 */
		export const SMOOTH = 7;

		/**
		 * 
		 * @brief 滤波器类型：改变图像的亮度，用arg1设定亮度级别，取值范围是-255~255
		 * 
		 * 
		 */
		export const BRIGHTNESS = 8;

		/**
		 * 
		 * @brief 滤波器类型：改变图像的对比度，用arg1设定对比度级别，取值范围是0~100
		 * 
		 * 
		 */
		export const CONTRAST = 9;

		/**
		 * 
		 * @brief 滤波器类型：改变图像的色调，用arg1、arg2、arg3分别指定red、blue、green，每种颜色范围是0~255，arg4为透明度，取值返回是0~127
		 * 
		 * 
		 */
		export const COLORIZE = 10;





		/**
		 * 
		 * @brief 创建一个新图像
		 * @param width 指定图像宽度
		 * @param height 指定图像高度
		 * @param color 指定图像类型，允许值为 gd.TRUECOLOR 或 gd.PALETTE
		 * @return 返回创建成功的图像对象
		 * 
		 * 
		 * @async
		 */
		export function create(width: number, height: number, color?: number/** = undefined*/, callback?: Fibjs.AsyncCallback<Class_Image>/** = function (err: Error, result: Class_Image) {}*/): Class_Image;

		/**
		 * 
		 * @brief 从格式数据中解码图像
		 * @param data 给定解码的图像数据
		 * @return 返回解码成功的图像对象
		 * 
		 * 
		 * @async
		 */
		export function load(data: Class_Buffer, callback?: Fibjs.AsyncCallback<Class_Image>/** = function (err: Error, result: Class_Image) {}*/): Class_Image;

		/**
		 * 
		 * @brief 从流对象中解码图像
		 * @param stm 给定图像数据所在的流对象
		 * @return 返回解码成功的图像对象
		 * 
		 * 
		 * @async
		 */
		export function load(stm: Class_SeekableStream, callback?: Fibjs.AsyncCallback<Class_Image>/** = function (err: Error, result: Class_Image) {}*/): Class_Image;

		/**
		 * 
		 * @brief 从指定文件中解码图像
		 * @param fname 指定文件名
		 * @return 返回解码成功的图像对象
		 * 
		 * 
		 * @async
		 */
		export function load(fname: string, callback?: Fibjs.AsyncCallback<Class_Image>/** = function (err: Error, result: Class_Image) {}*/): Class_Image;

		/**
		 * 
		 * @brief 通过 rgb 颜色分量生成组合颜色
		 * @param red 红色分量，范围为 0-255
		 * @param green 绿色分量，范围为 0-255
		 * @param blue 蓝色分量，范围为 0-255
		 * @return 返回组合颜色
		 * 
		 * 
		 * 
		 */
		export function rgb(red: number, green: number, blue: number): number;

		/**
		 * 
		 * @brief 通过 rgba 颜色分量生成组合颜色
		 * @param red 红色分量，范围为 0-255
		 * @param green 绿色分量，范围为 0-255
		 * @param blue 蓝色分量，范围为 0-255
		 * @param alpha 透明分量，范围为 0.0-1.0
		 * @return 返回组合颜色
		 * 
		 * 
		 * 
		 */
		export function rgba(red: number, green: number, blue: number, alpha: number): number;

		/**
		 * 
		 * @brief 通过 hsl 颜色分量生成组合颜色
		 * @param hue 色相分量，范围为 0-360
		 * @param saturation 饱和度分量，范围为 0.0-1.0
		 * @param lightness 亮度分量，范围为 0.0-1.0
		 * @return 返回组合颜色
		 * 
		 * 
		 * 
		 */
		export function hsl(hue: number, saturation: number, lightness: number): number;

		/**
		 * 
		 * @brief 通过 hsla 颜色分量生成组合颜色
		 * @param hue 色相分量，范围为 0-360
		 * @param saturation 饱和度分量，范围为 0.0-1.0
		 * @param lightness 亮度分量，范围为 0.0-1.0
		 * @param alpha 透明分量，范围为 0.0-1.0
		 * @return 返回组合颜色
		 * 
		 * 
		 * 
		 */
		export function hsla(hue: number, saturation: number, lightness: number, alpha: number): number;

		/**
		 * 
		 * @brief 通过 hsb 颜色分量生成组合颜色
		 * @param hue 色相分量，范围为 0-360
		 * @param saturation 饱和度分量，范围为 0.0-1.0
		 * @param brightness 明亮程度分量，范围为 0.0-1.0
		 * @return 返回组合颜色
		 * 
		 * 
		 * 
		 */
		export function hsb(hue: number, saturation: number, brightness: number): number;

		/**
		 * 
		 * @brief 通过 hsba 颜色分量生成组合颜色
		 * @param hue 色相分量，范围为 0-360
		 * @param saturation 饱和度分量，范围为 0.0-1.0
		 * @param brightness 明亮程度分量，范围为 0.0-1.0
		 * @param alpha 透明分量，范围为 0.0-1.0
		 * @return 返回组合颜色
		 * 
		 * 
		 * 
		 */
		export function hsba(hue: number, saturation: number, brightness: number, alpha: number): number;

		/**
		 * 
		 * @brief 通过字符串生成组合颜色
		 * @param color 指定颜色的字符串，如："#ff0000", "ff0000", "#f00", "f00"
		 * @return 返回组合颜色
		 * 
		 * 
		 * 
		 */
		export function color(color: string): number;

	} /** end of `module gd` */
	export = gd
}

/** endof `module Or Internal Object` */


