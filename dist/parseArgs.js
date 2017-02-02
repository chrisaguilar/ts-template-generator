"use strict";
const minimist = require("minimist");
function parseArgs() {
    const args = minimist(process.argv.slice(2), {
        alias: {
            b: 'basic',
            f: 'full',
            h: 'help',
            v: 'version'
        }
    });
    const b = !!args['b'];
    const f = !!args['f'];
    const h = !!args['h'];
    const v = !!args['v'];
    const _ = !!args._.length;
    if (h && typeof args['h'] === 'boolean' && !(b || f || v || _))
        return ['h'];
    else if (v && typeof args['v'] === 'boolean' && !(b || f || h || _))
        return ['v'];
    else if (b && typeof args['b'] === 'string' && !(f || h || v || _))
        return ['b', args['b']];
    else if (f && typeof args['f'] === 'string' && !(b || h || v || _))
        return ['f', args['f']];
    else
        return ['h'];
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = parseArgs;
