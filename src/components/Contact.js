import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">Have questions? We'd love to hear from you!</p>
      <div className="contact-content">
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <h3 className="contact-label">Email</h3>
          <a href="mailto:cashmesh231@gmail.com" className="contact-link">cashmesh231@gmail.com</a>
        </div>
        <div className="contact-item">
          <div className="contact-icon">📱</div>
          <h3 className="contact-label">Instagram</h3>
          <a href="https://instagram.com/teencashapp" className="contact-link" target="_blank" rel="noopener noreferrer">@teencashapp</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

