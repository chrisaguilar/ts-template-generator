"use strict";
const basic_1 = require("./basic");
const full_1 = require("./full");
const help_1 = require("./help");
const parseArgs_1 = require("./parseArgs");
function generate() {
    const arg = parseArgs_1.default();
    switch (arg[0]) {
        case 'b':
            return basic_1.default(arg[1]);
        case 'f':
            return full_1.default(arg[1]);
        case 'v':
            return console.log('v1.0.0');
        case 'h':
            return console.log(help_1.default);
        default:
            return console.error('This should never happen.');
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generate;
