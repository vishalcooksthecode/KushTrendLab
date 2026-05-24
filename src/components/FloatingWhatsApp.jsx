import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiX } from 'react-icons/fi';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '919876543210';
  const message = 'Hi KushTrendLab, I would like to inquire about your video editing services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg hover:shadow-xl hover:shadow-green-500/50 flex items-center justify-center cursor-pointer transition-all hover:scale-110"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
        </motion.div>
      </motion.button>

      {/* Chat Bubble */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-24 right-6 z-40 w-80 glass rounded-2xl border border-green-500/30 shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-4 text-white">
            <h3 className="font-bold text-lg">Chat with us</h3>
            <p className="text-sm opacity-90">We typically reply within minutes</p>
          </div>

          {/* Message */}
          <div className="p-6 space-y-4">
            <p className="text-gray-300 text-sm">
              Have questions about our video editing and production services? Message us on WhatsApp!
            </p>

            {/* Quick Options */}
            <div className="space-y-2">
              {[
                'Services & Pricing',
                'Portfolio & Examples',
                'Book a Service',
                'Custom Quote',
              ].map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ x: 5 }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-green-400 transition-all text-sm"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  → {option}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-center hover:shadow-lg transition-all mt-4"
            >
              💬 Open WhatsApp
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FloatingWhatsApp;