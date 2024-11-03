import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to GreenThumb</h1>
      <p>Discover the perfect houseplants for your home</p>
      <Link to="/products" className="get-started-btn">Get Started</Link>
    </div>
  );
};

export default LandingPage;
