var test = require("test");
test.setup();

var os = require('os');
var path = require('path');

var addons = require('addons');

var FIBJS_SRC_ROOT = path.resolve(__dirname, '../../');

describe('addons', () => {
    it('load internal hello world module', () => {
        var test_dlls = {
            'win32': path.resolve(__dirname, `./bin/Windows_${os.arch() === 'x64' ? 'amd64' : 'i386'}_release/hello.dll`),
            // 'win32': `C:\\Users\\Richard\\source\\repos\\fibjs\\addon_sample\\hello\\bin\\Windows_amd64_release\\hello.dll`,
            'darwin': `/Users/richard/projects/fibjs/addon_sample/hello/build/libaddon_hello.dylib`,
            'linux': path.resolve(__dirname, `./bin/Linux_${os.arch() === 'x64' ? 'amd64' : 'i386'}_release/hello.a`)
        };

        var tdll = test_dlls[process.platform];
        console.log('tdll', tdll);

        const internalHello = addons.load(tdll);

        assert.propertyVal(internalHello, "foo", "bar")
        assert.propertyVal(internalHello, "hello", "world")

        assert.isObject(internalHello.fibjsApi)
        assert.propertyVal(internalHello.fibjsApi, "engine", "fibjs")

        assert.propertyVal(internalHello, "number", 2020)
        assert.propertyVal(internalHello, "undefined", undefined)
        assert.propertyVal(internalHello, "bool_true", true)
        assert.propertyVal(internalHello, "bool_false", false)

        assert.isFunction(internalHello.func)
    });

    it('load non-existed addon', () => {

    });
});

require.main === module && test.run(console.DEBUG);