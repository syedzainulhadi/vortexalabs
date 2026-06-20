import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

export default function ServicesOverview({
  eyebrow = 'What we do',
  title = 'Five capabilities, one connected outcome',
  subtitle = 'Design, code, marketing and operations working from the same plan — so every part of your digital presence pulls in the same direction.',
  sectionClassName = 'py-24 md:py-32',
}) {
  return (
    <section className={`${sectionClassName} border-b border-line`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mt-14 border-t border-line">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                data-cursor="hover"
                className="tap-row group grid md:grid-cols-12 gap-4 md:gap-6 items-center py-7 md:py-9 border-b border-line px-4 -mx-4 md:px-2 md:-mx-2 rounded-xl hover:bg-white/[0.03] transition-colors duration-300"
              >
                <span className="md:col-span-1 font-mono text-xs text-ink-faint">0{i + 1}</span>

                <div className="md:col-span-1">
                  <div className="w-10 h-10 rounded-lg bg-surface-2 border border-line flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                </div>

                <div className="md:col-span-6">
                  <h3 className="font-heading text-xl md:text-2xl text-ink mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed max-w-md">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="md:col-span-3 hidden lg:flex flex-wrap gap-2">
                  {service.subServices.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-ink-faint px-2.5 py-1 rounded-full border border-line"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight
                    size={18}
                    className="text-ink-faint group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}