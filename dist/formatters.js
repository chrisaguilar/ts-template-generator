"use strict";
exports.b = '\x1B[1m';
exports.cols = Math.min(process.stdout.columns - 4, 80);
exports.hr = '-'.repeat(exports.cols);
exports.r = '\x1B[0m';
exports.red = '\x1B[31m';
