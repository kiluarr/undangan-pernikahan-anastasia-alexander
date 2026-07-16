import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-2xl`}
    >
      {eyebrow && (
        <p className="text-xs tracking-[0.35em] uppercase text-gold-500 mb-4 font-sans font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-ink-800 dark:text-ivory-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-ink-500 dark:text-ivory-200/70 font-sans font-light text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="divider-ornament mt-8">
        <span className="text-lg">&#10042;</span>
      </div>
    </motion.div>
  );
}

export function SectionWrapper({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 md:px-10 py-24 md:py-32 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
