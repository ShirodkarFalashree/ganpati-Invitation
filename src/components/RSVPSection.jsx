import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import confetti from 'canvas-confetti';
import { Check, Plus, Minus, UserCheck, Heart } from 'lucide-react';

export const RSVPSection = ({ config }) => {
  const [guestName, setGuestName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [guestCount, setGuestCount] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [storedRsvp, setStoredRsvp] = useState(null);

  // Load existing RSVP from LocalStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bappa_rsvp');
      if (saved) {
        const parsed = JSON.parse(saved);
        setStoredRsvp(parsed);
        setSubmitted(true);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, []);

  const options = [
    {
      id: 'yes',
      label: "🙏 Yes, I'll be there",
      response: "Yay! Bappa will be waiting for you with open arms. ❤️",
      color: "from-emerald-600 to-emerald-700",
      confetti: true
    },
    {
      id: 'maybe',
      label: "❤️ I'll try my best",
      response: "We hope to see you! Bappa's doors are always open. 🙏",
      color: "from-amber-600 to-amber-700",
      confetti: false
    },
    {
      id: 'no',
      label: "🥺 Can't make it this time",
      response: "We'll miss you! Sending Bappa's blessings to your family. 🌸",
      color: "from-rose-600 to-rose-700",
      confetti: false
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) return;

    const rsvpData = {
      name: guestName.trim() || 'Valued Guest',
      status: selectedOption,
      count: selectedOption === 'no' ? 0 : guestCount,
      timestamp: new Date().toISOString()
    };

    // Save locally (backend API call hook can go here in future)
    try {
      localStorage.setItem('bappa_rsvp', JSON.stringify(rsvpData));
    } catch (err) {
      console.warn('Could not save RSVP:', err);
    }

    setStoredRsvp(rsvpData);
    setSubmitted(true);

    // Trigger celebratory confetti if attending
    const optObj = options.find(o => o.id === selectedOption);
    if (optObj && optObj.confetti) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#C85217', '#E88D37', '#2E4A3B']
      });
    }
  };

  const handleReset = () => {
    localStorage.removeItem('bappa_rsvp');
    setSubmitted(false);
    setStoredRsvp(null);
    setSelectedOption('');
  };

  const activeResponse = options.find(o => o.id === (storedRsvp?.status || selectedOption))?.response;

  return (
    <section id="rsvp" className="relative py-16 sm:py-24 px-4 max-w-4xl mx-auto">
      <SectionHeading
        marathiTitle="॥ उपस्थिती दर्शवा ॥"
        title="Will You Join Us for Bappa's Darshan?"
        subtitle="Please let us know your plans so we can make warm arrangements for your arrival."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl glass-card border border-[#D4AF37]/40 shadow-xl overflow-hidden p-6 sm:p-12 relative"
      >
        <AnimatePresence mode="wait">
          {submitted && storedRsvp ? (
            /* Confirmation State */
            <motion.div
              key="submitted-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-8 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C85217] to-[#E88D37] text-white flex items-center justify-center mx-auto text-3xl shadow-lg">
                🙏
              </div>

              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#5E1E09]">
                Thank You, {storedRsvp.name}!
              </h3>

              <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#D4AF37]/30 max-w-md mx-auto">
                <p className="font-serif-heading text-lg sm:text-xl text-[#C85217] font-semibold mb-2">
                  {activeResponse}
                </p>
                {storedRsvp.status !== 'no' && (
                  <p className="text-sm text-[#6B5244]">
                    Reserved for <span className="font-bold text-[#3B281B]">{storedRsvp.count} family members</span>
                  </p>
                )}
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-[#6B5244] hover:text-[#C85217] underline transition-colors cursor-pointer"
              >
                Need to change your RSVP? Click here to update.
              </button>
            </motion.div>
          ) : (
            /* Interactive RSVP Form */
            <motion.form
              key="form-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Guest Name Input */}
              <div>
                <label className="block text-sm font-semibold text-[#5E1E09] mb-2 font-serif-heading">
                  Your Name / Family Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh & Family"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/40 text-[#3B281B] placeholder-[#9C8273] focus:outline-none focus:ring-2 focus:ring-[#C85217]/50 font-sans-body"
                />
              </div>

              {/* RSVP Options selection */}
              <div>
                <label className="block text-sm font-semibold text-[#5E1E09] mb-3 font-serif-heading">
                  Will you be attending?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedOption(option.id)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                        selectedOption === option.id
                          ? 'border-[#C85217] bg-[#FFF3E6] ring-2 ring-[#C85217]/30 shadow-md scale-[1.02]'
                          : 'border-[#D4AF37]/30 bg-[#FAF7F0] hover:border-[#D4AF37] hover:bg-amber-50/50'
                      }`}
                    >
                      <span className="font-serif-heading font-semibold text-base text-[#3B281B]">
                        {option.label}
                      </span>
                      {selectedOption === option.id && (
                        <span className="mt-2 text-xs font-bold text-[#C85217] flex items-center gap-1">
                          <Check size={14} /> Selected
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Counter (Shown if attending or maybe) */}
              {selectedOption && selectedOption !== 'no' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-5 rounded-2xl bg-[#FAF7F0] border border-[#D4AF37]/30 flex items-center justify-between"
                >
                  <div>
                    <span className="font-serif-heading font-bold text-[#5E1E09] block">
                      Number of People Coming
                    </span>
                    <span className="text-xs text-[#6B5244]">Including kids & family members</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-xl border border-[#D4AF37]/30 shadow-inner">
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="w-8 h-8 rounded-lg bg-[#FAF7F0] text-[#5E1E09] hover:bg-amber-100 flex items-center justify-center font-bold cursor-pointer"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-lg text-[#3B281B] w-6 text-center">
                      {guestCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuestCount(guestCount + 1)}
                      className="w-8 h-8 rounded-lg bg-[#FAF7F0] text-[#5E1E09] hover:bg-amber-100 flex items-center justify-center font-bold cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={!selectedOption}
                className={`w-full py-4 rounded-2xl font-serif-heading font-bold text-lg text-white shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  selectedOption
                    ? 'bg-gradient-to-r from-[#C85217] via-[#E88D37] to-[#C85217] hover:scale-[1.01] active:scale-[0.99]'
                    : 'bg-stone-300 cursor-not-allowed opacity-60'
                }`}
              >
                <span>🙏 Send RSVP Response</span>
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
