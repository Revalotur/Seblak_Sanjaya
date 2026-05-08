import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'FAQ', href: '#faq' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-red-950/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-white text-lg sm:text-xl font-semibold tracking-[0.12em] uppercase">
            Seblak Prasmanan Sanjaya
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-orange-300 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890"
              className="ml-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:scale-[1.02]"
            >
              Pesan Sekarang
            </a>
          </div>

          <button
            className="md:hidden text-white p-2 rounded-full border border-white/10 bg-white/5"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-5 py-5 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-white/90 hover:text-orange-300 rounded-xl px-4 py-3 text-base font-medium transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890"
              className="block text-center rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
