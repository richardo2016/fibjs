const addon = require('./bin/Windows_amd64_release/addon-hello');

console.log('addon', addon);

const addon2 = require('./bin/Windows_amd64_release/addon-hello');

console.log('addon2', addon2);

console.log('addon === addon2', addon === addon2);