import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import confetti from 'canvas-confetti';
import { Send, Heart, Sparkles, Quote } from 'lucide-react';

export const BlessingWall = ({ config }) => {
  const [blessings, setBlessings] = useState(config.initialBlessings || []);
  const [authorName, setAuthorName] = useState('');
  const [blessingText, setBlessingText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load stored blessings from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bappa_blessings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setBlessings(parsed);
        }
      }
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!authorName.trim() || !blessingText.trim()) return;

    setIsSubmitting(true);

    const newBlessing = {
      id: Date.now(),
      name: authorName.trim(),
      blessing: blessingText.trim(),
      date: 'Just now'
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);

    try {
      localStorage.setItem('bappa_blessings', JSON.stringify(updated));
    } catch (err) {
      console.warn('Could not save blessing:', err);
    }

    setAuthorName('');
    setBlessingText('');
    setIsSubmitting(false);

    // Festive celebratory confetti burst
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#C85217', '#E88D37']
    });
  };

  return (
    <section id="blessings" className="relative py-16 sm:py-24 px-4 max-w-5xl mx-auto">
      <SectionHeading
        marathiTitle="॥ शुभ आशीर्वाद ॥"
        title="Leave a Blessing for Bappa"
        subtitle="Write your prayers, wishes, and devotion to Lord Ganesha on our digital blessing wall."
      />

      {/* Write Blessing Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl glass-card border border-[#D4AF37]/40 shadow-xl overflow-hidden p-6 sm:p-10 mb-12"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
            <div className="sm:col-span-4">
              <label className="block text-sm font-semibold text-[#5E1E09] mb-2 font-serif-heading">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Aarav Sharma"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/40 text-[#3B281B] placeholder-[#9C8273] focus:outline-none focus:ring-2 focus:ring-[#C85217]/50 font-sans-body"
              />
            </div>

            <div className="sm:col-span-8">
              <label className="block text-sm font-semibold text-[#5E1E09] mb-2 font-serif-heading">
                Your Blessing / Devotional Wish
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ganpati Bappa Morya! May Bappa bless everyone with happiness... ❤️"
                value={blessingText}
                onChange={(e) => setBlessingText(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/40 text-[#3B281B] placeholder-[#9C8273] focus:outline-none focus:ring-2 focus:ring-[#C85217]/50 font-sans-body"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || !authorName.trim() || !blessingText.trim()}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C85217] via-[#E88D37] to-[#C85217] text-white font-serif-heading font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              <span>🙏 Send Blessing</span>
            </button>
          </div>
        </form>
      </motion.div>

      {/* Blessing Cards Wall Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {blessings.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/30 shadow-md relative group hover:border-[#C85217]/50 transition-all flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 text-[#D4AF37]/40 group-hover:text-[#C85217] transition-colors">
                <Quote size={24} />
              </div>

              <div>
                <p className="font-serif-heading text-lg font-bold text-[#5E1E09] mb-2 flex items-center gap-2">
                  <span>{item.name}</span>
                  <span className="text-[#C85217] text-xs">❤️</span>
                </p>
                <p className="text-base text-[#3B281B] leading-relaxed italic">
                  "{item.blessing}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#9C8273]">
                <span>❖ Bappa's Blessing</span>
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlessingWall;
