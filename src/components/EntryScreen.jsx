import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DiyaAnimation from './DiyaAnimation';
import { playTempleBellSound } from '../utils/audioUtils';

export const EntryScreen = ({ config, onEnter }) => {
  const handleEnterClick = () => {
    // Play brass temple bell chime
    playTempleBellSound();

    // Trigger parent state transition to reveal website
    onEnter();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-6 overflow-hidden bg-gradient-to-b from-[#3B1E19] via-[#2C140E] to-[#1F0C08] text-[#FAF7F0]"
    >
      {/* Background Subtle Golden Glow & Temple Ornaments */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent" />
      
      {/* Top Floral & Bell Arch */}
      <div className="w-full max-w-4xl flex items-center justify-between pt-4 opacity-80 z-10">
        <div className="text-2xl text-[#D4AF37]">🔔</div>
        <div className="h-[1px] flex-1 mx-4 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        <div className="font-devanagari text-[#E88D37] text-lg sm:text-xl tracking-widest font-semibold">
          {config.sanskritShloka}
        </div>
        <div className="h-[1px] flex-1 mx-4 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        <div className="text-2xl text-[#D4AF37]">🔔</div>
      </div>

      {/* Main Ceremonial Content */}
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center my-auto z-10 px-4">
        {/* Animated Main Diya */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 cursor-pointer"
          onClick={handleEnterClick}
        >
          <DiyaAnimation size="large" />
        </motion.div>

        {/* Sanskrit Shloka Banner */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-devanagari text-2xl sm:text-3xl text-[#E88D37] font-semibold tracking-wider mb-3"
        >
          {config.sanskritShloka}
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif-heading text-4xl sm:text-6xl md:text-7xl font-bold gold-gradient-text tracking-tight mb-6 drop-shadow-md"
        >
          {config.entryTitle}
        </motion.h1>

        {/* Supporting Invitation Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-sans-body text-base sm:text-xl text-[#E5D7C5] max-w-lg mb-10 leading-relaxed"
        >
          {config.entrySubtext}
        </motion.p>

        {/* Primary Ceremonial CTA Button */}
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(232,141,55,0.6)" }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={handleEnterClick}
          className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#C85217] via-[#E88D37] to-[#C85217] text-white font-serif-heading font-bold text-lg sm:text-xl tracking-wider shadow-2xl border border-amber-300/40 flex items-center gap-3 cursor-pointer overflow-hidden"
        >
          {/* Button Shine overlay */}
          <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          <span className="text-xl animate-bounce">🪔</span>
          <span>{config.entryCta}</span>
          <span className="text-amber-200 text-sm group-hover:translate-x-1 transition-transform">➔</span>
        </motion.button>
      </div>

      {/* Footer Ceremonial Motif */}
      <div className="w-full max-w-xs flex items-center justify-center gap-4 text-xs text-[#D4AF37]/70 pb-4 z-10 font-devanagari">
        <span>❖</span>
        <span>श्री गणेशाय नमः</span>
        <span>❖</span>
      </div>
    </motion.div>
  );
};

export default EntryScreen;
