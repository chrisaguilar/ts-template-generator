// webpack.client.config.ts - Client configuration file for Webpack
import { resolve as res } from 'path';
import * as webpack from 'webpack';

import { client, styles, ts, tslint } from './webpack.common.config';

const p = process.env.NODE_ENV === 'production';

const config = {
  name: 'Client',
  entry: {
    // normalize.css has to be in app, or else ExtractTextPlugin won't process
    // my custom .scss files. It also needs to come before the custom css, so
    // that it's put at the top of the file.
    app: [ 'normalize.css', res('src/client/App') ],
    // This is for modules that are needed for the app to work. This way, custom
    // application code and library code is separated on the client.
    vendor: [ 'babel-polyfill', 'whatwg-fetch', 'react', 'react-dom' ]
  },
  output: {
    path: res('build/client'),
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    noParse: [ /\/sinon\.js/ ], // If we encounter this, ignore it
    rules: [ tslint, ts, styles ]
  },
  devtool: p ? 'source-map' : false,
  externals: client.externals,
  plugins: client.plugins,
  resolve: client.resolve
};

if (!p) {
  // These two make it possible for HMR to communicate with the server and with
  // the client.
  config.entry.app.unshift('webpack-hot-middleware/client');
  config.entry.vendor.unshift('webpack-hot-middleware/client');
}

config.module.rules.forEach((rule) => rule.include.push(res('src/client')));

export default config;

/*
I don't know if I need this, but I'm going to leave it here just in case.
const config = {
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ].concat(common.plugins)
};
*/
