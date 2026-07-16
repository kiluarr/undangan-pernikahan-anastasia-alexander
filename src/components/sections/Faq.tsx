import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { wedding } from '../../data/wedding';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq">
      <SectionTitle
        eyebrow="Pertanyaan"
        title="Sering Ditanyakan"
        subtitle="Beberapa hal yang mungkin ingin Anda ketahui sebelum menghadiri hari bahagia kami."
      />
      <div className="max-w-2xl mx-auto space-y-3">
        {wedding.faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-2xl overflow-hidden shadow-soft"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-serif text-lg text-ink-800 dark:text-ivory-50">{f.q}</span>
              <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-5 h-5 text-gold-500 shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-5 pb-5 text-ink-500 dark:text-ivory-200/70 font-sans font-light leading-relaxed">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
