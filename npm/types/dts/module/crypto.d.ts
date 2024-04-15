/// <reference path="../_import/_fibjs.d.ts" />
/// <reference path="../module/crypto_constants.d.ts" />
/// <reference path="../interface/Cipher.d.ts" />
/// <reference path="../interface/PKey.d.ts" />
/// <reference path="../interface/ECKey.d.ts" />
/// <reference path="../interface/BlsKey.d.ts" />
/// <reference path="../interface/X509Cert.d.ts" />
/// <reference path="../interface/X509Crl.d.ts" />
/// <reference path="../interface/X509Req.d.ts" />
/// <reference path="../interface/X509Certificate.d.ts" />
/// <reference path="../interface/Digest.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/// <reference path="../interface/KeyObject.d.ts" />
/// <reference path="../interface/Sign.d.ts" />
/// <reference path="../interface/Verify.d.ts" />
/// <reference path="../interface/X509CertificateRequest.d.ts" />
/**
 * @description `crypto` 模块是 `fibjs` 内置的加密算法模块。它提供了对称加密、非对称加密、摘要算法、密码学随机数生成器等功能。在使用之前，需要通过 `require('crypto')` 加载该模块。
 * 
 * 在 `crypto` 模块中，有很多对象可以使用，比如: 
 * 
 * - `PKey`: 不对称加密算法对象
 * - `X509Cert`: 用于操作 X.509 证书的对象
 * - `Cipher`: 用于实现对称加密的对象
 * - `Digest`: 用于实现摘要算法的对象
 * 
 * 在使用加密算法之前，需要先创建一个密钥对象，比如以下创建一个 `AES` 密钥对象的示例: 
 * 
 * ```javascript
 * const crypto = require('crypto');
 * const key = crypto.randomBytes(16); // generate a 16-byte random key
 * ```
 * 
 * 接下来，使用 `Cipher` 对象来对明文进行加密: 
 * 
 * ```javascript
 * const c = new crypto.Cipher(crypto.AES, crypto.ECB, key);
 * const data = 'hello, world';
 * const encrypted = c.encrypt(data).hex();
 * console.log(encrypted); // output encrypted data
 * ```
 * 
 * 以上示例中，创建了一个 `AES` 加密的 `Cipher` 对象，使用 `encrypt` 方法对明文进行加密，并返回加密结果。
 * 
 * 除了对称加密算法，`crypto` 模块还可以支持非对称加密算法和摘要算法。比如以下示例是使用 `PKey` 和 `Digest` 对象实现 SHA256 加密的代码: 
 * 
 * ```javascript
 * const privateKey = crypto.loadPKey('private.pem'); // read private key from file
 * const data = 'hello, world';
 * const digest = new crypto.Digest(hash.SHA256);
 * digest.update(data);
 * const signature = privateKey.sign(digest.digest());
 * console.log(signature); // output signature
 * ```
 * 
 * 在以上示例中，首先读取了一个私钥文件，并准备了输入数据。然后，创建了一个 SHA256 的 `Digest` 对象，使用 `update` 方法把数据加入到 Hash 计算中。在计算完成后，使用 `privateKey.sign` 方法进行签名，并输出签名结果。
 * 
 * 综上所述，`crypto` 模块提供了多种加密算法、摘要算法以及相关对象，这些功能可以帮助我们实现多方面的安全需求，比如对称和非对称加密、数字签名和加密验证等。
 *  
 */
declare module 'crypto' {
    /**
     * @description 指定对称加密算法 AES，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM，CCM，XTS 
     */
    export const AES: 1;

    /**
     * @description 指定对称加密算法 DES，支持 64 位 key，分组密码工作模式支持 ECB, CBC 
     */
    export const DES: 2;

    /**
     * @description 指定对称加密算法 DES-EDE3，支持 192 位 key，分组密码工作模式支持 ECB, CBC 
     */
    export const DES_EDE3: 3;

    /**
     * @description 指定对称加密算法 CAMELLIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM，CCM 
     */
    export const CAMELLIA: 4;

    /**
     * @description 指定对称加密算法 ARIA，支持 128, 192, 256 位 key，分组密码工作模式支持 ECB, CBC, CFB128, CTR, GCM，CCM 
     */
    export const ARIA: 5;

    /**
     * @description 指定对称加密算法 CHACHA20，支持 256 位 key，分组密码工作模式支持 POLY1305 
     */
    export const CHACHA20: 6;

    /**
     * @description 指定对称加密算法 SM4, 分组密码工作模式支持 ECB, CBC 
     */
    export const SM4: 7;

    /**
     * @description 指定分组密码工作模式支持 ECB 
     */
    export const ECB: 1;

    /**
     * @description 指定分组密码工作模式支持 CBC 
     */
    export const CBC: 2;

    /**
     * @description 指定分组密码工作模式支持 CFB64 
     */
    export const CFB64: 3;

    /**
     * @description 指定分组密码工作模式支持 CFB128 
     */
    export const CFB128: 4;

    /**
     * @description 指定分组密码工作模式支持 OFB 
     */
    export const OFB: 5;

    /**
     * @description 指定分组密码工作模式支持 CTR 
     */
    export const CTR: 6;

    /**
     * @description 指定分组密码工作模式支持 GCM 
     */
    export const GCM: 7;

    /**
     * @description 指定流密码模式 
     */
    export const STREAM: 8;

    /**
     * @description 指定分组密码工作模式支持 CCM 
     */
    export const CCM: 9;

    /**
     * @description 指定分组密码工作模式支持 XTS 
     */
    export const XTS: 10;

    /**
     * @description 指定分组密码工作模式支持 POLY1305 
     */
    export const POLY1305: 11;

    /**
     * @description 指定填充模式为 PKCS7 
     */
    export const PKCS7: 0;

    /**
     * @description 指定填充模式为 ONE_AND_ZEROS 
     */
    export const ONE_AND_ZEROS: 1;

    /**
     * @description 指定填充模式为 ZEROS_AND_LEN 
     */
    export const ZEROS_AND_LEN: 2;

    /**
     * @description 指定填充模式为 ZEROS 
     */
    export const ZEROS: 3;

    /**
     * @description 指定填充模式为 NOPADDING 
     */
    export const NOPADDING: 4;

    /**
     * ! crypto 模块的常量对象，参见 crypto_constants 
     */
    const constants: typeof import ('crypto_constants');

    /**
     * @description Cipher 构造函数，参见 Cipher 
     */
    const Cipher: typeof Class_Cipher;

    /**
     * @description PKey 构造函数，参见 PKey 
     */
    const PKey: typeof Class_PKey;

    /**
     * @description ECKey 构造函数，参见 ECKey 
     */
    const ECKey: typeof Class_ECKey;

    /**
     * @description BlsKey 构造函数，参见 BlsKey 
     */
    const BlsKey: typeof Class_BlsKey;

    /**
     * @description X509Cert 构造函数，参见 X509Cert 
     */
    const X509Cert: typeof Class_X509Cert;

    /**
     * @description X509Crl 构造函数，参见 X509Crl 
     */
    const X509Crl: typeof Class_X509Crl;

    /**
     * @description X509Req 构造函数，参见 X509Req 
     */
    const X509Req: typeof Class_X509Req;

    /**
     * @description X509Certificate 构造函数，参见 X509Certificate 
     */
    const X509Certificate: typeof Class_X509Certificate;

    /**
     * @description 获取 crypto 模块支持的的 hash(摘要) 算法
     *      @return 返回支持的 hash 算法数组
     *      
     */
    function getHashes(): any[];

    /**
     * @description 根据给定的算法名称创建一个信息摘要对象
     *      @param algo 指定信息摘要对象的算法
     *      @return 返回信息摘要对象
     *     
     */
    function createHash(algo: string): Class_Digest;

    /**
     * @description 根据给定的算法名称创建一个 hmac 信息摘要对象
     *      @param algo 指定信息摘要对象的算法
     *      @param key 二进制签名密钥
     *      @return 返回信息摘要对象
     *     
     */
    function createHmac(algo: string, key: Class_Buffer): Class_Digest;

    /**
     * @description 获取 crypto 模块支持的的对称加密算法
     *      @return 返回支持的对称加密算法数组
     *      
     */
    function getCiphers(): any[];

    /**
     * @description 创建一个对称加密的加密对象
     *      @param algorithm 指定加密算法
     *      @param key 指定加密解密密码
     *      @param options 指定加密选项
     *      @return 返回对称加密的加密对象
     *      
     */
    function createCipher(algorithm: string, key: Class_Buffer, options?: FIBJS.GeneralObject): Class_Cipher;

    /**
     * @description 创建一个对称加密的加密对象
     *      @param algorithm 指定加密算法
     *      @param key 指定加密解密密码
     *      @param iv 指定初始向量
     *      @param options 指定加密选项
     *      @return 返回对称加密的加密对象
     *      
     */
    function createCipheriv(algorithm: string, key: Class_Buffer, iv: Class_Buffer, options?: FIBJS.GeneralObject): Class_Cipher;

    /**
     * @description 创建一个对称加密的加密对象
     *      @param algorithm 指定加密算法
     *      @param key 指定加密解密密码
     *      @param iv 指定初始向量
     *      @param options 指定加密选项
     *      @return 返回对称加密的加密对象
     *      
     */
    function createCipheriv(algorithm: string, key: Class_KeyObject, iv: Class_Buffer, options?: FIBJS.GeneralObject): Class_Cipher;

    /**
     * @description 创建一个对称加密的解密对象
     *      @param algorithm 指定加密算法
     *      @param key 指定加密解密密码
     *      @param options 指定加密选项
     *      @return 返回对称加密的解密对象
     *      
     */
    function createDecipher(algorithm: string, key: Class_Buffer, options?: FIBJS.GeneralObject): Class_Cipher;

    /**
     * @description 创建一个对称加密的解密对象
     *      @param algorithm 指定加密算法
     *      @param key 指定加密解密密码
     *      @param iv 指定初始向量
     *      @param options 指定加密选项
     *      @return 返回对称加密的解密对象
     *      
     */
    function createDecipheriv(algorithm: string, key: Class_Buffer, iv: Class_Buffer, options?: FIBJS.GeneralObject): Class_Cipher;

    /**
     * @description 创建一个对称加密的解密对象
     *      @param algorithm 指定加密算法
     *      @param key 指定加密解密密码
     *      @param iv 指定初始向量
     *      @param options 指定加密选项
     *      @return 返回对称加密的解密对象
     *      
     */
    function createDecipheriv(algorithm: string, key: Class_KeyObject, iv: Class_Buffer, options?: FIBJS.GeneralObject): Class_Cipher;

    /**
     * @description 获取 crypto 模块支持的的 ecc 曲线
     *      @return 返回支持的 ecc 曲线
     *      
     */
    function getCurves(): any[];

    /**
     * @description 创建一个新的密钥对象，其中包含非对称加密的私钥
     *      @param key 指定 pem 格式的私钥
     *      @return 返回私钥的密钥对象
     *      
     */
    function createPrivateKey(key: Class_Buffer): Class_KeyObject;

    /**
     * @description 创建一个新的密钥对象，其中包含非对称加密的私钥
     * 
     *     参数 key 用于指定创建私钥的配置属性，支持的属性包括: 
     *     - key: PEM 字符串，DER 二进制 或者 JWK 格式对象
     *     - format: 必须是 'pem', 'der' 或 'jwk'。默认值: 'pem'
     *     - type: 必须是 'pkcs1', 'pkcs8' 或 'sec1'。仅当 format 为 'der' 时才需要此选项，否则忽略
     *     - passphrase: 用于解密的密码字符串
     *     - encoding: 当 key 是字符串时使用的字符串编码
     * 
     *      @param key 创建私钥的配置属性
     *      @return 返回私钥的密钥对象
     *      
     */
    function createPrivateKey(key: FIBJS.GeneralObject): Class_KeyObject;

    /**
     * @description 创建一个新的密钥对象，其中包含非对称加密的公钥
     *      @param key 指定 pem 格式的公钥
     *      @return 返回公钥的密钥对象
     *      
     */
    function createPublicKey(key: Class_Buffer): Class_KeyObject;

    /**
     * @description 基于给定的私钥创建一个新的密钥对象，其中包含给定私钥对应的公钥
     *      @param key 指定一个非对称加密的私钥
     *      @return 返回公钥的密钥对象
     *      
     */
    function createPublicKey(key: Class_KeyObject): Class_KeyObject;

    /**
     * @description 创建一个新的密钥对象，其中包含非对称加密的公钥
     * 
     *     参数 key 用于指定创建公钥的配置属性，支持的属性包括: 
     *     - key: PEM 字符串，DER 二进制 或者 JWK 格式对象
     *     - format: 必须是 'pem', 'der' 或 'jwk'。默认值: 'pem'
     *     - type: 必须是 'pkcs1', 或 'sec1'。仅当 format 为 'der' 时才需要此选项，否则忽略
     *     - encoding: 当 key 是字符串时使用的字符串编码
     * 
     *      @param key 创建公钥的配置属性
     *      @return 返回公钥的密钥对象
     *      
     */
    function createPublicKey(key: FIBJS.GeneralObject): Class_KeyObject;

    /**
     * @description 基于 algorithm 指定的算法创建一个新的签名对象
     *      @param algorithm 指定签名算法，使用 crypto.getHashes 获取可用摘要算法的名称
     *      @param options 指定签名选项，未使用
     *      @return 返回签名对象
     *      
     */
    function createSign(algorithm: string, options?: FIBJS.GeneralObject): Class_Sign;

    /**
     * @description 基于 algorithm 指定的算法创建一个新的验签对象
     *      @param algorithm 指定验签算法，使用 crypto.getHashes 获取可用摘要算法的名称
     *      @param options 指定验签选项，未使用
     *      @return 返回验签对象
     *      
     */
    function createVerify(algorithm: string, options?: FIBJS.GeneralObject): Class_Verify;

    /**
     * @description 创建一个新的密钥对象，其中包含对称加密或 Hmac 的密钥
     *      @param key 指定加密解密密码
     *      @param encoding 指定密码的编码，缺省为 "buffer"
     *      @return 返回对称加密的解密对象
     *      
     */
    function createSecretKey(key: Class_Buffer, encoding?: string): Class_KeyObject;

    /**
     * @description 创建一个新的密钥对象，其中包含对称加密或 Hmac 的密钥
     *      @param key 指定加密解密密码
     *      @param encoding 指定密码的编码，缺省为 "buffer"
     *      @return 返回对称加密的解密对象
     *      
     */
    function createSecretKey(key: string, encoding: string): Class_KeyObject;

    function createCertificateRequest(csr: Class_Buffer): Class_X509CertificateRequest;

    function createCertificateRequest(options: FIBJS.GeneralObject): Class_X509CertificateRequest;

    /**
     * @description 加载一个 CRT/PEM/DER 格式的证书，可多次调用
     *      @param filename 证书文件名
     *      @return 返回包含证书的对象
     *     
     */
    function loadCert(filename: string): Class_X509Cert;

    /**
     * @description 加载一个 PEM/DER 格式的撤销证书，可多次调用
     *      @param filename 撤销证书文件名
     *      @return 返回包含撤销证书的对象
     *     
     */
    function loadCrl(filename: string): Class_X509Crl;

    /**
     * @description 加载一个 PEM/DER 格式的证书请求，可多次调用
     *      @param filename 证书请求文件名
     *      @return 返回包含请求证书的对象
     *     
     */
    function loadReq(filename: string): Class_X509Req;

    /**
     * @description 加载一个 CRT/PEM/DER 格式的非对称公钥或者私钥
     *      @param filename 公钥或者私钥文件名
     *      @return 返回包含 PKey 的对象
     *     
     */
    function loadPKey(filename: string): Class_PKey;

    /**
     * @description 生成指定尺寸的随机数，使用 havege 生成器
     *      @param size 指定生成的随机数尺寸
     *      @return 返回生成的随机数
     *      
     */
    function randomBytes(size?: number): Class_Buffer;

    function randomBytes(size?: number, callback?: (err: Error | undefined | null, retVal: Class_Buffer)=>any): void;

    /**
     * @description 使用随机数填充指定的 Buffer，使用 havege 生成器
     *      @param buffer 指定生成的 Buffer
     *      @param offset 指定起始偏移，缺省为 0
     *      @param size 指定生成的随机数尺寸，缺省为 buffer.length - offset
     *      @return 返回生成的随机数
     *      
     */
    function randomFill(buffer: Class_Buffer, offset?: number, size?: number): Class_Buffer;

    function randomFill(buffer: Class_Buffer, offset?: number, size?: number, callback?: (err: Error | undefined | null, retVal: Class_Buffer)=>any): void;

    /**
     * @description 生成一个 RSA 私钥
     *      @param size 指定 RSA 密钥长度，bit 为单位
     *      @return 返回包含生成私钥的对象
     *     
     */
    function generateKey(size: number): Class_PKey;

    function generateKey(size: number, callback: (err: Error | undefined | null, retVal: Class_PKey)=>any): void;

    /**
     * @description 生成一个椭圆曲线私钥
     * 
     *      curve 可选的曲线包含 NIST 曲线和别名如下: 
     * 
     *      | 曲线 | 别名 |
     *      | ----------- | ----------- |
     *      | NIST P-192 | 'NIST P-192', 'p192', 'P-192', 'prime192v1', 'secp192r1' |
     *      | NIST P-224 | 'NIST P-224', 'p224', 'P-224', 'prime224v1', 'secp224r1' |
     *      | NIST P-256 | 'NIST P-256', 'p256', 'P-256', 'prime256v1', 'secp256r1' |
     *      | NIST P-384 | 'NIST P-384', 'p384', 'P-384', 'prime384v1', 'secp384r1' |
     *      | NIST P-521 | 'NIST P-521', 'p521', 'P-521', 'prime521v1', 'secp521r1' |
     * 
     *      其它支持的曲线包括:
     *      "brainpoolP512r1", "brainpoolP384r1", "secp256k1", "P-256K", "brainpoolP256r1",
     *      "sm2p256r1", "SM2", "Ed25519", "BLS12381_G1", "BLS12381_G2"
     * 
     *      @param curve 指定预置椭圆曲线，缺省为 'secp256r1'
     *      @return 返回包含生成私钥的对象
     *     
     */
    function generateKey(curve?: string): Class_PKey;

    function generateKey(curve?: string, callback?: (err: Error | undefined | null, retVal: Class_PKey)=>any): void;

    /**
     * @description 生成给定 type 的新非对称密钥对。目前支持 RSA、RSA-PSS、DSA、EC、Ed25519、Ed448、X25519、X448、SM2
     * 
     *     options 支持以下属性:
     *     - modulusLength: 密钥大小（以位为单位）（RSA、DSA）。
     *     - publicExponent: 公共指数 (RSA)。默认值: 0x10001。
     *     - hashAlgorithm: 消息摘要的名称 (RSA-PSS)。
     *     - mgf1HashAlgorithm: MGF1 (RSA-PSS) 使用的消息摘要的名称。
     *     - saltLength: 最小盐长度（以字节为单位）（RSA-PSS）。
     *     - divisorLength: q 的大小（以位 (DSA) 为单位）。
     *     - namedCurve: 要使用的曲线名称 (EC)。
     *     - prime: 主要参数 (DH)。
     *     - primeLength: 质数长度（以位 (DH) 为单位）。
     *     - generator: 自定义生成器 (DH)。默认值: 2。
     *     - groupName: <字符串> Diffie-Hellman 组名称 (DH)。请参阅 crypto.getDiffieHellman。
     *     - paramEncoding: 必须是 'named' 或 'explicit'(EC)。默认值: 'named'。
     *     - publicKeyEncoding: 请参阅 keyObject.export。
     *     - privateKeyEncoding: 请参阅 keyObject.export。
     * 
     *     @param type 指定要生成的密钥类型，必须是 'rsa'、'rsa-pss'、'dsa'、'ec'、'ed25519'、'x25519'、'x448' 或 'sm2'
     *     @param options 指定生成密钥的选项
     *     @return 返回包含生成密钥对的对象
     *     
     */
    function generateKeyPair(type: string, options?: FIBJS.GeneralObject): [publicKey: any, privateKey: any];

    function generateKeyPair(type: string, options?: FIBJS.GeneralObject, callback?: (err: Error | undefined | null, retVal: [publicKey: any, privateKey: any])=>any): void;

    /**
     * @description 依据 rfc5869 根据明文 password 生成要求的二进制钥匙
     *      @param algoName 指定要使用的 hash 算法，详见 hash 模块
     *      @param password 指定使用的密码
     *      @param salt 指定 khdf 使用的 salt
     *      @param info 指定 khdf 使用的 info
     *      @param size 指定钥匙尺寸
     *      @return 返回生成的二进制钥匙
     *      
     */
    function hkdf(algoName: string, password: Class_Buffer, salt: Class_Buffer, info: Class_Buffer, size: number): Class_Buffer;

    function hkdf(algoName: string, password: Class_Buffer, salt: Class_Buffer, info: Class_Buffer, size: number, callback: (err: Error | undefined | null, retVal: Class_Buffer)=>any): void;

    /**
     * @description 依据 rfc2898 根据明文 password 生成要求的二进制钥匙
     *      @param password 指定使用的密码
     *      @param salt 指定 hmac 使用的 salt
     *      @param iterations 指定迭代次数
     *      @param size 指定钥匙尺寸
     *      @param algoName 指定要使用的 hash 算法，详见 hash 模块
     *      @return 返回生成的二进制钥匙
     *      
     */
    function pbkdf2(password: Class_Buffer, salt: Class_Buffer, iterations: number, size: number, algoName: string): Class_Buffer;

    function pbkdf2(password: Class_Buffer, salt: Class_Buffer, iterations: number, size: number, algoName: string, callback: (err: Error | undefined | null, retVal: Class_Buffer)=>any): void;

    /**
     * @description 使用 privateKey 解密 buffer。buffer 之前已使用相应的公钥进行加密
     *      @param privateKey 指定私钥
     *      @param buffer 指定要解密的数据
     *      @return 返回解密后的数据
     *      
     */
    function privateDecrypt(privateKey: Class_Buffer, buffer: Class_Buffer): Class_Buffer;

    /**
     * @description 使用 privateKey 解密 buffer。buffer 之前已使用相应的公钥进行加密
     *      @param privateKey 指定私钥
     *      @param buffer 指定要解密的数据
     *      @return 返回解密后的数据
     *      
     */
    function privateDecrypt(privateKey: Class_KeyObject, buffer: Class_Buffer): Class_Buffer;

    /**
     * @description 使用 key 指定的私钥和配置解密 buffer。buffer 之前已使用相应的公钥进行加密
     *      @param key 指定私钥和配置
     *      @param buffer 指定要解密的数据
     *      @return 返回解密后的数据
     *      
     */
    function privateDecrypt(key: FIBJS.GeneralObject, buffer: any): Class_Buffer;

    /**
     * @description 使用 privateKey 加密 buffer。返回的数据可以使用相应的公钥进行解密
     *      @param privateKey 指定私钥
     *      @param buffer 指定要加密的数据
     *      @return 返回加密后的数据
     *      
     */
    function privateEncrypt(privateKey: Class_Buffer, buffer: Class_Buffer): Class_Buffer;

    /**
     * @description 使用 privateKey 加密 buffer。返回的数据可以使用相应的公钥进行解密
     *      @param privateKey 指定私钥
     *      @param buffer 指定要加密的数据
     *      @return 返回加密后的数据
     *      
     */
    function privateEncrypt(privateKey: Class_KeyObject, buffer: Class_Buffer): Class_Buffer;

    /**
     * @description 使用 key 指定的私钥和配置加密 buffer。返回的数据可以使用相应的公钥进行解密
     *      @param key 指定私钥和配置
     *      @param buffer 指定要加密的数据
     *      @return 返回加密后的数据
     *      
     */
    function privateEncrypt(key: FIBJS.GeneralObject, buffer: any): Class_Buffer;

    /**
     * @description 使用 publicKey 解密 buffer。buffer 之前已使用相应的私钥加密
     *      @param publicKey 指定公钥
     *      @param buffer 指定要解密的数据
     *      @return 返回解密后的数据
     *      
     */
    function publicDecrypt(publicKey: Class_Buffer, buffer: Class_Buffer): Class_Buffer;

    /**
     * @description 使用 publicKey 解密 buffer。buffer 之前已使用相应的私钥加密
     *      @param publicKey 指定公钥
     *      @param buffer 指定要解密的数据
     *      @return 返回解密后的数据
     *      
     */
    function publicDecrypt(publicKey: Class_KeyObject, buffer: Class_Buffer): Class_Buffer;

    /**
     * @description 使用 key 指定的公钥和配置解密 buffer。buffer 之前已使用相应的私钥加密
     *      @param key 指定公钥和配置
     *      @param buffer 指定要解密的数据
     *      @return 返回解密后的数据
     *      
     */
    function publicDecrypt(key: FIBJS.GeneralObject, buffer: any): Class_Buffer;

    /**
     * @description 使用 publicKey 加密 buffer。返回的数据可以使用相应的私钥进行解密
     *      @param publicKey 指定私钥
     *      @param buffer 指定要加密的数据
     *      @return 返回加密后的数据
     *      
     */
    function publicEncrypt(publicKey: Class_Buffer, buffer: Class_Buffer): Class_Buffer;

    /**
     * @description 使用 publicKey 加密 buffer。返回的数据可以使用相应的私钥进行解密
     *      @param publicKey 指定私钥
     *      @param buffer 指定要加密的数据
     *      @return 返回加密后的数据
     *      
     */
    function publicEncrypt(publicKey: Class_KeyObject, buffer: Class_Buffer): Class_Buffer;

    /**
     * @description 使用 key 指定的私钥和配置加密 buffer。返回的数据可以使用相应的私钥进行解密
     *      @param key 指定私钥和配置
     *      @param buffer 指定要加密的数据
     *      @return 返回加密后的数据
     *      
     */
    function publicEncrypt(key: FIBJS.GeneralObject, buffer: any): Class_Buffer;

    /**
     * @description 使用给定的私钥和算法计算并返回 data 的签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）
     *      @param algorithm 指定签名算法，使用 crypto.getHashes 获取可用摘要算法的名称
     *      @param data 指定要签名的数据
     *      @param privateKey 指定私钥
     *      @return 返回签名后的数据
     *     
     */
    function sign(algorithm: any, data: Class_Buffer, privateKey: Class_Buffer): Class_Buffer;

    /**
     * @description 使用给定的私钥和算法计算并返回 data 的签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）
     *      @param algorithm 指定签名算法，使用 crypto.getHashes 获取可用摘要算法的名称
     *      @param data 指定要签名的数据
     *      @param privateKey 指定私钥
     *      @return 返回签名后的数据
     *     
     */
    function sign(algorithm: any, data: Class_Buffer, privateKey: Class_KeyObject): Class_Buffer;

    /**
     * @description 使用给定的私钥和算法计算并返回 data 的签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）
     * 
     *      key 内的参数会用于调用 crypto.createPrivateKey 创建私钥对象，此外还支持以下签名参数：
     *      - dsaEncoding 对于 DSA 和 ECDSA，此选项指定生成的签名的格式。它可以是以下之一: 
     *       - 'der'（默认）: DER 编码的 ASN.1 签名结构编码 (r, s) 
     *       - 'ieee-p1363' : IEEE-P1363 中提议的签名格式 r || s
     *      - padding RSA 的可选填充值，以下之一: 
     *       - RSA_PKCS1_PADDING（默认）
     *       - RSA_PKCS1_PSS_PADDING，RSA_PKCS1_PSS_PADDING 将使用 MGF1，其哈希函数与用于对 RFC 4055 第 3.1 节中指定的消息进行签名的哈希函数相同
     *      - saltLength 当填充为 RSA_PKCS1_PSS_PADDING 时的盐长度。特殊值 RSA_PSS_SALTLEN_DIGEST 将盐长度设置为摘要大小，RSA_PSS_SALTLEN_MAX_SIGN（默认）将其设置为最大允许值
     * 
     *      @param algorithm 指定签名算法，使用 crypto.getHashes 获取可用摘要算法的名称
     *      @param data 指定要签名的数据
     *      @param key 指定私钥和签名参数
     *      @return 返回签名后的数据
     *     
     */
    function sign(algorithm: any, data: Class_Buffer, key: FIBJS.GeneralObject): Class_Buffer;

    /**
     * @description 使用给定的密钥和算法验证 data 的给定签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）
     *      @param algorithm 指定签名算法，使用 crypto.getHashes 获取可用摘要算法的名称
     *      @param data 指定要验证的数据
     *      @param publicKey 指定公钥
     *      @param signature 指定签名数据
     *      @return 返回验证结果
     *     
     */
    function verify(algorithm: any, data: Class_Buffer, publicKey: Class_Buffer, signature: Class_Buffer): boolean;

    /**
     * @description 使用给定的密钥和算法验证 data 的给定签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）
     *      @param algorithm 指定签名算法，使用 crypto.getHashes 获取可用摘要算法的名称
     *      @param data 指定要验证的数据
     *      @param publicKey 指定公钥
     *      @param signature 指定签名数据
     *      @return 返回验证结果
     *     
     */
    function verify(algorithm: any, data: Class_Buffer, publicKey: Class_KeyObject, signature: Class_Buffer): boolean;

    /**
     * @description 使用给定的密钥和算法验证 data 的给定签名。如果 algorithm 是 null 或 undefined，则算法取决于密钥类型（尤其是 Ed25519 和 Ed448）
     * 
     *      key 内的参数会用于调用 crypto.createPublicKey 创建私钥对象，此外还支持以下签名参数：
     *      - dsaEncoding 对于 DSA 和 ECDSA，此选项指定生成的签名的格式。它可以是以下之一: 
     *       - 'der'（默认）: DER 编码的 ASN.1 签名结构编码 (r, s) 
     *       - 'ieee-p1363' : IEEE-P1363 中提议的签名格式 r || s
     *      - padding RSA 的可选填充值，以下之一: 
     *       - RSA_PKCS1_PADDING（默认）
     *       - RSA_PKCS1_PSS_PADDING，RSA_PKCS1_PSS_PADDING 将使用 MGF1，其哈希函数与用于对 RFC 4055 第 3.1 节中指定的消息进行签名的哈希函数相同
     *      - saltLength 当填充为 RSA_PKCS1_PSS_PADDING 时的盐长度。特殊值 RSA_PSS_SALTLEN_DIGEST 将盐长度设置为摘要大小，RSA_PSS_SALTLEN_MAX_SIGN（默认）将其设置为最大允许值
     * 
     *      @param algorithm 指定签名算法，使用 crypto.getHashes 获取可用摘要算法的名称
     *      @param data 指定要验证的数据
     *      @param key 指定私钥和签名参数
     *      @param signature 指定签名数据
     *      @return 返回验证结果
     *     
     */
    function verify(algorithm: any, data: Class_Buffer, key: FIBJS.GeneralObject, signature: Class_Buffer): boolean;

}

