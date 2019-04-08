import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Inventory from './Inventory';

const PrimaryContent = props => (
  <div className="primary-content">
    <Header />
    <Summary />
    <Inventory />
  </div>
);

export default PrimaryContent;
