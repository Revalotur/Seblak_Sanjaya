import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Bisa pilih level pedas?',
    answer: 'Bisa banget. Kamu bisa pilih level pedas sesuai selera mulai dari mild, medium, sampai super hot.',
  },
  {
    question: 'Bisa makan di tempat?',
    answer: 'Ya, tempat kami ramah untuk dine-in dengan suasana hangat dan modern.',
  },
  {
    question: 'Ada delivery?',
    answer: 'Ada! Pesan via WhatsApp dan kami siap antar ke alamatmu dengan cepat.',
  },
  {
    question: 'Bisa request topping?',
    answer: 'Tentu. Pilih topping sesuai hati kamu dari menu prasmanan kami.',
  },
  {
    question: 'Jam buka berapa?',
    answer: 'Senin hingga Minggu, buka dari pukul 10.00 sampai 22.00 WIB.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-[#090709]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.36em] text-orange-300">FAQ</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Pertanyaan yang Sering Ditanyakan</h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Jawaban singkat supaya kamu dapat pesan seblak dengan percaya diri.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="glass-card w-full rounded-[28px] border border-white/10 p-6 text-left shadow-xl shadow-black/20 transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-semibold text-white">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 text-orange-300 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {isOpen && <p className="mt-4 text-slate-300 leading-relaxed">{item.answer}</p>}
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
