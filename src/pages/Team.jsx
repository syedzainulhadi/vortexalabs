import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import Container from '../components/ui/Container'
import TeamCard from '../components/team/TeamCard'
import CTASection from '../components/home/CTASection'
import { team } from '../data/team'

export default function Team() {
  return (
    <PageTransition>
      <SEO
  title="Our Team | Vortexa Labs — IT Consultancy and Digital Services Company"
  description="Meet the team behind Vortexa Labs — the people designing, building and growing digital products for our clients."
/>

      <section className="pt-40 pb-20 border-b border-line">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">Meet the team</p>
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
            The people behind Vortexa Labs
          </h1>
          <p className="mt-6 text-ink-muted text-lg max-w-xl">
            A small, focused team — every project gets direct attention from the people who actually build it.
          </p>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} delay={i * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </PageTransition>
  )
}