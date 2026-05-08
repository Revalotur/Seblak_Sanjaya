import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollTop = ({ show }: { show: boolean }) => {
  if (!show) return null

  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-5 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-2xl shadow-red-500/25 transition hover:-translate-y-1"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  )
}

export default ScrollTop
