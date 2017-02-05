import * as React from 'react';

const styles = require('./styles.scss');

interface MainProps {
  message: string;
}

export default (props: MainProps) => {
  return (
    <div>
      <h3>{ props.message }</h3>
    </div>
  );
};
