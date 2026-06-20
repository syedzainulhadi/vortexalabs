import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import Container from '../components/ui/Container'
import ProjectCard from '../components/projects/ProjectCard'
import CTASection from '../components/home/CTASection'
import { projects, projectCategories } from '../data/projects'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <PageTransition>
      <SEO
  title="Our Work | Vortexa Labs — IT Consultancy and Digital Services Company"
  description="Browse projects delivered by Vortexa Labs across school websites, restaurant websites, business websites and e-commerce stores."
/>

      <section className="pt-40 pb-12 border-b border-line">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">Selected work</p>
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
            Projects we've delivered
          </h1>
          <p className="mt-6 text-ink-muted text-lg max-w-xl">
            A look at the categories of work we build for clients — filter by type to see relevant examples.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap gap-2 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                data-cursor="hover"
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-ink text-bg border-ink'
                    : 'border-line text-ink-muted hover:text-ink hover:border-line-strong'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} delay={i * 0.05} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-ink-muted mt-12">No projects in this category yet.</p>
          )}
        </Container>
      </section>

      <CTASection />
    </PageTransition>
  )
}