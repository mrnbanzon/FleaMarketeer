import React from 'react';
import Profile from './Profile';

const SecondaryContent = props => (
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
);

export default SecondaryContent;
