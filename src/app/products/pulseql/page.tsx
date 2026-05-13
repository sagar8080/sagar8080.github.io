'use client'

import { motion } from 'framer-motion'
import {
  Eyebrow,
  Section,
  SectionHeader,
  PrimaryButton,
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
      <CorePromise />
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
          <StatusPill kind="live">PulseQL · v1.0 stable</StatusPill>
          <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
            macOS · windows · linux
          </span>
        </div>

        <h1 className="font-display text-[44px] font-semibold leading-[1.04] tracking-normal text-terracotta sm:text-[58px] lg:text-[68px] xl:text-[72px]">
          A governed data workspace{' '}
          <span className="text-ink-3">for reviewable AI workflows.</span>
        </h1>

        <p className="max-w-[680px] text-[16px] leading-[1.75] text-zinc-400 md:text-[17px]">
          PulseQL helps teams move from questions to reviewable data work
          without turning AI into an opaque black box. The product story stays
          focused on what teams can do: ask, review, refine, and share.
        </p>

        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <PrimaryButton href="#download">Download v1.0</PrimaryButton>
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
    <ProductPanel chrome="pulseql · governed workspace · v1.0" className="w-full max-w-[620px] lg:justify-self-end">
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
            ['status', 'v1.0'],
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
        eyebrow="Product demo"
        title="One question, end to end."
        lede="A question becomes a reviewed data artifact. The demo stays at the workflow level: ask, review, refine, share."
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

// ─── Core promise ──────────────────────────────────────────────────────────

function CorePromise() {
  return (
    <Section>
      <Eyebrow label="Core promise" />

      <div className="surface relative overflow-hidden p-8 md:p-12">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
        <p className="font-display text-[28px] font-semibold leading-[1.25] tracking-normal text-white md:text-[36px]">
          AI-assisted data work should be reviewable before teams rely on it.
        </p>
        <p className="mt-6 max-w-2xl text-[14.5px] leading-[1.75] text-zinc-400 md:text-[15.5px]">
          PulseQL is designed around controlled workflows, clear review states,
          and practical governance for teams that need serious data work to stay
          inspectable.
        </p>
      </div>
    </Section>
  )
}

// ─── Capabilities (bento) ──────────────────────────────────────────────────

function Capabilities() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Capabilities"
        title="What you can do with PulseQL."
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
        eyebrow="Use cases"
        title="Where it earns its keep."
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
      <Eyebrow label="Download" />

      <div className="surface-raised relative overflow-hidden p-8 md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(180,90,60,0.10),transparent_60%)]"
        />

        <div className="relative grid gap-10 md:grid-cols-[1.05fr_1.15fr] md:items-start">
          <div className="space-y-5">
            <h2 className="font-display text-[28px] font-semibold leading-tight tracking-normal text-terracotta md:text-[36px]">
              Download PulseQL v1.0.
            </h2>
            <p className="max-w-xl text-[14.5px] leading-[1.75] text-zinc-400 md:text-[15.5px]">
              Install the desktop application for your platform, or read the
              case study for the product direction and user-facing workflow.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <PrimaryButton href={featuredProject.downloads[0].files[0].url} external>
                Download macOS
              </PrimaryButton>
              <GhostButton href="/projects/pulseql">Read case study</GhostButton>
              <GhostButton href="mailto:sagardas.work@gmail.com">Request walkthrough</GhostButton>
            </div>
          </div>

          <div className="grid gap-3">
            {featuredProject.downloads.map((platform) => (
              <div key={platform.platform} className="rounded-xl border border-hairline bg-paper-3 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-[17px] font-semibold text-white">
                    {platform.platform}
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-600">
                    {platform.files.length} format{platform.files.length > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {platform.files.map((file) => (
                    <a
                      key={file.filename}
                      href={file.url}
                      className="rounded-md border border-hairline bg-surface-1 px-2.5 py-1.5 font-mono text-[11px] text-zinc-300 transition-colors hover:border-accent/40 hover:text-white"
                    >
                      {file.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
