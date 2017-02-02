"use strict";
const formatters_1 = require("./formatters");
const help = `
  ${formatters_1.b}Usage: tstemplate-gen <template> <destination_dir>${formatters_1.r}

  -h, --help      Print this screen
  -v, --version   Print the version number
  -b, --basic     Use the basic template
  -f, --full      Use the full template

  ${formatters_1.hr}

  ${formatters_1.b}Examples:${formatters_1.r}

  $ tstg -b someDir           Puts the basic template in someDir
  $ tstg --full anotherDir    Puts the full template in anotherDir

  ${formatters_1.hr}

  ${formatters_1.b}Basic Template vs Full Template${formatters_1.r}

  ${formatters_1.b}Basic${formatters_1.r}: provides a bare-bones TypeScript template that's useful for
         quickly getting a basic TypeScript project going, without much setup or
         extra packages, compared to the full template.

  ${formatters_1.b}Full${formatters_1.r}: is a full-stack TypeScript setup that uses hot reloading on
        both the client and the server for very rapid development.
`;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = help;
