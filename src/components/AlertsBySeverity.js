import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const AlertsBySeverity = () => {
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

  const alertsBySeverity = data.reduce((acc, alert) => {
    acc[alert.alert.severity] = (acc[alert.alert.severity] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(alertsBySeverity);
  const values = Object.values(alertsBySeverity);

//   console.log('Processed data (Severity):', { labels, values }); 

  return (
    <Plot
      data={[
        {
          type: 'pie',
          labels: labels,
          values: values,
        },
      ]}
      layout={{ title: 'Alerts by Severity', paper_bgcolor: 'black', plot_bgcolor: 'black', font: { color: 'white' } }}
    />
  );
};

export default AlertsBySeverity;
