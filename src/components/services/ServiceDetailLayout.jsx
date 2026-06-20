import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import CTASection from '../home/CTASection'

export default function ServiceDetailLayout({ service }) {
  const Icon = service.icon

  return (
    <>
      <section className="pt-40 pb-16 border-b border-line">
        <Container>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-faint mb-10">
            <Link to="/services" data-cursor="hover" className="hover:text-ink transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-ink">{service.title}</span>
          </div>

          <div className="max-w-3xl">
            <div className="w-12 h-12 rounded-lg bg-surface border border-line flex items-center justify-center mb-6">
              <Icon size={22} className="text-accent" />
            </div>
            <h1 className="font-heading font-semibold text-4xl md:text-5xl text-ink leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-ink-muted text-lg leading-relaxed mb-8">{service.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {service.subServices.map((sub) => (
                <span key={sub} className="font-mono text-xs text-ink-muted px-3 py-1.5 rounded-full border border-line">
                  {sub}
                </span>
              ))}
            </div>
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              Discuss your project
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-line">
        <Container className="grid lg:grid-cols-2 gap-12 lg:gap-0 lg:divide-x lg:divide-line">
          <div className="lg:pr-14">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-6">What's included</p>
            <ul className="space-y-4">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink-muted">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pl-14">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-6">Why it matters</p>
            <ul className="space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-muted">
                  <CheckCircle2 size={16} className="text-ink-faint mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-line">
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-10">Our process</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {service.process.map((step, i) => (
              <div key={step.title} className="pt-6 border-t border-line">
                <span className="font-mono text-xs text-ink-faint">0{i + 1}</span>
                <h3 className="font-heading text-lg text-ink mt-3 mb-2">{step.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}