function Box({ x, y, w, h, lines, accent }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        className={accent ? 'fill-ink-800 stroke-accent/60' : 'fill-ink-800 stroke-ink-600'}
        strokeWidth="1.5"
      />
      <text
        x={x + w / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className={accent ? 'fill-accent font-mono text-[13px] font-medium' : 'fill-ink-200 font-mono text-[13px]'}
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

function Fan({ from, to, points }) {
  return (
    <g className="stroke-ink-500/70" strokeWidth="1.2" fill="none" markerEnd="url(#sqs-arrow)">
      {points.map((p, i) => (
        <line key={i} x1={from.x} y1={p.y1 ?? from.y} x2={to.x} y2={p.y2 ?? to.y} />
      ))}
    </g>
  )
}

export default function SqsFanOutDiagram() {
  const boxH = 70
  const cy = 100

  return (
    <div className="mt-6 overflow-x-auto">
      <svg viewBox="0 0 1100 200" className="h-auto w-full min-w-[720px]">
        <defs>
          <marker id="sqs-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="fill-ink-500" />
          </marker>
        </defs>

        {/* request -> sqs */}
        <line x1={160} y1={cy} x2={195} y2={cy} className="stroke-ink-500" strokeWidth="1.5" markerEnd="url(#sqs-arrow)" />

        {/* sqs -> workers (fan-out) */}
        <Fan
          from={{ x: 345 }}
          to={{ x: 380 }}
          points={[
            { y1: cy, y2: cy - 22 },
            { y1: cy, y2: cy },
            { y1: cy, y2: cy + 22 },
          ]}
        />

        {/* workers -> services (parallel calls) */}
        <Fan
          from={{ x: 530 }}
          to={{ x: 565 }}
          points={[
            { y1: cy - 22, y2: cy - 22 },
            { y1: cy, y2: cy },
            { y1: cy + 22, y2: cy + 22 },
          ]}
        />

        {/* services -> aggregation (fan-in) */}
        <Fan
          from={{ x: 715 }}
          to={{ x: 750 }}
          points={[
            { y1: cy - 22, y2: cy },
            { y1: cy, y2: cy },
            { y1: cy + 22, y2: cy },
          ]}
        />

        {/* aggregation -> bill */}
        <line x1={900} y1={cy} x2={935} y2={cy} className="stroke-ink-500" strokeWidth="1.5" markerEnd="url(#sqs-arrow)" />

        <text x={362} y={52} textAnchor="middle" className="fill-ink-400 font-mono text-[11px]">
          fan-out
        </text>
        <text x={547} y={52} textAnchor="middle" className="fill-ink-400 font-mono text-[11px]">
          11 services, in parallel
        </text>
        <text x={732} y={52} textAnchor="middle" className="fill-ink-400 font-mono text-[11px]">
          fan-in
        </text>

        <Box x={10} y={65} w={150} h={boxH} lines={['Billing', 'Request']} />
        <Box x={195} y={65} w={150} h={boxH} lines={['AWS SQS', '(fan-out)']} accent />
        <Box x={380} y={65} w={150} h={boxH} lines={['12+ Async', 'Workers']} />
        <Box x={565} y={65} w={150} h={boxH} lines={['11 External', 'Services']} />
        <Box x={750} y={65} w={150} h={boxH} lines={['Redis +', 'Batch DB']} />
        <Box x={935} y={65} w={150} h={boxH} lines={['Bill', 'Generated']} accent />
      </svg>
    </div>
  )
}
