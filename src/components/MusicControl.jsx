import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { playTempleBellSound } from '../utils/audioUtils';

export const MusicControl = ({ audioPath = '/audio/ganpati.mp3', autoPlayTrigger = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create HTML5 Audio element instance
    audioRef.current = new Audio(audioPath);
    audioRef.current.loop = true;

    audioRef.current.onerror = () => {
      setHasError(true);
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioPath]);

  // Handle autoPlayTrigger when curtains open
  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      startPlayback();
    }
  }, [autoPlayTrigger]);

  const startPlayback = () => {
    playTempleBellSound();

    if (audioRef.current && !hasError) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio playback failed or blocked:', err);
        setIsPlaying(true);
      });
    } else {
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      startPlayback();
    }
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute devotional music" : "Play devotional music"}
        className={`group relative p-4 rounded-full shadow-2xl backdrop-blur-md border transition-all duration-300 flex items-center justify-center cursor-pointer ${
          isPlaying
            ? 'bg-gradient-to-r from-[#C85217] to-[#E88D37] text-white border-amber-300/40 ring-4 ring-[#C85217]/20 scale-105'
            : 'bg-[#FAF7F0]/90 text-[#5E1E09] border-[#D4AF37]/50 hover:bg-amber-100/80'
        }`}
      >
        {isPlaying && (
          <span className="absolute inset-0 rounded-full bg-[#E88D37] animate-ping opacity-30 pointer-events-none" />
        )}

        <div className="flex items-center gap-2 font-serif-heading text-xs font-semibold">
          {isPlaying ? (
            <>
              <Volume2 size={20} className="animate-pulse" />
              <span className="hidden sm:inline-block pr-1">Devotional Audio</span>
            </>
          ) : (
            <>
              <VolumeX size={20} />
              <span className="hidden sm:inline-block pr-1">Sound Off</span>
            </>
          )}
        </div>
      </button>
    </motion.div>
  );
};

export default MusicControl;
