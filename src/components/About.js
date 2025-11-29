import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section section">
      <h2 className="section-title">About TeenCash Rewards</h2>
      <div className="about-content">
        <p className="about-text">
          TeenCash Rewards is a teen-friendly earning platform where users complete simple tasks such as app installs, surveys, watching ads, daily check-ins, and referrals to earn coins. Users can later withdraw their rewards via UPI or gift cards.
        </p>
        <p className="about-text">
          Our platform works with trusted affiliate networks like <strong>Admitad</strong>, <strong>Cuelinks</strong>, <strong>Impact</strong>, <strong>vCommission</strong>, and <strong>AppBroda</strong> to promote apps and services in a safe way for teenagers aged 13–18.
        </p>
      </div>
    </section>
  );
}

export default About;

