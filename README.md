# TS Template Generator

A personal TypeScript + Webpack + React template generator

### Why?

I like my template, but I don't like `git clone`ing or copying the files
manually, so I wrote a small script to do it for me with a single command.

### Installation

`$ npm install -g @chrisaguilar/ts-template-generator`

OR

`$ yarn global add @chrisaguilar/ts-template-generator`

### Usage

```
$ tstg <template> <dirname>

-h, --help      Print this screen
-v, --version   Print the version number
-b, --basic     Use the basic template
-f, --full      Use the full template
```

### Examples

```
$ tstg -b someDir           Puts the basic template in someDir
$ tstg --full anotherDir    Puts the full template in anotherDir
```

### Basic Template vs Full Template

**Basic**: provides a bare-bones TypeScript template that's useful for quickly
       getting a basic TypeScript project going, without much setup or extra
       packages, compared to the full template.

**Full**: is a full-stack TypeScript setup that uses hot reloading on both the
      client and the server for very rapid development.

### License

MIT License

Copyright (c) 2017 Christopher M. Aguilar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
