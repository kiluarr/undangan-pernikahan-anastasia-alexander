import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { wedding } from '../../data/wedding';

function useCountdown(target: string) {
  const calc = () => {
    const diff = new Date(target).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl glass-strong shadow-soft flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-transparent" />
        <motion.span
          key={value}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative font-serif text-3xl md:text-5xl text-gradient-gold font-medium"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="mt-3 text-xs tracking-[0.25em] uppercase text-ink-500 dark:text-ivory-200/60 font-sans">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const time = useCountdown(wedding.date);

  return (
    <SectionWrapper id="countdown">
      <SectionTitle
        eyebrow="Hitung Mundur"
        title="Menuju Hari Bahagia"
        subtitle="Setiap detik membawa kami lebih dekat ke hari yang telah kami nanti-nantikan."
      />
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-3xl mx-auto">
        <TimeUnit value={time.days} label="Hari" />
        <TimeUnit value={time.hours} label="Jam" />
        <TimeUnit value={time.minutes} label="Menit" />
        <TimeUnit value={time.seconds} label="Detik" />
      </div>
    </SectionWrapper>
  );
}
