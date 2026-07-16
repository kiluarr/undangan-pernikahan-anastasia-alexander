import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Heart, Loader2, Send } from 'lucide-react';
import { SectionTitle, SectionWrapper } from '../ui/Section';
import { supabase, type Wish } from '../../lib/supabase';

export function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20)
      .then(({ data }) => {
        if (data) setWishes(data);
        setLoading(false);
      });
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setSubmitting(true);
    const { data } = await supabase
      .from('wishes')
      .insert({ name: form.name.trim(), message: form.message.trim() })
      .select()
      .single();
    if (data) {
      setWishes([data, ...wishes]);
      setForm({ name: '', message: '' });
    }
    setSubmitting(false);
  };

  return (
    <SectionWrapper id="wishes">
      <SectionTitle
        eyebrow="Doa & Ucapan"
        title="Ucapan Pernikahan"
        subtitle="Kirimkan doa dan ucapan terbaik Anda untuk kami. Setiap kata berarti sangat banyak."
      />

      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <div className="lg:col-span-2">
          <form onSubmit={submit} className="glass-strong rounded-3xl p-6 md:p-8 shadow-soft space-y-4 sticky top-24">
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-ink-500 dark:text-ivory-200/60 mb-2 font-sans">Nama</label>
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
              <label className="block text-xs tracking-[0.2em] uppercase text-ink-500 dark:text-ivory-200/60 mb-2 font-sans">Ucapan</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-ivory-50/50 dark:bg-ink-800/50 border border-gold-300/30 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all font-sans text-ink-800 dark:text-ivory-50 resize-none"
                placeholder="Tulis ucapan terbaik Anda..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-white font-sans text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-2 hover:shadow-glow transition-shadow disabled:opacity-60"
            >
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              Kirim Ucapan
            </motion.button>
          </form>
        </div>

        <div className="lg:col-span-3 max-h-[600px] overflow-y-auto pr-2 space-y-4">
          {loading ? (
            <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-gold-400" /></div>
          ) : wishes.length === 0 ? (
            <div className="text-center py-20 text-ink-400 dark:text-ivory-200/50">
              <Heart className="w-10 h-10 mx-auto mb-4 text-gold-300" />
              <p className="font-serif text-xl">Jadilah yang pertama mengirim ucapan.</p>
            </div>
          ) : (
            wishes.map((w, i) => (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl p-5 shadow-soft hover:shadow-glow transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center text-white font-serif text-lg">
                    {w.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-serif text-lg text-ink-800 dark:text-ivory-50">{w.name}</p>
                    <p className="text-xs text-ink-400 dark:text-ivory-200/40 font-sans">
                      {new Date(w.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <p className="text-ink-600 dark:text-ivory-200/70 font-sans font-light leading-relaxed pl-13">
                  {w.message}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
