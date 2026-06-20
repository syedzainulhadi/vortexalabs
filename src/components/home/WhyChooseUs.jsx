import { Gauge, ShieldCheck, Layers, HeartHandshake } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const points = [
  { icon: Gauge, title: 'Built for speed', description: 'Optimised from the first line of code, not patched afterward.' },
  { icon: Layers, title: 'Full-stack', description: 'Design, dev, marketing and automation under one roof.' },
  { icon: ShieldCheck, title: 'Transparent', description: 'Clear plan, timeline and pricing — no scope creep.' },
  { icon: HeartHandshake, title: 'Long-term', description: 'We stay involved after launch, not just at handoff.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 border-b border-line">
      <Container>
        <SectionHeading eyebrow="Why Vortexa Labs" title="A team that treats your business like its own" />

        <p className="mt-8 font-heading text-2xl md:text-3xl text-ink leading-snug max-w-3xl">
          We design, build, market and automate under one roof
          <span className="text-ink-muted"> — so nothing falls through the cracks between agencies.</span>
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-line lg:divide-x lg:divide-line">
          {points.map((point) => {
            const Icon = point.icon
            return (
              <div key={point.title} className="py-8 px-1 lg:px-7 border-b border-line lg:border-b-0">
                <Icon size={20} className="text-accent mb-4" />
                <h4 className="font-heading text-lg text-ink mb-2">{point.title}</h4>
                <p className="text-ink-muted text-sm leading-relaxed">{point.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}