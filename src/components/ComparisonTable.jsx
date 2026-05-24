import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const plans = [
  {
    name: 'Basic',
    price: { monthly: '₹1,099', project: '₹1,099' },
    color: 'border-gray-600',
    badge: null,
    features: {
      'Short Form Video': true,
      'Long Form Video': false,
      'Podcast Editing': false,
      'Color Grading': true,
      'Sound Mixing': false,
      'Motion Graphics': false,
      'Revisions': '1',
      'Delivery': '48 hrs',
      'Support': 'Email',
    },
  },
  {
    name: 'Pro',
    price: { monthly: '₹2,999', project: '₹2,999' },
    color: 'border-neon-red',
    badge: 'Most Popular',
    features: {
      'Short Form Video': true,
      'Long Form Video': true,
      'Podcast Editing': true,
      'Color Grading': true,
      'Sound Mixing': true,
      'Motion Graphics': false,
      'Revisions': '3',
      'Delivery': '24 hrs',
      'Support': 'WhatsApp',
    },
  },
  {
    name: 'Premium',
    price: { monthly: '₹5,999', project: '₹5,999' },
    color: 'border-neon-cyan',
    badge: 'Best Value',
    features: {
      'Short Form Video': true,
      'Long Form Video': true,
      'Podcast Editing': true,
      'Color Grading': true,
      'Sound Mixing': true,
      'Motion Graphics': true,
      'Revisions': 'Unlimited',
      'Delivery': '12 hrs',
      'Support': 'Priority',
    },
  },
];

const featureKeys = Object.keys(plans[0].features);

const ComparisonTable = () => {
  const [billing, setBilling] = useState('project');

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Compare Plans</span>
          </h2>
          <div className="inline-flex items-center gap-2 glass rounded-full p-1 border border-neon-red/20 mt-4">
            {['project', 'monthly'].map((type) => (
              <button
                key={type}
                onClick={() => setBilling(type)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all capitalize ${
                  billing === type ? 'bg-gradient-to-r from-neon-red to-neon-pink text-white' : 'text-gray-400'
                }`}
              >
                {type === 'project' ? 'Per Project' : 'Monthly'}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-gray-400 font-normal w-40">Features</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="py-4 px-4 text-center">
                    <div className={`glass rounded-xl p-4 border-2 ${plan.color} relative`}>
                      {plan.badge && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-neon-red to-neon-pink text-white whitespace-nowrap">
                          {plan.badge}
                        </span>
                      )}
                      <p className="font-bold text-lg">{plan.name}</p>
                      <p className="gradient-text text-2xl font-bold mt-1">{plan.price[billing]}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureKeys.map((feature, idx) => (
                <motion.tr
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-t border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-3 px-4 text-gray-400 text-sm">{feature}</td>
                  {plans.map((plan) => (
                    <td key={plan.name} className="py-3 px-4 text-center">
                      {typeof plan.features[feature] === 'boolean' ? (
                        plan.features[feature] ? (
                          <FiCheck className="text-neon-cyan mx-auto" size={18} />
                        ) : (
                          <FiX className="text-gray-600 mx-auto" size={18} />
                        )
                      ) : (
                        <span className="text-sm text-white font-semibold">{plan.features[feature]}</span>
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
              <tr className="border-t border-white/5">
                <td className="py-4 px-4" />
                {plans.map((plan) => (
                  <td key={plan.name} className="py-4 px-4 text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${
                        plan.badge === 'Most Popular'
                          ? 'bg-gradient-to-r from-neon-red to-neon-pink text-white'
                          : 'glass border border-neon-red/30 text-gray-300 hover:border-neon-red/60'
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
