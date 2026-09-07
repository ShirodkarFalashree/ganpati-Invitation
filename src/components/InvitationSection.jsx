import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import DiyaAnimation from './DiyaAnimation';

export const InvitationSection = ({ config }) => {
  return (
    <section id="invitation" className="relative py-16 sm:py-24 px-4 max-w-4xl mx-auto">
      <SectionHeading
        marathiTitle="॥ निमंत्रण ॥"
        title={config.invitationTitle}
        subtitle="We warmly welcome you to be a part of our home celebration."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-[#FFFDF9] border border-[#D4AF37]/40 shadow-xl overflow-hidden"
      >
        {/* Parchment & Gold Background Texture effects */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-200/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-orange-200/30 to-transparent pointer-events-none" />

        {/* Traditional Corner Embellishments */}
        <div className="absolute top-4 left-4 text-[#D4AF37] text-2xl">❖</div>
        <div className="absolute top-4 right-4 text-[#D4AF37] text-2xl">❖</div>
        <div className="absolute bottom-4 left-4 text-[#D4AF37] text-2xl">❖</div>
        <div className="absolute bottom-4 right-4 text-[#D4AF37] text-2xl">❖</div>

        {/* Top Floating Diya Accent */}
        <div className="flex flex-col items-center justify-center mb-6">
          <DiyaAnimation size="small" />
          
          {/* Highlighted Celebration Date Box */}
          <div className="mt-4 px-6 py-2.5 rounded-2xl bg-[#FAF7F0] border border-[#D4AF37]/40 shadow-sm flex items-center gap-3 text-[#5E1E09]">
            <span className="text-[#C85217] font-bold text-lg">🪔</span>
            <div>
              <p className="font-serif-heading font-bold text-base sm:text-lg text-[#3B281B]">
                {config.celebrationDates}
              </p>
              <p className="text-xs text-[#C85217] font-semibold tracking-wider uppercase font-sans-body">
                {config.celebrationDays} Celebration
              </p>
            </div>
            <span className="text-[#C85217] font-bold text-lg">🪔</span>
          </div>
        </div>

        {/* Main Invitation Message Body */}
        <div className="font-sans-body text-base sm:text-lg md:text-xl text-[#3B281B] leading-relaxed text-center max-w-2xl mx-auto space-y-6">
          {config.invitationMessage.split('\n\n').map((paragraph, index) => (
            <p key={index} className="tracking-wide">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Traditional Divider */}
        <div className="my-8 flex items-center justify-center gap-2">
          <div className="h-[1px] w-16 bg-[#D4AF37]/50" />
          <span className="text-[#C85217]">🌺</span>
          <div className="h-[1px] w-16 bg-[#D4AF37]/50" />
        </div>

        {/* Closing Signature Block */}
        <div className="text-center font-serif-heading">
          <p className="text-[#6B5244] text-base sm:text-lg italic mb-1">
            {config.invitationClosing}
          </p>
          <p className="text-2xl sm:text-3xl font-bold saffron-gradient-text tracking-wide">
            {config.familyName}
          </p>
          {config.hostNames && (
            <p className="text-sm sm:text-base text-[#6B5244] mt-1 font-sans-body">
              ({config.hostNames})
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default InvitationSection;
