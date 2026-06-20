import { motion } from 'framer-motion'
import { ArrowUpRight, FolderKanban } from 'lucide-react'

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      data-cursor="hover"
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-line bg-surface"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <FolderKanban
          size={36}
          className="text-ink-faint/30 group-hover:scale-110 group-hover:text-accent/50 transition-all duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
      <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-bg/70 backdrop-blur border border-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight size={15} className="text-ink" />
      </div>
      <div className="absolute bottom-0 left-0 p-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-accent mb-2">
          {project.category}
        </p>
        <h3 className="font-heading text-lg text-ink">{project.title}</h3>
      </div>
    </motion.div>
  )
}