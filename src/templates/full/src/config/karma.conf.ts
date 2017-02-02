// karma.conf.ts - Karma Test Runner Configuration
import * as karma from 'karma';
import webpackConfig from './webpack.client.config';

export = function (config: karma.Config) {
  config.set({
    autoWatch: false,
    browsers: [ 'Chrome', 'Firefox', 'PhantomJS' ],
    exclude: [ 'node_modules' ], // We don't want to try to test the files here
    files: [ 'clientTestIndex.js' ], // clientTestIndex dynamically adds files
    frameworks: [ 'chai', 'mocha', 'sinon' ],
    preprocessors: { 'clientTestIndex.js': [ 'webpack' ] },
    reporters: [ 'mocha' ],
    singleRun: true,
    webpack: {
      externals: webpackConfig.externals,
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    webpackMiddleware: { stats: 'errors-only' }
  } as karma.ConfigOptions);
};
