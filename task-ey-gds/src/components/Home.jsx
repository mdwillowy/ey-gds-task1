// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sample data for featured auctions
  const featuredAuctions = [
    { id: 1, title: 'Auction Item 1', description: 'Description 1', image: '/pexels1.jpg' },
    { id: 2, title: 'Auction Item 2', description: 'Description 2', image: '/pexels2.jpg' },
    { id: 3, title: 'Auction Item 3', description: 'Description 3', image: '/pexels3.jpg' },
  ];

  return (
    <div style={homeStyle}>
      <h1>Featured Auctions</h1>
      <div className="auction-list" style={auctionListStyle}>
        {featuredAuctions.map(auction => (
          <div key={auction.id} className="auction-item" style={auctionItemStyle}>
            <img src={auction.image} alt={auction.title} style={imageStyle} />
            <h2>{auction.title}</h2>
            <p>{auction.description}</p>
            <Link to={`/auction/${auction.id}`} style={linkStyle}>View Auction</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const homeStyle = {
  padding: '20px',
  textAlign: 'center', // Center the heading text
};

const auctionListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', // Center the items horizontally
  alignItems: 'center', // Center the items vertically (if needed)
  gap: '20px',
};

const auctionItemStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  width: '200px',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '5px',
};

const linkStyle = {
  display: 'inline-block',
  marginTop: '10px',
  padding: '5px 10px',
  backgroundColor: '#007bff',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
};

export default Home;