import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CurtainOpening = ({ onCurtainsOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Automatically trigger curtain opening on page load after a brief 400ms pause
    const timer = setTimeout(() => {
      handleOpen();
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    if (onCurtainsOpen) {
      onCurtainsOpen();
    }

    // Remove curtain element from DOM after animation completes
    setTimeout(() => {
      setIsRemoved(true);
    }, 2400);
  };

  if (isRemoved) return null;

  return (
    <div
      onClick={handleOpen}
      className="fixed inset-0 z-50 overflow-hidden pointer-events-auto cursor-pointer"
      title=""
    >
      {/* Top Gold Valance Arch Banner */}
      <motion.div
        animate={{ y: isOpen ? '-120%' : '0%' }}
        transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 inset-x-0 z-30 h-20 sm:h-28 bg-gradient-to-b from-[#4A0000] via-[#7A0000] to-[#5C0000] border-b-4 border-[#D4AF37] flex items-center justify-between px-6 shadow-2xl"
      >
        <div className="text-2xl text-[#D4AF37] animate-bounce">🔔</div>
        <div className="font-devanagari text-xl sm:text-3xl font-bold text-[#FFD700] tracking-widest drop-shadow-lg">
          ॥ श्री गणेशाय नमः ॥
        </div>
        <div className="text-2xl text-[#D4AF37] animate-bounce">🔔</div>
      </motion.div>

      {/* Left Red Velvet Curtain */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: isOpen ? '-100%' : '0%' }}
        transition={{ duration: 2.2, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#4A0000] via-[#7A0000] to-[#600000] border-r-4 border-[#D4AF37] shadow-[15px_0_35px_rgba(0,0,0,0.6)] z-20 flex flex-col justify-between p-6"
      >
        {/* Decorative Golden Tassel Border on Right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-3 bg-[repeating-linear-gradient(0deg,#D4AF37,#D4AF37_10px,#8B6508_10px,#8B6508_20px)] opacity-90" />

        <div className="mt-28 text-[#D4AF37] opacity-40 font-devanagari text-4xl">❖</div>
        <div className="text-center font-devanagari text-[#FFD700]/70 text-sm tracking-wider">
          {!isOpen && "स्पर्श करा / Click to Open"}
        </div>
        <div className="mb-8 text-[#D4AF37] opacity-40 font-devanagari text-4xl">❖</div>
      </motion.div>

      {/* Right Red Velvet Curtain */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: isOpen ? '100%' : '0%' }}
        transition={{ duration: 2.2, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-[#4A0000] via-[#7A0000] to-[#600000] border-l-4 border-[#D4AF37] shadow-[-15px_0_35px_rgba(0,0,0,0.6)] z-20 flex flex-col justify-between p-6"
      >
        {/* Decorative Golden Tassel Border on Left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-3 bg-[repeating-linear-gradient(0deg,#D4AF37,#D4AF37_10px,#8B6508_10px,#8B6508_20px)] opacity-90" />

        <div className="mt-28 text-right text-[#D4AF37] opacity-40 font-devanagari text-4xl">❖</div>
        <div className="text-center font-devanagari text-[#FFD700]/70 text-sm tracking-wider">
          {!isOpen && "🪔 दर्शनासाठी स्वागत आहे"}
        </div>
        <div className="mb-8 text-right text-[#D4AF37] opacity-40 font-devanagari text-4xl">❖</div>
      </motion.div>
    </div>
  );
};

export default CurtainOpening;
