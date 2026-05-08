import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const About = () => {
  return (
    <section className="py-20 bg-[#0b0708]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.36em] text-orange-300">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Cerita Seblak Prasmanan Sanjaya</h2>
            <p className="max-w-2xl text-slate-300 leading-relaxed">
              Seblak Prasmanan Sanjaya hadir untuk menghadirkan pengalaman makan seblak yang bebas pilih topping, pedas sesuai selera, dan rasa yang bikin nagih. Semua disajikan dengan cepat untuk customer kekinian.
            </p>
            <div className="space-y-4 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="rounded-3xl bg-orange-500/10 p-3 text-orange-300">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Dapur modern, rasa otentik</h3>
                  <p className="text-slate-300 leading-relaxed">Resep kuah kami dikembangkan dari kombinasi rempah pedas dan bahan segar setiap hari.</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-black/40 p-4 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Fokus kami</p>
                  <p className="mt-3 text-lg font-semibold">Custom seblak setiap order</p>
                </div>
                <div className="rounded-3xl bg-black/40 p-4 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.28em] text-orange-300">Rasa</p>
                  <p className="mt-3 text-lg font-semibold">Pedas on point, kuah gurih, topping melimpah</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/30 p-4 shadow-2xl shadow-black/25"
          >
            <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-orange-500/10 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80"
              alt="Owner dapur seblak"
              className="h-[520px] w-full rounded-[28px] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
