/** @type {import('../fibjs/internal-ts/lib/typescript')} */
const ts = require('@fibjs/internal-ts/lib/typescript');

function generalTypeReferenceMap(typeRefText) {
    switch (typeRefText) {
        case 'any[]':
            return 'Array';
        case 'boolean':
            return 'Boolean';
        case 'string':
            return 'String';
        case 'Fibjs.i32':
            return 'Integer';
        case 'Fibjs.i64':
            return 'Long';
        case 'Fibjs.float':
        case 'number':
            return 'Number';
        case 'Function':
            return 'Function';
        case 'Fibjs.AnyObject':
            return 'Object';
        case 'ArrayBuffer':
            return 'ArrayBuffer';
        case 'ArrayBufferView':
            return 'ArrayBufferView';
        case 'ArrayLike<any>':
            return 'TypedArray';
        case 'Iterable<any>':
        case 'AsyncIterableIterator':
            return 'Iterator';
        case 'any':
            return 'Value';
    }
}

function primitiveMapToIdlDataType(primitiveType) {
    switch (primitiveType) {
        case 'string':
            return 'String';
        case 'any':
            return 'Value';
        case 'void':
            return null;
        case 'number':
            return 'Number';
        case 'boolean':
            return 'Boolean';
        case 'object':
            return 'Object';
        default:
            throw new Error(`[primitiveMapToIdlDataType] unsupported primitiveType '${primitiveType}'`);
    }
}

/**
 * 
 * @param {import('../fibjs/internal-ts/lib/typescript').Type} returnType 
 * @param {import('../fibjs/internal-ts/lib/typescript').Signature} signature 
 * @param {import('../fibjs/internal-ts/lib/typescript').Node} node 
 * @returns 
 */
function mapTsReturnTypeToIdlType(returnType, signature, node) {
    if (
        signature.declaration.type
        && signature.declaration.type.kind === ts.SyntaxKind.TypeReference
    ) {
        const refName = signature.declaration.type.getFullText().trim();
        if (generalTypeReferenceMap(refName)) {
            return generalTypeReferenceMap(refName);
        }

        const identifierName = signature.declaration.type.typeName;
        if (identifierName && identifierName.escapedText && generalTypeReferenceMap(identifierName.escapedText)) {
            return generalTypeReferenceMap(identifierName.escapedText);
        }
    }

    if (returnType.intrinsicName) {
        switch (returnType.intrinsicName) {
            case 'string':
            case 'any':
            case 'void':
            case 'number':
            case 'boolean':
            case 'object': {
                return primitiveMapToIdlDataType(returnType.intrinsicName)
            }
            default: {
                // console.log('returnType is', returnType);
                // console.log('signature is', signature);
                // console.log('signature.declaration.type is', signature.declaration.type);

                throw new Error(`[mapTsReturnTypeToIdlType] unsupported returnType.intrinsicName '${returnType.intrinsicName}'`);
            }
        }
    }

    if (signature.declaration.type.kind === ts.SyntaxKind.ArrayType) {
        return 'Array';
    }

    if (returnType.getSymbol())
        return extract_class_name(returnType.getSymbol().getEscapedName())
}

exports.mapTsParamDataTypeToIdlType = function (parameterDataType, parameterNode) {
    switch (parameterDataType) {
        case 'any[]':
        case 'boolean':
        case 'string':
        case 'Fibjs.i32':
        case 'Fibjs.i64':
        case 'Fibjs.float':
        case 'number':
        case 'Function':
        case 'Fibjs.AnyObject':
        case 'ArrayBuffer':
        case 'ArrayBufferView':
        case 'ArrayLike<any>':
            return generalTypeReferenceMap(parameterDataType)
        case 'any':
            return 'Value';
        case 'Date':
            return 'Date';
        case 'T':
            return 'Genericxxx';
        default: {
            if (parameterDataType.startsWith('Class_')) {
                return extract_class_name(parameterDataType)
            } else if (parameterDataType.startsWith('Fibjs.AsyncCallback<')) {
                return `Function`;
            }

            if (
                findNocppTagFromJSDocTags(parameterNode.parent.symbol.getJsDocTags())
                || findNocppTagFromJSDocTags(parameterNode.parent.parent.symbol.getJsDocTags())
            ) {
                return null;
            }

            // console.log(`[mapTsParamDataTypeToIdlType] parameter node is`, parameterNode);
            // console.log(`[mapTsParamDataTypeToIdlType] parameterNode.parent.symbol.getJsDocTags() is`, parameterNode.parent.symbol.getJsDocTags());

            throw new Error(`[mapTsParamDataTypeToIdlType] unsupported parameterDataType '${parameterDataType}'`);
        }
    }
}

/**
 * 
 * @param {import('../fibjs/internal-ts/lib/typescript').Node} node 
 */
exports.mapPropertyTypeToIdlDataType = function (node) {
    function justGo() {
        if (node.type.exprName && node.type.exprName.escapedText) {
            return extract_class_name(node.type.exprName.escapedText)
        } else if (node.type.typeName && node.type.typeName.escapedText) {
            return extract_class_name(node.type.typeName.escapedText)
        } else if (node.type.getFullText().trim() === 'Fibjs.AnyObject') {
            return 'Object';
        } else if (generalTypeReferenceMap(node.type.getFullText().trim())) {
            return generalTypeReferenceMap(node.type.getFullText().trim())
        }
    }

    switch (node.type.kind) {
        case ts.SyntaxKind.NumberKeyword: {
            return 'Number'
        }
        case ts.SyntaxKind.StringKeyword: {
            return 'String'
        }
        case ts.SyntaxKind.BooleanKeyword: {
            return 'Boolean'
        }
        case ts.SyntaxKind.AnyKeyword: {
            return 'Value'
        }
        // tips: 此时会伴随一个 node.type.elementType 属性, 表明数组中的属性
        case ts.SyntaxKind.ArrayType: {
            return 'Array'
        }
        case ts.SyntaxKind.TypeReference: {
            if (justGo()) return justGo()
        }
        case ts.SyntaxKind.TypeQuery: {
            if (justGo()) return justGo()
        }
        default: {
            // console.log('[mapPropertyTypeToIdlDataType] node is', node);
            throw new Error(`[mapPropertyTypeToIdlDataType][via node.type.kind] unsupported property node '${node.symbol.getEscapedName()}' of '${node.parent.symbol.getEscapedName()}'`);
        }
        // return extract_class_name(node.type.typeName.escapedText)
    }
}

const extract_class_name = exports.extract_class_name = function extract_class_name(className) {
    return className.replace(/Class__?/, '')
}

const findNocppTagFromJSDocTags = exports.findNocppTagFromJSDocTags = function (tags) {
    return tags.find(tag => tag.name === 'nocpp');
}

/**
 * @returns {import('./ir').ISimpleParsedDoc}
 */
const parse_brief_start_comment = exports.parse_brief_start_comment = function (comment) {
    const [briefLine, ...rest] = comment.split('\n')

    return {
        descript: briefLine,
        detail: rest.filter(x => x),
    }
}

/**
 * 
 * @param {import('./ts2json').IDL1Node} idlNode 
 * 
 * @return {import("./ir").IParsedDoc}
 */
exports.extract_doc = function extract_doc(idlNode) {
    const briefTag = idlNode.jsDocMeta.tags.find(tag => tag.name === 'brief')
    if (!briefTag) {
        throw new Error(`[extract_doc] no #brief tag in idl node ${idlNode.name}`)
    }
    const {
        descript,
        detail,
    } = parse_brief_start_comment(briefTag.comment)

    let params;
    let _return;

    switch (idlNode.idlNodeType) {
        case 'interface':
        case 'module': {
            break
        }
        case 'method':
        case 'staticMethod':
        case 'constructor': {
            params = [];
            idlNode.memMeta.parameters.forEach(param => {
                params.push({
                    name: param.name,
                    descript: !param.tag ? null : param.tag.text.replace(new RegExp(`^${param.name} `), ''),
                    detail: []
                });
            })

            if (idlNode.memMeta.returnType && idlNode.memMeta.returnType.tag) {
                _return = parse_brief_start_comment(idlNode.memMeta.returnType.tag.text);
            }
            break
        }
        case 'staticProperty': {

        }
        default: {
            throw new Error(`[extract_doc] unsupported idlNode with (idlNodeType: ${idlNode.idlNodeType})`)
        }
    }

    return {
        descript,
        detail,
        params,
        return: _return,
    }
}

/**
 * 
 * @param {import('../fibjs/internal-ts/lib/typescript').Node} node 
 * @returns 
 */
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

/**
 * 
 * @param {import('../fibjs/internal-ts/lib/typescript').Signature} signature 
 * @param {import('../fibjs/internal-ts/lib/typescript').TypeChecker} typeChecker 
 * @param {import('../fibjs/internal-ts/lib/typescript').Node} functionLikeNode 
 * @returns {{
 *  parameters: {
 *      name: string,
 *      tag: import('../fibjs/internal-ts/lib/typescript').JSDocTagInfo[]
 *  }[],
 *  return: null | {
 *      name: string,
 *      tag?: import('../fibjs/internal-ts/lib/typescript').JSDocTagInfo[]
 *  }
 * }}
 */
exports.extractFunctionLikeSignature = function (signature, typeChecker, functionLikeNode) {
    let parameters = [];
    let _return = null;

    if (signature.getParameters() && signature.getParameters().length) {
        signature.getParameters().forEach(param => {
            /* 在 jsdoc 中可能会有对应的注释 */
            if (param.declarations) {
                const [declartion] = param.declarations
                const paramName = param.getEscapedName();

                const tag = declartion.symbol.getJsDocTags().find(tag =>
                    // 格式: @param <var>
                    tag.text.startsWith(`${paramName} `)
                    // 格式: @param [<var> = xxx]
                    || tag.text.startsWith(`[${paramName} `)
                );

                parameters.push({
                    tagType: 'param',
                    name: paramName,
                    tag
                });
            }
        })
    }

    const returnType = typeChecker.getReturnTypeOfSignature(signature);
    if (returnType) {
        if (returnType.getSymbol()) {
            _return = {
                name: extract_class_name(returnType.symbol.getEscapedName()),
                tag: null,
            }
        } else {
            _return = {
                name: mapTsReturnTypeToIdlType(returnType, signature, functionLikeNode),
                tag: null
            }
        }

        const declareJsDocTags = signature.declaration.symbol.getJsDocTags();
        const returnJsDocTag = declareJsDocTags.find(tag =>
            tag.name === 'return'
            || tag.name === 'returns'
        )

        if (returnJsDocTag) {
            // console.log('returnJsDocTag is', returnJsDocTag)
            _return.tag = returnJsDocTag
        }
    }

    return {
        parameters,
        return: _return
    }
}

/**
 * @description 判断一个 ts.Node 有没有 static 修饰符
 * @param {import('../fibjs/internal-ts/lib/typescript').Node} node 
 * @returns {boolean}
 */
exports.hasStaticModifier = function (node) {
    return node.modifiers
        && (node.modifiers.find(modifier => modifier.kind === ts.SyntaxKind.StaticKeyword))
}

/**
 * @description 判断一个 ts.Node 有没有 readonly 修饰符
 * @param {import('../fibjs/internal-ts/lib/typescript').Node} node 
 * @returns {boolean}
 */
exports.hasReadonlyModifier = function (node) {
    return node.modifiers
        && (node.modifiers.find(modifier => modifier.kind === ts.SyntaxKind.ReadonlyKeyword))
}

/**
 * @description 从一个 idlNode 的 jsDocMeta 中找出其中的 #brief 节点
 * 
 * @param {import('./ts2json').IDL1Node} idlNode 
 * @param {boolean} isNeedComment
 * 
 * @return {null | import('../fibjs/internal-ts/lib/typescript').JSDocTagInfo}
 */
exports.findBriefTag = function (idlNode, isNeedComment = true) {
    const briefTag = idlNode.jsDocMeta.tags.find(tag => tag.name === 'brief')

    if (isNeedComment) {
        try {
            briefTag.comment;
        } catch (error) {
            console.error(error);
            throw new Error(`[getIDLNodeWrapper] cannot access briefTag.comment for ${idlNode.idlNodeType} '${idlNode.name}'`);
        }
    }

    return briefTag;
}