import { resolve } from 'path';

import copy from './copy';

export default function basic(destination: string): void {
  const destinationDir: string = resolve(process.cwd(), destination);
  const templateDir: string = resolve(__dirname, '../src/templates/basic');

  return copy(templateDir, destinationDir);
}
