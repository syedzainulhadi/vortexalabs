import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -6, borderColor: 'rgba(124,58,237,0.5)' } : {}}
      className={`bg-card border border-line rounded-2xl p-6 md:p-8 shadow-card transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}