// webpack.common.config.ts - Shared config options for Webpack
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import { readdirSync } from 'fs';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve as res } from 'path';
import * as webpack from 'webpack';

const client: any = {};
const server: any = {};

const p = process.env.NODE_ENV === 'production';

// EXTERNALS - Libraries that shouldn't be bundled, but available

// The Enzyme docs say that for testing with Mocha/Karma/Webpack, these
// externals should be used in the Webpack configuration that's to be used with
// the testable code
client.externals = {
  cheerio: 'window',
  'react/addons': 'react',
  'react/lib/ExecutionEnvironment': 'react',
  'react/lib/ReactContext': 'react'
};

// This is complicated, so it's going to take a pretty long explanation. I
// really wanted to use TS on the server, but I *hated* all of the files being
// all over the place, so I decided to use Webpack to compile and bundle the
// server code together. This causes problems, though, because whenever you try
// to require a node module, and then try to compile it, Webpack really wants to
// mess with the way the library's code is structured, so it causes problems
// when trying to get bundled server code to work. The solution is to tell
// Webpack to recognize the modules, but to not try to bundle them. Which makes
// perfect sense, because the modules are there, they just shouldn't be messed
// with.
const nodeModules: any = {};
readdirSync(res('node_modules'))
  .filter((x) => [ '.bin' ].indexOf(x) === -1)
  .forEach((mod) => nodeModules[ mod ] = `commonjs ${ mod }`);

server.externals = nodeModules;

// LOADERS - Loaders that Webpack uses to process files

// There's not much to explain here, it's all pretty self-explanatory

const include = [
  res('src/config')
];

const css = {
  loader: 'css-loader',
  query: {
    modules: true,
    importLoaders: 1,
    localIdentName: p ? '[hash:base64:5]' : '[name]__[local]__[hash:base64:5]',
    sourceMap: true
  }
};

const postcss = 'postcss-loader?sourceMap';

const sass = 'sass-loader?sourceMap';

const style = 'style-loader?sourceMap';

export const styles = {
  test: /\.(s[ca]|c)ss$/,
  include: include.concat(res('node_modules')),
  loader: p ?
    ExtractTextPlugin.extract({
      fallbackLoader: style,
      loader: [ css, postcss, sass ]
    }) : [ style, css, postcss, sass ]
};

export const ts = {
  test: /\.tsx?$/,
  include,
  use: [ 'awesome-typescript-loader' ]
};

export const tslint = {
  enforce: 'pre',
  test: /\.tsx?$/,
  include,
  use: [
    {
      loader: 'tslint-loader',
      options: {
        extends: res('tslint.json'),
        emitErrors: true,
        failOnHint: true,
        formatter: 'stylish'
      }
    }
  ]
};

// PLUGINS - Plugins to be used with Webpack to enhance bundling

// Common plugins to be used by both the client and the server configurations
const common = [
  // Prevents Webpack from emitting when there's an error
  // Mostly useful for TS, because it doesn't exit when there's a TS error
  new webpack.NoEmitOnErrorsPlugin()
];

if (p) common.push(
  // Puts included libraries in 'production' mode, like React (if this isn't
  // used, React gives a really annoying and unhelpful error)
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  // Puts loaders in minimize mode (I think this is for ExtractTextPlugin, or
  // some other plugin, I can't really remember. It doesn't cause any problems,
  // though, so I'll leave it just in case)
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  // Minifies code to reduce file size
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    comments: false,
    sourceMap: true
  } as any)
);
else common.push(
  // Sets up HMR
  new webpack.HotModuleReplacementPlugin(),
  // Without this, HMR throws a nasty error. Not exactly sure what its purpose
  // is, as the docs for Webpack@2 aren't finished, at the moment
  new webpack.NamedModulesPlugin()
);

client.plugins = [
  // Extracts modules defined in the `vendors` entry object and puts them in a
  // separate file called vendor.js
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js',
    minChunks: Infinity
  }),
  // Dynamically creates an HTML page for the project using a template (which,
  // here, is provided by html-webpack-template), this takes care of creating an
  // HTML file for the project
  new (HtmlWebpackPlugin as any)({
    inject: false,
    template: require('html-webpack-template'),
    appMountId: 'app',
    minify: {
      collapseWhitespace: true,
      html5: true,
      // maxLineLength: 80,
      useShortDoctype: true
    },
    mobile: true,
    title: 'Template',
    filename: 'index.html',
    favicon: res('src/client/static/favicon.ico'),
    hash: true,
    cache: true
  })
].concat(common);

if (p) client.plugins.push(
  // Extracts CSS files require-d into the project and puts them into
  // app.css, reducing the size of app.js, but also requires
  // users to download another file (which, really, is not *that* big of a deal)
  new ExtractTextPlugin({
    filename: 'app.css',
    allChunks: true
  })
);

server.plugins = [].concat(common);

// RESOLVE - Recognized file extensions & aliases for Webpack

// alias: points defined modules to different places. Here, it's needed because
//        without it, sinon doesn't work properly (based on my experiences)
//
// extensions: defines file extensions that Webpack should automatically plug in
//              when one isn't provided in an import or require statement
//              EX: require('./someLib') rather than require('./someLib.js')

const resolve = {
  alias: { sinon: 'sinon/pkg/sinon.js' },
  extensions: [ '.js', '.jsx', '.ts', '.tsx', '.scss', '.css' ]
};

client.resolve = resolve;
server.resolve = resolve;

export { client, server };
