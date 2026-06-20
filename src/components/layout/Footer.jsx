import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container'
import logoMark from '../../assets/logo-mark.png'

const columns = [
  {
    heading: 'Company',
    links: [
      { name: 'About', to: '/about' },
      { name: 'Work', to: '/projects' },
      { name: 'Team', to: '/team' },
      { name: 'Contact', to: '/contact' },
      { name: 'Get a quote', to: '/quotation' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { name: 'Website Development', to: '/services/website-development' },
      { name: 'App Development', to: '/services/app-development' },
      { name: 'Digital Marketing', to: '/services/digital-marketing' },
      { name: 'Graphic Designing', to: '/services/graphic-designing' },
      { name: 'Business Solutions', to: '/services/business-solutions' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <Container className="py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
              <img
                src={logoMark}
                alt="Vortexa Labs"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-heading font-semibold text-ink">
                Vortexa Labs
              </span>
            </Link>

            <p className="text-ink-muted text-sm leading-relaxed max-w-sm mb-6">
              An IT consultancy and digital solutions studio in Curchorem, Goa —
              building websites, apps and growth systems for businesses that
              mean business.
            </p>

            <a
              href="https://instagram.com/vortexa_labs"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              <Instagram size={15} />
              @vortexa_labs
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-5">
                {col.heading}
              </p>

              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      data-cursor="hover"
                      className="text-sm text-ink-muted hover:text-ink transition-colors"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-5">
              Get in touch
            </p>

            <ul className="space-y-3 text-sm text-ink-muted">
              <li className="flex items-center gap-2.5">
                <MapPin size={14} className="text-ink-faint" />
                Curchorem, Goa, India
              </li>

              <li>
                <a
                  href="tel:+917975611930"
                  data-cursor="hover"
                  className="hover:text-ink transition-colors flex items-center gap-2.5"
                >
                  <Phone size={14} className="text-ink-faint" />
                  +91 79756 11930
                </a>
              </li>

              <li>
                <a
                  href="mailto:Vortexalabsofficial@gmail.com"
                  data-cursor="hover"
                  className="hover:text-ink transition-colors flex items-center gap-2.5 break-all"
                >
                  <Mail size={14} className="text-ink-faint shrink-0" />
                  Vortexalabsofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-line">
          <p className="text-ink-faint text-xs">
            © {year} Vortexa Labs. All rights reserved.
          </p>

          <Link
            to="/quotation"
            data-cursor="hover"
            className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors"
          >
            Get a quote
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </Container>
    </footer>
  )
}