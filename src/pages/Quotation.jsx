import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import Container from '../components/ui/Container'

const SERVICE_OPTIONS = [
  'Website Development',
  'App Development',
  'Digital Marketing',
  'Graphic Designing',
  'Business Solutions',
  'A mix of services',
]

const BUDGET_OPTIONS = [
  'Under ₹15,000',
  '₹15,000 – ₹40,000',
  '₹40,000 – ₹1,00,000',
  '₹1,00,000+',
  'Not sure yet',
]

const TIMELINE_OPTIONS = [
  'As soon as possible',
  'Within 1 month',
  '1–3 months',
  'Just exploring options',
]

function Field({ label, id, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-wider text-ink-faint mb-3" htmlFor={id}>
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

function SelectField({ label, id, name, options, required }) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-wider text-ink-faint mb-3" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="w-full bg-bg border border-line rounded-lg px-4 py-3 text-ink text-sm focus:border-accent outline-none transition-colors"
      >
        <option value="" disabled>Select an option</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}

export default function Quotation() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_QUOTATION_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        setStatus('error')
      })
  }

  return (
    <PageTransition>
      <SEO
  title="Get a Quote | Vortexa Labs — IT Consultancy and Digital Services Company"
  description="Request a project quotation from Vortexa Labs — tell us your budget, timeline and the service you need."
/>

      <section className="pt-40 pb-16 border-b border-line">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-6">Get a quote</p>
          <h1 className="font-heading font-semibold text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
            Tell us about your project, get a clear quote back
          </h1>
          <p className="mt-6 text-ink-muted text-lg max-w-xl">
            A few quick details help us scope your project accurately — no obligation, no spam,
            just a straight quote based on what you actually need.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-surface border border-line rounded-2xl p-6 md:p-10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name" id="from_name" name="from_name" placeholder="Your full name" required />
                <Field label="Email" id="from_email" name="from_email" type="email" placeholder="you@business.com" required />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Phone" id="phone" name="phone" type="tel" placeholder="+91 00000 00000" required />
                <Field label="Business name" id="business_name" name="business_name" placeholder="Your business name" />
              </div>

              <SelectField label="Service required" id="service" name="service" options={SERVICE_OPTIONS} required />

              <div className="grid sm:grid-cols-2 gap-6">
                <SelectField label="Estimated budget" id="budget" name="budget" options={BUDGET_OPTIONS} required />
                <SelectField label="Timeline" id="timeline" name="timeline" options={TIMELINE_OPTIONS} required />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-ink-faint mb-3" htmlFor="message">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What are you trying to build? Any references, pages, or features you already have in mind?"
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
                    <Loader2 size={17} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Request quote <Send size={16} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle2 size={16} /> Got it — we'll send your quote within one business day.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} /> Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </motion.div>
        </Container>
      </section>
    </PageTransition>
  )
}