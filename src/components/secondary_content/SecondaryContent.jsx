import React from 'react';
import Transaction from './Transaction';
import Profile from './Profile';

class SecondaryContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTransaction: false
    };

    this.toggleTransaction = this.toggleTransaction.bind(this);
  }

  toggleTransaction() {
    this.setState({
      isTransaction: !this.state.isTransaction
    });
  }

  render() {
    return (
      <div className="secondary-content">
        <div className="logout">
          <a href="#">Logout</a>
        </div>
        {this.state.isTransaction ?
          <Transaction onBackClick={this.toggleTransaction} /> :
          <Profile onTransaction={this.toggleTransaction} />
        }
      </div>
    );
  }
}

export default SecondaryContent;
