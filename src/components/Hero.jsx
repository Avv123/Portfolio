import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data.js'
import profileImg from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-glow-radial" />

      <div className="section-shell relative grid grid-cols-1 items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="kicker mb-6 flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to new opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink-100 sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 font-mono text-lg text-accent sm:text-xl"
          >
            {profile.role} <span className="text-ink-400">/</span> {profile.focus}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-300 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-sm font-medium text-ink-950 transition-transform hover:scale-[1.03]"
            >
              View my work
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink-600 px-5 py-2.5 font-mono text-sm text-ink-100 transition-colors hover:border-accent/60 hover:text-accent"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex items-center gap-5"
          >
            <a href="https://github.com/Avv123" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-300 transition-colors hover:text-accent">
              <Github size={19} />
            </a>
            <a href="https://www.linkedin.com/in/aryaman-vishnoi-827502229/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-300 transition-colors hover:text-accent">
              <Linkedin size={19} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-300 transition-colors hover:text-accent">
              <Mail size={19} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-transparent blur-2xl" />
          <div className="relative rounded-[1.75rem] border border-ink-700/80 bg-ink-850/60 p-2.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src={profileImg}
                alt="Aryaman Vishnoi"
                className="aspect-[4/5] w-full object-cover grayscale-[15%] contrast-[1.05]"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-ink-600 bg-ink-900 px-4 py-1.5 font-mono text-[11px] text-ink-200 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.location}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
