import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-5">
              Let's build
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-ink max-w-xl leading-tight">
              Ready to build something that actually works?
            </h2>
          </div>
          <Button to="/contact" variant="primary" icon={ArrowRight} className="shrink-0">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  )
}