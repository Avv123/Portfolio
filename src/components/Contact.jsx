import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-24 sm:py-32">
      <div className="card-surface overflow-hidden px-6 py-16 text-center sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-glow-radial opacity-70" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="kicker relative mb-4 justify-center"
        >
          05 · Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative text-balance text-3xl font-bold text-ink-100 sm:text-4xl"
        >
          Let's build something reliable together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto mt-4 max-w-md text-balance text-sm text-ink-300 sm:text-base"
        >
          Open to backend / distributed-systems roles. The fastest way to reach me is email.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="relative mt-9"
        >
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
          >
            {profile.email}
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="relative mt-8 flex items-center justify-center gap-6"
        >
          <a href="https://github.com/Avv123" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-300 transition-colors hover:text-accent">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aryaman-vishnoi-827502229/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-300 transition-colors hover:text-accent">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-300 transition-colors hover:text-accent">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
