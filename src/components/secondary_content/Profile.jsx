import React from 'react';
import IconCreator from './IconCreator';

const Profile = ({ onTransaction, marketName, marketDesc }) => (
  <React.Fragment>
    <div className="nav-anchor-container">
      <a href="#" className="transaction-button" onClick={onTransaction}>
        Transaction
          </a>
    </div>
    <div className="profile">
      <h2>{marketName}</h2>
      <div className="profile__img">
        <img src="./images/profile-icon.png" alt="Profile Pic" />
      </div>
      <div className="profile__desc">
        <h3>Description:</h3>
        <p>{marketDesc}</p>
      </div>
      <div className="nav-anchor-container">
        <a href="#">Statistics/Transactions</a>
      </div>
      <IconCreator />
    </div>
  </React.Fragment>
);

export default Profile;
