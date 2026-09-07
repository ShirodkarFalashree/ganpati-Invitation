import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export const CelebrationTimeline = ({ config }) => {
  return (
    <section id="celebration" className="relative py-16 sm:py-24 px-4 max-w-5xl mx-auto">
      <SectionHeading
        marathiTitle="॥ उत्सवाचे वेळापत्रक ॥"
        title={config.celebrationTitle}
        subtitle="Join us for every sacred moment of devotion, music, and prasad."
      />

      <div className="relative mt-12">
        {/* Central Connecting Vertical Line (Desktop & Mobile) */}
        <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#D4AF37] via-[#C85217] to-[#D4AF37] -translate-x-1/2 rounded-full hidden sm:block opacity-60" />
        <div className="absolute left-6 top-4 bottom-4 w-1 bg-gradient-to-b from-[#D4AF37] via-[#C85217] to-[#D4AF37] -translate-x-1/2 rounded-full sm:hidden opacity-60" />

        {/* Timeline Events List */}
        <div className="space-y-12 sm:space-y-16">
          {config.timeline.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Center Brass Icon Node */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C85217] p-0.5 shadow-lg flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#FAF7F0] flex items-center justify-center text-xl shadow-inner">
                    {item.icon || '🪔'}
                  </div>
                </div>

                {/* Card Container (Left or Right) */}
                <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-16 sm:pl-0 ${isEven ? 'sm:text-right sm:pr-8' : 'sm:pl-8'}`}>
                  <div
                    className={`relative p-6 rounded-2xl glass-card border transition-all duration-300 hover:shadow-xl ${
                      item.highlight
                        ? 'border-[#C85217] ring-2 ring-[#C85217]/20 bg-gradient-to-br from-[#FFFDF9] to-[#FFF3E6]'
                        : 'border-[#D4AF37]/30'
                    }`}
                  >
                    {item.highlight && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#C85217] text-white mb-3">
                        <Sparkles size={12} /> Main Day
                      </span>
                    )}

                    {/* Event Title */}
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#5E1E09] mb-2">
                      {item.title}
                    </h3>

                    {/* Event Date & Time */}
                    <div
                      className={`flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-[#C85217] mb-3 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}
                    >
                      {item.date && (
                        <div className="flex items-center gap-1.5 bg-[#FAF7F0] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                          <Calendar size={14} className="text-[#D4AF37]" />
                          <span>{item.date}</span>
                        </div>
                      )}
                      {item.time && (
                        <div className="flex items-center gap-1.5 bg-[#FAF7F0] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                          <Clock size={14} className="text-[#D4AF37]" />
                          <span>{item.time}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#6B5244] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CelebrationTimeline;
