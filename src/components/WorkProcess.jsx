import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { icon: '📋', title: 'Place Order', desc: 'Choose your service and fill the order form', time: '5 mins' },
  { icon: '💳', title: 'Make Payment', desc: 'Secure payment via UPI, Card or Net Banking', time: '2 mins' },
  { icon: '📤', title: 'Share Footage', desc: 'Upload your raw files via Google Drive or WhatsApp', time: 'Instant' },
  { icon: '✂️', title: 'We Edit', desc: 'Our team works on your project with full attention', time: '24-48 hrs' },
  { icon: '✅', title: 'Review & Deliver', desc: 'Get your edited video with free revision', time: 'Same day' },
];

const WorkProcess = () => (
  <section className="py-20 bg-dark-950">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">How It Works</span>
        </h2>
        <p className="text-gray-400 text-lg">Order → Edit → Deliver in 24-48 hours</p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-red to-neon-cyan hidden md:block" />
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex items-center gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="flex-1 glass rounded-xl p-6 border border-neon-red/20 hover:border-neon-red/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{step.icon}</span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <span className="ml-auto text-xs px-2 py-1 rounded-full bg-neon-red/20 text-neon-red">{step.time}</span>
                </div>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
              <div className="hidden md:flex w-10 h-10 rounded-full bg-gradient-to-r from-neon-red to-neon-pink items-center justify-center font-bold text-white shrink-0 z-10">
                {idx + 1}
              </div>
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkProcess;
