const fs = require('fs')
const path = require('path')

const mkdirp = exports.mkdirp = function (inputp) {
    try {
        if (!fs.exists(inputp))
            fs.mkdir(inputp);
    } catch (e) {
        mkdirp(path.dirname(inputp));
        try {
            fs.mkdir(inputp);
        } catch (e) { }
    }
}

function noDotFiles(x) {
    return x[0] !== '.';
}

const readdirr = exports.readdirr = function (root, filter, files, prefix) {
    prefix = prefix || '';
    files = files || [];
    filter = filter || noDotFiles;

    const dir = path.join(root, prefix);
    if (!fs.exists(dir)) return files;
    if (fs.stat(dir).isDirectory())
        fs.readdir(dir)
            .filter(filter)
            .forEach(name => readdirr(root, filter, files, path.join(prefix, name)));
    else
        files.push(prefix);

    return files;
}