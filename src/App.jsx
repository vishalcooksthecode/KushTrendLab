import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(255, 0, 80, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(0, 245, 255, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(255, 0, 80, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="bg-gradient-to-r from-red-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            KushTrendLab
          </span>
        </motion.h1>

        <p className="text-2xl text-gray-300 mb-8">
          Professional Video Editing & Production Services
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
        >
          Book Now
        </motion.button>

        <p className="text-gray-500 mt-12 text-sm">
          ✨ Website is loading... If you see this, React is working!
        </p>
      </motion.div>
    </div>
  );
}

export default App;
