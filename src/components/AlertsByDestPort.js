import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
//Alok Kumar

const AlertsByDestPort = () => {
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

  const alertsByDestPort = data.reduce((acc, alert) => {
    acc[alert.dest_port] = (acc[alert.dest_port] || 0) + 1;
    return acc;
  }, {});

  const x = Object.keys(alertsByDestPort);
  const y = Object.values(alertsByDestPort);

//   console.log('Processed data (Destination Port):', { x, y });

  return (
    <Plot
      data={[
        {
          type: 'bar',
          x: x,
          y: y,
          marker: { color: 'rgba(255,65,54,0.6)', line: { color: 'rgba(255,65,54,1.0)', width: 2 } },
        },
      ]}
      layout={{ title: 'Alerts by Destination Port', paper_bgcolor: 'black', plot_bgcolor: 'black', font: { color: 'white' } }}
    />
  );
};

export default AlertsByDestPort;
