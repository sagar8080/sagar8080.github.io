'use client'

import { motion } from 'framer-motion'
import type { CapabilityDomain } from '@/lib/content'

type Variant = CapabilityDomain['diagram']

const dashAnim = {
  initial: { strokeDashoffset: 60 },
  animate: { strokeDashoffset: 0 },
  transition: { duration: 1.6, ease: 'easeOut' as const },
}

export function CapabilityDiagram({ variant }: { variant: Variant }) {
  if (variant === 'pipeline') return <PipelineDiagram />
  if (variant === 'rag') return <RagDiagram />
  return <OpsLoopDiagram />
}

// Source → Stream → Lakehouse → Warehouse
function PipelineDiagram() {
  return (
    <svg viewBox="0 0 240 80" className="h-20 w-full" aria-hidden>
      <defs>
        <marker id="ah-cyan" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L7,4 L0,7" fill="none" stroke="#22d3ee" strokeWidth="1.2" />
        </marker>
      </defs>
      {[
        { x: 16, label: 'src' },
        { x: 80, label: 'stream' },
        { x: 144, label: 'lake' },
        { x: 208, label: 'wh' },
      ].map((n, i) => (
        <g key={n.label}>
          <rect
            x={n.x}
            y={28}
            width={28}
            height={20}
            fill="rgba(34,211,238,0.06)"
            stroke="#22d3ee"
            strokeOpacity="0.55"
            strokeWidth="1"
            rx="1"
          />
          <text
            x={n.x + 14}
            y={42}
            fill="#F1E6C9"
            fontSize="7"
            fontFamily="ui-monospace, monospace"
            textAnchor="middle"
            letterSpacing="0.15em"
          >
            {n.label.toUpperCase()}
          </text>
          {i < 3 && (
            <motion.path
              d={`M${n.x + 28} 38 L${n.x + 50} 38`}
              fill="none"
              stroke="#22d3ee"
              strokeOpacity="0.6"
              strokeWidth="1"
              strokeDasharray="3 2"
              markerEnd="url(#ah-cyan)"
              initial={dashAnim.initial}
              whileInView={dashAnim.animate}
              viewport={{ once: true }}
              transition={{ ...dashAnim.transition, delay: i * 0.15 }}
            />
          )}
        </g>
      ))}
      <text
        x={120}
        y={70}
        fill="#a3a3a3"
        fontSize="6"
        fontFamily="ui-monospace, monospace"
        textAnchor="middle"
        opacity="0.7"
        letterSpacing="0.18em"
      >
        EVENT-DRIVEN · CDC · QUALITY GATES
      </text>
    </svg>
  )
}

// Query → Embed → Retrieve → Rerank → Generate
function RagDiagram() {
  return (
    <svg viewBox="0 0 240 80" className="h-20 w-full" aria-hidden>
      <defs>
        <marker id="ah-pink" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L7,4 L0,7" fill="none" stroke="#ec4899" strokeWidth="1.2" />
        </marker>
      </defs>
      {/* Query node */}
      <g>
        <circle cx={20} cy={40} r="10" fill="rgba(236,72,153,0.06)" stroke="#ec4899" strokeOpacity="0.6" strokeWidth="1" />
        <text x={20} y={43} fill="#F1E6C9" fontSize="6.5" fontFamily="ui-monospace, monospace" textAnchor="middle">Q</text>
      </g>
      {/* Embed */}
      <motion.path
        d="M30 40 L60 40"
        fill="none"
        stroke="#ec4899"
        strokeOpacity="0.6"
        strokeWidth="1"
        strokeDasharray="3 2"
        markerEnd="url(#ah-pink)"
        initial={dashAnim.initial}
        whileInView={dashAnim.animate}
        viewport={{ once: true }}
        transition={{ ...dashAnim.transition, delay: 0 }}
      />
      <rect x={62} y={30} width={32} height={20} fill="rgba(34,211,238,0.06)" stroke="#22d3ee" strokeOpacity="0.55" strokeWidth="1" rx="1" />
      <text x={78} y={43} fill="#F1E6C9" fontSize="7" fontFamily="ui-monospace, monospace" textAnchor="middle">EMB</text>
      {/* Vector store */}
      <motion.path
        d="M94 40 L120 40"
        fill="none"
        stroke="#22d3ee"
        strokeOpacity="0.6"
        strokeWidth="1"
        strokeDasharray="3 2"
        markerEnd="url(#ah-cyan)"
        initial={dashAnim.initial}
        whileInView={dashAnim.animate}
        viewport={{ once: true }}
        transition={{ ...dashAnim.transition, delay: 0.15 }}
      />
      {/* Stacked DB */}
      <g>
        <ellipse cx={134} cy={32} rx="14" ry="3" fill="rgba(34,211,238,0.08)" stroke="#22d3ee" strokeOpacity="0.5" strokeWidth="1" />
        <path d="M120 32 L120 48 Q120 51 134 51 Q148 51 148 48 L148 32" fill="rgba(34,211,238,0.06)" stroke="#22d3ee" strokeOpacity="0.5" strokeWidth="1" />
        <ellipse cx={134} cy={40} rx="14" ry="3" fill="none" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="0.8" />
      </g>
      <text x={134} y={64} fill="#F1E6C9" fontSize="6" fontFamily="ui-monospace, monospace" textAnchor="middle" letterSpacing="0.15em">VEC.DB</text>
      {/* Rerank */}
      <motion.path
        d="M148 40 L172 40"
        fill="none"
        stroke="#22d3ee"
        strokeOpacity="0.6"
        strokeWidth="1"
        strokeDasharray="3 2"
        markerEnd="url(#ah-cyan)"
        initial={dashAnim.initial}
        whileInView={dashAnim.animate}
        viewport={{ once: true }}
        transition={{ ...dashAnim.transition, delay: 0.3 }}
      />
      <rect x={172} y={30} width={28} height={20} fill="rgba(171,218,220,0.05)" stroke="#ABDADC" strokeOpacity="0.45" strokeWidth="1" rx="1" />
      <text x={186} y={43} fill="#ABDADC" fontSize="7" fontFamily="ui-monospace, monospace" textAnchor="middle">RR</text>
      {/* Generate */}
      <motion.path
        d="M200 40 L218 40"
        fill="none"
        stroke="#ABDADC"
        strokeOpacity="0.5"
        strokeWidth="1"
        strokeDasharray="3 2"
        initial={dashAnim.initial}
        whileInView={dashAnim.animate}
        viewport={{ once: true }}
        transition={{ ...dashAnim.transition, delay: 0.45 }}
      />
      <text x={222} y={43} fill="#ABDADC" fontSize="9" fontFamily="ui-monospace, monospace">⌘</text>
      <text x={120} y={72} fill="#a3a3a3" fontSize="6" fontFamily="ui-monospace, monospace" textAnchor="middle" opacity="0.7" letterSpacing="0.18em">EVAL HOOKS · CITATIONS · GUARDRAILS</text>
    </svg>
  )
}

// Build → Deploy → Observe → Alert (loop)
function OpsLoopDiagram() {
  const nodes = [
    { x: 38, y: 22, label: 'BLD' },
    { x: 132, y: 22, label: 'DPL' },
    { x: 132, y: 56, label: 'OBS' },
    { x: 38, y: 56, label: 'ALR' },
  ]
  return (
    <svg viewBox="0 0 200 80" className="h-20 w-full" aria-hidden>
      <defs>
        <marker id="ah-phos" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,1 L7,4 L0,7" fill="none" stroke="#ABDADC" strokeWidth="1.2" />
        </marker>
      </defs>
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="11" fill="rgba(171,218,220,0.05)" stroke="#ABDADC" strokeOpacity="0.5" strokeWidth="1" />
          <text x={n.x} y={n.y + 3} fill="#ABDADC" fontSize="7" fontFamily="ui-monospace, monospace" textAnchor="middle" letterSpacing="0.1em">
            {n.label}
          </text>
        </g>
      ))}
      {/* Arrows */}
      {[
        { d: 'M50 22 L120 22', delay: 0 },
        { d: 'M132 34 L132 44', delay: 0.15 },
        { d: 'M120 56 L50 56', delay: 0.3 },
        { d: 'M38 44 L38 34', delay: 0.45 },
      ].map((a) => (
        <motion.path
          key={a.d}
          d={a.d}
          fill="none"
          stroke="#ABDADC"
          strokeOpacity="0.55"
          strokeWidth="1"
          strokeDasharray="3 2"
          markerEnd="url(#ah-phos)"
          initial={dashAnim.initial}
          whileInView={dashAnim.animate}
          viewport={{ once: true }}
          transition={{ ...dashAnim.transition, delay: a.delay }}
        />
      ))}
      <text x={100} y={42} fill="#a3a3a3" fontSize="6" fontFamily="ui-monospace, monospace" textAnchor="middle" opacity="0.65" letterSpacing="0.18em">CONTINUOUS LOOP</text>
    </svg>
  )
}
