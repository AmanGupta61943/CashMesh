import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">CashMesh</h1>
        <p className="hero-tagline">Earn rewards by completing simple tasks.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Download App (Coming Soon)</button>
          <a href="#about" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

