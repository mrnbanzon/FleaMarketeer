import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Inventory from './Inventory';

const PrimaryContent = props => (
  <div className="primary-content">
    <Header />
    <Summary
      inventoryCount={props.inventoryCount}
      totalSales={props.totalSales}
      avgDiff={props.avgDiff}
      hotItem={props.hotItem}
    />
    <Inventory
      inventory={props.inventory}
      addItem={props.inventoryAddItem}
    />
  </div>
);

export default PrimaryContent;
