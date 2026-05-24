import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'YouTube', emoji: '▶️' },
  { name: 'Spotify', emoji: '🎵' },
  { name: 'Instagram', emoji: '📸' },
  { name: 'Podcast One', emoji: '🎙️' },
  { name: 'TikTok', emoji: '🎬' },
  { name: 'LinkedIn', emoji: '💼' },
  { name: 'Twitter/X', emoji: '🐦' },
  { name: 'Twitch', emoji: '🎮' },
];

const LogoMarquee = () => (
  <section className="py-12 bg-dark-900 overflow-hidden border-y border-neon-red/10">
    <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-widest">Trusted by creators on</p>
    <div className="relative flex">
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="flex gap-12 items-center shrink-0"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors whitespace-nowrap px-4">
              <span className="text-2xl">{logo.emoji}</span>
              <span className="font-semibold text-sm">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  </section>
);

export default LogoMarquee;
