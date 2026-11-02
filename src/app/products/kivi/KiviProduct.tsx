'use client'

import { motion } from 'framer-motion'
import {
  Eyebrow,
  Section,
  SectionHeader,
  PrimaryButton,
  PullQuote,
  SecondaryButton,
  GhostButton,
  StatusPill,
  ProductPanel,
} from '@/components/site/Atoms'
import { featuredProject } from '@/lib/content'

const features = [
  {
    title: 'Start with an objective',
    body: 'Define the outcome, acceptance criteria, and boundaries before delegating. The work stays anchored to what you asked for.',
  },
  {
    title: 'Keep the work connected',
    body: 'The design carries plans, approvals, execution records, and evidence across conversations, model changes, and interruptions.',
  },
  {
    title: 'Set explicit boundaries',
    body: 'Permissions, data disclosure, and cost limits govern execution. Sensitive actions require the right approval.',
  },
  {
    title: 'Work across disciplines',
    body: 'Bring analytics, pipelines, applied ML, AI tools, and operations into the same project and review process.',
  },
  {
    title: 'Verify the outcome',
    body: 'Connect checks to acceptance criteria and retain the evidence needed to judge whether the objective was met.',
  },
  {
    title: 'Build for recovery',
    body: 'Preserve waiting work and reconcile uncertain operations before retrying, so an interruption does not mean starting over.',
  },
]

const useCases = [
  {
    title: 'Data investigation',
    body: 'Investigate a metric change, inspect the relevant data, and keep the queries and evidence alongside the diagnosis.',
  },
  {
    title: 'Engineering changes',
    body: 'Propose a pipeline or model change, review the diff, validate it, and prepare the work for release within agreed limits.',
  },
  {
    title: 'Applied ML',
    body: 'Connect feature work, training, evaluation, and prediction to a clear objective and inspectable results.',
  },
  {
    title: 'Operational follow-through',
    body: 'Carry investigations into cost, failed runs, and incidents through proposed fixes and verification, with approvals along the way.',
  },
]

export default function KiviProductPage() {
  return (
    <div className="theme-page theme-kivi space-y-24 md:space-y-32">
      <Hero />
      <Demo />
      {/* The thesis lands here, after the demo has shown what the
          workflow looks like in motion. Acts as the bridge between "see
          how it works" and "what it can do for you". */}
      <PullQuote caption="The principle behind Kivi">
        Delegated work needs an objective, clear boundaries, and evidence that lasts.
      </PullQuote>
      <Capabilities />
      <UseCases />
      <FinalCTA />
    </div>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="product-hero relative grid items-center gap-12 pb-8"
    >
      <div className="max-w-[760px] space-y-8">
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill kind="in-development">Kivi · In development</StatusPill>
          <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
            local-first · macOS first
          </span>
        </div>

        <h1 className="font-display text-[44px] font-semibold leading-[1.04] tracking-normal text-terracotta sm:text-[58px] lg:text-[68px] xl:text-[72px]">
          Delegate the work.{' '}
          <em>Keep the evidence.</em>
        </h1>

        <p className="max-w-[680px] text-[16px] leading-[1.75] text-ink-2 md:text-[17px]">
          Kivi is a local-first workbench for delegated data, AI, and ML work.
          Give it an objective and clear boundaries. It is designed to carry
          the work through investigation, execution, verification, and recovery,
          keeping the plan, approvals, and evidence together.
        </p>

        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <PrimaryButton href="#contact">Talk about Kivi</PrimaryButton>
          <SecondaryButton href="#demo">Explore the workflow</SecondaryButton>
          <GhostButton href="#use-cases">Use cases</GhostButton>
        </div>

        <div className="grid max-w-[720px] gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-3">
          {[
            { k: 'Work', v: 'Objective-led', sub: 'from intent to verified outcome' },
            { k: 'Product', v: 'Local-first', sub: 'your project, your workbench' },
            { k: 'Scope', v: 'Data, AI & ML', sub: 'one governed execution path' },
          ].map((row) => (
            <div key={row.k} className="bg-surface-1 px-5 py-4">
              <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
                {row.k}
              </p>
              <p className="mt-2 font-display text-[18px] font-semibold tracking-normal text-white">
                {row.v}
              </p>
              <p className="mt-0.5 text-[12px] text-zinc-500">{row.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <LaunchPanel />
    </motion.section>
  )
}

function LaunchPanel() {
  return (
    <ProductPanel chrome="kivi · objective workflow · concept" className="launch-panel w-full">
      <div className="grid gap-px bg-hairline">
        <div className="bg-paper-2 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-500">
                example objective
              </p>
              <p className="mt-2 font-display text-[24px] font-semibold text-white">
                Investigate rising pipeline cost
              </p>
            </div>
            <span className="rounded-full border border-accent/35 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-accent">
              review
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            {[
              ['01', 'Define the objective', 'outcome, acceptance criteria, limits'],
              ['02', 'Investigate and propose', 'keep evidence and changes connected'],
              ['03', 'Approve and execute', 'run within the agreed boundaries'],
              ['04', 'Verify the result', 'check the outcome and retain evidence'],
            ].map(([step, title, body]) => (
              <div key={step} className="grid grid-cols-[32px_1fr] gap-3 rounded-lg border border-hairline bg-paper-3 p-3">
                <span className="grid h-8 w-8 place-items-center rounded-md border border-hairline-strong bg-surface-2 font-mono text-[10px] text-accent">
                  {step}
                </span>
                <div>
                  <p className="text-[13.5px] font-medium text-zinc-100">{title}</p>
                  <p className="mt-0.5 text-[12px] text-zinc-500">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px bg-hairline">
          {[
            ['status', 'In development'],
            ['platform', 'macOS first'],
            ['scope', 'Data, AI & ML'],
          ].map(([label, value]) => (
            <div key={label} className="bg-paper-2 px-4 py-3">
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-600">
                {label}
              </p>
              <p className="mt-1 font-display text-[22px] font-semibold text-white">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ProductPanel>
  )
}

// ─── Demo ──────────────────────────────────────────────────────────────────
function Demo() {
  return (
    <Section id="demo">
      <SectionHeader
        eyebrow="01 / The workflow"
        title={<>One objective, <em>all the way through.</em></>}
        lede="An illustrative workflow for the product in development: define the job, inspect the proposal, approve within limits, and check the result. Evidence stays connected throughout."
      />

      <ProductPanel chrome="kivi · pipeline investigation · concept">
        <div className="grid gap-px bg-hairline md:grid-cols-2">
          {/* Left: the ask + review path */}
          <div className="space-y-6 bg-paper-2 p-7 md:p-8">
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
                ask
              </p>
              <p className="mt-2.5 font-display text-[17px] leading-[1.5] text-zinc-100 md:text-[18px]">
                &ldquo;Investigate why this pipeline became expensive, propose a fix,
                validate it, and prepare a release.&rdquo;
              </p>
            </div>

            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
                review path
              </p>
              <ol className="mt-3 space-y-2.5">
                {[
                  ['define success and limits', 'keep the objective and budget explicit'],
                  ['investigate and propose a change', 'retain the diagnosis and supporting evidence'],
                  ['review before consequential execution', 'bind approval to the proposed work'],
                  ['verify and prepare the release', 'check acceptance criteria before completion'],
                ].map(([label, body], i) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 text-[13px] text-zinc-400"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-hairline-strong bg-surface-2 font-mono text-[10px] text-zinc-300">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-zinc-200">{label}</p>
                      <p className="text-[12px] text-zinc-500">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: evidence to retain */}
          <div className="space-y-6 bg-paper-2 p-7 md:p-8">
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
                evidence to retain
              </p>
              <div className="mt-2.5 rounded-md border border-hairline bg-paper-3 p-4">
                <p className="text-[14px] leading-[1.7] text-zinc-300">
                  The diagnosis, proposed diff, approval, run record, and validation
                  results belong to the same objective. Kivi is designed to keep
                  that context available when work pauses or the model changes.
                </p>
                <div className="mt-4 grid gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-zinc-500">
                  <span>diagnosis and proposed change</span>
                  <span>approved scope and execution record</span>
                  <span>verification and supporting evidence</span>
                </div>
              </div>
            </div>

            <div className="rounded-md border border-hairline bg-surface-1 p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-[11px] text-accent">
                  ✓
                </span>
                <div className="min-w-0 flex-1 text-[13.5px] leading-[1.65]">
                  <p className="text-zinc-100">
                    Release boundary:{' '}
                    <span className="tabular-nums text-white">approval required</span>
                    <span className="ml-2 text-[12px] text-zinc-500">
                      (before promotion)
                    </span>
                  </p>
                  <p className="mt-1 text-[12px] text-zinc-500">
                    Review the evidence and proposed revision before release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow strip */}
        <div className="product-flow grid grid-cols-5 gap-px border-t border-hairline bg-hairline">
          {['Define', 'Investigate', 'Approve', 'Execute', 'Verify'].map((step, i) => (
            <div
              key={step}
              className="flex items-center justify-center gap-2 bg-paper-2 px-3 py-3 font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-400"
            >
              <span className={i === 0 ? 'text-accent' : 'text-zinc-600'}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </ProductPanel>
    </Section>
  )
}

// ─── Capabilities (bento) ──────────────────────────────────────────────────

function Capabilities() {
  return (
    <Section>
      <SectionHeader
        eyebrow="02 / What it does"
        title={<>Six principles, <em>one workbench.</em></>}
        lede="Kivi is being built around the full lifecycle of delegated work. These principles guide the product and the capabilities being developed."
        accentColor="var(--sage)"
      />

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={f.title} className="surface group flex flex-col p-6">
            <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-accent">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-display text-[18px] font-semibold text-terracotta md:text-[19px]">
              {f.title}
            </h3>
            <p className="mt-2.5 text-[13.5px] leading-[1.7] text-zinc-400 md:text-[14px]">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── Use cases ─────────────────────────────────────────────────────────────

function UseCases() {
  return (
    <Section id="use-cases">
      <SectionHeader
        eyebrow="03 / Where it fits"
        title={<>Where it <em>earns its keep.</em></>}
        lede="The product spans data, AI, and ML workflows where a useful answer needs to become inspectable, executable work."
        accentColor="var(--ochre)"
      />

      <div className="grid gap-3 md:grid-cols-2">
        {useCases.map((u) => (
          <div key={u.title} className="surface p-6 md:p-7">
            <h3 className="font-display text-[17px] font-semibold text-terracotta md:text-[19px]">
              {u.title}
            </h3>
            <p className="mt-2.5 text-[13.5px] leading-[1.7] text-zinc-400 md:text-[14.5px]">
              {u.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── Final CTA ─────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <Section id="contact">
      <Eyebrow label="04 / Follow the work" />

      <div className="product-cta surface-raised relative mt-6 overflow-hidden p-8 md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(180,90,60,0.10),transparent_60%)]"
        />

        <div className="relative grid gap-10 md:grid-cols-[1.05fr_1.15fr] md:items-start">
          <div className="space-y-5">
            <h2 className="font-display text-[28px] font-semibold leading-tight tracking-normal text-terracotta md:text-[36px]">
              Kivi is taking shape.
            </h2>
            <p className="max-w-xl text-[14.5px] leading-[1.75] text-ink-2 md:text-[15.5px]">
              In development, with macOS first. The focus is on keeping
              delegated work continuous, bounded, and verifiable. Read the
              case study for the product choices, or get in touch to discuss
              how Kivi could fit your data, AI, and ML workflows.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <PrimaryButton href="mailto:sagardas.work@gmail.com?subject=Kivi" external>
                Talk about Kivi
              </PrimaryButton>
              <GhostButton href="/projects/kivi">Read case study</GhostButton>
            </div>
          </div>

          <div className="grid gap-3">
            {featuredProject.highlights.map((highlight, index) => (
              <div key={highlight} className="rounded-xl border border-line bg-paper-3 p-4">
                <p className="font-mono text-[10px] uppercase tracking-eyebrow text-ochre-2">
                  {String(index + 1).padStart(2, '0')} / Design focus
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-2">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
