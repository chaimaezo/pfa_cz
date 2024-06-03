import React, { useEffect, useState } from 'react';
import './raceCalendar.css';

const RaceCalendar = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch('https://ergast.com/api/f1/current.json')
      .then(response => response.json())
      .then(data => {
        setRaces(data.MRData.RaceTable.Races);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="race-calendar">
      <h1>F1 Race Calendar</h1>
      <div className="calendar">
        {races.map((race, index) => (
          <div key={index} className="race-item">
            <h2>{race.raceName}</h2>
            <p>{race.Circuit.circuitName}</p>
            <p>{new Date(race.date).toDateString()}</p>
            <button
              className="btn btn-secondary"
              onClick={() => window.location.href = `https://en.wikipedia.org/wiki/${race.Circuit.circuitName.replace(/\s/g, '_')}`}
            >
              View Track Guide <i className="bi bi-info-circle"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceCalendar;
