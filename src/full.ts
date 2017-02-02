import { resolve } from 'path';

import copy from './copy';

export default function full(destination: string): void {
  const destinationDir: string = resolve(process.cwd(), destination);
  const templateDir: string = resolve(__dirname, '../src/templates/full');

  copy(templateDir, destinationDir);
}
