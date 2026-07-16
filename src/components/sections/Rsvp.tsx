import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Check, Heart, Loader2, Send } from 'lucide-react';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { supabase } from '../../lib/supabase';

export function Rsvp() {
  const [form, setForm] = useState({ name: '', attendance: 'attending' as 'attending' | 'not_attending', guestCount: 1, message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setStatus('loading');
    const { error } = await supabase.from('rsvp').insert({
      name: form.name.trim(),
      attendance: form.attendance,
      guest_count: form.attendance === 'attending' ? form.guestCount : 0,
      message: form.message.trim() || null,
    });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('success');
  };

  return (
    <SectionWrapper id="rsvp">
      <SectionTitle
        eyebrow="Konfirmasi Kehadiran"
        title="Konfirmasi"
        subtitle="Mohon konfirmasi kehadiran Anda untuk membantu kami mempersiapkan hari yang spesial ini."
      />

      <div className="max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-strong rounded-3xl p-10 text-center shadow-soft"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center mb-6 shadow-glow"
              >
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </motion.div>
              <h3 className="font-serif text-3xl text-ink-800 dark:text-ivory-50 mb-3">Terima Kasih!</h3>
              <p className="text-ink-500 dark:text-ivory-200/70 font-sans font-light">
                Konfirmasi Anda telah kami terima. Sampai jumpa di hari bahagia kami.
              </p>
              <button
                onClick={() => { setStatus('idle'); setForm({ name: '', attendance: 'attending', guestCount: 1, message: '' }); }}
                className="mt-6 text-xs tracking-[0.2em] uppercase text-gold-500 hover:text-gold-300 transition-colors"
              >
                Submit Lagi
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={submit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass-strong rounded-3xl p-8 md:p-10 shadow-soft space-y-5"
            >
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-ink-500 dark:text-ivory-200/60 mb-2 font-sans">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-ivory-50/50 dark:bg-ink-800/50 border border-gold-300/30 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all font-sans text-ink-800 dark:text-ivory-50"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-ink-500 dark:text-ivory-200/60 mb-3 font-sans">
                  Kehadiran
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['attending', 'not_attending'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, attendance: opt })}
                      className={`px-4 py-3 rounded-xl border transition-all font-sans text-sm ${
                        form.attendance === opt
                          ? 'bg-gradient-to-r from-gold-400/20 to-gold-300/10 border-gold-400 text-gold-600 dark:text-gold-300'
                          : 'border-ink-200 dark:border-ink-600 text-ink-500 dark:text-ivory-200/60 hover:border-gold-300/50'
                      }`}
                    >
                      {opt === 'attending' ? 'Akan Hadir' : 'Tidak Hadir'}
                    </button>
                  ))}
                </div>
              </div>

              {form.attendance === 'attending' && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                  <label className="block text-xs tracking-[0.2em] uppercase text-ink-500 dark:text-ivory-200/60 mb-2 font-sans">
                    Jumlah Tamu
                  </label>
                  <div className="flex items-center gap-4">
                    <button type="button" onClick={() => setForm({ ...form, guestCount: Math.max(1, form.guestCount - 1) })} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold-500">-</button>
                    <span className="font-serif text-2xl text-ink-800 dark:text-ivory-50 w-8 text-center">{form.guestCount}</span>
                    <button type="button" onClick={() => setForm({ ...form, guestCount: Math.min(10, form.guestCount + 1) })} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold-500">+</button>
                  </div>
                </motion.div>
              )}

              <div>
                <label className="block text-xs tracking-[0.2em] uppercase text-ink-500 dark:text-ivory-200/60 mb-2 font-sans">
                  Pesan (Opsional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-ivory-50/50 dark:bg-ink-800/50 border border-gold-300/30 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all font-sans text-ink-800 dark:text-ivory-50 resize-none"
                  placeholder="Pesan untuk mempelai..."
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500 text-center">Terjadi kesalahan. Silakan coba lagi.</p>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-white font-sans text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-2 hover:shadow-glow transition-shadow disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Mengirim...</>
                ) : (
                  <><Send className="w-4 h-4" /> Kirim Konfirmasi <Heart className="w-3 h-3" /></>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
