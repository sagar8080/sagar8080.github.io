'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { featuredProject } from '@/lib/content'
import { DownloadButton } from '@/components/synthwave/DownloadButton'
import { ParticleNetwork } from '@/components/synthwave/ParticleNetwork'
import { PulseQLWireframe } from '@/components/synthwave/PulseQLWireframe'

// ── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    id: 'STACK',
    accent: 'cyan' as const,
    headline: 'Six tools. One binary.',
    body: 'The modern data stack fragments ingestion, storage, transformation, semantics, BI, and governance into six separate purchases — each with its own auth model and ops surface. PulseQL collapses that into one opinionated desktop app. Connect any source, land it as Iceberg or Delta in your own object store, promote Bronze → Silver → Gold with agent-suggested transforms, model semantics in YAML, query in plain English, and publish a dashboard or API — without leaving the app.',
  },
  {
    id: 'ASK',
    accent: 'pink' as const,
    headline: 'Intent → plan → SQL → answer.',
    body: "PulseQL's query layer runs a two-stage planner: first it decomposes your question into a readable plan — which tables, which joins, which filters — then generates a SQL draft you can inspect and edit before anything executes. Every answer carries an evidence pack: citations back to the contracts, datasets, and lineage events it depends on. LLM outputs are JSON-schema-validated before they touch your database. No hallucinations in production paths.",
  },
  {
    id: 'CONTROL',
    accent: 'cyan' as const,
    headline: 'Your cloud. Your bytes.',
    body: 'Bytes live in your object store as Iceberg or Delta. PulseQL keeps only metadata, plans, and lightweight artifacts on-disk — a local SQLite catalog, lineage events, agent run history, DQ results. There is no hosted data plane. Sensitive columns are PII-routed to local inference and never reach external APIs. Every mutating action — pipeline change, DQ gate, dashboard publish — is queued as a proposal and requires human approval before execution.',
  },
]

const stack = [
  { name: 'Rust',       why: 'Memory-safe backend, zero GC pauses in the query path, single binary output.' },
  { name: 'Tauri',      why: '~150 MB installer. Native OS file system and credential access without Electron overhead.' },
  { name: 'React 19',   why: 'Streaming-first UI. Concurrent rendering for large result sets and live agent output.' },
  { name: 'DataFusion', why: 'In-process query engine — no separate server. SQL over Parquet, CSV, and JSON.' },
  { name: 'DuckDB',     why: 'Local OLAP. Multi-GB files on a laptop. Columnar execution without infrastructure.' },
  { name: 'Iceberg',    why: 'Open table format. Snapshot isolation and time-travel without vendor lock-in.' },
  { name: 'SQLite',     why: 'Local-first metadata — catalog, lineage events, DQ history, and agent run logs on disk.' },
]

// ── Page ────────────────────────────────────────────────────────────────────

export default function PulseQLPage() {
  return (
    <div className="relative min-h-screen synth-bg font-mono">
      <div className="crt-overlay" aria-hidden />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 pt-6 md:px-10">
        <Link
          href="/"
          className="text-[11px] uppercase tracking-[0.22em] text-zinc-600 transition-colors hover:text-vint-cyan"
        >
          ← sagar das
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
          pulseql
        </span>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <ParticleNetwork className="absolute inset-0 h-full w-full" />

        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[560px] w-[560px] rounded-full bg-vint-pink/[0.07] blur-[130px]" />
          <div className="absolute h-[300px] w-[300px] rounded-full bg-vint-cyan/[0.04] blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative"
        >
          <p className="mb-7 text-[10px] uppercase tracking-[0.35em] text-vint-cream/60">
            v1.0.0 · stable release
          </p>

          <h1 className="font-display text-[80px] font-bold uppercase leading-none tracking-tight md:text-[120px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vint-pink via-white to-vint-cyan">
              PulseQL
            </span>
          </h1>

          <div className="mx-auto mt-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-vint-pink/40" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-vint-cream/50">the data lifecycle, in one app</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-vint-cyan/40" />
          </div>

          <p className="mx-auto mt-8 max-w-md text-[13px] leading-[1.8] text-zinc-400">
            Connect your sources, land them as a real lakehouse, transform with
            agentic help, ask in plain English. Ship without a platform team.
          </p>

          <div className="mt-10">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-sm border border-vint-pink/45 bg-vint-pink/8 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-vint-cream transition-colors hover:border-vint-pink/75 hover:bg-vint-pink/15"
            >
              get it
              <span aria-hidden className="text-vint-pink">↓</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[9px] uppercase tracking-[0.24em] text-vint-cream/40">scroll</span>
          <div className="h-5 w-px bg-gradient-to-b from-vint-cream/40 to-transparent" />
        </motion.div>
      </section>

      {/* ── Feature Breakdown ── */}
      <section className="relative z-10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>capabilities</SectionLabel>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.id} feature={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── UI Showcase ── */}
      <section className="relative z-10 px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>interface</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-10 overflow-hidden rounded-sm border border-vint-cyan/30 bg-black/40 p-2 backdrop-blur-sm md:p-3"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-vint-cyan/50 to-transparent"
            />
            <PulseQLWireframe />
          </motion.div>
          <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            query editor · schema explorer · profiler · results
          </p>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="relative z-10 px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>built with</SectionLabel>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stack.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-sm border border-zinc-800/70 bg-black/30 px-4 py-3"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-vint-cyan">{t.name}</p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-500">{t.why}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Start ── */}
      <section id="download" className="relative z-10 px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>quick start</SectionLabel>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-12 overflow-hidden rounded-sm border border-zinc-800/70"
          >
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 border-b border-zinc-800/70 bg-black/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-vint-cyan/50" />
              <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-zinc-600">terminal</span>
            </div>

            <div className="bg-black/50 px-6 py-5 text-[12px] leading-[2]">
              <Line comment="# macOS — right-click → Open if Gatekeeper prompts on first launch" />
              <Line cmd="curl" args="-LO https://pub-08fea510099447418d6efca50e163284.r2.dev/pulseql-release/v1.0.0/pulseDesktop_1.0.0_universal.dmg" />
              <Line cmd="open" args="pulseDesktop_1.0.0_universal.dmg" />
              <div className="mt-3" />
              <Line comment="# Linux (Debian / Ubuntu)" />
              <Line cmd="curl" args="-LO https://pub-08fea510099447418d6efca50e163284.r2.dev/pulseql-release/v1.0.0/pulseDesktop_1.0.0_amd64.deb" />
              <Line cmd="sudo apt install" args="./pulseDesktop_1.0.0_amd64.deb" />
              <div className="mt-3" />
              <Line comment="# Linux (portable AppImage)" />
              <Line cmd="curl" args="-LO https://pub-08fea510099447418d6efca50e163284.r2.dev/pulseql-release/v1.0.0/pulseDesktop_1.0.0_amd64.AppImage" />
              <Line cmd="chmod +x" args="pulseDesktop_1.0.0_amd64.AppImage &amp;&amp; ./pulseDesktop_1.0.0_amd64.AppImage" />
              <div className="mt-3" />
              <Line comment='# Windows — run .exe or .msi → "More info" → "Run anyway" on SmartScreen' />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-8 overflow-hidden rounded-sm border border-vint-pink/30 bg-gradient-to-br from-black/80 via-black/60 to-vint-pink/10 p-8 text-center backdrop-blur-sm"
          >
            <span aria-hidden className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-vint-pink/55 to-transparent" />

            <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-600">{'>'} init</p>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vint-pink to-vint-cyan">
                Single binary. No assembly required.
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-[12px] leading-relaxed text-zinc-500">
              Built for the operator, not the platform team.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {featuredProject.downloads.map((d) => (
                <DownloadButton key={d.platform} download={d} />
              ))}
            </div>

            <a
              href="https://github.com/sagar8080/pulseQL-releases"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-[10px] uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-zinc-400"
            >
              view releases on github →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/40 px-6 py-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
          built by{' '}
          <Link href="/" className="text-zinc-600 transition-colors hover:text-vint-cyan">
            sagar das
          </Link>
          {' · '}
          <a
            href="https://github.com/sagar8080/pulseQL-releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 transition-colors hover:text-vint-cyan"
          >
            github
          </a>
        </p>
      </footer>
    </div>
  )
}

// ── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-center text-[10px] uppercase tracking-[0.34em] text-zinc-600"
    >
      {'>'} {children}
    </motion.p>
  )
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const isCyan = feature.accent === 'cyan'
  const border   = isCyan ? 'border-vint-cyan/25'        : 'border-vint-pink/25'
  const bg       = isCyan ? 'bg-vint-cyan/[0.04]'        : 'bg-vint-pink/[0.04]'
  const label    = isCyan ? 'text-vint-cyan'              : 'text-vint-pink'
  const topLine  = isCyan ? 'via-vint-cyan/50'            : 'via-vint-pink/50'

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`relative overflow-hidden rounded-sm border ${border} ${bg} p-6`}
    >
      <span aria-hidden className={`pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent ${topLine} to-transparent`} />
      <p className={`text-[10px] uppercase tracking-[0.26em] ${label}`}>{'>'} {feature.id}</p>
      <h3 className="mt-3 font-display text-lg font-bold leading-snug text-white">{feature.headline}</h3>
      <p className="mt-3 text-[12px] leading-[1.85] text-zinc-500">{feature.body}</p>
    </motion.div>
  )
}

function Line({ cmd, args, comment }: { cmd?: string; args?: string; comment?: string }) {
  if (comment) {
    return <p className="text-zinc-600">{comment}</p>
  }
  return (
    <p>
      <span className="text-vint-pink">$</span>
      {' '}
      <span className="text-vint-cyan">{cmd}</span>
      {args && <span className="text-vint-cream/80"> {args}</span>}
    </p>
  )
}
