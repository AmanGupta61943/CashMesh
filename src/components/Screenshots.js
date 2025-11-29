import React from 'react';
import './Screenshots.css';

// Placeholder images - using CSS-generated placeholders
const screenshots = [
  { id: 1, alt: 'App screenshot 1' },
  { id: 2, alt: 'App screenshot 2' },
  { id: 3, alt: 'App screenshot 3' },
];

function Screenshots() {
  return (
    <section className="screenshots-section section">
      <h2 className="section-title">App Screenshots</h2>
      <p className="section-subtitle">Take a peek at what's coming</p>
      <div className="screenshots-grid">
        {screenshots.map((screenshot) => (
          <div key={screenshot.id} className="screenshot-card">
            <div className="screenshot-placeholder">
              <span className="placeholder-text">Screenshot {screenshot.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Screenshots;

