import React, { useState, useEffect } from 'react';
import './f1Analysis.css';
import { useNavigate } from 'react-router-dom';

const F1Analysis = () => {
  const [showConstructorsWins, setShowConstructorsWins] = useState(false);
  const [constructors, setConstructors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating fetching data
    const data = [
      { constructorName: 'Ferrari', wins: 235 },
      { constructorName: 'McLaren', wins: 178 },
      { constructorName: 'Williams', wins: 114 },
      { constructorName: 'Mercedes', wins: 87 },
      { constructorName: 'Red Bull', wins: 59 },
      { constructorName: 'Team Lotus', wins: 45 },
      { constructorName: 'Renault', wins: 35 },
      { constructorName: 'Benetton', wins: 27 },
      { constructorName: 'Brabham', wins: 23 },
      { constructorName: 'Tyrrell', wins: 23 },
      { constructorName: 'Lotus-Climax', wins: 22 },
      { constructorName: 'BRM', wins: 17 },
      { constructorName: 'Cooper-Climax', wins: 10 },
      { constructorName: 'Lotus-Ford', wins: 11 },
      { constructorName: 'Alfa Romeo', wins: 10 },
      { constructorName: 'Matra-Ford', wins: 9 },
      { constructorName: 'Ligier', wins: 9 },
      { constructorName: 'Vanwall', wins: 27 },
      { constructorName: 'Brabham', wins: 23 },
      { constructorName: 'Tyrrell', wins: 23 },
    ];
    setConstructors(data);
  }, []);

  const handleToggleConstructorsWins = () => {
    setShowConstructorsWins(!showConstructorsWins);
  };

  const handleShowRecentConstructorsWins = () => {
    navigate('/recent-constructors-wins');
  };

  return (
    <div className="f1-analysis-page">
      <div className="content-container">
        <h1>F1 Analysis</h1>
        <div className="analysis-options">
          <button className="btn btn-primary" onClick={handleToggleConstructorsWins}>
            {showConstructorsWins ? 'Hide Constructors Wins' : 'Show Constructors Wins'}
          </button>
          <button className="btn btn-secondary" onClick={handleShowRecentConstructorsWins}>
            Show Constructor Wins 2000-2024
          </button>
        </div>
        {showConstructorsWins && (
          <div className="constructors-wins-content">
            <h2>Constructors Wins</h2>
            <div className="constructors-wins-container">
              {constructors.map((constructor, index) => (
                <div key={index} className="constructor-card">
                  <h3>{constructor.constructorName}</h3>
                  <p>Wins: {constructor.wins}</p>
                </div>
              ))}
            </div>
            <img src="/assets/f1-analysis/constwins.png" alt="Constructors Wins Chart" className="constructors-wins-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default F1Analysis;
