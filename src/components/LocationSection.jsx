import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { MapPin, Navigation, Train, Car, Copy, Check } from 'lucide-react';

export const LocationSection = ({ config }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(config.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="location" className="relative py-16 sm:py-24 px-4 max-w-5xl mx-auto">
      <SectionHeading
        marathiTitle="॥ आमचे निवासस्थान ॥"
        title={config.locationTitle}
        subtitle="Here is the location to reach our home for Bappa's divine Darshan."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl glass-card border border-[#D4AF37]/40 shadow-xl overflow-hidden p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Side: Address & CTA */}
          <div className="md:col-span-7 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C85217] to-[#E88D37] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <MapPin size={26} />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C85217]">
                  Venue Address
                </span>
                <h3 className="font-serif-heading text-2xl font-bold text-[#5E1E09] mt-1">
                  {config.familyName} Residence
                </h3>
                <p className="text-base sm:text-lg text-[#3B281B] mt-2 leading-relaxed font-sans-body">
                  {config.fullAddress}
                </p>
              </div>
            </div>

            {/* Actions: Copy & Directions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* <a
                href={config.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C85217] to-[#E88D37] text-white font-serif-heading font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5"
              >
                <Navigation size={18} />
                <span>🗺️ Get Directions</span>
              </a> */}

              <button
                onClick={handleCopyAddress}
                className="px-5 py-3.5 rounded-xl bg-[#FAF7F0] border border-[#D4AF37]/40 text-[#5E1E09] font-medium text-sm hover:bg-amber-50 transition-colors flex items-center gap-2 cursor-pointer"
              >
                {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                <span>{copied ? "Address Copied!" : "Copy Address"}</span>
              </button>
            </div>
          </div>

          {/* Right Side: Transit & Parking Guide */}
          <div className="md:col-span-5 bg-[#FAF7F0] p-6 rounded-2xl border border-[#D4AF37]/30 space-y-4">
            <h4 className="font-serif-heading text-lg font-bold text-[#5E1E09] pb-2 border-b border-[#D4AF37]/20 flex items-center gap-2">
              <span></span> Travel & Parking Guide
            </h4>

            {config.transportDetails.railway && (
              <div className="flex items-start gap-3 text-sm text-[#6B5244]">
                <Train size={18} className="text-[#C85217] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[#3B281B] block">Nearest Railway:</span>
                  <span>{config.transportDetails.railway}</span>
                </div>
              </div>
            )}

            {config.transportDetails.metro && (
              <div className="flex items-start gap-3 text-sm text-[#6B5244]">
                <Train size={18} className="text-[#C85217] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[#3B281B] block">Nearest Metro:</span>
                  <span>{config.transportDetails.metro}</span>
                </div>
              </div>
            )}

            {config.transportDetails.parking && (
              <div className="flex items-start gap-3 text-sm text-[#6B5244]">
                <Car size={18} className="text-[#C85217] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-[#3B281B] block">Parking Availability:</span>
                  <span>{config.transportDetails.parking}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;
