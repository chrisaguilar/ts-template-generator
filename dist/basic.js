"use strict";
const path_1 = require("path");
const copy_1 = require("./copy");
function basic(destination) {
    const destinationDir = path_1.resolve(process.cwd(), destination);
    const templateDir = path_1.resolve(__dirname, '../src/templates/basic');
    return copy_1.default(templateDir, destinationDir);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = basic;
