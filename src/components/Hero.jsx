import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen bg-dark-950 flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-neon-red/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <div className="px-4 py-2 rounded-full glass border border-neon-red/50 text-neon-red text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-red animate-pulse"></span>
              Premium Video Production Services
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Professional Video Editing</span>
            <br />
            <span className="text-white">& Podcast Production Services</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            High-quality podcast editing, reels, cinematic videos, and professional shoots for creators, influencers, and brands.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 0, 80, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-neon-red to-neon-pink text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              <span>Book Now</span>
              <FiArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-bold flex items-center justify-center gap-2 border border-neon-red/30 hover:border-neon-red/60 transition-all duration-300"
            >
              <FiPlay size={20} />
              <span>View Services</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '4.9★', label: 'Average Rating' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;