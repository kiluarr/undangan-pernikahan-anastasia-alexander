import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { wedding } from '../data/wedding';

export function WhatsAppButton() {
  const href = `https://wa.me/${wedding.whatsapp}?text=${encodeURIComponent(
    'Halo, saya ingin bertanya tentang pernikahan Anastasia & Alexander'
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-lg flex items-center justify-center group"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <MessageCircle className="w-6 h-6 text-white relative z-10" />
    </motion.a>
  );
}
