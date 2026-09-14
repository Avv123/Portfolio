function Box({ x, y, w, h, lines, accent, decision }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        className={
          decision
            ? 'fill-ink-800 stroke-accent/60'
            : accent
              ? 'fill-ink-800 stroke-accent/60'
              : 'fill-ink-800 stroke-ink-600'
        }
        strokeWidth="1.5"
        strokeDasharray={decision ? '4 3' : undefined}
      />
      <text
        x={x + w / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className={accent || decision ? 'fill-accent font-mono text-[12.5px] font-medium' : 'fill-ink-200 font-mono text-[12.5px]'}
      >
        {lines.map((line, i) => (
          <tspan key={line} x={x + w / 2} dy={i === 0 ? -((lines.length - 1) * 8) : 16}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  )
}

export default function IdempoFlowDiagram() {
  return (
    <div className="mt-6 overflow-x-auto">
      <svg viewBox="0 0 1000 470" className="h-auto w-full min-w-[640px]">
        <defs>
          <marker id="idem-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="fill-ink-500" />
          </marker>
        </defs>

        {/* request -> decision */}
        <line x1={500} y1={80} x2={500} y2={110} className="stroke-ink-500" strokeWidth="1.5" markerEnd="url(#idem-arrow)" />
        {/* decision -> no-key terminal */}
        <line x1={390} y1={165} x2={190} y2={210} className="stroke-ink-500" strokeWidth="1.3" markerEnd="url(#idem-arrow)" />
        {/* decision -> lookup */}
        <line x1={500} y1={170} x2={500} y2={210} className="stroke-ink-500" strokeWidth="1.5" markerEnd="url(#idem-arrow)" />
        {/* lookup -> three outcomes */}
        <line x1={430} y1={270} x2={230} y2={330} className="stroke-ink-500" strokeWidth="1.3" markerEnd="url(#idem-arrow)" />
        <line x1={500} y1={270} x2={500} y2={330} className="stroke-ink-500" strokeWidth="1.3" markerEnd="url(#idem-arrow)" />
        <line x1={570} y1={270} x2={790} y2={330} className="stroke-ink-500" strokeWidth="1.3" markerEnd="url(#idem-arrow)" />

        <text x={310} y={195} className="fill-ink-400 font-mono text-[11px]">
          no
        </text>
        <text x={520} y={195} className="fill-ink-400 font-mono text-[11px]">
          yes
        </text>

        <Box x={390} y={20} w={220} h={60} lines={['POST request', 'Idempotency-Key: X']} />
        <Box x={390} y={110} w={220} h={60} lines={['Key present?']} decision />
        <Box x={40} y={210} w={240} h={60} lines={['No key present', 'pass through, no caching']} />
        <Box x={390} y={210} w={220} h={60} lines={['Lookup fingerprint', 'in store']} />

        <Box x={80} y={330} w={260} h={90} lines={['New key', 'Execute handler,', 'store response']} />
        <Box x={370} y={330} w={260} h={90} lines={['In-flight (same key)', 'Wait ≤30s,', 'then replay original']} />
        <Box x={660} y={330} w={260} h={90} lines={['Completed earlier', 'Return cached response', 'instantly']} accent />

        <text x={210} y={438} textAnchor="middle" className="fill-ink-400 font-mono text-[11px]">
          racing retry ≠ re-run
        </text>
        <text x={500} y={438} textAnchor="middle" className="fill-ink-400 font-mono text-[11px]">
          past timeout → 409 Conflict
        </text>
        <text x={790} y={438} textAnchor="middle" className="fill-accent/80 font-mono text-[11px]">
          Idempotent-Replayed: true
        </text>
      </svg>
    </div>
  )
}
