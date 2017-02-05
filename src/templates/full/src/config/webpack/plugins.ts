import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve as res } from 'path';
import * as webpack from 'webpack';

const p = process.env.NODE_ENV === 'production';

const plugins = [
  // Prevents Webpack from emitting when there's an error
  // Mostly useful for TS, because it doesn't exit when there's a TS error
  new webpack.NoEmitOnErrorsPlugin(),
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
];

if (p) plugins.push(
  // Extracts CSS files require-d into the project and puts them into
  // app.css, reducing the size of app.js, but also requires
  // users to download another file (which, really, is not *that* big of a deal)
  new ExtractTextPlugin({
    filename: 'app.css',
    allChunks: true
  }),
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
else plugins.push(
  // Sets up HMR
  new webpack.HotModuleReplacementPlugin(),
  // Without this, HMR throws a nasty error. Not exactly sure what its purpose
  // is, as the docs for Webpack@2 aren't finished, at the moment
  new webpack.NamedModulesPlugin()
);

export default plugins;

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
