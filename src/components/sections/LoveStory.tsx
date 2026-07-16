import { motion } from 'framer-motion';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { wedding } from '../../data/wedding';

export function LoveStory() {
  return (
    <SectionWrapper id="story">
      <SectionTitle
        eyebrow="Perjalanan Cinta"
        title="Kisah Cinta Kami"
        subtitle="Setiap kisah memiliki awal. Inilah awal dari kisah kami yang akan terus kami kenang selamanya."
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold-400/40 to-transparent md:-translate-x-1/2" />

        {wedding.story.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex mb-12 md:mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="w-4 h-4 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 ring-4 ring-ivory-50 dark:ring-ink-900 shadow-glow"
              />
            </div>

            <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <div className="glass rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-glow transition-shadow duration-500">
                <span className="inline-block px-4 py-1 rounded-full bg-gold-400/15 text-gold-600 dark:text-gold-300 text-sm font-serif italic mb-4">
                  {item.year}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-ink-800 dark:text-ivory-50 mb-3">
                  {item.title}
                </h3>
                <p className="text-ink-500 dark:text-ivory-200/70 font-sans font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
