import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { wedding } from '../../data/wedding';

function Profile({ person, delay }: { person: typeof wedding.bride; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center group"
    >
      <div className="relative mb-8">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 blur-xl opacity-40"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-gold-400/50 ring-offset-4 ring-offset-ivory-50 dark:ring-offset-ink-900 shadow-soft">
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        <motion.div
          className="absolute -inset-3 rounded-full border border-gold-300/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-2 font-sans">
        {person === wedding.bride ? 'Mempelai Wanita' : 'Mempelai Pria'}
      </p>
      <h3 className="font-serif text-3xl md:text-4xl text-ink-800 dark:text-ivory-50 mb-6">
        {person.name}
      </h3>

      <div className="glass rounded-2xl px-6 py-4 shadow-soft mb-5 max-w-sm">
        <p className="text-xs tracking-widest uppercase text-ink-400 dark:text-ivory-200/50 mb-2 font-sans">
          Putra/i dari
        </p>
        <p className="font-serif text-base text-ink-700 dark:text-ivory-100 leading-relaxed">
          {person.father}
        </p>
        <p className="font-serif italic text-gold-500 my-1">&amp;</p>
        <p className="font-serif text-base text-ink-700 dark:text-ivory-100 leading-relaxed">
          {person.mother}
        </p>
      </div>

      <a
        href={person.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:shadow-glow transition-all duration-300 group/btn"
      >
        <Instagram className="w-4 h-4 text-gold-500 group-hover/btn:scale-110 transition-transform" />
        <span className="text-xs tracking-[0.2em] uppercase font-sans text-ink-600 dark:text-ivory-200/80">
          Instagram
        </span>
      </a>
    </motion.div>
  );
}

export function Couple() {
  return (
    <SectionWrapper id="couple">
      <SectionTitle
        eyebrow="Mempelai Wanita & Pria"
        title="Pasangan Bahagia"
        subtitle="Dengan memohon rahmat Allah, kami mengundang Anda untuk hadir di hari paling bahagia dalam hidup kami."
      />
      <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-start max-w-4xl mx-auto">
        <Profile person={wedding.bride} delay={0} />
        <Profile person={wedding.groom} delay={0.15} />
      </div>
    </SectionWrapper>
  );
}
