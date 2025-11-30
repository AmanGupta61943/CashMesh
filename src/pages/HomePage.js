import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import StartEarning from '../components/StartEarning';
import ComingSoon from '../components/ComingSoon';
import Screenshots from '../components/Screenshots';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <StartEarning />
      <ComingSoon />
      <Screenshots />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;

