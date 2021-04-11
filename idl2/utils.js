exports.mapTsTypeToIdlType = function (tsType) {
    switch (tsType) {
        case 'string':
            return 'String';
        case 'any':
            return 'Value';
        default:
            throw new Error(`unsupported tsType '${tsType}'`);
    }
}