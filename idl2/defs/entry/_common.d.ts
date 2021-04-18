/// <reference path="../class/EventEmitter.d.ts" />
/// <reference path="../class/Buffer.d.ts" />

/**
 * @nocpp
 */
declare namespace Fibjs {
    interface ErrnoException extends Error {
        errno?: number;
        code?: string;
        path?: string;
        syscall?: string;
        stack?: string;
    }

    /** @description 32 位带符号整型 */
    type i32 = number;
    /** @description 32 位无符号整型 */
    type u32 = number;
    /** @description 64 位带符号整型 */
    type i64 = number;
    /** @description 64 位无符号整型 */
    type u64 = number;

    /** @description 32 位浮点数 */
    type f32 = number;
    /** @description 64 位浮点数 */
    type f64 = number;

    /** @description 长整型 */
    type long = number;
    /** @description 浮点数 */
    type float = number;

    interface AsyncCallback<T_RESP = any> {
        <T = T_RESP, T_CALLBACK_RESP = any, T_THIS = any>(this: T_THIS, err: Error, result?: T): T_CALLBACK_RESP | void
    }

    interface AnyObject {
        [k: string]: any
    }

    /**
     * @nocpp
     */
    export interface ReadableStream extends Class_EventEmitter {
        readable: boolean;
        read(size?: number): string | Class_Buffer;
        setEncoding(encoding: string): this;
        pause(): this;
        resume(): this;
        isPaused(): boolean;
        pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
        unpipe<T extends WritableStream>(destination?: T): this;
        unshift(chunk: string): void;
        unshift(chunk: Class_Buffer): void;
        wrap(oldStream: ReadableStream): this;
        [Symbol.asyncIterator](): AsyncIterableIterator<string | Class_Buffer>;
    }

    /**
     * @nocpp
     */
    export interface WritableStream extends Class_EventEmitter {
        writable: boolean;
        write(buffer: Class_Buffer | string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(cb?: Function): void;
        end(buffer: Class_Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
    }

    /**
     * @nocpp
     */
    export interface ReadWriteStream extends ReadableStream, WritableStream { }
}

