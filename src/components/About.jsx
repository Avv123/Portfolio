import { motion } from 'framer-motion'
import { profile, achievements, education } from '../data.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-32">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="kicker mb-4"
      >
        01 · About
      </motion.p>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {profile.bio.map((p, i) => (
            <motion.p
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="mb-5 max-w-2xl text-balance text-[15px] leading-relaxed text-ink-300 sm:text-base"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={profile.bio.length}
            className="card-surface mt-8 flex flex-wrap items-center justify-between gap-4 p-5"
          >
            <div>
              <p className="font-semibold text-ink-100">{education.school}</p>
              <p className="mt-1 text-sm text-ink-300">
                {education.degree} · {education.detail}
              </p>
            </div>
            <p className="font-mono text-xs text-ink-300">{education.period}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="card-surface p-5 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-2xl font-bold text-accent sm:text-3xl">{a.stat}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink-300">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
