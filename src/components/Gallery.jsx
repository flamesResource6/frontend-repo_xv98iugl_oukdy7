import { motion } from 'framer-motion'

const photos = [
  'https://images.unsplash.com/photo-1517705761350-4f83b93f899f?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464347744102-11db6282f854?q=80&w=1400&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Gallery</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, i) => (
            <motion.div key={src} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.03 }} className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={src} alt="Cafe" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
