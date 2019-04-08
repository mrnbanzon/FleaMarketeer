import React from 'react';
import Header from './Header';
import Main from './Main';

class FleaMarketeer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Main />
      </React.Fragment>
    );
  }
}

export default FleaMarketeer;
