import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import F1RaceSchedule from './F1RaceSchedule';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Header */}
        <header>
          <h1>Automotive Hub</h1>
          <p>Your central source for car enthusiasts!</p>
        </header>

        {/* Feature Buttons */}
        <section className="features">
          <div className="feature">
            <h2>Vehicles</h2>
            <p>Search for vehicles by brand, model, or category.</p>
            <button><Link to="/vehicles">Explore</Link></button>
          </div>
          <div className="feature">
            <h2>Racing Coverage</h2>
            <p>Stay updated with live results, rankings, and in-depth analyses.</p>
            <button><a href="/races">Check Races</a></button>
          </div>
          <div className="feature">
            <h2>Event Calendar</h2>
            <p>Plan your participation in upcoming auto events.</p>
            <button>View Calendar</button>
          </div>
          <div className="feature">
            <h2>Community Forums</h2>
            <p>Discuss favorite vehicles, mechanics, and racing experiences.</p>
            <button>Join Discussions</button>
          </div>
        </section>

        {/* Routes */}
        <Routes>
          <Route path="/races" element={<F1RaceSchedule  />} />
          {/* Define other routes */}
        </Routes>

        {/* Footer */}
        <footer>
          <p>© 2024 Automotive Hub</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
