import React from 'react';
import './StartEarning.css';

function StartEarning() {
  return (
    <section className="start-earning-section">
      <div className="start-earning-container">
        <h2 className="start-earning-heading">Start Earning DCoins</h2>
        <p className="start-earning-subheading">
          Complete tasks, install apps, take surveys, and earn rewards instantly.
        </p>
        <div className="cta-wrapper">
          <div className="dcoin-icon">🪙</div>
          <a 
            href="https://api.adgem.com/v1/wall?appid=31561&playerid=demo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="start-earning-btn"
          >
            Start Earning Now
          </a>
        </div>
        <p className="start-earning-description">
          Powered by AdGem Offerwall – tasks updated daily.
        </p>
      </div>
    </section>
  );
}

export default StartEarning;

