import React, { useEffect, useState } from 'react';
import RaceResultsChart from '../components/RaceResultsChart';

const MotorsportsPage = () => {
    const [schedule, setSchedule] = useState([]);
    const [raceResults, setRaceResults] = useState([]);
  
    useEffect(() => {
      // Fetch Formula One calendar
      fetch('http://ergast.com/api/f1/current.json')
        .then(response => response.json())
        .then(data => setSchedule(data.MRData.RaceTable.Races))
        .catch(err => console.error('Error fetching schedule:', err));
  
      // Fetch race results for the latest race
      fetch('http://ergast.com/api/f1/current/last/results.json')
        .then(response => response.json())
        .then(data => {
          if (data.MRData && data.MRData.RaceTable && data.MRData.RaceTable.Races.length > 0) {
            setRaceResults(data.MRData.RaceTable.Races[0].Results);
          } else {
            console.error('Unexpected data structure:', data);
          }
        })
        .catch(err => console.error('Error fetching race results:', err));
    }, []);
  
    return (
      <div>
        <h1>Formula One Calendar</h1>
        <ul>
          {schedule.map((race, index) => (
            <li key={index}>
              {race.raceName} - {race.Circuit.circuitName} ({race.date})
            </li>
          ))}
        </ul>
        <h1>Race Results Analysis</h1>
        {raceResults.length > 0 ? (
          <RaceResultsChart raceResults={raceResults} />
        ) : (
          <p>No race results available.</p>
        )}
      </div>
    );
  };
  
  export default MotorsportsPage;