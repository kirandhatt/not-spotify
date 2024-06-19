import React from 'react';
import logo from '../../assets/logo/not-spotify-logo.jpg';
import profileAvatar from '../../assets/images/Mohan-muruge.jpg'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Not Spotify Logo" />
      </div>
      <div className="navbar__profile">
        <img src={profileAvatar} alt="Profile Avatar" className="navbar__profile-avatar" />
      </div>
    </header>
  );
};

export default Navbar;
