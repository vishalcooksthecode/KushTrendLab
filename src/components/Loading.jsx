import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center">
      <div className="relative w-20 h-20">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-neon-red/20 animate-spin" />

        {/* Inner ring */}
        <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-neon-red border-r-neon-pink animate-spin" />

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-neon-red to-neon-pink animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Loading;