import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const LinkItem = ({ id, label }) => (
    <button onClick={() => scrollTo(id)} className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors">
      {label}
    </button>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-inner" />
              <span className="text-white font-semibold tracking-wide">Cafe Bealma</span>
            </div>
            <nav className="hidden md:flex items-center">
              <LinkItem id="about" label="About" />
              <LinkItem id="menu" label="Menu" />
              <LinkItem id="gallery" label="Gallery" />
              <LinkItem id="visit" label="Visit" />
            </nav>
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)} className="text-white hover:text-white/90 p-2">
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-2 pb-3 pt-2">
              <div className="flex flex-col">
                <LinkItem id="about" label="About" />
                <LinkItem id="menu" label="Menu" />
                <LinkItem id="gallery" label="Gallery" />
                <LinkItem id="visit" label="Visit" />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
