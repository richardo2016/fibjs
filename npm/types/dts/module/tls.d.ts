/// <reference path="../_import/_fibjs.d.ts" />
/// <reference path="../interface/SecureContext.d.ts" />
/**
 * @description tls 模块是 fibjs 内置的加密模块，可以用于建立网络连接的 SSL 超文本传输协议。该模块提供加密验证，客户端和服务器可以确保连接是安全的
 *  
 */
declare module 'tls' {
    function createSecureContext(options: FIBJS.GeneralObject): Class_SecureContext;

}
