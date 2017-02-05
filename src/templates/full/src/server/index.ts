import * as express from 'express';

import config from './app/config';
import routes from './app/routes';

const app = express();
const port = process.env.PORT || 8080;

app.use([ config, routes ]);

app.listen(port, '0.0.0.0', () =>
  console.log(`\x1Bc\n\n\x1B[1m\x1B[32m\x1B[4mReady on ${ port }\x1B[0m\n`)
);
