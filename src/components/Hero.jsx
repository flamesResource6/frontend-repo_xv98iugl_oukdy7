import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/20">
            Modern Israeli Cafe • Tel Aviv
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Cafe Bealma
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 leading-relaxed">
            Freshly baked pastries, specialty coffee, and warm hospitality. Enjoy vibrant flavors crafted with love, every day.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#menu" className="rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition-all">
              View Menu
            </a>
            <a href="#visit" className="rounded-xl border border-white/30 text-white px-5 py-3 font-semibold hover:bg-white/10 transition-colors">
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
