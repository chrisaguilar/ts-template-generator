import * as React from 'react';
import * as ReactDOM from 'react-dom';

const styles = require('./static/global');

import { Main } from './Main/Main';

ReactDOM.render(
  <Main message='Hello, World!' />,
  document.getElementById('app')
);

// Accepts HMR updates from server
if ((module as any).hot)
  (module as any).hot.accept();
