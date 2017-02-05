import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import './static/global.scss';

ReactDOM.render(<App />, document.getElementById('app'));

// Accepts HMR updates from server
if ((module as any).hot)
  (module as any).hot.accept();
