import React from 'react';
import { motion } from 'framer-motion';
import DiyaAnimation from './DiyaAnimation';

export const GanpatiImageFrame = ({ imageSrc, altText = "Ganpati Bappa Idol" }) => {
  return (
    <div className="relative group max-w-2xl mx-auto rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-[#D4AF37]/40 via-[#C59B27]/20 to-[#D4AF37]/40 shadow-2xl border border-[#D4AF37]/30">
      {/* Decorative Brass Arch Corners */}
      <div className="absolute top-2 left-2 text-[#D4AF37] text-xl z-20">❖</div>
      <div className="absolute top-2 right-2 text-[#D4AF37] text-xl z-20">❖</div>
      <div className="absolute bottom-2 left-2 text-[#D4AF37] text-xl z-20">❖</div>
      <div className="absolute bottom-2 right-2 text-[#D4AF37] text-xl z-20">❖</div>

      {/* Main Image Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-inner bg-[#2C140E]">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-[380px] sm:h-[480px] md:h-[540px] object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Ambient Soft Gold Lighting Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#2C140E]/80 via-transparent to-black/20" />

        {/* Decorative Diya Lights at base of photo */}
        <div className="absolute bottom-4 inset-x-0 flex items-center justify-between px-6 z-10">
          <DiyaAnimation size="small" />
          <div className="font-devanagari text-white/90 text-sm tracking-widest bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-300/30">
            ॥ मंगलमूर्ती मोरया ॥
          </div>
          <DiyaAnimation size="small" />
        </div>
      </div>
    </div>
  );
};

export const DarshanSection = ({ config }) => {
  return (
    <section id="darshan" className="relative py-16 sm:py-24 px-4 max-w-5xl mx-auto text-center">
      {/* Devotional Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-sans-body text-sm sm:text-base tracking-[0.2em] uppercase text-[#C85217] font-semibold mb-2"
      >
        {config.darshanSubheading}
      </motion.p>

      {/* Main Marathi Devotional Chant */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-devanagari text-4xl sm:text-6xl md:text-7xl font-bold text-[#5E1E09] mb-4 tracking-wide drop-shadow-sm"
      >
        {config.darshanHeadingMarathi}
      </motion.h2>

      {/* Celebration Date Banner Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FAF7F0] via-[#FFF3E6] to-[#FAF7F0] border border-[#D4AF37]/50 shadow-md mb-8 text-[#5E1E09]"
      >
        <span className="text-[#C85217]">🌺</span>
        <span className="font-serif-heading font-bold text-sm sm:text-base tracking-wide text-[#3B281B]">
          {config.celebrationDates}
        </span>
        <span className="px-2 py-0.5 rounded-md bg-[#C85217] text-white text-xs font-bold font-sans-body">
          {config.celebrationDays}
        </span>
        <span className="text-[#C85217]">🌺</span>
      </motion.div>

      {/* Reusable Ganpati Idol Image Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mb-10"
      >
        <GanpatiImageFrame imageSrc={config.ganpatiImage} altText="Our Home Bappa Darshan" />
      </motion.div>

      {/* Devotional Quote Below Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl glass-card border border-[#D4AF37]/30 shadow-lg relative"
      >
        {/* <div className="text-3xl text-[#C85217] mb-2">🙏</div> */}
        <p className="font-serif-heading text-lg sm:text-2xl text-[#3B281B] font-medium leading-relaxed italic">
          "{config.darshanBlessingQuote}"
        </p>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
      </motion.div>
    </section>
  );
};

export default DarshanSection;
