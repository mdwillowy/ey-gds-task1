
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="logo" style={logoStyle}>
        <img src="logo.jpeg" alt="E-AUCTION Logo" style={imageStyle} />
        <h3 style={titleStyle}>E-AUCTION</h3>
      </div>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}><Link to="/">Home</Link></li>
          <li style={navItemStyle}><Link to="/dashboard">My Account</Link></li>
          <li style={navItemStyle}><Link to="/login">Login/Register</Link></li>
        </ul>
      </nav>
      <input type="text" placeholder="Search for items..." style={searchStyle} />
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: '#f8f9fa',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const imageStyle = {
  width: '40px',
  height: '40px',
  marginRight: '10px',
};

const titleStyle = {
  margin: 0,
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  margin: '0 15px', // Add margin to create space between items
};

const searchStyle = {
  padding: '5px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

export default Header;