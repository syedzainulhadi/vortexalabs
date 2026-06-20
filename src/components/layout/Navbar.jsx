import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import logoMark from '../../assets/logo-mark.png'

const navLinks = [
  { name: 'Work', to: '/projects' },
  { name: 'Services', to: '/services' },
  { name: 'About', to: '/about' },
  { name: 'Team', to: '/team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors duration-300 ${isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-line' : 'bg-bg/50 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <Container className="flex items-center justify-between h-16 md:h-20 gap-2">
        <Link to="/" data-cursor="hover" className="flex items-center gap-2 min-w-0 shrink">
          <img src={logoMark} alt="Vortexa Labs" className="w-7 h-7 md:w-8 md:h-8 rounded-full shrink-0" />
          <span className="font-heading font-semibold text-sm md:text-base text-ink tracking-tight truncate">
            Vortexa Labs
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 shrink-0">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} data-cursor="hover">
              {l.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/quotation"
            data-cursor="hover"
            className="inline-flex items-center justify-center rounded-lg font-semibold bg-ink text-bg hover:bg-white transition-colors duration-300 px-3 py-2 text-xs whitespace-nowrap md:px-5 md:py-2.5 md:text-sm"
          >
            <span className="md:hidden">Quote</span>
            <span className="hidden md:inline">Get a quote</span>
          </Link>

          <button
            className="md:hidden text-ink w-9 h-9 flex items-center justify-center rounded-lg border border-line shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-cursor="hover"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-bg border-t border-line overflow-hidden"
          >
            <Container className="flex flex-col py-4">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-ink-muted hover:text-ink text-base py-3.5 border-b border-line last:border-b-0"
                >
                  {l.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-ink-muted hover:text-ink text-base py-3.5"
              >
                Contact
              </NavLink>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}