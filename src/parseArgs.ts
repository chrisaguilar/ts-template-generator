import * as minimist from 'minimist';

export default function parseArgs(): string[] {
  const args: minimist.ParsedArgs = minimist(process.argv.slice(2), {
    alias: {
      b: 'basic',
      f: 'full',
      h: 'help',
      v: 'version'
    }
  });

  const b: boolean = !!args[ 'b' ];
  const f: boolean = !!args[ 'f' ];
  const h: boolean = !!args[ 'h' ];
  const v: boolean = !!args[ 'v' ];
  const _: boolean = !!args._.length;

  if (h && typeof args[ 'h' ] === 'boolean' && !(b || f || v || _))
    return [ 'h' ];

  else if (v && typeof args[ 'v' ] === 'boolean' && !(b || f || h || _))
    return [ 'v' ];

  else if (b && typeof args[ 'b' ] === 'string' && !(f || h || v || _))
    return [ 'b', args[ 'b' ] ];

  else if (f && typeof args[ 'f' ] === 'string' && !(b || h || v || _))
    return [ 'f', args[ 'f' ] ];

  else
    return [ 'h' ];
}
