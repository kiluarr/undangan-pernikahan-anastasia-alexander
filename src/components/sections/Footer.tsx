import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { wedding } from '../../data/wedding';

export function Footer() {
  return (
    <footer className="relative px-6 py-16 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ivory-100 dark:to-ink-800" />
      <div className="noise-overlay" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <p className="font-script text-5xl text-gradient-gold mb-4">
          {wedding.bride.nickname} &amp; {wedding.groom.nickname}
        </p>
        <div className="divider-ornament w-48 mx-auto mb-6">
          <span className="text-sm">&#10042;</span>
        </div>
        <p className="font-serif text-lg text-ink-600 dark:text-ivory-200/70 italic mb-2">
          "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
        </p>
        <p className="text-xs tracking-widest uppercase text-gold-500 font-sans mt-2">QS. Ar-Rum: 21</p>

        <div className="mt-8 flex items-center justify-center gap-2 text-ink-400 dark:text-ivory-200/40 text-xs tracking-[0.2em] uppercase font-sans">
          <span>Dibuat dengan</span>
          <Heart className="w-3 h-3 text-gold-400 fill-gold-400" />
          <span>untuk {wedding.hashtag}</span>
        </div>
        <p className="mt-4 text-xs text-ink-400 dark:text-ivory-200/40 font-sans">
          &copy; {new Date().getFullYear()} {wedding.bride.nickname} &amp; {wedding.groom.nickname}. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
