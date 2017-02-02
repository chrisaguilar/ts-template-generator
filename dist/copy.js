"use strict";
const cpr = require('cpr');
function copy(src, dest) {
    return cpr(src, dest, {
        deleteFirst: false,
        overwrite: false,
        confirm: true
    }, (err, files) => {
        if (err)
            return console.error(err);
        else
            return console.log(files);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = copy;
