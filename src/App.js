import React from 'react';
import AlertsByDestPort from './components/AlertsByDestPort';
import AlertsOverTime from './components/AlertsOverTime';
import AlertsBySeverity from './components/AlertsBySeverity';
import AlertsBySourceIP from './components/AlertsBySourceIP';
import './App.css';


//By Alok Kumar-IIIT Nagpur
const App = () => {
  return (
    <div className='App'>
      <div className="dashboard">
        <h1>Security Alerts Dashboard - WiJungle - by HttpCart</h1>
        <div className="chart-container">
          <div style={{ flex: 1 }}>
            <AlertsBySourceIP />
          </div>
          <div style={{ flex: 1 }}>
            <AlertsByDestPort />
          </div>
          <div style={{ flex: 1 }}>
            <AlertsBySeverity />
          </div>
          <div style={{ flex: 1 }}>
            <AlertsOverTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
