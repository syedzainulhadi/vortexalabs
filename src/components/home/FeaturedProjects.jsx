import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import ProjectCard from '../projects/ProjectCard'
import { projects } from '../../data/projects'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="py-24 md:py-32 border-b border-line">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Selected work"
            title="A few projects we've brought to life"
            subtitle="Real categories of work we build — school portals, restaurant sites, business brochures and online stores."
          />
          <Button to="/projects" variant="secondary" icon={ArrowRight} className="shrink-0">
            View all work
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  )
}