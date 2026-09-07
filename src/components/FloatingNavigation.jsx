import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';

export const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState('darshan');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'darshan', label: 'Darshan', icon: '🙏' },
    { id: 'invitation', label: 'Invitation', icon: '🌺' },
    { id: 'celebration', label: 'Celebration', icon: '🪔' },
    { id: 'prasad', label: 'Prasad', icon: '🍬' },
    { id: 'location', label: 'Location', icon: '📍' },
    { id: 'rsvp', label: 'RSVP', icon: '✍️' },
    { id: 'blessings', label: 'Blessings', icon: '❤️' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!scrolled) return null;

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto bg-[#FAF7F0]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-2xl rounded-full px-4 py-2 flex items-center gap-2 sm:gap-6">
        {/* Brand Badge */}
        <button
          onClick={() => scrollToSection('darshan')}
          className="flex items-center gap-1.5 font-devanagari font-bold text-[#C85217] text-sm sm:text-base pr-2 border-r border-[#D4AF37]/30 cursor-pointer"
        >
          <Flame size={16} className="text-[#E88D37] animate-pulse" />
          <span>बाप्पा</span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-3 py-1.5 rounded-full font-serif-heading text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeSection === link.id
                  ? 'bg-gradient-to-r from-[#C85217] to-[#E88D37] text-white shadow-md'
                  : 'text-[#3B281B] hover:text-[#C85217] hover:bg-amber-100/50'
              }`}
            >
              <span className="mr-1.5">{link.icon}</span>
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-full text-[#5E1E09] hover:bg-amber-100/50 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Card */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="pointer-events-auto absolute top-16 left-4 right-4 bg-[#FAF7F0] border border-[#D4AF37]/40 shadow-2xl rounded-2xl p-4 md:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`p-3 rounded-xl font-serif-heading text-sm font-semibold text-left transition-all cursor-pointer flex items-center gap-2 ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-[#C85217] to-[#E88D37] text-white shadow-md'
                      : 'text-[#3B281B] bg-amber-50/50 hover:bg-amber-100'
                  }`}
                >
                  <span className="text-base">{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default FloatingNavigation;
