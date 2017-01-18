import * as React from 'react';
const styles = require('./MainStyle.scss');

interface MainProps {
  message: string;
}

export class Main extends React.Component<MainProps, any> {
  constructor(props: MainProps) {
    super(props);
  }

  render() {
    return (
      <div className={ styles.main }>
        <h1 className={ styles.text }>{ this.props.message }</h1>
      </div>
    );
  }
}
