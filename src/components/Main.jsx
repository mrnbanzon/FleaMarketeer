import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Inventory from './Inventory';
import Profile from './Profile';

const Main = props => (
  <div id="main-container">
    <div className="primary-content">
      <Header />
      <Summary />
      <Inventory />
    </div>
    <div className="secondary-content">
      <div className="logout">
        <a href="#">Logout</a>
      </div>
      <div className="nav-anchor-container">
        <a href="#" className="start-transaction">
          Transaction
        </a>
      </div>
      <Profile />
    </div>
  </div>
);

//don't forget modal for transactions.. figure that out later
export default Main;
