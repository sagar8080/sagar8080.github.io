'use client'

import { motion } from 'framer-motion'
import { featuredProject } from '@/lib/content'

export function FeaturedProject() {
  return (
    <section
      aria-label="Featured project"
      className="relative px-4 pb-20 md:px-8 md:pb-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-sm border border-vint-pink/40 bg-gradient-to-br from-black/70 via-black/55 to-vint-pink/15 p-6 backdrop-blur-sm md:p-10"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vint-pink/70 to-transparent"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.14),transparent_60%)]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-10">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-sm border border-vint-pink/50 bg-vint-pink/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-vint-cream">
                  FEATURED_PROJECT
                </span>
                <span className="rounded-sm border border-vint-cyan/40 bg-vint-cyan/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.22em] text-vint-cream">
                  {featuredProject.status}
                </span>
              </div>

              <h3 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vint-pink via-white to-vint-cream">
                  {featuredProject.title}
                </span>
              </h3>
              <p className="mt-2 font-mono text-sm text-zinc-400">
                {featuredProject.subtitle}
              </p>

              <ul className="mt-6 space-y-2.5">
                {featuredProject.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 font-mono text-sm leading-relaxed text-zinc-300"
                  >
                    <span className="mt-0.5 shrink-0 text-vint-cyan">{'>'}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {featuredProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-vint-pink/30 bg-vint-pink/5 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-vint-cream"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <PulseQLWireframe />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PulseQLWireframe() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative"
      aria-hidden
    >
      <svg
        viewBox="0 0 360 240"
        className="h-auto w-full"
        role="img"
        aria-label="PulseQL UI wireframe sketch"
      >
        <defs>
          <linearGradient id="pq-bar" x1="0" x2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Window frame */}
        <rect
          x="6" y="6" width="348" height="228" rx="3"
          fill="rgba(0,0,0,0.55)"
          stroke="#22d3ee" strokeOpacity="0.45" strokeWidth="1"
        />

        {/* Title bar */}
        <rect x="6" y="6" width="348" height="18" fill="rgba(34,211,238,0.06)" stroke="#22d3ee" strokeOpacity="0.25" strokeWidth="1" />
        <circle cx="14" cy="15" r="2" fill="#71717a" />
        <circle cx="22" cy="15" r="2" fill="#71717a" />
        <circle cx="30" cy="15" r="2" fill="#22d3ee" fillOpacity="0.7" />
        <text x="44" y="18" fill="#F1E6C9" fontSize="6.5" fontFamily="ui-monospace, monospace" letterSpacing="0.12em">
          pulseql › sales.transactions
        </text>
        <text x="340" y="18" fill="#a3a3a3" fontSize="6" fontFamily="ui-monospace, monospace" textAnchor="end" opacity="0.7">⌘K</text>

        {/* Sidebar */}
        <line x1="92" y1="24" x2="92" y2="234" stroke="#22d3ee" strokeOpacity="0.18" strokeWidth="1" />
        <text x="14" y="38" fill="#22d3ee" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.8" letterSpacing="0.16em">SCHEMA</text>

        {/* Schema tree items */}
        {[
          { y: 50, label: 'public', open: true, depth: 0 },
          { y: 60, label: 'transactions', open: false, depth: 1 },
          { y: 70, label: 'customers', open: false, depth: 1 },
          { y: 80, label: 'products', open: false, depth: 1 },
          { y: 94, label: 'staging', open: false, depth: 0 },
          { y: 104, label: 'analytics', open: false, depth: 0 },
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

        {/* Profile mini-bars in sidebar */}
        <text x="14" y="130" fill="#ec4899" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.8" letterSpacing="0.16em">PROFILE</text>
        {[58, 42, 65, 31, 49].map((w, i) => (
          <rect
            key={i}
            x="14"
            y={138 + i * 8}
            width={w}
            height="4"
            fill="url(#pq-bar)"
            opacity={0.55 - i * 0.06}
          />
        ))}

        {/* Main editor area */}
        <text x="100" y="38" fill="#22d3ee" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.8" letterSpacing="0.16em">QUERY</text>
        <rect x="100" y="44" width="252" height="92" rx="2" fill="rgba(34,211,238,0.04)" stroke="#22d3ee" strokeOpacity="0.25" strokeWidth="1" />

        {/* SQL-like text rows */}
        {[
          { y: 58, color: '#ec4899', text: 'SELECT' },
          { y: 58, x: 138, color: '#F1E6C9', text: 'customer_id, sum(amount)' },
          { y: 70, color: '#ec4899', text: 'FROM' },
          { y: 70, x: 124, color: '#F1E6C9', text: 'transactions' },
          { y: 82, color: '#ec4899', text: 'WHERE' },
          { y: 82, x: 134, color: '#F1E6C9', text: 'created_at > now() - 30d' },
          { y: 94, color: '#ec4899', text: 'GROUP BY' },
          { y: 94, x: 148, color: '#F1E6C9', text: 'customer_id' },
          { y: 106, color: '#22d3ee', text: '-- intent: top customers, last 30d' },
        ].map((r, i) => (
          <text
            key={i}
            x={r.x ?? 108}
            y={r.y}
            fill={r.color}
            fontSize="6.5"
            fontFamily="ui-monospace, monospace"
            opacity="0.9"
          >
            {r.text}
          </text>
        ))}

        {/* Cursor block */}
        <rect x="270" y="100" width="4" height="8" fill="#F1E6C9" opacity="0.85">
          <animate attributeName="opacity" values="0.85;0.1;0.85" dur="1.1s" repeatCount="indefinite" />
        </rect>

        {/* Run pill */}
        <rect x="318" y="50" width="30" height="12" rx="2" fill="rgba(236,72,153,0.18)" stroke="#ec4899" strokeOpacity="0.6" strokeWidth="1" />
        <text x="333" y="59" fill="#F1E6C9" fontSize="6" fontFamily="ui-monospace, monospace" textAnchor="middle" letterSpacing="0.1em">RUN ⏎</text>

        {/* Eval gauge / results panel */}
        <text x="100" y="148" fill="#ec4899" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.8" letterSpacing="0.16em">EVAL · 2.3M rows · 142ms</text>
        <rect x="100" y="154" width="252" height="74" rx="2" fill="rgba(236,72,153,0.04)" stroke="#ec4899" strokeOpacity="0.25" strokeWidth="1" />

        {/* Result rows simulating a table */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={'row-' + i}>
            <line x1="108" y1={166 + i * 12} x2="344" y2={166 + i * 12} stroke="#22d3ee" strokeOpacity="0.1" strokeWidth="0.5" />
            <text x="112" y={170 + i * 12} fill="#a3a3a3" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.85">
              cust_{(1042 + i * 17).toString(16)}
            </text>
            <text x="200" y={170 + i * 12} fill="#F1E6C9" fontSize="6" fontFamily="ui-monospace, monospace" opacity="0.85" textAnchor="end">
              ${(842 - i * 73).toLocaleString()}
            </text>
            <rect x="210" y={166 + i * 12} width={Math.max(30, 130 - i * 22)} height="3" fill="url(#pq-bar)" opacity={0.7 - i * 0.08} />
          </g>
        ))}
      </svg>

      <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
        // ui sketch · subject to change
      </p>
    </motion.div>
  )
}
