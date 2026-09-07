import React from 'react';
import { motion } from 'framer-motion';
import DiyaAnimation from './DiyaAnimation';

export const FinalBlessing = ({ config }) => {
  return (
    <footer className="relative pt-20 pb-12 px-4 bg-gradient-to-b from-[#FAF7F0] via-[#2C140E] to-[#1F0C08] text-[#FAF7F0] overflow-hidden">
      {/* Background Decorative Gold Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        {/* Diya Flame Centerpiece */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <DiyaAnimation size="medium" />
        </motion.div>

        {/* English Gratitude Heading */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text tracking-tight"
        >
          {config.finalThankYouText}
        </motion.h2> */}

        {/* Marathi Traditional Farewell Chants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-devanagari space-y-3"
        >
          <p className="text-3xl sm:text-5xl font-bold text-[#E88D37] tracking-wider drop-shadow-md">
            {config.finalMarathiTagline1}
          </p>
          <p className="text-2xl sm:text-4xl font-semibold text-[#D4AF37] tracking-wide">
            {config.finalMarathiTagline2}
          </p>
        </motion.div>

        {/* Traditional Gold Divider */}
        <div className="flex items-center justify-center gap-4 pt-6 max-w-xs mx-auto text-[#D4AF37]">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
          <span>🪔</span>
          <span>❖</span>
          <span>🪔</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
        </div>

        {/* Family Signature & Small Footer */}
        <div className="pt-4 text-xs sm:text-sm text-[#D4AF37]/70 space-y-1 font-sans-body">
          <p className="font-semibold text-amber-200">{config.familyName}</p>
          <p>{config.footerCredit}</p>
        </div>
      </div>
    </footer>
  );
};

export default FinalBlessing;
