import React from 'react';
import PrimaryContent from './primary_content/PrimaryContent';
import SecondaryContent from './secondary_content/SecondaryContent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      inventoryCount: 0,
      totalSales: 0,
      avgDiff: 0,
      hotItem: '',
      marketName: '',
      marketDesc: ''
    };

    this.inventoryAddItem = this.inventoryAddItem.bind(this);
    this.handleTransaction = this.handleTransaction.bind(this);
  }

  componentDidMount() {
    fetch('/loginData')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ...data });
      });
  }

  inventoryAddItem(product) {
    if (product.item === '') return;
    if (product.value === undefined || isNaN(product.value)) {
      product.value = 0;
    }
    if (product.amount === undefined || isNaN(product.amount)) {
      product.amount = 0;
    }

    let { inventory, inventoryCount } = this.state;
    product.id = inventory.length;
    product.diff = 0;
    inventory.push(product);
    inventoryCount += product.amount;
    this.setState({ inventory, inventoryCount });

    fetch('/addToInventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
  }

  handleTransaction(products, total) {
    // alter inventory, inventoryCount, totalSales
    console.log(products);
    console.log(total);
  }

  render() {
    return (
      <React.Fragment>
        <PrimaryContent
          inventory={this.state.inventory}
          inventoryCount={this.state.inventoryCount}
          inventoryAddItem={this.inventoryAddItem}
          totalSales={this.state.totalSales}
          avgDiff={this.state.avgDiff}
          hotItem={this.state.hotItem}
        />
        <SecondaryContent
          marketName={this.state.marketName}
          marketDesc={this.state.marketDesc}
          handleTransaction={this.handleTransaction}
        />
      </React.Fragment>
    );
  }
}

export default App;
