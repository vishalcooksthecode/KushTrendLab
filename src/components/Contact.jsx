import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'podcast-editing',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'podcast-editing',
        message: '',
      });
    }, 3000);
  };

  const services = [
    'Podcast Editing',
    'Long Form Video',
    'Short Form Video (Reels)',
    'Birthday Reel',
    'Podcast Shoot',
    'Reel Shoot',
    'Long Form Shoot',
    'Birthday Shoot',
  ];

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">Ready to bring your vision to life?</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-8 border border-neon-red/20"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-neon-red/20 text-white placeholder-gray-600 focus:outline-none focus:border-neon-red/60 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-neon-red/20 text-white placeholder-gray-600 focus:outline-none focus:border-neon-red/60 transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-neon-red/20 text-white placeholder-gray-600 focus:outline-none focus:border-neon-red/60 transition-all"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Select Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-neon-red/20 text-white focus:outline-none focus:border-neon-red/60 transition-all"
                >
                  {services.map((service) => (
                    <option key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark-800/50 border border-neon-red/20 text-white placeholder-gray-600 focus:outline-none focus:border-neon-red/60 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-red to-neon-pink text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-red/50 transition-all"
              >
                <FiSend size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            {[
              {
                title: '📧 Email',
                content: 'contact@kushtrendlab.com',
              },
              {
                title: '📱 WhatsApp',
                content: '+91 98765 43210',
              },
              {
                title: '🕐 Working Hours',
                content: 'Mon - Fri: 10 AM - 8 PM',
              },
              {
                title: '📍 Location',
                content: 'Mumbai, Maharashtra, India',
              },
            ].map((info, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="glass rounded-xl p-6 border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all"
              >
                <h4 className="text-lg font-bold text-neon-cyan mb-2">{info.title}</h4>
                <p className="text-gray-400">{info.content}</p>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-6 border border-neon-red/20"
            >
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Instagram', emoji: '📸', url: '#' },
                  { name: 'YouTube', emoji: '▶️', url: '#' },
                  { name: 'WhatsApp', emoji: '💬', url: '#' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-neon-red/10 transition-all"
                  >
                    <span className="text-3xl">{social.emoji}</span>
                    <p className="text-xs text-gray-400">{social.name}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 glass rounded-xl p-6 border border-neon-cyan/60 flex items-center gap-4 bg-dark-950/95"
          >
            <FiCheckCircle className="text-neon-cyan text-2xl" />
            <div>
              <p className="font-bold">Message Sent!</p>
              <p className="text-sm text-gray-400">We'll get back to you soon.</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;