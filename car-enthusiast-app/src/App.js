import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import F1RaceSchedule from './F1RaceSchedule';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Car Enthusiast Hub</h1>
          <nav>
            <ul>
              <li><Link to="/vehicles">Vehicles</Link></li>
              <li><Link to="/races">Races</Link></li>
              {/* Other navigation items */}
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/races" element={<F1RaceSchedule />} />
          {/* Define other routes */}
        </Routes>
        <footer>
          <p>© 2024 Car Enthusiast Hub. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
