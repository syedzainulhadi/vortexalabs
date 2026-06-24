import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Container from '../ui/Container'

const stats = [
  { value: 60, suffix: '+', label: 'Projects delivered' },
  { value: 45, suffix: '+', label: 'Clients served' },
  { value: 98, suffix: '%', label: 'Client satisfaction' },
  { value: 24, suffix: '/7', label: 'Support available' },
]

const borderClasses = [
  'border-b border-r border-line lg:border-b-0',
  'border-b border-line lg:border-b-0 lg:border-r',
  'border-r border-line',
  '',
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="border-b border-line" ref={ref}>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-line lg:border lg:rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <div key={i} className={`px-5 py-6 md:px-8 md:py-8 ${borderClasses[i]}`}>
              <p className="font-mono text-2xl md:text-3xl text-ink tracking-tight">
                {inView ? <CountUp end={stat.value} duration={2} suffix={stat.suffix} /> : '0'}
              </p>
              <p className="text-ink-muted text-xs md:text-sm mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}