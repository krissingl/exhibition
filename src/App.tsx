import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-600 font-mono">
        exhibition
      </footer>
    </div>
  )
}
