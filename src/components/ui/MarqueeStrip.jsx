const items = [
  'Website Development',
  'Mobile App Development',
  'Digital Marketing',
  'Graphic Designing',
  'Business Solutions',
]

export default function MarqueeStrip() {
  const repeated = [...items, ...items, ...items]

  return (
    <div className="relative border-y border-line overflow-hidden py-5 bg-bg">
      <div className="marquee-track">
        {[...repeated, ...repeated].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-8 font-mono text-sm uppercase tracking-wider text-ink-faint shrink-0"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}