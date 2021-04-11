declare namespace FIBJS_IDL {

    /**
     * @description fibjs 的 IDL 数据类型, 所有的参数, 成员, 变量的类型只可能是以下之一
     */
    export type IIDLDataType =
        null
        | 'Value'
        | 'Array'
        | 'ArrayBuffer'
        | 'TypedArray'
        | 'ArrayBufferView'
        | 'Buffer'
        | 'String'
        | 'Boolean'
        | 'Integer'
        | 'Long'
        | 'Number'

    /**
    * @description IDL 中的参数信息, 用于描述构造函数, 成员函数的信息
    */
    export interface IIDLParam {
        /**
         * @description 参数类型
         */
        type: "Array" | string,
        /**
         * @description 参数名
         */
        name: string,
        /**
         * @description 默认值, 为 null 表明无默认值
         */
        default: {
            value: string
        } | null
    }

    /**
    * @description 解析得到的注释区域得到的文档信息
    * 
    * brief 区域第一行解析为 descript, 剩下的部分会被逐行解析到 detail 对象
    * 
    * params 为多个 params 区域解析得到的参数信息
    */
    export interface IParsedDoc {
        descript: string
        detail?: string[]
        /**
         * @description 解析得到的参数中的文档信息
         */
        params: {
            name: IIDLParam['name']
            descript?: IParsedDoc['descript']
            detail?: IParsedDoc['detail']
        }[]
    }

    export type IDeclareType = "interface" | "module"

    /**
    * @description 一个 IDL 对象的声明
    */
    export interface IDeclare<TType extends IDeclareType> {
        /**
         * @description 注释部分
         */
        comments: string

        /**
         * @description 声明对象的类型
         * 
         * @value interface - 内置对象
         * @value module - 模块
         */
        type: TType

        /**
         * @description 模块或内置对象的名字
         */
        name: string

        /**
         * @description 声明的对象类型的父类型
         */
        extend: string

        doc?: IParsedDoc
    }

    /**
    * @description
    */
    export interface IMember {
        /**
         * @description 成员名字
         */
        name: "Buffer"
        /**
         * @description 成员类型
         * 
         * @value method 成员方法
         * @value method 成员对象
         */
        memType: "method" | "object"
        comments: string
        /**
         * @description 是否被弃用, 为 true 表示被弃用
         */
        deprecated: true | null
        /**
         * @description 仅为 true 表示是静态成员
         */
        static: null
        /**
         * @description 仅为 true 表示是支持异步的方法
         */
        async: null
        /**
         * @description 成员类型
         */
        type: null
        params: IIDLParam
        doc: IParsedDoc
    }

    /**
    * @description fibjs 中模块或对象的基础
    */
    export interface IIDLObject<T extends IDeclareType> {
        declare: IDeclare<T>
        members: IMember[]
    }

    /**
    * @description fibjs 中的内置对象, 比如 Buffer, MySQL
    */
    export type IClazz = IIDLObject<"interface">

    /**
    * @description fibjs 中的静态模块
    */
    export type IModule = IIDLObject<"module">
}

export = FIBJS_IDL;