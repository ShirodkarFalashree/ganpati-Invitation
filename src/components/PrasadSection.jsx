import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export const PrasadSection = ({ config }) => {
  return (
    <section id="prasad" className="relative py-16 sm:py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading
        marathiTitle="॥ महाप्रसाद ॥"
        title={config.prasadTitle}
        subtitle="Prepared with purity, devotion, and divine blessings for all our beloved guests."
      />

      {/* Prasad Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {config.prasadItems.map((item, index) => (
          <motion.div
            key={item.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl overflow-hidden glass-card border border-[#D4AF37]/30 shadow-lg flex flex-col justify-between"
          >
            {/* Top Badge */}
            {item.badge && (
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF7F0]/90 text-[#C85217] border border-[#D4AF37]/40 shadow-sm backdrop-blur-md">
                {item.badge}
              </div>
            )}

            {/* Item Image Container */}
            <div className="relative h-56 overflow-hidden bg-[#2C140E]">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl bg-amber-100/50">
                  {item.emoji}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C140E]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 text-3xl">
                {item.emoji}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-heading text-2xl font-bold text-[#5E1E09] mb-2 group-hover:text-[#C85217] transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-[#6B5244] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#D4AF37]">
                <span>❖ Sacred Prasad</span>
                <span className="text-[#C85217]">❤️ Made with Love</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Warm Loving Bottom Tagline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFDF9] border border-[#C85217]/30 shadow-md text-[#5E1E09] font-serif-heading text-base sm:text-xl font-semibold">
          <span>{config.prasadSubtitle}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default PrasadSection;
