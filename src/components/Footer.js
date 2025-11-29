import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <span className="footer-separator">|</span>
          <Link to="/terms-conditions" className="footer-link">Terms & Conditions</Link>
        </div>
        <div className="footer-copyright">
          © 2025 CashMesh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

