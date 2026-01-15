import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">

      {/* HEADER */}
      <header className="dashboard-header">
        <h2>UrbanView – Urban Analysis Dashboard</h2>
        <button className="home-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </header>

      <div className="dashboard-content">

        {/* SECTION 1 */}
        <section className="dashboard-card">
          <h3>1. Area & Time Selection</h3>
          <p>
            Select the region of interest and define the time periods for
            multi-temporal satellite analysis.
          </p>

          <div className="selection-row">
            <div>
              <label>Area of Interest</label>
              <input type="text" placeholder="Enter city or region" />
            </div>

            <div>
              <label>Time Periods</label>
              <select>
                <option>Current Year</option>
                <option>Last 5 Years</option>
                <option>Last 10 Years</option>
              </select>
            </div>
          </div>

          <button className="primary-btn">
            Proceed to Data Analysis
          </button>
        </section>

        {/* SECTION 2 */}
        <section className="dashboard-card">
          <h3>2. Satellite Data & Index Computation</h3>
          <p>
            Fetch satellite imagery using Google Earth Engine and compute
            relevant spectral indices.
          </p>

          <div className="index-grid">
            <div className="index-card">NDVI<br /><span>Vegetation</span></div>
            <div className="index-card">NDWI<br /><span>Water Bodies</span></div>
            <div className="index-card">NDBI<br /><span>Built-up Area</span></div>
            <div className="index-card">LST<br /><span>Surface Temp.</span></div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="dashboard-card">
          <h3>3. Change Detection & Suitability Score</h3>
          <p>
            Analyze temporal changes to assess environmental impact and urban
            growth sustainability.
          </p>

          <div className="score-box">
            <h4>Urban Suitability Score</h4>
            <span className="score">72 / 100</span>
            <p>Moderately Suitable for Urban Expansion</p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="dashboard-card">
          <h3>4. Visualization & Reports</h3>
          <p>
            Visualize analysis results and generate summary reports for planning
            and decision-making.
          </p>

          <div className="action-row">
            <button className="secondary-btn">View Maps</button>
            <button className="secondary-btn">Download Report</button>
            <button className="secondary-btn">Analyze Another Area</button>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Dashboard;
