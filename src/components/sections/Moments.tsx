import { motion } from 'framer-motion';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { wedding } from '../../data/wedding';

export function Moments() {
  return (
    <SectionWrapper id="moments">
      <SectionTitle
        eyebrow="Momen Berharga"
        title="Momen Kami"
        subtitle="Setiap momen yang kami lalui adalah jejak cinta yang akan terus kami kenang sepanjang hidup."
      />
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold-400/40 to-transparent md:-translate-x-1/2" />
        {wedding.moments.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`relative flex mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
              <div className="w-3 h-3 rounded-full bg-gold-400 ring-4 ring-ivory-50 dark:ring-ink-900" />
            </div>
            <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <div className="glass rounded-2xl p-6 shadow-soft">
                <span className="text-xs tracking-widest uppercase text-gold-500 font-sans">{m.date}</span>
                <h3 className="font-serif text-2xl text-ink-800 dark:text-ivory-50 my-1">{m.title}</h3>
                <p className="text-ink-500 dark:text-ivory-200/70 font-sans font-light leading-relaxed">{m.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
