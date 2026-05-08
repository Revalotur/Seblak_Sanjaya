import { motion } from 'framer-motion'
import { Flame, Star, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,104,56,0.24),transparent_25%),radial-gradient(circle_at_10%_40%,_rgba(255,216,121,0.16),transparent_18%)]" />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 blur-[1px]"
        style={{ backgroundImage: "url('src/assets/bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 sm:py-36 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90 shadow-xl shadow-black/20 backdrop-blur-md">
              <Flame className="h-4 w-4 text-orange-300" />
              <span className="font-semibold">🔥 Seblak Viral Favorit</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Seblak Prasmanan Pedas yang Bisa Pilih Isian Sesuka Hati!
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-gray-200/90 leading-relaxed">
                Nikmati sensasi kuah gurih pedas dengan topping melimpah dan level pedas sesuai selera. Rasa premium, harga ramah, dan pilihan topping bebas.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row items-center sm:items-start">
              <a
                href="https://wa.me/6281234567890"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-red-500/25 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Pesan Sekarang
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20"
              >
                Lihat Menu
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: '100+ pelanggan puas', icon: Star },
                { label: 'Fresh every day', icon: Flame },
                { label: 'Custom level pedas', icon: Sparkles },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-full px-4 py-3 text-xs sm:text-sm font-medium text-white/90 flex items-center justify-center gap-2 border border-white/10 shadow-xl shadow-black/20">
                  <item.icon className="h-4 w-4 text-orange-300" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_40px_100px_-45px_rgba(255,95,55,0.65)] backdrop-blur-xl"
          >
            <div className="absolute -left-14 -top-14 h-36 w-36 rounded-full bg-orange-500/20 blur-3xl animate-float-slow" />
            <div className="absolute -right-10 top-20 h-24 w-24 rounded-full bg-red-500/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] bg-black/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.18),transparent_40%)]" />
              <img
                src="src/assets/hero-bg.jpg"
                alt="Seblak panas"
                className="h-full w-full object-cover mix-blend-screen"
                loading="lazy"
              />
            </div>
            <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
              {['Nasi + Seblak', 'Nugget & Bakso', 'Caberawit', 'Keju Leleh'].map((label) => (
                <div key={label} className="flex items-center gap-3 rounded-3xl bg-black/40 px-4 py-3 text-sm text-white/90 shadow-lg shadow-black/20">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">•</span>
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
