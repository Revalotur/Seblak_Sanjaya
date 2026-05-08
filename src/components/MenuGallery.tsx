import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const menuItems = [
  {
    name: 'Seblak Original',
    price: '35k',
    rating: 4.9,
    image: '/images/original.jpg',
  },
  {
    name: 'Seblak Seafood',
    price: '42k',
    rating: 4.8,
    image: '/images/seafood.jpg',
  },
  {
    name: 'Seblak Ceker',
    price: '38k',
    rating: 4.7,
    image: '/images/ceker.jpg',
  },
  {
    name: 'Seblak Bakso',
    price: '40k',
    rating: 4.8,
    image: '/images/bakso.jpg',
  },
  {
    name: 'Aneka Topping Prasmanan',
    price: '28k+',
    rating: 4.9,
    image: '/images/aneka.jpg',
  },
]

const MenuGallery = () => {
  return (
    <section id="menu" className="py-20 bg-[#090709]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.36em] text-orange-300">Menu</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Menu Seblak Viral Favorit</h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Pilih dari seblak original, seafood, ceker, bakso, dan topping prasmanan yang bisa kamu atur sendiri.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 transition hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute left-4 bottom-4 rounded-full bg-orange-500/95 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/30">{item.price}</div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                  <span className="uppercase tracking-[0.22em]">Top Seller</span>
                  <span className="inline-flex items-center gap-1 text-orange-300">
                    <Star className="h-4 w-4" />
                    {item.rating}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  Seblak dengan kualitas premium, kuah panas, dan topping melimpah yang bikin nagih.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuGallery
