import React from 'react';
import './Features.css';

const features = [
  { icon: '📱', title: 'Install Apps & Earn', description: 'Get rewarded for trying new apps' },
  { icon: '📺', title: 'Watch Ads & Earn', description: 'Watch short ads and earn coins' },
  { icon: '📝', title: 'Complete Surveys', description: 'Share your opinion and get paid' },
  { icon: '🎁', title: 'Daily Rewards', description: 'Check in daily for bonus rewards' },
  { icon: '🎰', title: 'Spin Wheel', description: 'Spin and win exciting rewards' },
  { icon: '👥', title: 'Referral Rewards', description: 'Invite friends and earn together' },
  { icon: '🛡️', title: 'Teen-Safe Tasks', description: 'All tasks are safe for ages 13-18' },
  { icon: '💳', title: 'UPI Withdrawals', description: 'Withdraw your earnings instantly' },
];

function Features() {
  return (
    <section className="features-section section">
      <h2 className="section-title">Features</h2>
      <p className="section-subtitle">Everything you need to start earning rewards</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;

