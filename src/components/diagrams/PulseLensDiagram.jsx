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
        className={accent ? 'fill-accent font-mono text-[12.5px] font-medium' : 'fill-ink-200 font-mono text-[12.5px]'}
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

export default function PulseLensDiagram() {
  const boxH = 70

  return (
    <div className="mt-6 overflow-x-auto">
      <svg viewBox="0 0 1100 220" className="h-auto w-full min-w-[760px]">
        <defs>
          <marker id="pl-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="fill-ink-500" />
          </marker>
        </defs>

        <rect
          x={190}
          y={15}
          width={750}
          height={190}
          rx={14}
          className="fill-none stroke-ink-600"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
        <text x={205} y={34} className="fill-ink-400 font-mono text-[11px]">
          decoupled Go microservices
        </text>

        {/* sources -> ingest */}
        <line x1={160} y1={110} x2={195} y2={110} className="stroke-ink-500" strokeWidth="1.5" markerEnd="url(#pl-arrow)" />
        {/* ingest -> processing */}
        <line x1={345} y1={110} x2={380} y2={110} className="stroke-ink-500" strokeWidth="1.5" markerEnd="url(#pl-arrow)" />
        {/* processing -> clickhouse / postgres (branch) */}
        <line x1={530} y1={110} x2={565} y2={65} className="stroke-ink-500" strokeWidth="1.3" markerEnd="url(#pl-arrow)" />
        <line x1={530} y1={110} x2={565} y2={165} className="stroke-ink-500" strokeWidth="1.3" markerEnd="url(#pl-arrow)" />
        {/* clickhouse / postgres -> alerting (merge) */}
        <line x1={735} y1={65} x2={770} y2={110} className="stroke-ink-500" strokeWidth="1.3" markerEnd="url(#pl-arrow)" />
        <line x1={735} y1={165} x2={770} y2={110} className="stroke-ink-500" strokeWidth="1.3" markerEnd="url(#pl-arrow)" />
        {/* alerting -> notify */}
        <line x1={920} y1={110} x2={955} y2={110} className="stroke-ink-500" strokeWidth="1.5" markerEnd="url(#pl-arrow)" />

        <Box x={10} y={75} w={150} h={boxH} lines={['Logs / Metrics', '/ Traces']} />
        <Box x={195} y={75} w={150} h={boxH} lines={['Ingest', '(Kafka)']} accent />
        <Box x={380} y={75} w={150} h={boxH} lines={['Processing', '& Dedup']} />
        <Box x={565} y={30} w={170} h={boxH} lines={['ClickHouse', '(Telemetry)']} />
        <Box x={565} y={130} w={170} h={boxH} lines={['PostgreSQL', '(Control Plane)']} />
        <Box x={770} y={75} w={150} h={boxH} lines={['Alerting', 'Engine']} accent />
        <Box x={955} y={75} w={140} h={boxH} lines={['Slack / Webhook', '/ Email']} />
      </svg>
    </div>
  )
}
