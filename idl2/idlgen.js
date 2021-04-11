/**
 * @author richardo2016@gmail.com
 * @email richardo2016
 * @create date 2021-04-12 02:11:41
 * @modify date 2021-04-12 02:11:41
 *
 * @desc generate idl json from typescript definitions
 */

const fs = require('fs')
const path = require('path')

const PROJ_ROOT = path.resolve(__dirname, '../')
const IDL2_ROOT = path.resolve(__dirname, './defs')

const { mkdip, readdirr } = require('../fibjs/scripts/internal/helpers/fs')

// JUST for tunning
const OUT_TARGET = path.resolve(PROJ_ROOT, './out/idljson2');

const defPaths = readdirr(
    IDL2_ROOT,
    (x) => x && !x.endsWith('.js')
).map(relp => {
    return path.join(IDL2_ROOT, relp)
})

// console.log('defPaths', defPaths);
// const idl2Json = require('./ts2json')(defPaths, {})
// const idl2Json = require('./ts2json')([path.join(IDL2_ROOT, '../defs-test/t.d.ts')], {})
const idl2Json = require('./ts2json')([path.join(IDL2_ROOT, './index.d.ts')], {})

const dumpedJson = JSON.stringify(idl2Json, null, '\t');

fs.writeTextFile(path.join(PROJ_ROOT, './out/idldump.json'), dumpedJson);