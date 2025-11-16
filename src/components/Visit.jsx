import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function Visit() {
  return (
    <section id="visit" className="relative py-24 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Visit Us</h2>
            <p className="text-white/80">Come by for your morning coffee or unwind with friends in the evening. We're always happy to see you.</p>
            <div className="space-y-3 text-white/90">
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5" /> 123 Dizengoff St, Tel Aviv</div>
              <div className="flex items-center gap-3"><Clock className="h-5 w-5" /> Sun-Thu 7:00-21:00 • Fri 7:00-15:00</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5" /> 03-555-1234</div>
            </div>
            <a href="tel:+97235551234" className="inline-flex items-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition-all">Call Now</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden border border-white/10">
            <iframe title="map" src="https://maps.google.com/maps?q=Tel%20Aviv&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-[350px]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
