// src/pages/MotorsportsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MotorsportsPage.css';

const MotorsportsPage = () => {
  return (
    <div className="motorsports-page">
      <h1>Motorsports</h1>
      <p className="introduction">
        Welcome to the ultimate hub for motorsport enthusiasts! Here you can explore the latest updates, race schedules, and detailed guides for various circuits. Dive into the world of high-speed racing and stay informed about upcoming events and notable tracks. Get ready to fuel your passion for motorsports!
      </p>
      <Link to="/race-calendar" className="btn btn-primary">
        Race Calendar <i className="bi bi-calendar"></i>
      </Link>
      <Link to="/team-pages" className="btn btn-secondary">
        Team Pages <i className="bi bi-people"></i>
      </Link>
      <Link to="/f1-analysis" className="btn btn-primary">
        F1 Analysis <i className="bi bi-graph-up"></i>
      </Link>

    </div>
  );
};

export default MotorsportsPage;
