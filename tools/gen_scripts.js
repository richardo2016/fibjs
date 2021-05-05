/// <reference path="../npm/types/index.d.ts" />

var fs = require('fs');
var path = require('path').posix;
var encoding = require('encoding');
var zlib = require('zlib');

const _dflt_on_txts = (ctx) => {
    const fpath = path.join(ctx.base_dir, path.basename(ctx.current_file, ".js"));
    ctx.txts.push(`{"${fpath}", ${ctx.bin_length}, (const char*)dat_${ctx.current_idx}},`);
};

const _dflt_on_datas = (ctx) => {
    ctx.datas.push(`static const unsigned char dat_${ctx.current_idx}[] = ` + ctx.hex + ';');
};

function enc_folder(dir, options) {
    const {
        base,
        filter_file,
        on_txts = _dflt_on_txts,
        on_datas = _dflt_on_datas,

        // variables on walk-through
        txts = [],
        datas = [],
        leveler = '==',
    } = options;

    dir && console.notice(`${leveler} resolving ${dir} :start`)

    fs.readdir(path.join(base, dir)).forEach(f => {
        var stat = fs.stat(path.join(base, dir, f))
        if (stat.isDirectory()) {
            enc_folder(path.join(dir, f), {
                ...options,
                txts, datas, leveler: leveler + leveler
            });
        }

        if (!stat.isFile()) {
            return
        }

        if (filter_file(f) === false)
            return;

        console.log("encoding", path.join(dir, f));
        var code = fs.readTextFile(path.join(base, dir, f));

        var bin = zlib.deflate(new Buffer(code));
        var hex = bin.hex();

        var cnt = 0;
        hex = '{\n    ' + hex.replace(/../g, s => {
            cnt++;
            if (cnt == 20) {
                cnt = 0;
                return `0x${s},\n    `;
            }
            return `0x${s}, `;
        }) + '0}';

        var idx = datas.length;
        const file_ctx = {
            txts,
            datas,
            hex,
            base_dir: dir,
            current_file: f,
            bin_length: bin.length,
            current_idx: idx,
        }

        on_datas({ ...file_ctx });
        on_txts({ ...file_ctx });
    });

    dir && console.notice(`${leveler} resolving ${dir} :end\n`)

    return { txts, datas };
}

function pack_opt_tools() {
    const { datas, txts } = enc_folder("", {
        base: path.join(__dirname, "../fibjs/scripts"),
        filter_file: (f) => {
            if (f.substr(0, 1) === '.') {
                return false
            }

            if (f.indexOf('.js') === -1) {
                return false
            }
        }
    });

    fs.writeFile(path.join(__dirname, "../fibjs/src/base/opt_tools.cpp"), `/*
* opt_tools.cpp
*
*  Created on: Oct 15, 2017
*      Author: lion
*/

#include "options.h"

namespace fibjs {

${datas.join('\n\n')}

const OptData opt_tools[] = {
    ${txts.join('\n    ')}
    {NULL, 0, NULL}
};
}`);
}

function pack_opt_typescript_res() {
    const { datas, txts } = enc_folder("", {
        base: path.join(__dirname, "../fibjs/internal-ts"),
        filter_file: (f) => {
            if (f.substr(0, 1) === '.') {
                return false
            }

            if (
                f.indexOf('.js') === -1
                && f.indexOf('.json') === -1
                && f.indexOf('.ts') === -1
            ) {
                return false
            }
        },
        resolve_pathname: (dir, f) => path.join('@fibjs/internal-ts', dir, f),
        on_txts: (ctx) => {
            var fpath;

            fpath = path.join('@fibjs/internal-ts', ctx.base_dir, ctx.current_file);
            ctx.txts.push(`{"${fpath}", ${ctx.bin_length}, (const char*)dat_${ctx.current_idx}},`);
            if (fpath.endsWith('.js')) {
                fpath = path.join('@fibjs/internal-ts', ctx.base_dir, path.basename(ctx.current_file, '.js'));
                ctx.txts.push(`{"${fpath}", ${ctx.bin_length}, (const char*)dat_${ctx.current_idx}},`);
            }
        }
    });

    fs.writeFile(path.join(__dirname, "../fibjs/src/base/opt_typescript_res.cpp"), `/*
* opt_typescript_res.cpp
*
*  Created on: April 1, 2021
*      Author: Richard
*/

#include "options.h"

namespace fibjs {

${datas.join('\n\n')}

const OptData opt_typescript_res[] = {
    ${txts.join('\n    ')}
    {NULL, 0, NULL}
};
}`);
}

pack_opt_tools();
pack_opt_typescript_res();