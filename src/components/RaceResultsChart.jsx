import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const RaceResultsChart = ({ raceResults }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Check if raceResults has data before creating the chart
    if (raceResults.length > 0) {
      const lapTimes = raceResults.map(result => result.Time && result.Time.time ? parseFloat(result.Time.time) : 0);
      const driverNames = raceResults.map(result => result.Driver && result.Driver.familyName ? result.Driver.familyName : 'Unknown');

      // Create new chart instance
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: driverNames,
          datasets: [{
            label: 'Lap Times',
            data: lapTimes,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [raceResults]);

  return <canvas ref={chartRef}></canvas>;
};

export default RaceResultsChart;
