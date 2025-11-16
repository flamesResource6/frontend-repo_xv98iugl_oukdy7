import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Story</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Nestled in the heart of Tel Aviv, Cafe Bealma blends the charm of a neighborhood cafe with modern culinary flair. We serve artisan coffee, fresh pastries, and seasonal dishes that celebrate local ingredients.
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">
              From morning espresso to weekend brunch, our space is designed for slow moments, good conversations, and unforgettable flavors.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl bg-gradient-to-tr from-indigo-500/40 to-fuchsia-500/40 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
