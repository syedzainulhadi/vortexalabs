import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TeamCard({ member, delay = 0 }) {
  const [imgFailed, setImgFailed] = useState(false)
  const showPhoto = member.photo && !imgFailed

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      data-cursor="hover"
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-line bg-surface"
    >
      {showPhoto ? (
        <img
          src={member.photo}
          alt={member.name}
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-heading text-4xl text-ink-faint">{member.initials}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="font-heading text-lg text-ink">{member.name}</h3>
        <p className="font-mono text-xs text-ink-faint mt-1">{member.role}</p>
      </div>
    </motion.div>
  )
}