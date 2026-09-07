import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ subtitle, title, marathiTitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {/* Optional Marathi Subtitle or Chant */}
      {marathiTitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-devanagari text-xl sm:text-2xl text-[#C85217] font-medium tracking-wide mb-1"
        >
          {marathiTitle}
        </motion.p>
      )}

      {/* Main English / Sanskrit Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B281B] tracking-tight"
      >
        {title}
      </motion.h2>

      {/* Supporting Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#6B5244] max-w-2xl mx-auto mt-3 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Traditional Marigold / Gold Divider Motif */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`flex items-center justify-center gap-3 mt-4 ${center ? 'mx-auto' : ''}`}
      >
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
        <span className="text-[#C85217] text-xs">🪔</span>
        <span className="text-[#D4AF37] text-sm">❖</span>
        <span className="text-[#C85217] text-xs">🪔</span>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
      </motion.div>
    </div>
  );
};

export default SectionHeading;
