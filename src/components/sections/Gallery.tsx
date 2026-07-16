import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { wedding } from '../../data/wedding';

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <SectionWrapper id="gallery">
      <SectionTitle
        eyebrow="Kenangan Berharga"
        title="Galeri Kami"
        subtitle="Momen-momen indah yang kami abadikan bersama, kenangan yang akan kami simpan selamanya."
      />

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto">
        {wedding.gallery.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
            className={`mb-4 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-shadow ${
              i % 5 === 0 ? 'row-span-2' : ''
            }`}
            onClick={() => setActive(i)}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-white text-xs tracking-[0.2em] uppercase font-sans">Lihat</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] bg-ink-900/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white hover:scale-110 transition-transform" onClick={() => setActive(null)}>
              <X className="w-6 h-6" />
            </button>
            <motion.img
              key={active}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={wedding.gallery[active]}
              alt={`Gallery ${active + 1}`}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-glow object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
