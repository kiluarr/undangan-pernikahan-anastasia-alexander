import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { wedding } from '../data/wedding';

export function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      exit={{ opacity: 0, y: -40, scale: 1.04 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-100 via-ivory-50 to-champagne-100 dark:from-ink-800 dark:via-ink-900 dark:to-ink-900" />
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(184,133,74,0.2), transparent 40%)',
        }}
      />
      <div className="noise-overlay" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-6 md:inset-12 border border-gold-400/40 rounded-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute inset-8 md:inset-16 border border-gold-300/30 rounded-3xl"
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold-600 dark:text-gold-300 font-sans mb-8"
        >
          Undangan Pernikahan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient-gold leading-none mb-4"
        >
          {wedding.bride.nickname}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-serif text-2xl md:text-3xl text-gold-500 italic mb-4"
        >
          &amp;
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient-gold leading-none mb-10"
        >
          {wedding.groom.nickname}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-serif text-lg md:text-xl text-ink-600 dark:text-ivory-200/80 tracking-wide mb-2"
        >
          {wedding.dateLabel}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-sans text-sm text-ink-400 dark:text-ivory-200/50 tracking-widest uppercase mb-12"
        >
          {wedding.location}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
          className="group relative px-10 py-4 rounded-full glass-strong shadow-soft overflow-hidden"
        >
          <span className="relative z-10 font-sans text-sm tracking-[0.25em] uppercase text-ink-700 dark:text-ivory-50 flex items-center gap-2">
            Buka Undangan
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-gold-300/30 to-gold-400/0"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.8 }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
}
