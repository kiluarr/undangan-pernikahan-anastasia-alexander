import { motion } from 'framer-motion';
import { Check, Copy, CreditCard, QrCode, Wallet } from 'lucide-react';
import { useState } from 'react';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { wedding } from '../../data/wedding';

function GiftCard({ gift, index }: { gift: (typeof wedding.gifts)[number]; index: number }) {
  const [copied, setCopied] = useState(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const icon =
    gift.type === 'QRIS' ? QrCode : gift.type === 'E-Wallet' ? Wallet : CreditCard;

  const Icon = icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-shadow duration-500"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-300/30 to-gold-500/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-gold-500" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-ink-400 dark:text-ivory-200/50 font-sans">{gift.type}</p>
          {gift.bank && <p className="font-serif text-lg text-ink-800 dark:text-ivory-50">{gift.bank}</p>}
        </div>
      </div>

      {gift.type === 'QRIS' ? (
        <div className="flex flex-col items-center">
          <div className="rounded-2xl overflow-hidden bg-white p-3 shadow-soft">
            <img src={gift.qris} alt="QRIS" className="w-40 h-40 object-contain" />
          </div>
          <p className="mt-3 text-sm text-ink-500 dark:text-ivory-200/60 font-sans">Pindai untuk membayar via QRIS</p>
        </div>
      ) : (
        <>
          <div className="rounded-xl bg-ivory-50/50 dark:bg-ink-800/50 border border-gold-300/20 p-4 mb-3">
            <p className="text-xs text-ink-400 dark:text-ivory-200/50 font-sans mb-1">Nomor Rekening</p>
            <p className="font-serif text-xl text-ink-800 dark:text-ivory-50 tracking-wider">{gift.number}</p>
            <p className="text-sm text-ink-500 dark:text-ivory-200/60 font-sans mt-1">a.n. {gift.holder}</p>
          </div>
          <button
            onClick={() => copy(gift.number!)}
            className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-gold-500/15 to-gold-300/10 border border-gold-400/30 text-gold-600 dark:text-gold-300 font-sans text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:shadow-glow transition-shadow"
          >
            {copied ? <><Check className="w-4 h-4" /> Tersalin!</> : <><Copy className="w-4 h-4" /> Salin Nomor</>}
          </button>
        </>
      )}
    </motion.div>
  );
}

export function Gift() {
  return (
    <SectionWrapper id="gift">
      <SectionTitle
        eyebrow="Hadiah Pernikahan"
        title="Tanda Kasih"
        subtitle="Doa restu Anda adalah hadiah terindah. Namun bila ingin memberi tanda kasih, kami sediakan beberapa pilihan berikut."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {wedding.gifts.map((g, i) => (
          <GiftCard key={i} gift={g} index={i} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center max-w-xl mx-auto"
      >
        <div className="glass rounded-2xl p-5 shadow-soft">
          <p className="text-sm text-ink-500 dark:text-ivory-200/70 font-sans font-light leading-relaxed">
            Setiap pemberian dari Anda adalah ungkapan cinta yang akan selalu kami kenang. Terima kasih dari hati yang terdalam.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
