import React from 'react';
import '../components/Hero.css';

function NielsenTaskPage() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-logo">
        <svg className="app-icon" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Wallet card background */}
          <rect
            x="30"
            y="50"
            width="140"
            height="100"
            rx="8"
            fill="url(#goldGradient)"
            stroke="url(#goldGradient)"
            strokeWidth="2"
          />
          {/* Card peeking out */}
          <rect x="40" y="30" width="120" height="80" rx="6" fill="url(#goldGradient)" opacity="0.7" />
          {/* Main coin/circle */}
          <circle cx="100" cy="100" r="35" fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="2" />
          {/* Dollar sign */}
          <text
            x="100"
            y="115"
            fontSize="40"
            fontWeight="bold"
            fill="#1a1a2e"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            $
          </text>
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
          <a href="/" className="btn btn-secondary">
            Back to Home
          </a>
        </div>

        {/* Nielsen Task Card */}
        <div className="nielsen-card">
          <div className="nielsen-card-header">
            <div className="nielsen-left">
              <div className="nielsen-icon-wrapper">
                <div className="nielsen-coin-icon">D</div>
              </div>
              <div className="nielsen-offer-text">
                <h2 className="nielsen-title">Nielsen Confluence – Install &amp; Earn</h2>
                <div className="nielsen-meta-row">
                  <span className="nielsen-badge nielsen-verified">Verified Offer ✓</span>
                  <span className="nielsen-dot-separator">•</span>
                  <span className="nielsen-safe-text">Safe for Teens</span>
                </div>
                <div className="nielsen-meta-row nielsen-meta-light">
                  <span>Category: App Install</span>
                  <span className="nielsen-dot-separator">•</span>
                  <span>Difficulty: ⭐⭐⭐ (Medium)</span>
                  <span className="nielsen-dot-separator">•</span>
                  <span>Geo: India</span>
                </div>
              </div>
            </div>
            <div className="nielsen-right">
              <div className="nielsen-reward-badge">
                <div className="nielsen-reward-label">Reward</div>
                <div className="nielsen-reward-value">
                  200 <span className="nielsen-reward-dcoin">DCoins</span>
                </div>
                <div className="nielsen-reward-sub">≈ ₹20</div>
              </div>
            </div>
          </div>

          <div className="nielsen-body">
            <div className="nielsen-info-row">
              <span className="nielsen-chip">Time: 3–5 minutes</span>
              <span className="nielsen-chip">Category: App Install</span>
            </div>

            <div className="nielsen-steps">
              <h3 className="nielsen-steps-title">How to complete this task</h3>
              <ul className="nielsen-steps-list">
                <li>
                  <span className="nielsen-step-check" /> Click <strong>“Start Task”</strong> (opens tracking link)
                </li>
                <li>
                  <span className="nielsen-step-check" /> Register with basic details
                </li>
                <li>
                  <span className="nielsen-step-check" /> Install <strong>Confluence App</strong> (TV or Mobile)
                </li>
                <li>
                  <span className="nielsen-step-check" /> Login with the same credentials
                </li>
                <li>
                  <span className="nielsen-step-check" /> Grant all permissions
                </li>
                <li>
                  <span className="nielsen-step-check" /> Complete profile survey
                </li>
                <li>
                  <span className="nielsen-step-check" /> Keep the app installed &amp; active
                </li>
                <li>
                  <span className="nielsen-step-check" /> Reward will be credited after validation
                </li>
              </ul>
            </div>

            <div className="nielsen-actions">
              <a
                href="https://tjzuh.com/g/dj5da5o12db62f468cfd37dcfee011/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn nielsen-btn-primary"
              >
                Start Task
              </a>
              <button
                type="button"
                className="btn nielsen-btn-secondary"
                onClick={() => {
                  const text =
                    'Nielsen Confluence – Install & Earn\n\n' +
                    '1. Click “Start Task” (opens tracking link)\n' +
                    '2. Register with basic details\n' +
                    '3. Install Confluence App (TV or Mobile)\n' +
                    '4. Login with same credentials\n' +
                    '5. Grant all permissions\n' +
                    '6. Complete profile survey\n' +
                    '7. Keep the app installed & active\n' +
                    '8. Reward will be credited after validation';

                  if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(text);
                    alert('Instructions copied to clipboard.');
                  } else {
                    alert('Copy not supported in this browser. Please screenshot the steps.');
                  }
                }}
              >
                Copy Instructions
              </button>
              <button
                type="button"
                className="btn nielsen-btn-outline"
                onClick={() => {
                  window.location.href = 'mailto:support@cashmesh.app?subject=Nielsen%20Task%20Issue';
                }}
              >
                Report Issue
              </button>
            </div>

            <p className="nielsen-footnote">
              Complete all steps carefully. DCoins are credited only after the advertiser confirms a valid install and
              activity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NielsenTaskPage;


