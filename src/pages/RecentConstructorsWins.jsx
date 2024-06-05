import React from 'react';
import './recentConstructorsWins.css';

const RecentConstructorsWins = () => {
  const data = [
    { constructorName: 'Ferrari', wins: 120 },
    { constructorName: 'Red Bull', wins: 118 },
    { constructorName: 'Mercedes', wins: 116 },
    { constructorName: 'McLaren', wins: 61 },
    { constructorName: 'Renault', wins: 20 },
  ];

  return (
    <div className="recent-constructors-wins-page">
      <div className="content-container">
        <h1>Constructor Wins 2000-2024</h1>
        <div className="constructors-wins-container">
          {data.map((constructor, index) => (
            <div key={index} className="constructor-card">
              <h3>{constructor.constructorName}</h3>
              <p>Wins: {constructor.wins}</p>
            </div>
          ))}
        </div>
        <img src="/assets/f1-analysis/image.png" alt="Recent Constructors Wins Chart" className="constructors-wins-image" />
      </div>
    </div>
  );
};

export default RecentConstructorsWins;
