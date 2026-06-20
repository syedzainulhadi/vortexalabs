import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  { number: '01', title: 'Discover', description: 'We learn your business, your audience and what success looks like.' },
  { number: '02', title: 'Design', description: 'We map the experience and design every screen for clarity.' },
  { number: '03', title: 'Build', description: 'We develop with clean, scalable code and test as we go.' },
  { number: '04', title: 'Launch', description: 'We deploy, monitor, and support you well after go-live.' },
]

export default function Process() {
  return (
    <section className="py-24 md:py-32 border-b border-line">
      <Container>
        <SectionHeading eyebrow="How we work" title="A clear process from first call to launch" align="center" />

        <div className="relative mt-20 max-w-3xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-line -translate-x-1/2" />

          <div className="space-y-14 md:space-y-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid md:grid-cols-2 gap-3 items-center"
                >
                  <span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-bg z-10" />

                  <div className={isEven ? 'md:order-1 md:text-right md:pr-14' : 'md:order-2 md:pl-14'}>
                    <span className="font-mono text-xs text-ink-faint">{step.number}</span>
                    <h3 className="font-heading text-2xl text-ink mt-2 mb-2.5">{step.title}</h3>
                    <p className={`text-ink-muted text-sm leading-relaxed max-w-xs ${isEven ? 'md:ml-auto' : ''}`}>
                      {step.description}
                    </p>
                  </div>
                  <div className={isEven ? 'md:order-2' : 'md:order-1'} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}