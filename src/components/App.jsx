import React from 'react';
import PrimaryContent from './primary_content/PrimaryContent';
import SecondaryContent from './secondary_content/SecondaryContent';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <PrimaryContent />
        <SecondaryContent />
      </React.Fragment>
    );
  }
}

export default App;
