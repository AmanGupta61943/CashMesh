import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: '1',
    title: 'Choose a Task',
    description: 'Browse tasks like app installs, surveys, or watching ads.'
  },
  {
    number: '2',
    title: 'Complete It',
    description: 'Follow the instructions and complete the task.'
  },
  {
    number: '3',
    title: 'Earn Rewards',
    description: 'Earn coins instantly and withdraw via UPI.'
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works-section section">
      <h2 className="section-title">How It Works</h2>
      <p className="section-subtitle">Start earning in just 3 simple steps</p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;

