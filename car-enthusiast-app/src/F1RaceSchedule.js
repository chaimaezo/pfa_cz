import React, { useState, useEffect } from 'react';
import './styles/F1RaceSchedule.css';

function F1RaceSchedule() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch('http://ergast.com/api/f1/current.json')
      .then(response => response.json())
      .then(data => {
        // Assuming the data structure, adjust according to the actual response
        setRaces(data.MRData.RaceTable.Races.map(race => ({
             ...race,
             infoUrl: `/race-info/${race.round}`,
        })
        ));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h2>Current F1 Race Schedule</h2>
      <ul>
        {races.map(race => (
            <li key={race.round}>
                <a href={race.infoUrl}>{race.raceName} - {race.date}</a>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default F1RaceSchedule;
