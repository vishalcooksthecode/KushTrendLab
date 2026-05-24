import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCreditCard, FiDollarSign, FiLock } from 'react-icons/fi';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [amount, setAmount] = useState(2999);

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: '₹' },
    { id: 'card', name: 'Card', icon: '💳' },
    { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
  ];

  return (
    <section id="payment" className="py-20 bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Secure Payment</span>
          </h2>
          <p className="text-gray-400 text-lg">Easy and secure payment options</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-8 border border-neon-red/20"
          >
            <h3 className="text-2xl font-bold mb-6">Payment Details</h3>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-4 text-gray-300">
                Select Amount
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[1099, 2999, 5999, 9999].map((price) => (
                  <motion.button
                    key={price}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAmount(price)}
                    className={`py-3 rounded-lg font-semibold transition-all ${
                      amount === price
                        ? 'bg-gradient-to-r from-neon-red to-neon-pink text-white'
                        : 'glass border border-neon-red/20 text-gray-300 hover:border-neon-red/60'
                    }`}
                  >
                    ₹{price}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-4 text-gray-300">
                Payment Method
              </label>
              <div className="grid grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <motion.button
                    key={method.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`py-4 rounded-lg font-semibold transition-all ${
                      paymentMethod === method.id
                        ? 'bg-gradient-to-r from-neon-red to-neon-pink text-white'
                        : 'glass border border-neon-red/20 text-gray-300 hover:border-neon-red/60'
                    }`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <p className="text-xs mt-1">{method.name}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Amount Display */}
            <div className="bg-gradient-to-r from-neon-red/10 to-neon-pink/10 rounded-lg p-6 mb-8 border border-neon-red/20">
              <p className="text-gray-400 text-sm mb-2">Total Amount</p>
              <p className="text-4xl font-bold gradient-text">₹{amount}</p>
            </div>

            {/* Pay Now Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 0, 80, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-neon-red to-neon-pink text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              <FiLock size={20} />
              Pay Now Securely
            </motion.button>

            {/* Security Info */}
            <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-2">
              <FiLock size={14} />
              Your payment is 100% secure and encrypted
            </p>
          </motion.div>

          {/* QR Code & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* QR Code Card */}
            <div className="glass rounded-2xl p-8 border border-neon-red/20 text-center">
              <h3 className="text-2xl font-bold mb-6">Quick Payment via QR</h3>
              <div className="bg-white rounded-lg p-6 mb-6 inline-block">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=kushtrendlab@upi&pn=KushTrendLab&am=2999"
                  alt="Payment QR Code"
                  className="w-48 h-48"
                />
              </div>
              <p className="text-gray-400">Scan to pay instantly via UPI</p>
            </div>

            {/* Payment Received Card */}
            <div className="glass rounded-2xl p-8 border border-neon-cyan/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-neon-cyan"></span>
                Payment Methods
              </h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <div>
                  <p className="font-semibold text-white mb-1">📱 UPI</p>
                  <p>kushtrendlab@upi</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">💳 Credit/Debit Card</p>
                  <p>Available on checkout page</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">🏦 Net Banking</p>
                  <p>All major Indian banks supported</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Payment;