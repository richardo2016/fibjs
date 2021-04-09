const tty = require('tty')

console.log(`by default, tty.readStream.isRaw is ${tty.readStream.isRaw}`);

tty.readStream.setRawMode(true);

// this line would never print out to stdout(no write back)
console.log(`then, tty.readStream.isRaw is ${tty.readStream.isRaw}`);

tty.readStream.setRawMode(false);

console.log(`finally, tty.readStream.isRaw is ${tty.readStream.isRaw}`);