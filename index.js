#!/usr/bin/env node

require('ts-node').register({
  cacheDirectory: require('path').resolve(__dirname, '.tsnode_cache/'),
  disableWarnings: true,
  fast: true,
  ignore: false,
  lazy: true,
  project: require('path').resolve(__dirname, 'tsconfig.json')
});

require('./src');
