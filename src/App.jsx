import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Visit from './components/Visit'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_0%,rgba(99,102,241,0.15)_0%,rgba(15,23,42,0)_70%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <footer className="relative border-t border-white/10 py-8 text-center text-white/70 bg-slate-950">
        <p>© {new Date().getFullYear()} Cafe Bealma. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
