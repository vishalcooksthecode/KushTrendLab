import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-neon-red via-neon-pink to-neon-red text-white py-2 px-4 flex items-center justify-center gap-4 text-sm font-semibold"
        >
          <span className="animate-pulse">🔥</span>
          <span>LIMITED OFFER: ₹500 OFF on all services!</span>
          <div className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full">
            {[pad(timeLeft.hours), pad(timeLeft.minutes), pad(timeLeft.seconds)].map((val, i) => (
              <React.Fragment key={i}>
                <span className="font-mono font-bold">{val}</span>
                {i < 2 && <span className="opacity-70">:</span>}
              </React.Fragment>
            ))}
          </div>
          <span className="hidden sm:inline text-xs opacity-80">Use code: KUSH500</span>
          <button onClick={() => setVisible(false)} className="ml-2 opacity-70 hover:opacity-100">
            <FiX size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CountdownTimer;
