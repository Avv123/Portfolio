import { useEffect, useRef, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-700/70 bg-ink-950/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-ink-100">
          <span className="text-accent">&gt;</span> aryaman<span className="text-accent">.</span>vishnoi
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline font-mono text-[13px]">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center md:flex">
          <a
            href="/Aryaman_Vishnoi_Resume.pdf"
            download
            className="flex items-center gap-1.5 rounded-full border border-ink-600 px-4 py-1.5 font-mono text-[13px] text-ink-100 transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Download size={13} /> Resume
          </a>
        </div>

        <button
          ref={toggleRef}
          className="text-ink-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div ref={menuRef} className="border-t border-ink-700/70 bg-ink-950/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-ink-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Aryaman_Vishnoi_Resume.pdf"
                download
                className="flex w-fit items-center gap-1.5 rounded-full border border-ink-600 px-4 py-1.5 font-mono text-[13px] text-ink-100"
              >
                <Download size={13} /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
