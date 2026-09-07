import React from 'react';
import { motion } from 'framer-motion';

export const DiyaAnimation = ({ size = 'medium', className = '' }) => {
  const sizeMap = {
    small: { width: 'w-8 h-10', flame: 'w-3 h-5' },
    medium: { width: 'w-14 h-16', flame: 'w-5 h-8' },
    large: { width: 'w-20 h-24', flame: 'w-7 h-11' }
  };

  const currentSize = sizeMap[size] || sizeMap.medium;

  return (
    <div className={`relative inline-flex flex-col items-center justify-center ${className}`}>
      {/* Ambient Flame Glow Aura */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 w-12 h-12 bg-amber-400/40 rounded-full blur-lg pointer-events-none"
      />

      {/* Flickering Flame */}
      <motion.div
        animate={{
          scaleY: [1, 1.15, 0.95, 1.1, 1],
          scaleX: [1, 0.92, 1.05, 0.98, 1],
          rotate: [-1, 2, -2, 1, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`${currentSize.flame} relative z-10 rounded-full bg-gradient-to-t from-orange-600 via-amber-400 to-amber-100 shadow-[0_0_15px_rgba(245,158,11,0.9)] origin-bottom`}
      >
        {/* Flame Inner Core */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-white rounded-full opacity-90 blur-[0.5px]" />
      </motion.div>

      {/* Brass Lamp Base */}
      <div className="relative -mt-1 flex flex-col items-center">
        {/* Diya Wick support */}
        <div className="w-1.5 h-1.5 bg-amber-900 rounded-sm" />
        
        {/* Brass Bowl */}
        <div className="w-10 h-4 bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 rounded-b-full shadow-md border-t border-amber-300/40 flex items-center justify-center">
          <div className="w-6 h-1 bg-amber-200/50 rounded-full" />
        </div>

        {/* Diya Base Stand */}
        <div className="w-5 h-1.5 bg-amber-800 rounded-b-md shadow-sm" />
      </div>
    </div>
  );
};

export default DiyaAnimation;
