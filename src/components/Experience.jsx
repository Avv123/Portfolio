import { motion } from 'framer-motion'
import { experience } from '../data.js'
import SqsFanOutDiagram from './diagrams/SqsFanOutDiagram.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24 sm:py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="kicker mb-4"
      >
        02 · Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-14 text-2xl font-bold text-ink-100 sm:text-3xl"
      >
        Where I've been building
      </motion.h2>

      <div className="relative border-l border-ink-700/80 pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <motion.div
            key={job.role + job.period}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative ${i !== experience.length - 1 ? 'mb-16' : ''}`}
          >
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-ink-950 sm:-left-[49px]" />

            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-ink-100 sm:text-xl">
                {job.role} <span className="text-ink-400">— {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-ink-300">{job.period}</span>
            </div>
            <p className="mb-4 font-mono text-xs text-ink-300">{job.location}</p>

            <ul className="space-y-2.5">
              {job.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-300">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                  {pt}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>

            {i === 0 && (
              <div className="card-surface mt-6 p-5">
                <p className="mb-1 font-mono text-xs uppercase tracking-wider text-ink-300">
                  Billing pipeline — SQS fan-out/fan-in
                </p>
                <p className="text-xs text-ink-400">
                  Reduced bill-generation time 70% by parallelizing calls to 11 external services across a
                  pool of async workers, then aggregating before a Redis-cached batch write.
                </p>
                <SqsFanOutDiagram />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
