import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
  return (
    <div className="home-page container">
      <div className="overlay"></div>
      <div className="content">
        <div className="hero-section mt-5">
          <h1>Welcome to Car Enthusiast Hub</h1>
          <p>Accelerate your automotive passion with our ultimate hub: from cutting-edge motorsports updates to in-depth car reviews and everything in between.</p>
        </div>
        <div className="nav-buttons d-flex justify-content-center mt-4">
          <Link to="/vehicles" className="nav-button btn mx-2">Vehicles</Link>
          <Link to="/MotoSport" className="nav-button btn mx-2">Motorsports</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
