import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';

function Landing() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="landing-container">

      
      <section className="hero-section">

        <h1 className="hero-title">
          UrbanView
          <span>Satellite Imagery Analyzer for Urban Planning</span>
        </h1>

        <p className="subtitle">
          Rapid urbanization demands accurate, data-driven insights to balance
          development and environmental sustainability.
        </p>

        <p className="subtitle-solution">
          UrbanView is an AI-powered geospatial intelligence platform that analyzes
          satellite imagery across time to detect urban expansion, vegetation loss,
          water body changes, and land-use patterns.
        </p>

        <div className="cta-wrapper">
          <p className="cta-caption">
            Compare present satellite data with imagery from 5 and 10 years ago
          </p>
          <button onClick={() => setShowAuth(true)}>
            Analyze Your City
          </button>
        </div>

        
        <div className="features-section">
          <h2>Empowering Actionable Intelligence</h2>

          <div className="features-grid">
            <div className="feature-card">
              <h3>Civic Bodies</h3>
              <p>
                Detect unauthorized construction, monitor urban sprawl,
                and support data-backed urban planning decisions.
              </p>
            </div>

            <div className="feature-card">
              <h3>Researchers</h3>
              <p>
                Study long-term land-use change using historical satellite
                imagery and indices like NDVI, NDWI, and NDBI.
              </p>
            </div>

            <div className="feature-card">
              <h3>Public</h3>
              <p>
                Understand urban growth trends, environmental impact,
                and sustainability risks through visual insights.
              </p>
            </div>
          </div>
        </div>

      </section>

      
      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
      />
    </div>
  );
}

export default Landing;
