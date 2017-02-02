import { b, hr, r } from './formatters';

const help: string = `
  ${ b }Usage: tstemplate-gen <template> <destination_dir>${ r }

  -h, --help      Print this screen
  -v, --version   Print the version number
  -b, --basic     Use the basic template
  -f, --full      Use the full template

  ${ hr }

  ${ b }Examples:${ r }

  $ tstg -b someDir           Puts the basic template in someDir
  $ tstg --full anotherDir    Puts the full template in anotherDir

  ${ hr }

  ${ b }Basic Template vs Full Template${ r }

  ${ b }Basic${ r }: provides a bare-bones TypeScript template that's useful for
         quickly getting a basic TypeScript project going, without much setup or
         extra packages, compared to the full template.

  ${ b }Full${ r }: is a full-stack TypeScript setup that uses hot reloading on
        both the client and the server for very rapid development.
`;

export default help;
