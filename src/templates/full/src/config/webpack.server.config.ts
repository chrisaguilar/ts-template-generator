// webpack.server.config.ts - Server configuration file for Webpack
import { resolve as res } from 'path';
import * as webpack from 'webpack';

import { server, ts, tslint } from './webpack.common.config';

const p = process.env.NODE_ENV === 'production';

const config = {
  name: 'Server',
  entry: [ res('src/server/server') ],
  output: {
    path: res('build/server'),
    filename: 'index.js'
  },
  module: {
    noParse: [ /\/sinon\.js/ ], // If we encounter this, ignore it
    rules: [ tslint, ts ]
  },
  // Webpack treats the bundle differently depending on the target, obviously,
  // here, we need it to treat the server code in 'node' mode
  target: 'node',
  devtool: p ? 'source-map' : false,
  externals: server.externals,
  plugins: server.plugins,
  resolve: server.resolve
};

if (!p) {
  // Polls the HMR server/instance for code changes every second
  config.entry.push('webpack/hot/poll?1000');
}

config.module.rules.forEach((rule) => rule.include.push(res('src/server')));

export default config;
