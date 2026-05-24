import React from 'react';
import { motion } from 'framer-motion';
import { FiCamera, FiVideo, FiCameraOff, FiStar } from 'react-icons/fi';

const VideoShootServices = () => {
  const shoots = [
    {
      icon: FiVideo,
      title: 'Podcast Video Shoot',
      price: '₹1,499',
      addon: '+ Convenience Charges',
      description: 'Professional Setup',
      features: ['2-3 Hours Session', 'Professional Lighting', '4K Recording', 'Multiple Angles'],
    },
    {
      icon: FiCamera,
      title: 'Reel Shoot',
      price: '₹500',
      addon: '+ Convenience Charges',
      description: 'Quick Production',
      features: ['30-60 Minutes', 'Location Ready', 'Fast Turnaround', 'Viral Potential'],
    },
    {
      icon: FiVideo,
      title: 'Long Form Video Shoot',
      price: '₹1,099',
      addon: '+ Convenience Charges',
      description: 'Extended Session',
      features: ['4-6 Hours', 'Professional Crew', 'Multiple Takes', '4K Quality'],
    },
    {
      icon: FiStar,
      title: 'Birthday Shoot',
      price: '₹1,499',
      addon: '+ Convenience Charges',
      description: 'Memorable Moments',
      features: ['Full Event Coverage', 'Drone Shots', 'Guest Interviews', 'Same Day Edit'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="shoots" className="py-20 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Video Shoot Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional cinematography and production for all your video needs
          </p>
        </motion.div>

        {/* Shoots Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {shoots.map((shoot, idx) => {
            const Icon = shoot.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)' }}
                className="group glass rounded-2xl p-6 border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: -360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-neon-cyan/40 group-hover:to-blue-500/40 transition-all"
                >
                  <Icon className="text-2xl text-neon-cyan" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{shoot.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{shoot.description}</p>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-neon-cyan/20">
                  <p className="text-2xl font-bold text-neon-cyan">{shoot.price}</p>
                  <p className="text-xs text-gray-500 mt-1">{shoot.addon}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {shoot.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 py-2 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-blue-500/20 text-neon-cyan font-semibold hover:from-neon-cyan/40 hover:to-blue-500/40 transition-all"
                >
                  Book Shoot
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShootServices;