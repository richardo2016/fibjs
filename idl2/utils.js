exports.mapTsTypeToIdlType = function (returnType, signature, node) {
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
                throw new Error(`[mapTsTypeToIdlType] unsupported returnType.intrinsicName '${returnType.intrinsicName}'`);
        }
    }

    // console.log('[mapTsTypeToIdlType] signature is', signature)
    // console.log('[mapTsTypeToIdlType] node is', node)
}