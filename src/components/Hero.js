import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-logo">
        <svg className="app-icon" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#FFD700", stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#FFA500", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#FFD700", stopOpacity:1}} />
            </linearGradient>
          </defs>
          {/* Wallet card background */}
          <rect x="30" y="50" width="140" height="100" rx="8" fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="2"/>
          {/* Card peeking out */}
          <rect x="40" y="30" width="120" height="80" rx="6" fill="url(#goldGradient)" opacity="0.7"/>
          {/* Main coin/circle */}
          <circle cx="100" cy="100" r="35" fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="2"/>
          {/* Dollar sign */}
          <text x="100" y="115" fontSize="40" fontWeight="bold" fill="#1a1a2e" textAnchor="middle" fontFamily="Arial, sans-serif">$</text>
        </svg>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">CashMesh</h1>
        <p className="hero-tagline">Earn rewards by completing simple tasks.</p>
        <div className="hero-buttons">
          <a 
            href="https://api.adgem.com/v1/wall?appid=31561&playerid=demo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-earn"
          >
            Start Earning Now
          </a>
          <button className="btn btn-primary">Download App (Coming Soon)</button>
          <a href="#about" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

