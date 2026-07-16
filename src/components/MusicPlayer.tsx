import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { wedding } from '../data/wedding';

export function MusicPlayer({ autoPlay }: { autoPlay: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    if (autoPlay) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, [autoPlay]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={wedding.music} loop />
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggle}
        aria-label={playing ? 'Jeda musik' : 'Putar musik'}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full glass-strong shadow-soft flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.div key="playing" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <Volume2 className="w-5 h-5 text-gold-500" />
            </motion.div>
          ) : (
            <motion.div key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <VolumeX className="w-5 h-5 text-ink-500 dark:text-ivory-200" />
            </motion.div>
          )}
        </AnimatePresence>
        {playing && (
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-gold-400"
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        )}
        <Music className="w-3 h-3 text-gold-400 absolute -top-1 -right-1" />
      </motion.button>
    </>
  );
}
