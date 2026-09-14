import { motion } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24 sm:py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="kicker mb-4"
      >
        03 · Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-14 text-2xl font-bold text-ink-100 sm:text-3xl"
      >
        Things I've shipped and open-sourced
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card-surface group flex flex-col p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_50px_-20px_rgba(94,234,212,0.25)]"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-ink-100">{p.name}</h3>
                <p className="mt-1 font-mono text-xs text-accent">{p.subtitle}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </div>

            <p className="mt-4 text-[14px] leading-relaxed text-ink-300">{p.description}</p>

            <ul className="mt-4 space-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-[13px] leading-relaxed text-ink-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-ink-400">
                <span>{p.year}</span>
                {p.meta && (
                  <span className="flex items-center gap-1 text-signal">
                    <Star size={11} fill="currentColor" /> {p.meta}
                  </span>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
