const test = require("test");
test.setup();

const io = require('io');
const path = require('path');
const tty = require('tty');
const child_process = require('child_process');

const cmd = process.execPath;

describe('tty', () => {
  it("isatty", () => {
    assert.isTrue(tty.isatty(0));
    assert.isTrue(tty.isatty(1));
    assert.isTrue(tty.isatty(2));
    assert.isFalse(tty.isatty(3));
    assert.throws(() => tty.isatty(-1));
    assert.throws(() => tty.isatty(9999999999999999));
  });

  describe('tty.readStream', () => {
    it("isTTY", () => {
      assert.isTrue(tty.readStream.isTTY);
    });

    it("'isRaw is true' by default", () => {
      assert.isFalse(tty.readStream.isRaw);
    });

    it("setRawMode", () => {
      var bs = child_process.spawn(cmd, [path.join(__dirname, 'tty_test', 'raw_mode1.js')]);
      var stdout = new io.BufferedStream(bs.stdout);

      assert.equal(stdout.readLine(), "by default, tty.readStream.isRaw is false");
      assert.equal(stdout.readLine(), "then, tty.readStream.isRaw is true");
      assert.equal(stdout.readLine(), "finally, tty.readStream.isRaw is false");
    });
  });
});

require.main === module && test.run(console.DEBUG);
