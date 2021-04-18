exports.mapTsReturnTypeToIdlType = function (returnType, signature, node) {
    if (returnType.intrinsicName) {
        switch (returnType.intrinsicName) {
            case 'string':
                return 'String';
            case 'any':
                return 'Value';
            case 'void':
                return '';
            case 'number':
                return 'Number';
            case 'boolean':
                return 'Boolean';
            case 'error':
                return 'Error';
            case 'object':
                return 'Object';
            default:
                throw new Error(`[mapTsReturnTypeToIdlType] unsupported returnType.intrinsicName '${returnType.intrinsicName}'`);
        }
    }

    // console.log('[mapTsReturnTypeToIdlType] signature is', signature)
    // console.log('[mapTsReturnTypeToIdlType] node is', node)
}

exports.mapTsParamDataTypeToIdlType = function (parameterDataType, parameterNode) {
    switch (parameterDataType) {
        case 'any[]':
            return 'Array';
        case 'boolean':
            return 'Boolean';
        case 'string':
            return 'String';
        case 'i32':
            return 'Integer';
        case 'i64':
            return 'Long';
        case 'float':
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
            return 'ArrayLike<any>';
        case 'any':
            return 'Any';
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

            console.log(`[mapTsParamDataTypeToIdlType] parameter node is`, parameterNode);
            console.log(`[mapTsParamDataTypeToIdlType] parameterNode.parent.symbol.getJsDocTags() is`, parameterNode.parent.symbol.getJsDocTags());

            throw new Error(`[mapTsParamDataTypeToIdlType] unsupported parameterDataType '${parameterDataType}'`);
        }
    }
}

const extract_class_name = exports.extract_class_name = function extract_class_name(className) {
    return className.replace(/Class__?/, '')
}

const findNocppTagFromJSDocTags = exports.findNocppTagFromJSDocTags = function (tags) {
    return tags.find(tag => tag.name === 'nocpp');
}