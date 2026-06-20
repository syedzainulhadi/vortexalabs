import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import logoMark from '../../assets/logo-mark.png'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.15]" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex md:hidden items-center justify-center h-[220px] mb-8"
        >
          <div className="orbit-ring" style={{ width: 200, height: 200, animation: 'orbit-spin 18s linear infinite' }}>
            <span className="orbit-dot" />
          </div>
          <div className="orbit-ring" style={{ width: 150, height: 150, animation: 'orbit-spin-reverse 13s linear infinite' }}>
            <span className="orbit-dot" />
          </div>
          <img
            src={logoMark}
            alt="Vortexa Labs"
            className="relative w-20 h-20 rounded-full shadow-glow animate-[spin_30s_linear_infinite]"
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center md:text-left"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-5 md:mb-6">
              IT Consultancy — Curchorem, Goa
            </p>

            <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-[4.2rem] leading-[1.08] lg:leading-[1.04] tracking-tight text-ink">
              Built like a product.
              <br />
              Not a project.
            </h1>

            <p className="mt-6 text-ink-muted text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Vortexa Labs designs, engineers and ships websites, apps and growth systems
              for businesses that take their digital presence seriously.
            </p>

            <div className="mt-9 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-5">
              <Button to="/contact" variant="primary" icon={ArrowRight}>
                Start a project
              </Button>
              <Button to="/projects" variant="secondary" icon={ArrowUpRight}>
                See our work
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative hidden md:flex items-center justify-center h-[420px]"
          >
            <div className="orbit-ring" style={{ width: 420, height: 420, animation: 'orbit-spin 22s linear infinite' }}>
              <span className="orbit-dot" />
            </div>
            <div className="orbit-ring" style={{ width: 320, height: 320, animation: 'orbit-spin-reverse 17s linear infinite' }}>
              <span className="orbit-dot" />
            </div>
            <div className="orbit-ring" style={{ width: 220, height: 220, animation: 'orbit-spin 12s linear infinite' }} />

            <img
              src={logoMark}
              alt="Vortexa Labs"
              className="relative w-32 h-32 rounded-full shadow-glow animate-[spin_34s_linear_infinite]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}