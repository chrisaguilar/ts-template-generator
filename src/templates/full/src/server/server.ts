import { createServer } from 'http';

let app = require('./app').default;

// Creates server for app on `port`, listens for requests
const port = process.env.PORT || 8080;
const server = createServer(app);

server.listen(port, '0.0.0.0', () =>
  console.log(`\x1Bc\n\n\x1B[1m\x1B[32m\x1B[4mReady on ${ port }\x1B[0m\n`)
);

// HMR setup. Listens for changes on files connected to, and including, ./app.
// When a file is changed, it updates the server to serve the changes.
if ((module as any).hot)
  (module as any).hot.accept('./app', () => {
    server.removeListener('request', app);
    app = require('./app').default;
    server.on('request', app);
  });
