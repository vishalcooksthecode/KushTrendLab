import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useLang } from '../LangContext';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.services, href: '#services' },
    { label: t.shoots, href: '#shoots' },
    { label: t.portfolio, href: '#portfolio' },
    { label: t.testimonials, href: '#testimonials' },
    { label: t.contact, href: '#contact' },
    { label: t.track, href: '#track' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-md border-b border-neon-red/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-red to-neon-pink flex items-center justify-center font-bold text-white">
              KT
            </div>
            <span className="text-xl font-bold gradient-text">KushTrendLab</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-neon-red transition-colors relative group text-sm"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-red to-neon-pink group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="px-3 py-1 rounded-full glass border border-neon-red/30 text-sm font-semibold text-gray-300 hover:text-white hover:border-neon-red/60 transition-all"
            >
              {lang === 'en' ? '🇮🇳 हिंदी' : '🇬🇧 EN'}
            </button>

            {/* Dark/Light Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-full glass border border-neon-red/30 flex items-center justify-center text-gray-300 hover:text-neon-red hover:border-neon-red/60 transition-all"
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-neon-red to-neon-pink text-white font-semibold hover:shadow-lg hover:shadow-neon-red/50 transition-all"
            >
              {t.bookNow}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-neon-red" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-950/95 backdrop-blur-md border-b border-neon-red/20"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-neon-red transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="px-3 py-1 rounded-full glass border border-neon-red/30 text-sm text-gray-300"
              >
                {lang === 'en' ? '🇮🇳 हिंदी' : '🇬🇧 EN'}
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-3 py-1 rounded-full glass border border-neon-red/30 text-sm text-gray-300"
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
            <button className="w-full px-4 py-2 mt-2 rounded-lg bg-gradient-to-r from-neon-red to-neon-pink text-white font-semibold">
              {t.bookNow}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
