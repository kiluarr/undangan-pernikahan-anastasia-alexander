import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Kisah', href: '#story' },
  { label: 'Mempelai', href: '#couple' },
  { label: 'Acara', href: '#events' },
  { label: 'Konfirmasi', href: '#rsvp' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Hadiah', href: '#gift' },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-soft py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#hero" className="font-script text-2xl text-gradient-gold">
            A &amp; A
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.2em] uppercase text-ink-600 dark:text-ivory-200/80 hover:text-gold-500 transition-colors duration-300 font-sans"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Ganti tema"
              className="p-2 rounded-full glass hover:scale-110 transition-transform"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-ink-600" />
              ) : (
                <Sun className="w-4 h-4 text-gold-300" />
              )}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-full glass"
              aria-label="Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`h-[2px] w-full bg-ink-700 dark:bg-ivory-50 transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`h-[2px] w-full bg-ink-700 dark:bg-ivory-50 transition-all ${open ? 'opacity-0' : ''}`} />
                <span className={`h-[2px] w-full bg-ink-700 dark:bg-ivory-50 transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden glass-strong mx-4 rounded-2xl shadow-soft py-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-sm tracking-[0.2em] uppercase text-ink-600 dark:text-ivory-200/80 hover:text-gold-500 transition-colors font-sans"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
