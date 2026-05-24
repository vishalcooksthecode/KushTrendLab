import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <section className="py-20 bg-dark-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Before & After</span>
          </h2>
          <p className="text-gray-400 text-lg">See the difference our editing makes</p>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative h-80 rounded-2xl overflow-hidden cursor-ew-resize border border-neon-red/30 select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* Before */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 text-6xl mb-4">📹</p>
              <p className="text-gray-400 text-xl font-bold">RAW FOOTAGE</p>
              <p className="text-gray-600 text-sm mt-2">Unedited • Flat color • No audio mix</p>
            </div>
          </div>

          {/* After */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-dark-950 to-dark-900 flex items-center justify-center overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="text-center">
              <p className="text-neon-red text-6xl mb-4">🎬</p>
              <p className="gradient-text text-xl font-bold">EDITED MASTERPIECE</p>
              <p className="text-gray-400 text-sm mt-2">Color graded • Sound mixed • Effects added</p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-neon-red shadow-lg shadow-neon-red/50 z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neon-red flex items-center justify-center shadow-lg shadow-neon-red/50">
              <span className="text-white text-xs font-bold">◀▶</span>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-800/80 text-gray-400 text-xs font-bold">BEFORE</div>
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-neon-red/80 text-white text-xs font-bold">AFTER</div>
        </motion.div>

        <p className="text-center text-gray-500 text-sm mt-4">← Drag to compare →</p>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
