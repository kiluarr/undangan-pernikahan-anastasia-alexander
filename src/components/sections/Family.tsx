import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { wedding } from '../../data/wedding';

export function Family() {
  return (
    <SectionWrapper id="family">
      <SectionTitle
        eyebrow="Dengan Rasa Syukur"
        title="Keluarga Tercinta"
        subtitle="Dengan penuh rasa syukur, kami mengucapkan terima kasih kepada kedua orang tua kami yang telah membimbing hingga hari ini."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {wedding.family.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 text-center shadow-soft hover:shadow-glow transition-shadow duration-500 group"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-gold-300/30 to-gold-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <Users className="w-6 h-6 text-gold-500" />
            </div>
            <p className="text-xs uppercase tracking-widest text-ink-400 dark:text-ivory-200/50 font-sans mb-2">{m.role}</p>
            <p className="font-serif text-lg text-ink-800 dark:text-ivory-50 leading-snug">{m.name}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
