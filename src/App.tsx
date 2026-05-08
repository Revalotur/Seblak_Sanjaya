import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import MenuGallery from './components/MenuGallery'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Location from './components/Location'
import FAQ from './components/FAQ'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const updateScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      setScrollProgress(maxScroll > 0 ? scrollY / maxScroll : 0)
      setShowTop(scrollY > 520)
    }

    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#070506] text-white overflow-x-hidden">
      <div className="fixed inset-x-0 top-0 h-1 z-[60] pointer-events-none overflow-hidden">
        <div
          className="h-full origin-left bg-gradient-to-r from-orange-400 via-red-500 to-yellow-300"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <MenuGallery />
        <Testimonials />
        <About />
        <Location />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <ScrollTop show={showTop} />
    </div>
  )
}

export default App
