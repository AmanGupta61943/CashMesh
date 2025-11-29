import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="PrivacyPolicy">
      <div className="policy-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last updated: January 2025</p>
      </div>
      
      <div className="policy-content">
        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to TeenCash Rewards ("we," "our," or "us"). We are committed to protecting your privacy and ensuring a safe experience for our teen users aged 13-18. This Privacy Policy explains how we collect, use, and safeguard your information when you use our app.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          <p>To provide you with rewards and tasks, we collect the following information:</p>
          <ul>
            <li><strong>Phone Number:</strong> Required for account verification and UPI withdrawals</li>
            <li><strong>Device ID:</strong> Used to track app installations and prevent fraud</li>
            <li><strong>Basic Usage Data:</strong> Information about tasks completed and rewards earned</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. No KYC Required</h2>
          <p>
            We do not require Know Your Customer (KYC) verification. Our platform is designed to be accessible to teenagers without requiring sensitive documents or extensive verification processes.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. No Sensitive Data Stored</h2>
          <p>
            We do not store sensitive personal information such as:
          </p>
          <ul>
            <li>Bank account details</li>
            <li>Credit card information</li>
            <li>Government-issued ID numbers</li>
            <li>Home addresses</li>
          </ul>
          <p>
            All data is stored securely and used solely for the purpose of providing rewards and maintaining your account.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Affiliate Networks</h2>
          <p>
            Our platform works with trusted affiliate networks including Admitad, Cuelinks, Impact, vCommission, and AppBroda. When you complete tasks such as app installs, these networks may collect standard analytics data (app install confirmations, clicks, etc.) to process rewards. We ensure all affiliate partners follow privacy standards suitable for teen users.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. How We Use Your Information</h2>
          <ul>
            <li>To process and verify completed tasks</li>
            <li>To calculate and distribute rewards</li>
            <li>To facilitate UPI withdrawals</li>
            <li>To prevent fraud and ensure fair use</li>
            <li>To improve our services and user experience</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Third-Party Services</h2>
          <p>
            Our app may contain links to third-party apps and services. We are not responsible for the privacy practices of these external services. We encourage you to review their privacy policies before engaging with them.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request deletion of your account and data</li>
            <li>Opt-out of certain data collection (may affect functionality)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:cashmesh231@gmail.com">cashmesh231@gmail.com</a>
          </p>
        </section>

        <section className="policy-section">
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify users of any significant changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

