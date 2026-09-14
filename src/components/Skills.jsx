import { motion } from 'framer-motion'
import { skills, socials } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24 sm:py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="kicker mb-4"
      >
        04 · Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-14 text-2xl font-bold text-ink-100 sm:text-3xl"
      >
        Toolbox
      </motion.h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.group}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="card-surface p-5"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-ink-400">{s.group}</p>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16"
      >
        <p className="mb-5 font-mono text-xs uppercase tracking-wider text-ink-400">
          Competitive programming &amp; profiles
        </p>
        <div className="flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="card-surface flex items-center gap-2 px-4 py-2.5 text-sm text-ink-200 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <span className="font-medium">{s.label}</span>
              <span className="font-mono text-xs text-ink-400">{s.handle}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
