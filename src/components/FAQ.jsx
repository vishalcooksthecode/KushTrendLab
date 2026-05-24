import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is the turnaround time for video editing?',
      answer: 'For short-form videos (reels), we typically deliver within 24-48 hours. Long-form videos take 3-5 business days depending on complexity. Podcast editing is usually completed within 2-3 days.',
    },
    {
      question: 'Do you offer unlimited revisions?',
      answer: 'Yes! We provide up to 3 rounds of revisions on all our editing services at no extra cost. We want to make sure you\'re completely satisfied with the final product.',
    },
    {
      question: 'What formats do you deliver videos in?',
      answer: 'We deliver videos in MP4, MOV, and WebM formats optimized for different platforms (Instagram, YouTube, TikTok, etc.). We can also provide raw footage files if needed.',
    },
    {
      question: 'Do you provide video shoot services?',
      answer: 'Absolutely! We offer professional video shoot services including podcast shoots, reel shoots, event coverage, and birthday parties. Convenience charges apply based on location.',
    },
    {
      question: 'What is the minimum project value?',
      answer: 'Our minimum project value is ₹1,099. However, we offer customized packages for larger projects and bulk orders at discounted rates.',
    },
    {
      question: 'Can you work with footage I provide?',
      answer: 'Yes! We can edit any footage you provide. Simply share your raw footage, and we\'ll apply our professional editing expertise to create a polished final product.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="faq" className="py-20 bg-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">Find answers to common questions</p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass rounded-xl border border-neon-red/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <FiChevronDown className="text-neon-red" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-neon-red/20"
                  >
                    <div className="px-6 py-4 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;