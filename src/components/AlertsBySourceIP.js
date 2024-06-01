import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const AlertsBySourceIP = () => {
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

  const alertsBySrcIP = data.reduce((acc, alert) => {
    acc[alert.src_ip] = (acc[alert.src_ip] || 0) + 1;
    return acc;
  }, {});

  const x = Object.keys(alertsBySrcIP);
  const y = Object.values(alertsBySrcIP);

//   console.log('Processed data (Source IP):', { x, y }); 

  return (
    <Plot
      data={[
        {
          type: 'bar',
          x: x,
          y: y,
          marker: { color: 'rgba(55,128,191,0.6)', line: { color: 'rgba(55,128,191,1.0)', width: 2 } },
        },
      ]}
      layout={{ title: 'Alerts by Source IP', paper_bgcolor: 'black', plot_bgcolor: 'black', font: { color: 'white' } }}
    />
  );
};

export default AlertsBySourceIP;
