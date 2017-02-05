import { resolve } from 'path';

const entry = {
  // normalize.css has to be in app, or else ExtractTextPlugin won't process
  // my custom .scss files. It also needs to come before the custom css, so
  // that it's put at the top of the file.
  index: [ 'normalize.css', resolve('src/client') ],
  // This is for modules that are needed for the app to work. This way, custom
  // application code and library code is separated on the client.
  vendor: [ 'babel-polyfill', 'whatwg-fetch', 'react', 'react-dom' ]
};

if (!(process.env.NODE_ENV === 'production')) {
  // This makes it possible for HMR to communicate between the server and
  // client.
  const wpHMR = 'webpack-hot-middleware/client?reload=true&timeout=2000';
  entry.index.unshift(wpHMR);
  entry.vendor.unshift(wpHMR);
}

export default entry;
