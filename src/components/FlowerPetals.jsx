import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const FlowerPetals = ({ count = 15 }) => {
  // Generate random petals position and movement duration once
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(i * 7 + 3) % 96}%`,
      size: Math.floor(Math.random() * 12) + 12,
      duration: Math.random() * 12 + 14,
      delay: Math.random() * 10,
      rotateStart: Math.random() * 360,
      xOffset: Math.random() * 80 - 40,
      color: i % 3 === 0 ? '#E88D37' : i % 3 === 1 ? '#D4AF37' : '#C85217'
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: '-10vh',
            x: 0,
            opacity: 0,
            rotate: petal.rotateStart,
          }}
          animate={{
            y: '110vh',
            x: [0, petal.xOffset, -petal.xOffset, 0],
            opacity: [0, 0.7, 0.7, 0],
            rotate: petal.rotateStart + 360,
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: petal.left,
            width: petal.size,
            height: petal.size,
          }}
        >
          {/* Petal SVG Shape */}
          <svg viewBox="0 0 24 24" fill={petal.color} className="w-full h-full opacity-80 filter drop-shadow-sm">
            <path d="M12 2C8 6 4 10 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-4-4-8-8-12z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FlowerPetals;
