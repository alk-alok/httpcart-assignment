import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const AlertsOverTime = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        // console.log('Fetched data:', data);
        setData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const alertsOverTime = data.reduce((acc, alert) => {
    const date = new Date(alert.timestamp).toISOString().split('T')[0];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const x = Object.keys(alertsOverTime);
  const y = Object.values(alertsOverTime);

//   console.log('Processed data (Over Time):', { x, y });

  return (
    <Plot
      data={[
        {
          type: 'scatter',
          mode: 'lines+markers',
          x: x,
          y: y,
          line: { shape: 'spline' },
        },
      ]}
      layout={{ title: 'Alerts Over Time', paper_bgcolor: 'black', plot_bgcolor: 'black', font: { color: 'white' } }}
    />
  );
};

export default AlertsOverTime;
