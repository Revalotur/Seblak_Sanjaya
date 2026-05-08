import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Flame, Utensils } from 'lucide-react'

const problems = [
  {
    icon: Utensils,
    title: 'Seblak Kurang Topping',
    description: 'Banyak seblak yang toppingnya sedikit dan tidak bervariasi.',
  },
  {
    icon: Flame,
    title: 'Kuah Kurang Nendang',
    description: 'Rasa kuah yang biasa saja tanpa sensasi pedas yang kuat.',
  },
  {
    icon: DollarSign,
    title: 'Harga Mahal',
    description: 'Harga seblak yang tidak sesuai dengan kualitas dan porsi.',
  },
  {
    icon: AlertTriangle,
    title: 'Pedas Tidak Bisa Custom',
    description: 'Level pedas yang sudah ditentukan tanpa opsi pilihan.',
  },
]

const Problem = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-red-600/20 to-transparent blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.36em] text-orange-300">Alasan Kami Berbeda</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Apa sih yang bikin kita beda dari yang lain?</h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Banyak pelanggan kecewa karena seblak tanpa topping, kuah kurang kuat, atau pedas tidak sesuai selera.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden rounded-[28px] border border-white/10 p-6 shadow-xl shadow-black/25 transition-all duration-300"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-red-500/15 text-red-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
                <p className="text-slate-300 leading-relaxed">{problem.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Problem
