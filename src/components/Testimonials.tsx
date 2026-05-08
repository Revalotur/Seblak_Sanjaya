import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Ilham',
    role: 'Food Antusiast',
    quote: 'Kuahnya nagih banget! Pedasnya pas, dan toppingnya bikin seblak ini jadi andalan akhir pekan.',
    rating: 5,
    avatar: 'src/assets/ilham.jpg',
  },
  {
    name: 'Mufti',
    role: 'Pecinta Kuliner',
    quote: 'Toppingnya banyak parah. Bisa custom level pedas jadi cocok untuk semua selera.',
    rating: 4,
    avatar: 'src/assets/mufti.jpg',
  },
  {
    name: 'Aulia',
    role: 'Food Vlogger',
    quote: 'Pedesnya mantap. Setiap suapan terasa penuh rasa dan tekstur crunchy dari topping.',
    rating: 5,
    avatar: 'src/assets/teguh.jpg',
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length)
    }, 5200)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimoni" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.36em] text-orange-300">Testimoni</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Apa kata mereka</h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Review asli dari pelanggan yang puas dengan rasa, penyajian, dan pengalaman seblak kami.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 sm:grid-cols-[1fr_0.7fr] items-center"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-100">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">{reviews[active].name[0]}</span>
                <div>
                  <p className="font-semibold text-white">{reviews[active].name}</p>
                  <p className="text-sm text-slate-300">{reviews[active].role}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${index < reviews[active].rating ? 'text-orange-300 fill-current' : 'text-slate-600/50'}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-orange-300">{reviews[active].rating}.0</span>
              </div>
              <p className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
                “{reviews[active].quote}”
              </p>
            </div>
            <div className="flex justify-center sm:justify-end">
              <img
                src={reviews[active].avatar}
                alt={reviews[active].name}
                className="h-52 w-52 rounded-[32px] object-cover shadow-2xl shadow-black/25"
                loading="lazy"
              />
            </div>
          </motion.div>

          <div className="mt-8 flex justify-center gap-3">
            {reviews.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActive(index)}
                className={`h-3 w-3 rounded-full transition ${
                  index === active ? 'bg-orange-300' : 'bg-white/20'
                }`}
                aria-label={`Slide testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
