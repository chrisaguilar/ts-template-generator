import * as React from 'react';
const styles = require('./styles.scss');

import Main from '../Main';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div className={ styles.main }>
        <div className={ styles.text }>
          <h1>Hello, World!</h1>
          <Main message='how are you?' />
        </div>
      </div>
    );
  }
}
