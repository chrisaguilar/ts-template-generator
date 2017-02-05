import webpackConfig from 'config/webpack';
import * as express from 'express';
import { resolve } from 'path';
import * as webpack from 'webpack';

const compiler = webpack(webpackConfig as any);
const p = process.env.NODE_ENV === 'production';

const router = express.Router();

/*

morgan:       logger
compression:  compresses requests that pass through
helmet:       minor security hole fixer
body-parser:  parses incoming request bodies

Put other non-route app configuration things here, like Passport.js setup,
MongoDB setup, LokiJS setup, etc. Usually things like that follow the same
format as what's already here, aka `require(module)[.method()?][(options?)]`.
Refer to each module's documentation to figure out how to configure each module.

*/
const appConfig = [
  require('morgan')('dev'),
  require('compression')(),
  require('helmet')(),
  require('body-parser').json()
];

if (!p)
  appConfig.push(
    require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: '/'
    }),
    require('webpack-hot-middleware')(compiler, {
      noInfo: true
    })
  );
router.use(appConfig);

if (p)
  router.use('/', express.static(resolve('dist/client')));

export default router;
