import React from 'react';
import { motion } from 'framer-motion';
import { FiEdit3, FiFilm, FiSmartphone, FiGift } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: FiEdit3,
      title: 'Podcast Editing Service',
      price: '₹2,999',
      description: 'Per video',
      features: ['Audio Enhancement', 'Intro/Outro', 'Noise Reduction', 'Color Correction'],
    },
    {
      icon: FiFilm,
      title: 'Long Form Video Editing',
      price: '₹2,999',
      description: 'Up to 10 minutes',
      features: ['Full Editing', 'Music & Sound', 'Transitions', 'Effects'],
    },
    {
      icon: FiSmartphone,
      title: 'Short Form Video Editing',
      price: '₹1,099',
      description: 'Reels & TikTok',
      features: ['Quick Turnaround', 'Trending Effects', 'Text Animation', 'HD Export'],
    },
    {
      icon: FiGift,
      title: 'Birthday Reel Editing',
      price: '₹1,099',
      description: 'Special Occasion',
      features: ['Photo Montage', 'Music Sync', 'Text & Graphics', 'Social Ready'],
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
    <section id="services" className="py-20 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Video Editing Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional editing services tailored to your content needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(255, 0, 80, 0.3)' }}
                className="group glass rounded-2xl p-6 border border-neon-red/20 hover:border-neon-red/60 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-r from-neon-red/20 to-neon-pink/20 flex items-center justify-center mb-4 group-hover:from-neon-red/40 group-hover:to-neon-pink/40 transition-all"
                >
                  <Icon className="text-2xl text-neon-red" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-neon-red/20">
                  <p className="text-3xl font-bold gradient-text">{service.price}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-red"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 py-2 rounded-lg bg-gradient-to-r from-neon-red/20 to-neon-pink/20 text-neon-red font-semibold hover:from-neon-red/40 hover:to-neon-pink/40 transition-all"
                >
                  Get Started
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;