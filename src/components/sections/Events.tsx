import { motion } from 'framer-motion';
import { Clock, MapPin, Navigation, Shirt } from 'lucide-react';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { wedding } from '../../data/wedding';

export function Events() {
  return (
    <SectionWrapper id="events">
      <SectionTitle
        eyebrow="Simpan Tanggal"
        title="Acara Pernikahan"
        subtitle="Kami senang jika Anda dapat bergabung dalam momen sakral ini. Berikut adalah detail acara yang akan kami selenggarakan."
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {wedding.events.map((ev, i) => (
          <motion.div
            key={ev.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition-shadow duration-500 group"
          >
            <div className="relative h-40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-champagne-200 to-gold-300 dark:from-ink-700 dark:to-ink-600" />
              <div className="absolute inset-0 noise-overlay opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-script text-4xl text-white/90 drop-shadow-lg">{ev.title}</h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ivory-50/80 dark:from-ink-900/80 to-transparent" />
            </div>

            <div className="p-6 md:p-8 -mt-4 relative">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-ink-400 dark:text-ivory-200/50 font-sans">{ev.date}</p>
                    <p className="font-serif text-lg text-ink-700 dark:text-ivory-100">{ev.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-serif text-lg text-ink-700 dark:text-ivory-100">{ev.venue}</p>
                    <p className="text-sm text-ink-500 dark:text-ivory-200/60 font-sans font-light">{ev.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shirt className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-ink-600 dark:text-ivory-200/70 font-sans font-light">{ev.dress}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden border border-gold-300/20">
                <iframe
                  title={`Map ${ev.title}`}
                  src={ev.mapUrl}
                  className="w-full h-44 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href={ev.navUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-white font-sans text-xs tracking-[0.2em] uppercase hover:shadow-glow transition-shadow"
              >
                <Navigation className="w-4 h-4" />
                Lihat Petunjuk Arah
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
