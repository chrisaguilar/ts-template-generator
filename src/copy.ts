import * as fs from 'fs';
import { resolve } from 'path';

const cpr = require('cpr');

import { b, r, red } from './formatters';

export default function copy(src: string, dest: string): void {
  return cpr(src, dest, {
    deleteFirst: false,
    overwrite: false,
    confirm: true
  }, (err: any, files: any) => {
    if (err) return console.error(err);
    else return console.log(files);
  });
}
