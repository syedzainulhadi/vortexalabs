import { Lightbulb, ShieldCheck, Target, Users } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import Container from '../components/ui/Container'
import CTASection from '../components/home/CTASection'

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'We stay ahead of tools and trends so your business benefits from what works now.' },
  { icon: ShieldCheck, title: 'Integrity', description: 'Clear pricing, honest timelines, and no inflated promises.' },
  { icon: Target, title: 'Precision', description: 'Every pixel, line of code and campaign is built with intent.' },
  { icon: Users, title: 'Partnership', description: 'We see every client as a long-term relationship, not a one-off invoice.' },
]

const differentiators = [
  'A local Goa-based team that understands the businesses we build for',
  'One team handling design, development, marketing and operations together',
  'Transparent pricing with no hidden costs added later',
  'Ongoing support after launch, not a handoff and goodbye',
]

export default function About() {
  return (
    <PageTransition>
      <SEO
  title="About Us | Vortexa Labs — IT Consultancy and Digital Services Company"
  description="Learn about Vortexa Labs — our story, mission, vision and values as an IT consultancy and digital solutions company based in Curchorem, Goa."
/>

      <section className="pt-40 pb-20 border-b border-line">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">About us</p>
              <h1 className="font-heading font-semibold text-4xl md:text-5xl text-ink leading-tight">
                A Goa-based team building digital foundations for real businesses
              </h1>
              <p className="mt-6 text-ink-muted text-lg leading-relaxed max-w-xl">
                Vortexa Labs exists to give businesses of every size access to the same quality
                of digital work that large companies pay agencies abroad for.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="border-l border-line pl-8 max-w-xs">
                <p className="font-heading text-lg text-ink leading-snug">
                  "We set out to be the alternative — a local team capable of full-scale digital
                  work, easy to reach, and genuinely invested in the outcome."
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-line">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-0 md:divide-x md:divide-line">
            <div className="md:pr-14">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-5">Our story</p>
              <p className="text-ink-muted leading-relaxed">
                Vortexa Labs started in Curchorem, Goa, with a simple observation: most small and
                growing businesses in the region were stuck choosing between expensive outside
                agencies and unreliable freelancers. We set out to be the alternative — a local
                team capable of full-scale digital work, easy to reach, and genuinely invested in
                whether the work actually performs after launch.
              </p>
            </div>
            <div className="md:pl-14">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-5">Where we're headed</p>
              <p className="text-ink-muted leading-relaxed">
                What began with website builds has grown into a full digital consultancy covering
                apps, marketing and business automation. As more businesses across Goa move
                online, our goal is to be the team they call first — for the first website and
                every system that comes after it.
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 border border-line rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-line">
            <div className="p-8 md:p-10 bg-surface">
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">Mission</p>
              <p className="font-heading text-xl md:text-2xl text-ink leading-snug">
                To give businesses of every size access to professional-grade websites, apps and
                marketing systems — without the overhead of a large agency.
              </p>
            </div>
            <div className="p-8 md:p-10 bg-surface">
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">Vision</p>
              <p className="font-heading text-xl md:text-2xl text-ink leading-snug">
                To become the most trusted digital partner for businesses across Goa, known for
                work that performs as well as it looks.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 border-b border-line">
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-10">What drives us</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-line border-t border-line">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="py-8 lg:px-7 border-b border-line lg:border-b-0">
                  <Icon size={20} className="text-accent mb-4" />
                  <h4 className="font-heading text-lg text-ink mb-2">{value.title}</h4>
                  <p className="text-ink-muted text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-5">Why Vortexa Labs</p>
              <h3 className="font-heading text-2xl md:text-3xl text-ink leading-snug">
                What makes working with us different from a typical freelancer or agency.
              </h3>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-5">
                {differentiators.map((point) => (
                  <li key={point} className="flex items-start gap-4 pb-5 border-b border-line last:border-b-0 last:pb-0">
                    <span className="w-4 h-px bg-accent mt-3 shrink-0" />
                    <span className="text-ink-muted text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </PageTransition>
  )
}