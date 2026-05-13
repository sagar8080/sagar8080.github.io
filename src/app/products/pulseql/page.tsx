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
    title: 'Bring the work together',
    body:
      'Move from question to reviewed output in one focused workspace instead of bouncing across disconnected tools.',
  },
  {
    title: 'Ask in natural language',
    body:
      'Start from a plain-English question and keep the generated work visible enough for a human to inspect.',
  },
  {
    title: 'Review before relying',
    body:
      'PulseQL is designed around reviewable steps, not invisible automation.',
  },
  {
    title: 'Keep trust visible',
    body:
      'Outputs are shaped so teams can understand why they should trust them before sharing them more broadly.',
  },
  {
    title: 'Respect governance',
    body:
      'The product is built for teams that care about privacy, access boundaries, and approval workflows.',
  },
  {
    title: 'Publish to your team',
    body:
      'Turn useful work into reusable team artifacts after the right people have reviewed it.',
  },
]

const useCases = [
  {
    title: 'Analytics engineering',
    body:
      'Give analysts and engineers a shared place to review AI-assisted data work before it becomes a team artifact.',
  },
  {
    title: 'Pipeline generation',
    body:
      'Move from intent to a reviewable draft that the team can inspect before using.',
  },
  {
    title: 'Governed self-serve BI',
    body:
      'Help business users ask better questions while keeping serious data work reviewable by the team.',
  },
  {
    title: 'Workflow prototyping',
    body:
      'Explore an analytical workflow quickly, then decide what deserves to become reusable.',
  },
]

export default function PulseQLProductPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-6 pb-24 pt-12 md:pt-16 space-y-24 md:space-y-32">
      <Hero />
      <Demo />
      {/* The thesis lands here, after the demo has shown what the
          workflow looks like in motion. Acts as the bridge between "see
          how it works" and "what it can do for you". */}
      <PullQuote caption="The product's whole reason for being">
        AI-assisted data work should be reviewable before teams rely on it.
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
      className="relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-8 lg:grid-cols-[minmax(0,1fr)_minmax(460px,0.82fr)] xl:grid-cols-[minmax(0,1fr)_minmax(520px,0.82fr)] xl:gap-16"
    >
      <div className="max-w-[760px] space-y-8">
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill kind="in-development">PulseQL · v1.1 — releasing soon</StatusPill>
          <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
            macOS · windows · linux
          </span>
        </div>

        <h1 className="font-display text-[44px] font-semibold leading-[1.04] tracking-normal text-terracotta sm:text-[58px] lg:text-[68px] xl:text-[72px]">
          AI for data work,{' '}
          <span className="text-ink-3">with the work still visible.</span>
        </h1>

        <p className="max-w-[680px] text-[16px] leading-[1.75] text-ink-2 md:text-[17px]">
          Most analytics AI either operates as an opaque black box or gets
          banned outright. Both leave teams with work they can&apos;t defend.
          PulseQL keeps every step inspectable so the team can review,
          refine, and approve before anything ships.
        </p>

        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <PrimaryButton href="#download">Notify me at launch</PrimaryButton>
          <SecondaryButton href="#demo">View demo</SecondaryButton>
          <GhostButton href="#use-cases">Use cases</GhostButton>
        </div>

        <div className="grid max-w-[720px] gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-3">
          {[
            { k: 'Workflow', v: 'Reviewable', sub: 'human-in-the-loop by design' },
            { k: 'Product', v: 'Desktop app', sub: 'focused workspace' },
            { k: 'Scope', v: 'Focused', sub: 'workflow, review, value' },
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
    <ProductPanel chrome="pulseql · governed workspace · v1.1 preview" className="w-full max-w-[620px] lg:justify-self-end">
      <div className="grid gap-px bg-hairline">
        <div className="bg-paper-2 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-500">
                active workflow
              </p>
              <p className="mt-2 font-display text-[24px] font-semibold text-white">
                Churn by acquisition channel
              </p>
            </div>
            <span className="rounded-full border border-accent/35 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-accent">
              review
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            {[
              ['01', 'Ask a data question', 'plain-English starting point'],
              ['02', 'Review the proposed work', 'human judgement stays visible'],
              ['03', 'Refine the output', 'iterate before sharing'],
              ['04', 'Promote what is useful', 'turn work into a reusable artifact'],
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
            ['status', 'v1.1 soon'],
            ['platforms', '03'],
            ['scope', 'focused'],
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
        eyebrow="01 / The walkthrough"
        title="One question, end to end."
        lede="What &ldquo;keeping every step inspectable&rdquo; looks like in practice. A question goes in; a reviewed, approved artifact comes out — with the path between them visible the whole way."
      />

      <ProductPanel chrome="pulseql · sales workspace · main">
        <div className="grid gap-px bg-hairline md:grid-cols-2">
          {/* Left: the ask + review path */}
          <div className="space-y-6 bg-paper-2 p-7 md:p-8">
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
                ask
              </p>
              <p className="mt-2.5 font-display text-[17px] leading-[1.5] text-zinc-100 md:text-[18px]">
                &ldquo;What changed in this metric, and what should the team review
                before sharing it?&rdquo;
              </p>
            </div>

            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
                review path
              </p>
              <ol className="mt-3 space-y-2.5">
                {[
                  ['understand the request', 'keep the user intent visible'],
                  ['prepare a reviewable draft', 'no invisible automation'],
                  ['surface assumptions', 'make uncertainty easy to spot'],
                  ['promote only after review', 'team judgement stays in the loop'],
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

          {/* Right: reviewed output */}
          <div className="space-y-6 bg-paper-2 p-7 md:p-8">
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
                reviewed output
              </p>
              <div className="mt-2.5 rounded-md border border-hairline bg-paper-3 p-4">
                <p className="text-[14px] leading-[1.7] text-zinc-300">
                  PulseQL keeps the proposed work, assumptions, and review state
                  visible before a result becomes something the team depends on.
                </p>
                <div className="mt-4 grid gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-zinc-500">
                  <span>draft prepared</span>
                  <span>assumptions visible</span>
                  <span>ready for review</span>
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
                    Review status:{' '}
                    <span className="tabular-nums text-white">ready</span>
                    <span className="ml-2 text-[12px] text-zinc-500">
                      (human approval recommended)
                    </span>
                  </p>
                  <p className="mt-1 text-[12px] text-zinc-500">
                    Ready for team review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flow strip */}
        <div className="grid grid-cols-5 gap-px border-t border-hairline bg-hairline">
          {['Ask', 'Review', 'Refine', 'Approve', 'Share'].map((step, i) => (
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
        title="Six capabilities, one loop."
        lede="Every feature ladders up to that promise. Together they form the same workflow on repeat: ask, review, refine, approve, share."
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
        title="Where it earns its keep."
        lede="Four team contexts where the reviewable workflow pays for itself — places where invisible automation isn&apos;t an option and banning AI isn&apos;t either."
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
    <Section id="download">
      <Eyebrow label="04 / Try it" />

      <div className="surface-raised relative mt-6 overflow-hidden p-8 md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(180,90,60,0.10),transparent_60%)]"
        />

        <div className="relative grid gap-10 md:grid-cols-[1.05fr_1.15fr] md:items-start">
          <div className="space-y-5">
            <h2 className="font-display text-[28px] font-semibold leading-tight tracking-normal text-terracotta md:text-[36px]">
              PulseQL v1.1 — releasing soon.
            </h2>
            <p className="max-w-xl text-[14.5px] leading-[1.75] text-ink-2 md:text-[15.5px]">
              Builds for macOS, Windows, and Linux are in late-stage testing.
              Drop a note and you&apos;ll be the first to know when downloads
              go live — or read the case study for how the workflow was
              designed in the meantime.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <PrimaryButton
                href="mailto:sagardas.work@gmail.com?subject=PulseQL%20v1.1%20launch%20notify"
                external
              >
                Notify me at launch
              </PrimaryButton>
              <GhostButton href="/projects/pulseql">Read case study</GhostButton>
              <GhostButton href="mailto:sagardas.work@gmail.com">Request walkthrough</GhostButton>
            </div>
          </div>

          {/* Platform cards now signal what's coming rather than offering
              live download links to v1.0 builds. They keep the visual
              promise of cross-platform coverage without shipping people
              to soon-to-be-obsolete files. */}
          <div className="grid gap-3">
            {featuredProject.downloads.map((platform) => (
              <div
                key={platform.platform}
                className="rounded-xl border border-line bg-paper-3 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-[17px] font-semibold text-ink">
                    {platform.platform}
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-eyebrow text-ochre-2">
                    releasing soon
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-ink-3">
                  v1.1 builds will ship as{' '}
                  <span className="font-mono text-ink-2">
                    {platform.files.map((f) => f.label).join(' · ')}
                  </span>
                  .
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
