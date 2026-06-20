import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  icon: Icon,
}) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.16}px, ${y * 0.28}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-[transform,background-color,border-color] duration-300 whitespace-nowrap'

  const variants = {
    primary: 'bg-ink text-bg hover:bg-white',
    secondary: 'bg-transparent border border-line text-ink hover:border-line-strong hover:bg-white/5',
    accent: 'bg-accent text-white hover:bg-accent/90',
    ghost: 'bg-white/5 text-ink hover:bg-white/10',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon size={16} />}
    </>
  )

  const shared = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: classes,
    'data-cursor': 'hover',
  }

  if (to) {
    return (
      <Link to={to} {...shared}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...shared}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} {...shared}>
      {content}
    </button>
  )
}