import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: ['Podcast Editing', 'Video Editing', 'Video Shoots', 'Post Production'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Portfolio', 'Blog', 'Careers'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Contact', 'Sitemap'],
    },
  ];

  return (
    <footer className="bg-dark-900/50 backdrop-blur-md border-t border-neon-red/20 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-red to-neon-pink flex items-center justify-center font-bold text-white">
                KT
              </div>
              <div>
                <h3 className="font-bold text-lg">KushTrendLab</h3>
                <p className="text-xs text-gray-500">Creative Video Production</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Professional video editing and production services for creators, influencers, and brands.
            </p>
          </motion.div>

          {/* Links */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-bold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-neon-red transition-colors text-sm flex items-center gap-1"
                    >
                      <span>{link}</span>
                      <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-neon-red/10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h4 className="font-bold mb-3 text-white">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-dark-800/50 border border-neon-red/20 text-white placeholder-gray-600 focus:outline-none focus:border-neon-red/60 transition-all text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-red to-neon-pink text-white font-semibold text-sm"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex justify-start md:justify-end gap-4"
            >
              {[
                { name: 'Instagram', emoji: '📸' },
                { name: 'YouTube', emoji: '▶️' },
                { name: 'WhatsApp', emoji: '💬' },
                { name: 'Twitter', emoji: '𝕏' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 rounded-full glass border border-neon-red/20 hover:border-neon-red/60 flex items-center justify-center text-lg hover:bg-neon-red/10 transition-all"
                  title={social.name}
                >
                  {social.emoji}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} KushTrendLab. All rights reserved. | Designed with ❤️ for creators
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;