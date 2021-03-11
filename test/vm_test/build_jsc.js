var os = require('os');
var fs = require('fs');
var path = require('path');
var util = require('util');

const jscContent = util.compile("jsc_test.js", "module.exports = {a : 100};");

fs.writeFile(path.join(__dirname, `jsc_test_${os.arch()}.jsc`), jscContent);
fs.writeFile(path.join(__dirname, `jsc_test_${os.arch()}-${os.platform()}.jsc`), jscContent);