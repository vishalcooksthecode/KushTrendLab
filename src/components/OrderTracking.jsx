import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

const mockOrders = {
  'KTL001': { status: 2, service: 'Podcast Editing', client: 'Rahul S.', eta: 'Today 6 PM' },
  'KTL002': { status: 3, service: 'Reel Editing', client: 'Priya M.', eta: 'Delivered' },
  'KTL003': { status: 1, service: 'Long Form Video', client: 'Amit K.', eta: 'Tomorrow 12 PM' },
};

const stages = ['Order Placed', 'In Progress', 'Review', 'Delivered'];

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  const handleTrack = () => {
    const found = mockOrders[orderId.toUpperCase()];
    if (found) { setOrder(found); setError(''); }
    else { setOrder(null); setError('Order not found. Try KTL001, KTL002, or KTL003'); }
  };

  return (
    <section id="track" className="py-20 bg-dark-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Track Your Order</span>
          </h2>
          <p className="text-gray-400">Enter your order ID to check status</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="glass rounded-2xl p-8 border border-neon-red/20">
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
              placeholder="Enter Order ID (e.g. KTL001)"
              className="flex-1 px-4 py-3 rounded-lg bg-dark-800/50 border border-neon-red/20 text-white placeholder-gray-600 focus:outline-none focus:border-neon-red/60 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTrack}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-red to-neon-pink text-white font-bold flex items-center gap-2"
            >
              <FiSearch size={18} /> Track
            </motion.button>
          </div>

          {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}

          <AnimatePresence>
            {order && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="mb-6 p-4 rounded-lg bg-neon-red/10 border border-neon-red/20">
                  <p className="text-sm text-gray-400">Service: <span className="text-white font-semibold">{order.service}</span></p>
                  <p className="text-sm text-gray-400 mt-1">ETA: <span className="text-neon-cyan font-semibold">{order.eta}</span></p>
                </div>
                <div className="flex items-center justify-between relative">
                  <div className="absolute top-5 left-0 right-0 h-1 bg-dark-800 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-neon-red to-neon-cyan rounded-full transition-all duration-700"
                      style={{ width: `${(order.status / (stages.length - 1)) * 100}%` }}
                    />
                  </div>
                  {stages.map((stage, idx) => (
                    <div key={stage} className="flex flex-col items-center z-10 gap-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                        idx <= order.status
                          ? 'bg-gradient-to-r from-neon-red to-neon-pink border-neon-red text-white'
                          : 'bg-dark-800 border-gray-700 text-gray-600'
                      }`}>
                        {idx <= order.status ? '✓' : idx + 1}
                      </div>
                      <p className={`text-xs text-center max-w-16 ${idx <= order.status ? 'text-white' : 'text-gray-600'}`}>{stage}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderTracking;
