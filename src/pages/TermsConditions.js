import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './TermsConditions.css';

function TermsConditions() {
  return (
    <div className="TermsConditions">
      <div className="terms-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-updated">Last updated: January 2025</p>
      </div>
      
      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Eligibility</h2>
          <p>
            TeenCash Rewards is designed for users aged <strong>13-18 years</strong>. By using our app, you confirm that you meet the age requirements. Users under 13 or over 18 are not eligible to use this platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Virtual Rewards (Coins)</h2>
          <p>
            Coins earned on TeenCash Rewards are <strong>virtual rewards</strong> that can be redeemed for real-world value through UPI withdrawals or gift cards. Coins have no monetary value until redeemed through our withdrawal system.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Minimum Withdrawal Limit</h2>
          <p>
            A minimum balance of coins is required to process withdrawals. The exact minimum withdrawal limit may vary and will be displayed within the app. Users must accumulate sufficient coins before requesting a withdrawal.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Anti-Fraud Rules</h2>
          <p>To ensure fair use and prevent abuse, users must:</p>
          <ul>
            <li>Complete tasks honestly and according to instructions</li>
            <li>Not use multiple accounts or devices to game the system</li>
            <li>Not use automated tools, bots, or scripts</li>
            <li>Not engage in any fraudulent activity</li>
            <li>Not attempt to manipulate app installs or task completion</li>
          </ul>
          <p>
            Violation of these rules may result in account suspension, forfeiture of coins, or permanent ban from the platform.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Right to Change Offers</h2>
          <p>
            We reserve the right to <strong>change, modify, or remove offers and tasks at any time</strong> without prior notice. This includes:
          </p>
          <ul>
            <li>Adding or removing available tasks</li>
            <li>Adjusting coin rewards for tasks</li>
            <li>Modifying task requirements or eligibility criteria</li>
            <li>Changing withdrawal methods or limits</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>6. No Guarantee of Income</h2>
          <p>
            TeenCash Rewards is a <strong>rewards platform, not a guaranteed income source</strong>. The availability of tasks, coin rewards, and withdrawal options depend on various factors including:
          </p>
          <ul>
            <li>Availability of tasks from affiliate partners</li>
            <li>Your eligibility for specific tasks</li>
            <li>Completion of tasks according to requirements</li>
            <li>Market conditions and partner policies</li>
          </ul>
          <p>
            We do not guarantee any specific amount of earnings or continuous availability of tasks.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the security of your account. Do not share your account credentials with others. Any activity on your account is your responsibility.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Task Completion</h2>
          <p>
            Users must complete tasks according to the provided instructions. Failure to complete tasks properly may result in non-crediting of rewards. We reserve the right to verify task completion before crediting coins.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Withdrawals</h2>
          <p>
            Withdrawal requests are processed subject to:
          </p>
          <ul>
            <li>Minimum withdrawal limit being met</li>
            <li>Account verification (phone number)</li>
            <li>Compliance with all terms and conditions</li>
            <li>Processing time (typically 24-48 hours)</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>10. Third-Party Services</h2>
          <p>
            Our app integrates with affiliate networks and third-party services. We are not responsible for the content, policies, or practices of these third-party services. Your interaction with external apps or services is at your own discretion.
          </p>
        </section>

        <section className="terms-section">
          <h2>11. Account Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or misuse the platform. In case of termination, any unredeemed coins may be forfeited.
          </p>
        </section>

        <section className="terms-section">
          <h2>12. Limitation of Liability</h2>
          <p>
            TeenCash Rewards and its operators are not liable for any indirect, incidental, or consequential damages arising from the use of our platform. We are not responsible for issues with third-party apps, services, or affiliate network delays.
          </p>
        </section>

        <section className="terms-section">
          <h2>13. Changes to Terms</h2>
          <p>
            We may update these Terms & Conditions at any time. Continued use of the app after changes constitutes acceptance of the new terms. We recommend reviewing these terms periodically.
          </p>
        </section>

        <section className="terms-section">
          <h2>14. Contact for Support</h2>
          <p>
            For questions, concerns, or support regarding these terms, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:cashmesh231@gmail.com">cashmesh231@gmail.com</a>
          </p>
        </section>

        <section className="terms-section">
          <h2>15. Governing Law</h2>
          <p>
            These Terms & Conditions are governed by applicable laws. Any disputes will be resolved through appropriate legal channels.
          </p>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}

export default TermsConditions;

