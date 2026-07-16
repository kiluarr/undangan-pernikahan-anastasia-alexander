import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return p + 2;
      });
    }, 24);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory-50 dark:bg-ink-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="font-script text-5xl md:text-7xl text-gradient-gold mb-6">A &amp; A</p>
        <div className="divider-ornament w-48 mx-auto mb-8">
          <span className="text-sm">&#10042;</span>
        </div>
        <div className="w-56 h-[2px] bg-ink-200 dark:bg-ink-700 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-gold-500 to-gold-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-xs tracking-[0.3em] uppercase text-ink-400 font-sans">
          {progress}%
        </p>
      </motion.div>
    </motion.div>
  );
}
