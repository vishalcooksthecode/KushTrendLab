import React, { useState } from 'react';
import { LangProvider } from './LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import LogoMarquee from './components/LogoMarquee';
import Services from './components/Services';
import VideoShootServices from './components/VideoShootServices';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import WorkProcess from './components/WorkProcess';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import ComparisonTable from './components/ComparisonTable';
import Payment from './components/Payment';
import OrderTracking from './components/OrderTracking';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <LangProvider>
      <div className={darkMode ? 'bg-dark-950 min-h-screen overflow-hidden' : 'bg-gray-100 min-h-screen overflow-hidden'}>
        <CountdownTimer />
        <div className="pt-8">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <LogoMarquee />
          <Services />
          <VideoShootServices />
          <BeforeAfterSlider />
          <WorkProcess />
          <Portfolio />
          <Testimonials />
          <Achievements />
          <ComparisonTable />
          <Payment />
          <OrderTracking />
          <Contact />
          <FAQ />
          <Footer />
          <FloatingWhatsApp />
        </div>
      </div>
    </LangProvider>
  );
}

export default App;
