import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing-container">

      <section className="hero-section">
        <h1>UrbanView- Satellite Imagery analyzer for urban planning</h1>

        <p className="subtitle">
          Rapid urbanization requires fast, efficient, and AI-powered monitoring.
        </p>

        <h2 className="solution-headline">
          The AI-Powered Geospatial Intelligence Solution
        </h2>
        <p className="subtitle-solution">
          Satellite imagery and deep learning provide powerful, low-cost insights with minimal effort.
        </p>
        
        <Link to="/login" className="get-started-button">
          <button>Analyze Your City</button>
        </Link>
        
        <p className="signup-prompt">
          New user? <Link to="/signup">Create an Account</Link>
        </p>
      </section>

      <section className="features-section">
        <h2>Empowering Actionable Intelligence</h2>
        <div className="features-grid">
          
          <div className="feature-card">
            <h3>For Civic Bodies</h3>
            <p>Gain objective data on unauthorized development and environmental changes to enforce urban planning regulations effectively.</p>
          </div>
          
          <div className="feature-card">
            <h3>For Researchers</h3>
            <p>Access scalable, historical data archives for longitudinal studies on urban sprawl, green cover loss, and land-use change dynamics.</p>
          </div>

          <div className="feature-card">
            <h3>For the Public</h3>
            <p>Increase transparency and accountability by providing easy-to-use, powerful insights into local environmental and construction activities.</p>
          </div>
        </div>
      </section>

       <section className="cta-section">
        <h2>Ready to Transform Urban Monitoring?</h2>
        <Link to="/login" className="cta-button">
          <button>Access Dashboard</button>
        </Link>
      </section>

    </div>
  );
}

export default Landing;