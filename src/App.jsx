import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import VideoShootServices from './components/VideoShootServices';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Payment from './components/Payment';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

function App() {
  return (
    <div className="bg-dark-950 min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <VideoShootServices />
      <Portfolio />
      <Testimonials />
      <Payment />
      <Contact />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
