import { motion } from 'framer-motion'
import { Flame, Layers, Sparkles, Star, Utensils } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Pilih topping sendiri',
    description: 'Mix topping favorit dari prasmanan tanpa batas.',
  },
  {
    icon: Flame,
    title: 'Level pedas bebas',
    description: 'Mild sampai cabai rawit level max, kamu yang atur.',
  },
  {
    icon: Utensils,
    title: 'Kuah khas gurih pedas',
    description: 'Resep kuah turun temurun yang bikin nagih.',
  },
  {
    icon: Sparkles,
    title: 'Banyak pilihan isian',
    description: 'Bakso, ceker, seafood, keju, dan topping premium.',
  },
  {
    icon: Star,
    title: 'Harga ramah kantong',
    description: 'Porsi besar, rasa premium, harga tetap terjangkau.',
  },
]

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.36em] text-orange-300">Keunggulan</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Kenapa Seblak Prasmanan Sanjaya Jadi Pilihan Viral?</h2>
            <p className="max-w-2xl text-slate-300 leading-relaxed">
              Dapur kami menyiapkan seblak panas dengan topping segar, kuah pedas legit, dan pengalaman custom yang cocok buat semua penggemar kuliner kekinian.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-[28px] border border-white/10 p-6 shadow-xl shadow-black/20 transition-all duration-300"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-500/15 text-orange-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
