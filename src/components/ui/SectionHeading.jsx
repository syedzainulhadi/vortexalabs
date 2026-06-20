import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-xl flex flex-col ${alignment}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-4 h-px bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-heading font-semibold text-3xl md:text-4xl leading-tight text-ink tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-ink-muted text-base leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}