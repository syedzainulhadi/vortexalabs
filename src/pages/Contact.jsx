import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import Container from '../components/ui/Container'

const SERVICE_OPTIONS = [
  'Website Development',
  'App Development',
  'Digital Marketing',
  'Graphic Designing',
  'Business Solutions',
  'Not Sure Yet',
]

const contactItems = [
  { icon: MapPin, label: 'Location', value: 'Curchorem, Goa, India' },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 79756 11930',
    href: 'tel:+917975611930',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Vortexalabsofficial@gmail.com',
    href: 'mailto:Vortexalabsofficial@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@vortexa_labs',
    href: 'https://instagram.com/vortexa_labs',
  },
]

function Field({ label, id, name, type, placeholder, required }) {
  return (
    <div>
      <label
        className="block font-mono text-xs uppercase tracking-wider text-ink-faint mb-3"
        htmlFor={id}
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-bg border border-line rounded-lg px-4 py-3 text-ink text-sm placeholder:text-ink-faint focus:border-accent outline-none transition-colors"
      />
    </div>
  )
}

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch((error) => {
  console.error('EmailJS Full Error:', error)
  console.error('Status:', error.status)
  console.error('Text:', error.text)
  setStatus('error')
})
  }

  return (
    <PageTransition>
      <SEO
  title="Contact Us | Vortexa Labs — IT Consultancy and Digital Services Company"
  description="Get in touch with Vortexa Labs for website development, app development, digital marketing or business solutions in Goa."
/>

      <section className="pt-40 pb-16 border-b border-line">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">
            Get in touch
          </p>

          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
            Let's talk about your project
          </h1>

          <p className="mt-6 text-ink-muted text-lg max-w-xl">
            Tell us a bit about your business and what you need — we typically
            respond within one business day.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <ul className="space-y-8">
              {contactItems.map((item) => {
                const Icon = item.icon

                const body = (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface border border-line flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-accent" />
                    </div>

                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-ink-faint mb-1.5">
                        {item.label}
                      </p>

                      <p className="text-ink text-sm break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                return (
                  <li
                    key={item.label}
                    className="pb-8 border-b border-line last:border-b-0 last:pb-0"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith('http')
                            ? '_blank'
                            : undefined
                        }
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        className="hover:opacity-80 transition-opacity"
                      >
                        {body}
                      </a>
                    ) : (
                      body
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-surface border border-line rounded-2xl p-6 md:p-10"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Name"
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Your full name"
                  required
                />

                <Field
                  label="Email"
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="you@business.com"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field
                  label="Phone"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                  required
                />

                <Field
                  label="Business Name"
                  id="business_name"
                  name="business_name"
                  type="text"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label
                  className="block font-mono text-xs uppercase tracking-wider text-ink-faint mb-3"
                  htmlFor="service"
                >
                  Service required
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-bg border border-line rounded-lg px-4 py-3 text-ink text-sm focus:border-accent outline-none transition-colors"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block font-mono text-xs uppercase tracking-wider text-ink-faint mb-3"
                  htmlFor="message"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us a bit about your project..."
                  className="w-full bg-bg border border-line rounded-lg px-4 py-3 text-ink text-sm placeholder:text-ink-faint focus:border-accent outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                data-cursor="hover"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm bg-ink text-bg hover:bg-white transition-colors duration-300 disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message <Send size={16} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle2 size={16} />
                  Your message has been sent. We'll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </motion.div>
        </Container>
      </section>
    </PageTransition>
  )
}