/** @type {import('../fibjs/internal-ts/lib/typescript')} */
const ts = require('@fibjs/internal-ts/lib/typescript');

const {
    mapTsParamDataTypeToIdlType,
    mapPropertyTypeToIdlDataType,
    findNocppTagFromJSDocTags,
    extract_class_name,
    extract_doc,
    extractFunctionLikeSignature,
    hasStaticModifier,
    hasReadonlyModifier,
    findBriefTag,
    parse_brief_start_comment,
} = require('./utils');

const PROPERTY_TYPES = {
    any: ts.SyntaxKind.AnyKeyword,
    boolean: ts.SyntaxKind.BooleanKeyword,
    number: ts.SyntaxKind.NumberKeyword,
    string: ts.SyntaxKind.StringKeyword,
    // object: ts.SyntaxKind.ObjectKeyword
};

/** @typedef {'interface' | 'module' | 'constructor' | 'method' | 'staticMethod' | 'property' | 'parameter'} IIDLNodeType */

const IDL1Node = exports.IDL1Node = class IDL1Node {
    /**
     * @param {{
     *  name: string,
     *  type: IIDLNodeType
     * }} param0 
     * @param {IDL1Node} parent 
     */
    constructor({ name, type }, parent) {
        this.children = [];
        this.name = name;

        /**
         * @description 输出为 idl node 时的类型
         * 
         * @type {IIDLNodeType}
         */
        this.idlNodeType = type;

        /** @description 经典的自定义 idl IR */
        this.version = 'classical';

        /**
         * @description 父 IDL1Node 节点
         * @type {IDL1Node | null}
         **/
        this.parent = name === ROOT_NAME ? this : parent;

        /** @description 作为 interface 时的 meta */
        this.interfaceMeta = {
            /** @description 父类 */
            heritage: null,
            docBrief: null,
            docDetail: null,
        }

        /** @description 作为 module 时的 meta */
        this.moduleMeta = {
            /** @description 父类 */
            heritage: null,
            docBrief: null,
            docDetail: null,
        }

        /** @description 作为成员(constructor/function/property)时的 meta */
        this.memMeta = {
            /**
             * @description 作为成员函数时的返回值
             * @type {{
             *  name: string
             *  tag?: {
             *      name: string,
             *      text: string
             *  }
             * }}
             **/
            returnType: null,
            /** @description 作为成员时的类型 */
            memType: null,
            /** @description 作为成员时的数据类型, 适用于 'property', 'staticProperty' 等 */
            memDataType: null,
            /** @description 是否已弃用 */
            deprecated: null,
            /** @description 是否为静态成员 */
            static: null,
            /** @description 是否只读 */
            readonly: null,
            /** @description 是否为异步方法 */
            async: null,
            /**
             * @description 作为成员函数时的参数
             * @type {{
             *  name: string
             *  tag?: {
             *      name: string,
             *      text: string
             *  }
             * }[]}
             **/
            parameters: [],
        };

        /** @description 作为参数时的 meta */
        this.paramMeta = {
            // /** @description 默认值文本, 为 undefined 为表示无默认值, 为 null 表示 null */
            // defaultValueText: undefined,
            /** @description 数据类型的名称 */
            dataTypeText: null,
            /** @description 引用的数据类型的名称 */
            refTypeText: null,
        }

        /** @description 作为具有注释的节点时的 jsDoc 风格注释信息 */
        this.jsDocMeta = {
            /** @description 完整的文本 */
            fullText: '',
            /**
             * @description 所有 tag
             * @type {{
             *  name: string
             *  comment: string
             *  tagNameFullText: string
             *  defaultValueText: string
             *  paramName: string
             * }[]}
             **/
            tags: [],
        }

        /**
         * @description 作为函数的参数, 且函数的注释中使用 #param tag 标记该参数时的注释信息
         * 
         * 和 jsDocMeta 不同, jsDocMeta 用于那些便于写注释的节点(比如成员和成员函数); paramJsDocMeta
         * 用于表达某个 idlNode 就是 parameter 时, 其父节点中 jsdoc 为该 parameter 写个哪些信息
         */
        this.paramJsDocMeta = {
            tag: null,
            tags: []
        }
    }

    appendChild(name, type) {
        let node = new IDL1Node({ name, type }, this);
        this.children.push(node);
        return node;
    };

    getType() { return this.type; };

    getIDLNodeWrapper() {
        let childNodes = [];
        if (this.children.length) {
            this.children.forEach(child => {
                const nocppTag = findNocppTagFromJSDocTags(child.jsDocMeta.tags);
                if (nocppTag) return;
                /* only check interface/module's tags */
                if (child.declare && !child.jsDocMeta.tags.length) {
                    console.warn(`[getIDLNodeWrapper] no jsDocMeta.tags provided for ${child.__idlNodeType__} '${child.name}'`)
                    return;
                }

                childNodes.push(child.getIDLNodeWrapper())
            })
        }

        if (this.name === ROOT_NAME) {
            const roots = {
                interface: {},
                module: {},
            };

            childNodes.forEach(child => {
                switch (child.__idlNodeType__) {
                    case 'interface': {
                        roots.interface[child.idlNode.declare.name] = child;
                        break
                    }
                    case 'module': {
                        roots.module[child.idlNode.declare.name] = child;
                        break
                    }
                    default: {
                        throw new Error(`[::getIDLNodeWrapper] unsupported idlNodeType ${child.__idlNodeType__} for mounting to root`)
                    }
                }
            })

            return roots
        }

        const getResult = (idlNode) => {
            let result;

            // must be { 'interface' | 'module' }
            if (idlNode.declare) {
                let targetName = idlNode.declare ? idlNode.declare.name : '';
                result = {
                    __idlNodeType__: this.idlNodeType,
                    __jsDocMeta__: this.jsDocMeta,
                    idlNode,
                    name: idlNode.name
                };

                result.targetName = targetName.replace(/Class__?/, '');
            } else {
                return idlNode;
            }

            return result
        };

        switch (this.idlNodeType) {
            default:
                throw new Error(`[getIDLNodeWrapper] unsupported idlNodeType ${this.idlNodeType}`)
            case 'module':
            case 'interface': {
                const briefTag = findBriefTag(this)

                return getResult({
                    declare: {
                        comments: `! @brief ${briefTag.comment}`,
                        type: this.idlNodeType,
                        name: this.name,
                        extend: this.interfaceMeta.heritage || this.moduleMeta.heritage,
                        doc: extract_doc(this)
                    },
                    members: childNodes,
                    doc: {},
                    extend: null
                });
            }
            case 'staticProperty':
            case 'property': {
                const briefTag = findBriefTag(this, false)

                return getResult({
                    memType: this.idlNodeType === 'property' ? 'prop' : this.memMeta.memDataType,
                    comments: briefTag ? `! @brief ${briefTag.comment}` : null,
                    deprecated: this.memMeta.deprecated || null,
                    static: this.memMeta.static || null,
                    readonly: this.memMeta.readonly || null,
                    name: this.name,
                    type: this.memMeta.memDataType,
                    deprecated: this.memMeta.deprecated || null,
                    // doc: extract_doc(this),
                    // doc: this.jsDocMeta
                    doc: briefTag ? parse_brief_start_comment(briefTag.comment) : null
                })
            }
            case 'constructor':
            case 'staticMethod':
            case 'method': {
                const LINE_BREAKOR = '\n    ';

                return getResult({
                    memType: /* this.idlNodeType */'method',
                    comments: `! ${this.jsDocMeta.tags.reduce((accu, cur) => {
                        let line = `@${cur.name} `
                        switch (cur.name) {
                            case 'brief': {
                                line += `${cur.comment || cur.text}`
                                break;
                            }
                            case 'param': {
                                line += `${cur.paramName} ${cur.comment || cur.text}`
                            }
                        }

                        return accu.concat(line)
                    }, []).join('\n    ') + LINE_BREAKOR}`,
                    deprecated: this.memMeta.deprecated || null,
                    static: this.memMeta.static || null,
                    async: this.memMeta.async || null,
                    name: this.name,
                    type: this.memMeta.returnType && this.idlNodeType !== 'constructor' ? this.memMeta.returnType.name : null,
                    params: childNodes.length ? childNodes : null,
                    doc: extract_doc(this)
                });
            }
            case 'parameter': {
                const parentParamTag = this.parent.jsDocMeta.tags.find(tag => tag.paramName === this.name)

                return getResult({
                    type: this.paramMeta.idlDataType,
                    name: this.name,
                    default: parentParamTag && parentParamTag.defaultValueText ? {
                        value: parentParamTag.defaultValueText
                    } : null
                });
            }
            case 'tempProp:number': // what's this?
            case 'tempProp:string': // what's this?
            case 'tempProp:boolean': // what's this?
            case undefined: // what's this?
                return getResult({
                    tempIDLNodeType: this.idlNodeType
                });
        }
    }
}

/**
 * 
 * @param {IDL1Node} parentIdlNode 
 * @param {import('../fibjs/internal-ts/lib/typescript').TypeChecker} typeChecker 
 * 
 * @returns {(node: import('../fibjs/internal-ts/lib/typescript').Node) => void}
 */
const visit = (parentIdlNode, typeChecker) => node => {
    if (node.name) {
        // namespace for internal definition
        if (node.name.text === 'Buffer') {
            console.notice('[special node] node.name.text is', node.name.text);
            console.notice('[special node] node.kind is', node.kind);
            return;
        }

        // console.notice('node.name.text is', node.name.text);
        // console.notice('node.kind is', node.kind);
    }

    /**
     * @type {InstanceType<IDL1Node>}
     **/
    let idlNode = null;

    switch (node.kind) {
        /** @description 接口声明 */
        case ts.SyntaxKind.ClassDeclaration: {
            let clazzName = extract_class_name(node.name.text);
            ts.forEachChild(node, visit(idlNode = parentIdlNode.appendChild(clazzName, 'interface'), typeChecker));

            if (node.heritageClauses) {
                const [heritageClause] = node.heritageClauses;
                const [parentClazz] = heritageClause.types;

                switch (parentClazz.expression.kind) {
                    case ts.SyntaxKind.PropertyAccessExpression: {
                        idlNode.interfaceMeta.heritage = extract_class_name(parentClazz.expression.name.escapedText);
                        break
                    }
                    case ts.SyntaxKind.ExpressionWithTypeArguments:
                    default: {
                        idlNode.interfaceMeta.heritage = extract_class_name(parentClazz.expression.escapedText);
                        break
                    }
                }
            }

            idlNode.idlNodeType = 'interface'
            break;
        }
        case ts.SyntaxKind.Constructor: {
            let constructorName = extract_class_name(node.parent.name.text);
            ts.forEachChild(node, visit(idlNode = parentIdlNode.appendChild(constructorName, 'constructor'), typeChecker));

            const signature = typeChecker.getSignatureFromDeclaration(node);

            idlNode.idlNodeType = 'constructor';
            const infos = extractFunctionLikeSignature(signature, typeChecker, node);

            idlNode.memMeta.parameters = infos.parameters;
            idlNode.memMeta.returnType = infos.return;

            break;
        }
        /** @description 成员方法或静态方法 */
        case ts.SyntaxKind.MethodDeclaration: {
            let memberFnName = node.name.text/*  || 'sth is MethodDeclaration' */;
            const isStatic = hasStaticModifier(node);
            const idlNodeType = isStatic ? 'staticMethod' : 'method';
            ts.forEachChild(node, visit(idlNode = parentIdlNode.appendChild(memberFnName, idlNodeType), typeChecker));

            if (isStatic) {
                idlNode.memMeta.static = 'static'
            }

            const signature = typeChecker.getSignatureFromDeclaration(node);
            const infos = extractFunctionLikeSignature(signature, typeChecker, node);

            idlNode.memMeta.parameters = infos.parameters;
            idlNode.memMeta.returnType = infos.return;

            break;
        }
        /** @description 成员属性或静态属性 */
        case ts.SyntaxKind.PropertyDeclaration: {
            let propertyName = node.symbol.getEscapedName();
            const isStatic = hasStaticModifier(node);
            const idlNodeType = isStatic ? 'staticProperty' : 'property';
            ts.forEachChild(node, visit(idlNode = parentIdlNode.appendChild(propertyName, idlNodeType), typeChecker));

            if (hasStaticModifier(node)) {
                idlNode.memMeta.static = 'static'
            }

            idlNode.memMeta.memDataType = mapPropertyTypeToIdlDataType(node)

            break;
        }
        /** @description 函数参数 */
        case ts.SyntaxKind.Parameter: {
            let paramName = node.name.text;
            ts.forEachChild(node, visit(idlNode = parentIdlNode.appendChild(paramName, 'parameter'), typeChecker));

            idlNode.idlNodeType = 'parameter';

            // @see node.dotDotDotToken 说明是 restType
            // @see node.questionToken 说明是 可选参数
            // @see 如果需要获取所有的 ts type 类型索引, 可以参考 ts.isTypeNodeKind 这个函数的内部实现

            const tags = node.symbol.getJsDocTags();

            idlNode.paramMeta.dataTypeText = node.type.getText();
            idlNode.paramMeta.idlDataType = mapTsParamDataTypeToIdlType(node.type.getText(), node);

            idlNode.paramJsDocMeta.tag = tags[0] || null;
            idlNode.paramJsDocMeta.tags = tags;

            break;
        }
        /** @description 模块声明 */
        case ts.SyntaxKind.ModuleDeclaration:
            let moduleName = node.name.text;
            ts.forEachChild(node, visit(idlNode = parentIdlNode.appendChild(moduleName, 'module'), typeChecker));

            idlNode.idlNodeType = 'module';
            break;
        case ts.SyntaxKind.ModuleBlock:
            ts.forEachChild(node, visit(parentIdlNode, typeChecker));
            break;
        case ts.SyntaxKind.InterfaceDeclaration: {
            if (findNocppTagFromJSDocTags(node.symbol.getJsDocTags())) {
                break;
            };

            let interfaceName = node.name.text;
            parentIdlNode[interfaceName] = {};
            ts.forEachChild(node, visit(parentIdlNode.appendChild(interfaceName), typeChecker));
            break;
        }
        case ts.SyntaxKind.PropertySignature:
            let propertyName = node.name;
            let propertyType = node.type;
            let arrayDeep = 0;
            let realPropertyName =
                'string' !== typeof propertyName && 'text' in propertyName
                    ? propertyName.text
                    : propertyName;
            while (propertyType.kind === ts.SyntaxKind.ArrayType) {
                arrayDeep++;
                propertyType = propertyType.elementType;
            }
            if (propertyType.kind === ts.SyntaxKind.TypeReference) {
                let realPropertyType = propertyType.typeName;
                parentIdlNode.appendChild(
                    realPropertyName,
                    'Array<'.repeat(arrayDeep) +
                    (realPropertyType.kind === ts.SyntaxKind.QualifiedName
                        ? realPropertyType.getText()
                        : 'text' in realPropertyType
                            ? realPropertyType.text
                            : realPropertyType) +
                    '>'.repeat(arrayDeep)
                );
            } else {
                for (let type in PROPERTY_TYPES) {
                    if (propertyType.kind === PROPERTY_TYPES[type]) {
                        parentIdlNode.appendChild(realPropertyName, `tempProp:${type}`);
                        break;
                    }
                }
            }
            break;
        default:
            break;
    }

    /* fill comments */
    if (idlNode) {
        if (node.jsDoc) {
            const [jsDoc] = node.jsDoc;
            idlNode.jsDocMeta.fullText = jsDoc.getFullText()
            idlNode.jsDocMeta.tags = !jsDoc.tags ? [] : jsDoc.tags.map(tag => {
                const tagNameFullText = tag.name ? tag.name.getFullText() : null
                let matched;
                matched = !tagNameFullText ? [] : (jsDoc.getFullText() || '').match(new RegExp(`@param\\s\\[${tagNameFullText}\\s?=\\s?(.+)\\]`))
                const defaultValue = matched ? matched[1] : undefined

                return {
                    name: tag.tagName.escapedText,
                    comment: tag.comment,
                    tagNameFullText,
                    defaultValueText: defaultValue,
                    paramName: tagNameFullText,
                }
            })
        }

        switch (idlNode.idlNodeType) {
            case 'property':
            case 'staticProperty':
            case 'constructor':
            case 'staticMethod':
            case 'method': {
                if (!!idlNode.jsDocMeta.tags.find(tag => tag.name === 'deprecated')) {
                    idlNode.memMeta.deprecated = true
                }

                if (hasReadonlyModifier(node) || idlNode.jsDocMeta.tags.find(tag => tag.name === 'readonly')) {
                    idlNode.memMeta.readonly = 'readonly'
                }

                if (!!idlNode.jsDocMeta.tags.find(tag => tag.name === 'async')) {
                    idlNode.memMeta.async = true
                }
                break;
            }
        }
    }
};

const ROOT_NAME = 'root';

exports.ts2json = function ts2json(filenames, options) {
    const idlNode = new IDL1Node({ name: ROOT_NAME, type: null }, null);

    const program = ts.createProgram(filenames, options);
    const checker = program.getTypeChecker();
    const sourceFiles = program.getSourceFiles();

    sourceFiles.forEach(sourceFile => {
        ts.forEachChild(sourceFile, visit(idlNode, checker));
    })

    // return idlNode.getIDLNodeWrapper()[ROOT_NAME];
    return idlNode.getIDLNodeWrapper();
};