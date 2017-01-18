// I mean, there's not really any reason to edit this, unless a library you're
// trying to use requires some special setup. But even then, there might be a
// way around it.
import * as express from 'express';

import { router as config } from './app/appConfig';
import { router as routes } from './app/appRoutes';

const app = express();

// Sets up app; all requests will have to answer to the config, then the routes.
app.use([ config, routes ]);

export default app;
