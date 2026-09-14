export default function Footer() {
  return (
    <footer className="border-t border-ink-700/70 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-3 text-center font-mono text-xs text-ink-400 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Aryaman Vishnoi. Built with React &amp; Tailwind.</p>
        <p>Designed &amp; coded from scratch.</p>
      </div>
    </footer>
  )
}
