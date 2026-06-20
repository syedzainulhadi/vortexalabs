import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  const next = () => setIndex((p) => (p + 1) % testimonials.length)
  const prev = () => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)
  const current = testimonials[index]

  return (
    <section className="py-24 md:py-32 border-b border-line">
      <Container>
        <SectionHeading eyebrow="Client voices" title="What businesses say about working with us" />

        <div className="mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-heading text-2xl md:text-3xl text-ink leading-snug">
                "{current.quote}"
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="font-mono text-sm text-ink">{current.name}</span>
                <span className="w-1 h-1 rounded-full bg-ink-faint" />
                <span className="font-mono text-sm text-ink-faint">{current.business}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              data-cursor="hover"
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-muted hover:text-ink hover:border-line-strong transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              data-cursor="hover"
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-muted hover:text-ink hover:border-line-strong transition-colors"
            >
              <ChevronRight size={16} />
            </button>
            <div className="flex-1 h-px bg-line relative ml-2">
              <motion.div
                key={index}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="absolute left-0 top-0 h-px bg-accent"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}