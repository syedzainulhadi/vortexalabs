import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const smooth = useRef({ x: -100, y: -100 })
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const shouldEnable = isFinePointer && !prefersReduced
    setEnabled(shouldEnable)
    if (!shouldEnable) return

    document.body.classList.add('cursor-none')

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }
    }
    const handleOver = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) setHovering(true)
    }
    const handleOut = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) setHovering(false)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    let raf
    const animate = () => {
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.2
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.2
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${smooth.current.x}px, ${smooth.current.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      document.body.classList.remove('cursor-none')
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot-center" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'cursor-ring--active' : ''}`} />
    </>
  )
}