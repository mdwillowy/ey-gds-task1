
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import LoginRegister from './components/LoginRegister'; // Import the LoginRegister component
import MyAccount from './components/MyAccount';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<MyAccount />} />
          <Route path="/login" element={<LoginRegister />} /> {/* Update this line */}
          <Route path="/auction/:id" element={<div>Auction Details</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;