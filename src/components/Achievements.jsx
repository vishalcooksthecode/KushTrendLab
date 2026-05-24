import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { icon: '🏆', title: '500+ Projects', desc: 'Successfully delivered' },
  { icon: '⭐', title: '4.9 Rating', desc: 'Average client rating' },
  { icon: '🚀', title: '24hr Delivery', desc: 'Fast turnaround guaranteed' },
  { icon: '🎯', title: '50+ Clients', desc: 'Happy creators & brands' },
  { icon: '🎬', title: '3+ Years', desc: 'Industry experience' },
  { icon: '💯', title: '100% Satisfaction', desc: 'Money back guarantee' },
];

const Achievements = () => (
  <section className="py-20 bg-dark-950">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Why Choose Us</span>
        </h2>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-red/10 border border-neon-red/30 text-neon-red text-sm font-semibold mt-2">
          <span className="w-2 h-2 rounded-full bg-neon-red animate-pulse" />
          ⚡ Delivered in 24-48 Hours — Guaranteed
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 0 30px rgba(255,0,80,0.2)' }}
            className="glass rounded-2xl p-6 border border-neon-red/20 hover:border-neon-red/50 text-center transition-all"
          >
            <span className="text-5xl mb-4 block">{item.icon}</span>
            <h3 className="text-xl font-bold gradient-text mb-1">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
