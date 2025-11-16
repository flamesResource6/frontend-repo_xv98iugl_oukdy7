import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Coffee & Drinks',
    items: [
      { name: 'Espresso', price: '₪10' },
      { name: 'Americano', price: '₪12' },
      { name: 'Cappuccino', price: '₪14' },
      { name: 'Flat White', price: '₪16' },
      { name: 'Iced Latte', price: '₪18' },
    ],
  },
  {
    title: 'Bakery',
    items: [
      { name: 'Butter Croissant', price: '₪14' },
      { name: 'Almond Croissant', price: '₪18' },
      { name: 'Chocolate Babka', price: '₪16' },
      { name: 'Cinnamon Roll', price: '₪16' },
    ],
  },
  {
    title: 'Brunch',
    items: [
      { name: 'Shakshuka', price: '₪42' },
      { name: 'Avocado Toast', price: '₪38' },
      { name: 'Eggs Benedict', price: '₪48' },
      { name: 'Granola Bowl', price: '₪32' },
    ],
  },
]

export default function Menu() {
  return (
    <section id="menu" className="relative py-24 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold">Menu Highlights</h2>
          <a href="#visit" className="hidden sm:inline-flex items-center rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition-colors">Reserve</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between text-white/90">
                    <span>{item.name}</span>
                    <span className="text-white/70">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/60">Full seasonal menu available in-house.</p>
      </div>
    </section>
  )
}
