const plats = {
    win32: 'Windows',
    darwin: 'Darwin',
    linux: 'Linux'
};

const addon = require(`./bin/${plats[process.platform]}_amd64_release/addon-hello`);

console.log('addon', addon);

const addon2 = require(`./bin/${plats[process.platform]}_amd64_release/addon-hello`);

console.log('addon2', addon2);

console.log('addon === addon2', addon === addon2);