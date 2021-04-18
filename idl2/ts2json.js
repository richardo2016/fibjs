/** @type {import("typescript")} */
const ts = require('@fibjs/internal-ts/lib/typescript');

const {
    mapTsReturnTypeToIdlType,
    mapTsParamDataTypeToIdlType,
    extract_class_name,
    findNocppTagFromJSDocTags,
} = require('./utils');

const PROPERTY_TYPES = {
    any: ts.SyntaxKind.AnyKeyword,
    boolean: ts.SyntaxKind.BooleanKeyword,
    number: ts.SyntaxKind.NumberKeyword,
    string: ts.SyntaxKind.StringKeyword,
    // object: ts.SyntaxKind.ObjectKeyword
};

/**
 * 
 * @param {string} briefTag 
 * 
 * @return {import("./ir").IParsedDoc}
 */
function extract_doc(idlNode) {
    const briefTag = idlNode.jsDocMeta.tags.find(tag => tag.name === 'brief')
    let [briefLine, ...rest] = briefTag.comment.split('\n')

    rest = rest.filter(x => x);

    return {
        descript: briefLine,
        detail: rest,
        params: []
    }
}

class IDL1Node {
    constructor({ name, type }, parent) {
        this.children = [];
        this.name = name;
        // this.type = type;

        /** @description 经典的自定义 idl IR */
        this.version = 'classical';

        /** @description 父 IDL1Node 节点 */
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

        /**
         * @description 输出为 idl node 时的类型
         * 
         * @type {'interface' | 'module' | 'member' | 'parameter' | 'parseddoc'}
         */
        this.idlNodeType = type;

        /** @description 作为成员时的 meta */
        this.memMeta = {
            /** @description 作为成员函数时的返回值 */
            returnType: null,
            /** @description 作为成员时的类型 */
            memType: null,
            /** @description 是否已弃用 */
            deprecated: null,
            /** @description 是否为静态方法 */
            static: null,
            /** @description 是否为异步方法 */
            static: null,
            /**
             * @description 作为成员函数时的参数
             * @type {{
             *  name: string
             *  tag: {
             *      name: string,
             *      text: string
             *  }
             * }[]}
             **/
            parameters: []
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
            /** @description 所有 tag */
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
                const briefTag = this.jsDocMeta.tags.find(tag => tag.name === 'brief')

                try {
                    briefTag.comment;
                } catch (error) {
                    console.error(error);
                    throw new Error(`[getIDLNodeWrapper] cannot access briefTag.comment for ${this.idlNodeType} '${this.name}'`);
                }

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
            case 'constructor':
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
                    type: this.memMeta.returnType || null,
                    params: childNodes.length ? childNodes : null,
                    doc: {
                        descript: "",
                        detail: [],
                        params: [],
                        return: {
                            descript: "",
                            detail: []
                        }
                    }
                });
            }
            case 'parameter': {
                const parentParamTag = this.parent.jsDocMeta.tags.find(tag => tag.nameFullText === this.name)

                console.log('this.paramJsDocMeta is', this.paramJsDocMeta);

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

function getNameFromFunctionLikeNode(node) {
    switch (node.kind) {
        case ts.SyntaxKind.MethodDeclaration:
            return node.name.text;
        case ts.SyntaxKind.Constructor:
            return node.parent.name.text;
        default:
            throw new Error(`[getNameFromFunctionLikeNode] unsupported function like node-kind ${node.kind}`)
    }
}

function extractFunctionLikeSignature(signature, functionLikeNode) {
    let parameters = [];

    if (signature.parameters && signature.parameters.length) {
        // console.log('signature.parameters is', signature.parameters);
        signature.parameters.forEach(param => {
            /* 在 jsdoc 中可能会有对应的注释 */
            if (signature.parameters[0].declarations) {
                const [declartion] = signature.parameters[0].declarations
                const [tag] = declartion.symbol.getJsDocTags();

                const paramName = param.getEscapedName();

                parameters.push({
                    name: paramName,
                    tag
                })

                if (!tag) {
                    // TODO: found out where no jsdoc for parameter
                    // console.warn(`[extractFunctionLikeSignature] no and jsdoc tag found for parameter '${paramName}' in functionLike '${getNameFromFunctionLikeNode(functionLikeNode)}'`)
                }
            }
        })
    } else {
        // console.log('signature is', signature);
    }

    return {
        parameters
    }
}

const visit = (parentIdlNode, typeChecker) => node => {
    if (node.name) {
        // namespace for internal definition
        if (node.name.text === 'ReadableStream') {
            console.notice('[special node] node.name.text is', node.name.text);
            console.notice('[special node] node.kind is', node.kind);
            return;
        }

        // console.notice('node.name.text is', node.name.text);
        // console.notice('node.kind is', node.kind);
        // console.notice('Object.keys(node) is', Object.keys(node));
        // if (node.jsDoc) {
        //     console.notice('node.jsDoc is', node.jsDoc);
        // }
    }

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
            const returnType = typeChecker.getReturnTypeOfSignature(signature);

            idlNode.memMeta.__returnType = Object.keys(returnType);
            idlNode.memMeta.returnType = mapTsReturnTypeToIdlType(returnType, signature, node);

            idlNode.idlNodeType = 'constructor';
            idlNode.memMeta.parameters = extractFunctionLikeSignature(signature, node).parameters;
            break;
        }
        /** @description 成员方法 */
        case ts.SyntaxKind.MethodDeclaration: {
            let memberFnName = node.name.text/*  || 'sth is MethodDeclaration' */;
            ts.forEachChild(node, visit(idlNode = parentIdlNode.appendChild(memberFnName, 'method'), typeChecker));

            const signature = typeChecker.getSignatureFromDeclaration(node);
            const returnType = typeChecker.getReturnTypeOfSignature(signature);

            idlNode.memMeta.__returnType = Object.keys(returnType);
            idlNode.memMeta.returnType = mapTsReturnTypeToIdlType(returnType, signature, node);

            idlNode.idlNodeType = 'method';
            idlNode.memMeta.parameters = extractFunctionLikeSignature(signature, node).parameters;
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
                const nameFullText = tag.name ? tag.name.getFullText() : null
                let matched;
                matched = !nameFullText ? [] : (jsDoc.getFullText() || '').match(new RegExp(`@param\\s\\[${nameFullText}\\s?=\\s?(.+)\\]`))
                const defaultValue = matched ? matched[1] : undefined

                return {
                    name: tag.tagName.escapedText,
                    comment: tag.comment,
                    tagNameFullText: tag.tagName ? tag.tagName.getFullText() : null,
                    nameFullText,
                    defaultValueText: defaultValue,
                    paramName: nameFullText,
                }
            })
        }

        switch (idlNode.idlNodeType) {
            case 'constructor':
            case 'method': {
                if (!!idlNode.jsDocMeta.tags.find(tag => tag.name === 'deprecated')) {
                    idlNode.deprecated = true
                }
                if (!!idlNode.jsDocMeta.tags.find(tag => tag.name === 'static')) {
                    idlNode.static = 'static'
                }
                if (!!idlNode.jsDocMeta.tags.find(tag => tag.name === 'async')) {
                    idlNode.async = true
                }
                break;
            }
        }
    }
};

const ROOT_NAME = 'root';

module.exports = function ts2json(filenames, options) {
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