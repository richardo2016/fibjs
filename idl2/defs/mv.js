const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

const DIR = path.resolve(__dirname, './declare');
const files = fs.readdir(DIR)

const exe = process.execPath;

files.forEach(f => {
    const filename = path.join(DIR, f);
    const content = fs.readTextFile(filename);

    const isModule = content.includes(`declare module "`);
    const isClass = content.includes(`declare class Class_`);

    let item = null;
    if (isModule) {
        item = {
            src: filename,
            target: path.join(DIR, `../module/${f}`)
        };
    } else if (isClass) {
        item = {
            src: filename,
            target: path.join(DIR, `../class/${f}`)
        };
    }

    item && child_process.run('mv', [
        item.src,
        item.target
    ]);
});