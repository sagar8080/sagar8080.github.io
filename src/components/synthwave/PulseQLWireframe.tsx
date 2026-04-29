export function PulseQLWireframe() {
  return (
    <svg
      viewBox="0 0 360 240"
      className="h-auto w-full"
      role="img"
      aria-label="PulseQL UI — query editor, schema explorer, and results panel"
    >
      <defs>
        <linearGradient id="pq-bar" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Window frame */}
      <rect x="6" y="6" width="348" height="228" rx="3"
        fill="rgba(0,0,0,0.55)" stroke="#22d3ee" strokeOpacity="0.45" strokeWidth="1" />

      {/* Title bar */}
      <rect x="6" y="6" width="348" height="18"
        fill="rgba(34,211,238,0.06)" stroke="#22d3ee" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="14" cy="15" r="2" fill="#71717a" />
      <circle cx="22" cy="15" r="2" fill="#71717a" />
      <circle cx="30" cy="15" r="2" fill="#22d3ee" fillOpacity="0.7" />
      <text x="44" y="18" fill="#F1E6C9" fontSize="6.5" fontFamily="ui-monospace, monospace" letterSpacing="0.12em">
        pulseql › sales.transactions
      </text>
      <text x="340" y="18" fill="#a3a3a3" fontSize="6" fontFamily="ui-monospace, monospace" textAnchor="end" opacity="0.7">⌘K</text>

      {/* Sidebar divider */}
      <line x1="92" y1="24" x2="92" y2="234" stroke="#22d3ee" strokeOpacity="0.18" strokeWidth="1" />
      <text x="14" y="38" fill="#22d3ee" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.8" letterSpacing="0.16em">SCHEMA</text>

      {/* Schema tree */}
      {[
        { y: 50, label: 'public',       open: true,  depth: 0 },
        { y: 60, label: 'transactions', open: false, depth: 1 },
        { y: 70, label: 'customers',    open: false, depth: 1 },
        { y: 80, label: 'products',     open: false, depth: 1 },
        { y: 94, label: 'staging',      open: false, depth: 0 },
        { y: 104, label: 'analytics',   open: false, depth: 0 },
      ].map((n) => (
        <g key={n.label + n.y}>
          <text x={14 + n.depth * 8} y={n.y} fill="#a3a3a3" fontSize="6" fontFamily="ui-monospace, monospace">
            {n.open ? '▾' : '▸'}
          </text>
          <text x={22 + n.depth * 8} y={n.y} fill="#d4d4d8" fontSize="6.5" fontFamily="ui-monospace, monospace">
            {n.label}
          </text>
        </g>
      ))}

      {/* Profile bars */}
      <text x="14" y="130" fill="#ec4899" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.8" letterSpacing="0.16em">PROFILE</text>
      {[58, 42, 65, 31, 49].map((w, i) => (
        <rect key={i} x="14" y={138 + i * 8} width={w} height="4"
          fill="url(#pq-bar)" opacity={0.55 - i * 0.06} />
      ))}

      {/* Query editor */}
      <text x="100" y="38" fill="#22d3ee" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.8" letterSpacing="0.16em">QUERY</text>
      <rect x="100" y="44" width="252" height="92" rx="2"
        fill="rgba(34,211,238,0.04)" stroke="#22d3ee" strokeOpacity="0.25" strokeWidth="1" />

      {[
        { y: 58,  x: undefined, color: '#ec4899', text: 'SELECT' },
        { y: 58,  x: 138,       color: '#F1E6C9', text: 'customer_id, sum(amount)' },
        { y: 70,  x: undefined, color: '#ec4899', text: 'FROM' },
        { y: 70,  x: 124,       color: '#F1E6C9', text: 'transactions' },
        { y: 82,  x: undefined, color: '#ec4899', text: 'WHERE' },
        { y: 82,  x: 134,       color: '#F1E6C9', text: 'created_at > now() - 30d' },
        { y: 94,  x: undefined, color: '#ec4899', text: 'GROUP BY' },
        { y: 94,  x: 148,       color: '#F1E6C9', text: 'customer_id' },
        { y: 106, x: undefined, color: '#22d3ee', text: '-- intent: top customers, last 30d' },
      ].map((r, i) => (
        <text key={i} x={r.x ?? 108} y={r.y}
          fill={r.color} fontSize="6.5" fontFamily="ui-monospace, monospace" opacity="0.9">
          {r.text}
        </text>
      ))}

      {/* Blinking cursor */}
      <rect x="270" y="100" width="4" height="8" fill="#F1E6C9" opacity="0.85">
        <animate attributeName="opacity" values="0.85;0.1;0.85" dur="1.1s" repeatCount="indefinite" />
      </rect>

      {/* Run pill */}
      <rect x="318" y="50" width="30" height="12" rx="2"
        fill="rgba(236,72,153,0.18)" stroke="#ec4899" strokeOpacity="0.6" strokeWidth="1" />
      <text x="333" y="59" fill="#F1E6C9" fontSize="6" fontFamily="ui-monospace, monospace" textAnchor="middle" letterSpacing="0.1em">RUN ⏎</text>

      {/* Results panel */}
      <text x="100" y="148" fill="#ec4899" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.8" letterSpacing="0.16em">EVAL · 2.3M rows · 142ms</text>
      <rect x="100" y="154" width="252" height="74" rx="2"
        fill="rgba(236,72,153,0.04)" stroke="#ec4899" strokeOpacity="0.25" strokeWidth="1" />

      {[0, 1, 2, 3, 4].map((i) => (
        <g key={'row-' + i}>
          <line x1="108" y1={166 + i * 12} x2="344" y2={166 + i * 12}
            stroke="#22d3ee" strokeOpacity="0.1" strokeWidth="0.5" />
          <text x="112" y={170 + i * 12} fill="#a3a3a3" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.85">
            cust_{(1042 + i * 17).toString(16)}
          </text>
          <text x="200" y={170 + i * 12} fill="#F1E6C9" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.85" textAnchor="end">
            ${(842 - i * 73).toLocaleString()}
          </text>
          <rect x="210" y={166 + i * 12} width={Math.max(30, 130 - i * 22)} height="3"
            fill="url(#pq-bar)" opacity={0.7 - i * 0.08} />
        </g>
      ))}
    </svg>
  )
}
