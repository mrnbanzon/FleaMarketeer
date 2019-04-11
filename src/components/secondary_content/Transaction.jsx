import React from 'react';
import AddItem from '../primary_content/AddItem';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      items: []
    };

    this.add = this.add.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  add(item) {
    let { items } = this.state;
    item.id = items.length;
    items.push(item);
    this.setState({
      items,
      total: this.state.total + item.value * item.amount
    });
  }

  handleSubmit() {
    this.props.handleTransaction(this.state.items, this.state.total);
  }

  render() {
    return (
      <div className="transaction">
        <div className="transaction__content">
          <a href="#" onClick={this.props.onBackClick}>
            Back &rarr;
          </a>
          <h4>Transaction</h4>
        </div>
        <div className="transaction__table">
          <AddItem add={this.add} />
          <table>
            <thead>
              <tr>
                <th>item</th>
                <th>val.</th>
                <th>amnt.</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map(prod => (
                <tr key={prod.id}>
                  <td>{prod.item}</td>
                  <td>{prod.value.toFixed(2)}</td>
                  <td>{prod.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <div className="transaction__content">
          <h4>Total:</h4>
          <h3>{this.state.total.toFixed(2)}</h3>
        </div>
        <div className="nav-anchor-container">
          <a href="#"
            className="transaction-button"
            onClick={this.handleSubmit}
          >
            Submit
          </a>
        </div>
      </div>
    );
  }
}

export default Transaction;
