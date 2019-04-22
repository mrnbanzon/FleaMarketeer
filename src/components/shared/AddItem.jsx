import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      value: '',
      amount: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { item, value, amount } = this.state;
    value = parseFloat(value);
    amount = parseInt(amount);
    this.props.add({ item, value, amount });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="item">item:</label>
          <input
            type="text"
            placeholder="item"
            name="item"
            value={this.state.item}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="value">value:</label>
          <input
            type="text"
            placeholder="value"
            name="value"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="amount">amount:</label>
          <input
            type="text"
            placeholder="amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default AddItem;
