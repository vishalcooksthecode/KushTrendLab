import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
