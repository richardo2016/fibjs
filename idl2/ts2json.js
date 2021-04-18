/** @type {import("typescript")} */
const ts = require('@fibjs/internal-ts/lib/typescript');

const { mapTsTypeToIdlType } = require('./utils');

const PROPERTY_TYPES = {
    any: ts.SyntaxKind.AnyKeyword,
    boolean: ts.SyntaxKind.BooleanKeyword,
    number: ts.SyntaxKind.NumberKeyword,
    string: ts.SyntaxKind.StringKeyword,
    // object: ts.SyntaxKind.ObjectKeyword
};

function extract_class_name(className) {
    return className.replace(/Class__?/, '')
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
        };

        /** @description 作为参数时的 meta */
        this.paramMeta = {
            /** @description 默认值文本, 为 undefined 为表示无默认值, 为 null 表示 null */
            defaultValueText: undefined
        }

        /** @description 作为具有注释的节点时的 jsDoc 风格注释信息 */
        this.jsDocMeta = {
            /** @description 完整的文本 */
            fullText: '',
            /** @description comment 文本 */
            comment: '',
            /** @description 所有 tag */
            tags: [],
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
            childNodes = this.children.map(child => child.getIDLNodeWrapper())
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
                        console.log('[::getIDLNodeWrapper] child is', child);
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
            case 'interface':
                return getResult({
                    declare: {
                        comments: '',
                        type: this.idlNodeType,
                        name: this.name,
                    },
                    members: childNodes,
                    doc: {},
                    extend: null
                });
            case 'constructor':
            case 'method': {
                return getResult({
                    memType: /* this.idlNodeType */'method',
                    comments: this.memMeta.comments,
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

                return getResult({
                    type: "String",
                    name: this.name,
                    default: parentParamTag ? {
                        value: parentParamTag.defaultValue
                    } : undefined
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

function getNodeComments(node) {
    const commentRanges = ts.getLeadingCommentRanges(
        sourceFile.getFullText(),
        node.getFullStart()
    );

    if (commentRange && commentRange.length) {
        const commentStrings = commentRanges.map(
            r => sourceFile.getFullText().slice(r.pos, r.end)
        )
    }

}

const visit = (parentIdlNode, typeChecker) => node => {
    if (node.name) {
        // namespace for internal definition
        if (node.name.text === 'Fibjs') {
            // console.notice('node.name.text is', node.name.text);
            // console.notice('node.kind is', node.kind);
            return;
        }

        console.notice('node.name.text is', node.name.text);
        console.notice('node.kind is', node.kind);
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

            idlNode.idlNodeType = 'interface'
            break;
        }
        case ts.SyntaxKind.Constructor: {
            // console.log('[ts.SyntaxKind.Constructor] node is', node);
            let constructorName = extract_class_name(node.parent.name.text);
            ts.forEachChild(node, visit(idlNode = parentIdlNode.appendChild(constructorName, 'constructor'), typeChecker));

            const signature = typeChecker.getSignatureFromDeclaration(node);
            const returnType = typeChecker.getReturnTypeOfSignature(signature);

            idlNode.memMeta.__returnType = Object.keys(returnType);
            idlNode.memMeta.returnType = mapTsTypeToIdlType(returnType, signature, node);

            idlNode.idlNodeType = 'constructor';
            break;
        }
        /** @description 成员方法 */
        case ts.SyntaxKind.MethodDeclaration: {
            let memberFnName = node.name.text/*  || 'sth is MethodDeclaration' */;
            ts.forEachChild(node, visit(idlNode = parentIdlNode.appendChild(memberFnName, 'method'), typeChecker));

            const signature = typeChecker.getSignatureFromDeclaration(node);
            const returnType = typeChecker.getReturnTypeOfSignature(signature);

            idlNode.memMeta.__returnType = Object.keys(returnType);
            idlNode.memMeta.returnType = mapTsTypeToIdlType(returnType, signature, node);

            idlNode.idlNodeType = 'method';
            break;
        }
        /** @description 函数参数 */
        case ts.SyntaxKind.Parameter: {
            let paramName = node.name.text;
            ts.forEachChild(node, visit(idlNode = parentIdlNode.appendChild(paramName, 'parameter'), typeChecker));

            idlNode.idlNodeType = 'parameter';
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
        case ts.SyntaxKind.InterfaceDeclaration:
            let interfaceName = node.name.text;
            parentIdlNode[interfaceName] = {};
            ts.forEachChild(node, visit(parentIdlNode.appendChild(interfaceName), typeChecker));
            break;
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
            idlNode.jsDocMeta.comment = jsDoc.comment
            idlNode.jsDocMeta.fullText = jsDoc.getFullText()
            idlNode.jsDocMeta.tags = !jsDoc.tags ? [] : jsDoc.tags.map(tag => {
                const nameFullText = tag.name ? tag.name.getFullText() : null
                const matched = !nameFullText ? [] : (jsDoc.getFullText() || '').match(new RegExp(`@param\\s\\[${nameFullText}\\s?=\\s?(.+)\\]`))
                const defaultValue = matched ? matched[1] : undefined

                return {
                    name: tag.tagName.escapedText,
                    comment: tag.comment,
                    tagNameFullText: tag.tagName ? tag.tagName.getFullText() : null,
                    nameFullText: tag.name ? tag.name.getFullText() : null,
                    defaultValue: defaultValue
                }
            })
        }

        switch (idlNode.idlNodeType) {
            case 'constructor':
            case 'method': {
                idlNode.memMeta.comments = idlNode.jsDocMeta.fullText
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