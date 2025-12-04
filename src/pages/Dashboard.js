import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [analysisHistory, setAnalysisHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    setAnalysisHistory([
      { id: 1, name: 'Orbit 55 Analysis', date: '2025-11-28', status: 'Completed' },
      { id: 2, name: 'Sensor Array Check', date: '2025-12-01', status: 'Processing' },
    ]);
  }, [navigate]);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
     
      <header className="dashboard-header">
        <h2>Satellite Analyzer Dashboard</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>

      <div className="dashboard-content">
        
        
        <section className="dashboard-section new-analysis-section">
          <h3>Start New Analysis</h3>
          <p>Configure parameters, upload new telemetry data, and initiate a new analysis task.</p>
          <button className="primary-button">
            New Analysis Configuration
          </button>
        </section>

        <section className="dashboard-section history-section">
          <h3>Analysis History</h3>
          {analysisHistory.length === 0 ? (
            <p>No past analysis found.</p>
          ) : (
            <table className="analysis-table">
              <thead>
                <tr><th>ID</th><th>Analysis Name</th><th>Date</th><th>Status</th></tr>
              </thead>
              <tbody>
                {analysisHistory.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        
        <section className="dashboard-section reports-section">
          <h3>Download Reports</h3>
          <p>Select a completed analysis from the history to download the final report (PDF/CSV).</p>
          <button className="secondary-button">Generate & Download Report</button>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;