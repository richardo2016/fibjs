/// <reference path="../_import/_fibjs.d.ts" />
/// <reference path="../interface/TLSSocket.d.ts" />
/// <reference path="../interface/SecureContext.d.ts" />
/**
 * @description tls 模块是 fibjs 内置的加密模块，可以用于建立网络连接的 SSL 超文本传输协议。该模块提供加密验证，客户端和服务器可以确保连接是安全的
 *  
 */
declare module 'tls' {
    const TLSSocket: typeof Class_TLSSocket;

    /**
     * @description 创建一个 SecureContext 对象，用于在 tls 模块中维护安全上下文
     * 
     *      创建安全上下文的选项支持以下选项：
     *      - ca: 覆盖受信任的 CA 证书。默认是信任由 Mozilla 管理的知名 CA。当使用此选项显式指定 CA 时，Mozilla 的 CA 将被完全替换。该值可以是字符串或 Buffer ，或者字符串或 Buffer 的 Array。任何字符串或 Buffer 都可以包含连接在一起的多个 PEM CA。对等方的证书必须可链接到服务器信任的 CA，以便对连接进行身份验证。当使用不可链接到知名 CA 的证书时，必须将证书的 CA 明确指定为受信任的 CA，否则连接将无法进行身份验证。如果对等方使用的证书与默认 CA 之一不匹配或链接到，请使用 ca 选项提供对等方证书可以匹配或链接到的 CA 证书。对于自签名证书，该证书是其自己的 CA，并且必须提供。对于 PEM 编码的证书，支持的类型为 TRUSTED CERTIFICATE、X509 CERTIFICATE 和 CERTIFICATE。
     *      - cert: PEM 格式的证书链。每个私钥应提供一个证书链。每个证书链应包含所提供的私有 key 的 PEM 格式的证书，后跟 PEM 格式的中间证书（如果有），按顺序排列，并且不包括根 CA（根 CA 必须是预先生成的）。提供多个证书链时，它们的顺序不必与 key 中的私钥相同。如果未提供中间证书，对等方将无法验证证书，握手将失败。
     *      - key: PEM 格式的私钥。PEM 允许选择加密私钥。加密的密钥将使用 options.passphrase 进行解密。
     *      - passphrase: 用于单个私钥和/或 PFX 的共享密码。
     *      - rejectUnauthorized: 如果不是 false，服务器将拒绝任何未经所提供 CA 列表授权的连接。默认值: true。
     *      - maxVersion: 设置允许的最大 TLS 版本。 'TLSv1.3' 、 'TLSv1.2' 、 'TLSv1.1' 或 'TLSv1' 之一。不能与 secureProtocol 选项一起指定。
     *      - minVersion: 设置允许的最低 TLS 版本。 'TLSv1.3' 、 'TLSv1.2' 、 'TLSv1.1' 或 'TLSv1' 之一。不能与 secureProtocol 选项一起指定。
     *      - secureProtocol: 传统机制选择要使用的 TLS 协议版本，不支持最小和最大版本的独立控制，也不支持将协议限制为 TLSv1.3。建议改用 minVersion 和 maxVersion。
     *      - sessionTimeout: 经过多少秒后，服务器创建的 TLS 会话将不再可恢复。默认值: 300。
     * 
     *      @param options 创建安全上下文的选项
     *      @return 返回创建的安全上下文
     *      
     */
    function createSecureContext(options: FIBJS.GeneralObject): Class_SecureContext;

    function connect(optionns: FIBJS.GeneralObject): Class_TLSSocket;

    function connect(optionns: FIBJS.GeneralObject, callback: (err: Error | undefined | null, retVal: Class_TLSSocket)=>any): void;

    function connect(url: string, optionns?: FIBJS.GeneralObject): Class_TLSSocket;

    function connect(url: string, optionns?: FIBJS.GeneralObject, callback?: (err: Error | undefined | null, retVal: Class_TLSSocket)=>any): void;

    function connect(port: number, optionns?: FIBJS.GeneralObject): Class_TLSSocket;

    function connect(port: number, optionns?: FIBJS.GeneralObject, callback?: (err: Error | undefined | null, retVal: Class_TLSSocket)=>any): void;

    function connect(port: number, host: string, optionns?: FIBJS.GeneralObject): Class_TLSSocket;

    function connect(port: number, host: string, optionns?: FIBJS.GeneralObject, callback?: (err: Error | undefined | null, retVal: Class_TLSSocket)=>any): void;

}

