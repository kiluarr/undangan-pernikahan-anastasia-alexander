import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { wedding } from '../../data/wedding';

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold-300/60"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-100 via-champagne-50 to-ivory-50 dark:from-ink-900 dark:via-ink-800 dark:to-ink-900" />
      <div
        className="absolute inset-0 opacity-40 dark:opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at top, rgba(212,175,55,0.25), transparent 60%), radial-gradient(ellipse at bottom, rgba(184,133,74,0.15), transparent 60%)',
        }}
      />

      <Particles />
      <div className="noise-overlay" />

      <motion.div
        className="absolute top-1/4 left-10 w-24 h-24 rounded-full border border-gold-300/30 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full border border-gold-300/20 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-gold-500 dark:text-gold-300 font-sans mb-8"
        >
          Kami Mengundang Anda Merayakan
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="font-script text-7xl md:text-9xl lg:text-[10rem] text-gradient-gold leading-[0.9] mb-2">
            {wedding.bride.nickname}
          </h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-serif text-3xl md:text-4xl text-gold-500 italic my-4"
          >
            &amp;
          </motion.p>
          <h1 className="font-script text-7xl md:text-9xl lg:text-[10rem] text-gradient-gold leading-[0.9]">
            {wedding.groom.nickname}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <div className="divider-ornament w-64">
            <span className="text-lg">&#10042;</span>
          </div>
          <p className="font-serif text-xl md:text-2xl text-ink-700 dark:text-ivory-100 tracking-wide">
            {wedding.dateLabel}
          </p>
          <p className="font-sans text-sm tracking-[0.25em] uppercase text-ink-400 dark:text-ivory-200/50">
            {wedding.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12"
        >
          <motion.a
            href="#story"
            whileHover={{ scale: 1.05 }}
            className="inline-flex flex-col items-center gap-2 text-gold-500 dark:text-gold-300"
          >
            <span className="text-xs tracking-[0.3em] uppercase font-sans">Gulir</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="text-gold-400">
                <rect x="0.5" y="0.5" width="19" height="27" rx="9.5" stroke="currentColor" />
                <circle cx="10" cy="8" r="2" fill="currentColor" />
              </svg>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
