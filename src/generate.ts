import basic from './basic';
import full from './full';
import help from './help';
import parseArgs from './parseArgs';

export default function generate(): void {
  const arg: string[] = parseArgs();
  switch (arg[ 0 ]) {
    case 'b':
      return basic(arg[ 1 ]);
    case 'f':
      return full(arg[ 1 ]);
    case 'v':
      return console.log(require('../package.json').version);
    case 'h':
      return console.log(help);
    default:
      return console.error('This should never happen.');
  }
}
