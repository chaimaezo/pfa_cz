import React, { useEffect, useState } from 'react';
import './TeamPages.css';

const constructorLogos = {
  "Mercedes": "/assets/f1-logos/mercedes-logo.png",
  "Red Bull": "/assets/f1-logos/redbull-logo.png",
  "Ferrari": "/assets/f1-logos/ferrari-logo.jpg",
  "McLaren": "/assets/f1-logos/mclaren.png",
  "Alpine F1 Team": "/assets/f1-logos/Alpine_logo.png",
  "Sauber": "/assets/f1-logos/alphatauri.png",
  "Aston Martin": "/assets/f1-logos/astonmartin.png",
  "Williams": "/assets/f1-logos/williams-logo.png",
  "RB": "/assets/f1-logos/alfaromeo.png",
  "Haas F1 Team": "/assets/f1-logos/haas.png"
};

const TeamPages = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://ergast.com/api/f1/2024/constructors.json')
      .then(response => response.json())
      .then(data => {
        const teamData = data.MRData.ConstructorTable.Constructors.map(constructor => ({
          name: constructor.name,
          nationality: constructor.nationality,
          url: constructor.url,
          logo: constructorLogos[constructor.name] || '/assets/f1-logos/default.png'
        }));
        setTeams(teamData);
      })
      .catch(error => console.error('Error fetching team data:', error));
  }, []);

  return (
    <div className="team-pages">
      <h1>F1 Teams</h1>
      <div className="team-list">
        {teams.map((team, index) => (
          <div key={index} className="team-card">
            <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />
            <h2>{team.name}</h2>
            <p><strong>Nationality:</strong> {team.nationality}</p>
            <a href={team.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              More Info <i className="bi bi-info-circle"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPages;
