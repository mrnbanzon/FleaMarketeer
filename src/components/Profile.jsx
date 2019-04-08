import React from 'react';

const Profile = props => {
  return (
    <div className="profile">
      <h2>Market Name</h2>
      <div className="profile__img">
        <img src="./images/profile-icon.png" alt="Profile Pic" />
      </div>
      <div className="profile__desc">
        <h3>Description:</h3>
        <p>
          sed felis eget velit aliquet sagittis id consectetur purus ut faucibus
          pulvinar elementum integer enim neque volutpat ac tincidunt vitae
          semper quis lectus nulla at
        </p>
      </div>
      <div className="nav-anchor-container">
        <a href="#">Statistics/Transactions</a>
      </div>
      <div className="credit-to-icon-creator">
        Icons made by{' '}
        <a href="https://www.freepik.com/" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{' '}
        is licensed by{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </div>
    </div>
  );
};

export default Profile;
