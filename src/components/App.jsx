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
        this.setState({
          inventory: data.inventory,
          inventoryCount: data.inventoryCount,
          totalSales: data.totalSales,
          avgDiff: data.avgDiff,
          hotItem: data.hotItem,
          marketName: data.marketName,
          marketDesc: data.marketDesc
        });
      });
  }

  inventoryAddItem(item) {
    let { inventory } = this.state;
    item.id = inventory.length;
    item.diff = 0;
    inventory.push(item);
    this.setState({
      inventory,
      inventoryCount: this.state.inventoryCount + item.amount
    });
  }

  handleTransaction(items, total) {
    // alter inventory, inventoryCount, totalSales
    console.log(items);
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
