
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerLinksStyle}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>FACEBOOK</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>TWITTER</a>
        <Link to="/about" style={footerLinkStyle}>ABOUT</Link>
        <Link to="/resource" style={footerLinkStyle}>RESOURCE</Link>
        <Link to="/contact" style={footerLinkStyle}>CONTACT</Link>
      </div>
      <div style={disclaimerStyle}>
        <p>
          E-Auction is optimized for online purchase and sale of unique items from all over the world. A secure, transparent platform for conducting electronic auctions. While using E-Auction, you agree to have read and accepted our terms of use, cookie, and privacy policy.
        </p>
      </div>
      <div style={copyrightStyle}>
        <p>&copy; {new Date().getFullYear()} E-Auction. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  padding: '20px',
  backgroundColor: '#f8f9fa',
  textAlign: 'center',
  fontSize: '14px',
};

const footerLinksStyle = {
  marginBottom: '10px',
};

const footerLinkStyle = {
  margin: '0 15px',
  textDecoration: 'none',
  color: '#007bff', // Bootstrap primary color
};

const disclaimerStyle = {
  marginBottom: '10px',
  fontSize: '12px',
  color: '#555', // Darker gray for the disclaimer text
};

const copyrightStyle = {
  borderTop: '1px solid #ddd',
  paddingTop: '10px',
  fontSize: '12px',
  color: '#555', // Darker gray for copyright text
};

export default Footer;