'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Activity,
  Boxes,
  BrainCircuit,
  Database,
  GitBranch,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { experience, greetings, telemetry } from '@/lib/content'
import {
  Section,
  SectionHeader,
  PrimaryButton,
  SecondaryButton,
  GhostButton,
  Tag,
  StatusPill,
  TextLink,
} from '@/components/site/Atoms'
import PhotoStrip from '@/components/site/PhotoStrip'
import Spotlight from '@/components/site/Spotlight'
import ChapterDivider from '@/components/site/ChapterDivider'

export type HomePostPreview = {
  slug: string
  title: string
  date: string
  status: 'draft' | 'published'
  excerpt: string
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function HomeClient({ recentPosts }: { recentPosts: HomePostPreview[] }) {
  return (
    <div className="mx-auto max-w-[82rem] px-6 pb-24 pt-10 md:pt-14 space-y-24 md:space-y-32">
      <Hero />
      <Reveal><ProofBand /></Reveal>
      <Reveal><FeaturedSystems /></Reveal>
      <ChapterDivider glyph="asterisk" />
      <Reveal><EngineeringOperatingSystem /></Reveal>
      <Reveal><TechnicalDepth /></Reveal>
      <ChapterDivider />
      <Reveal><ProfessionalBackground /></Reveal>
      <Reveal><PhotoStrip /></Reveal>
      <ChapterDivider glyph="dot" />
      <Reveal><Writing posts={recentPosts} /></Reveal>
    </div>
  )
}

function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-8 xl:grid-cols-[minmax(0,1.45fr)_minmax(420px,0.85fr)]"
    >
      <div className="space-y-7">
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill kind="live">Data & AI Engineer</StatusPill>
          <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
            rust · typescript · trusted ai workflows
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[820px] font-display text-[43px] font-semibold leading-[1.04] tracking-normal text-white sm:text-[58px] lg:text-[64px] 2xl:text-[68px]"
        >
          <span>I build data platforms and AI infrastructure </span>
          <span className="text-zinc-400">
            for trusted enterprise workflows.
          </span>
        </motion.h1>

        <p className="max-w-2xl text-[16px] leading-[1.75] text-zinc-300 md:text-[18px]">
          Data engineer with 4+ years turning legacy systems, batch pipelines,
          and fragmented enterprise data into reliable products. I now focus on
          Rust and TypeScript systems that make AI agents useful inside real
          workflows.
        </p>

        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <PrimaryButton href="/products/pulseql">Explore PulseQL</PrimaryButton>
          <SecondaryButton href="/projects">View systems</SecondaryButton>
          <SecondaryButton href="/resume">Résumé</SecondaryButton>
          <GhostButton href="https://github.com/sagar8080" external>
            GitHub
          </GhostButton>
        </div>

        <div className="grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline">
          {[
            ['900+', 'legacy modules modernized'],
            ['20M+', 'daily events streamed'],
            ['35+', 'financial datasets onboarded'],
          ].map(([value, label]) => (
            <div key={label} className="bg-background/80 px-4 py-3">
              <p className="font-display text-[24px] font-semibold leading-none text-white">
                {value}
              </p>
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-eyebrow text-zinc-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <GreetingComposer />
      </div>
    </motion.section>
  )
}

function GreetingComposer() {
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const greeting = greetings[index]
  const display = useMemo(() => greeting.native ?? greeting.greeting, [greeting])

  useEffect(() => {
    const cycle = window.setInterval(() => {
      setIndex((current) => (current + 1) % greetings.length)
    }, 2000)
    return () => window.clearInterval(cycle)
  }, [])

  useEffect(() => {
    setTyped('')
    let next = 0
    const typing = window.setInterval(() => {
      next += 1
      setTyped(display.slice(0, next))
      if (next >= display.length) window.clearInterval(typing)
    }, Math.max(32, Math.min(70, 760 / Math.max(display.length, 1))))
    return () => window.clearInterval(typing)
  }, [display])

  return (
    <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden xl:min-h-[560px]">
      <div
        aria-hidden
        className="absolute h-48 w-48 rounded-full bg-accent/[0.055] blur-3xl"
      />

      <div className="relative min-h-[150px] text-center">
        <span
          aria-live="polite"
          className="font-display text-[64px] font-semibold leading-none text-accent sm:text-[86px] xl:text-[104px]"
        >
          {typed}
        </span>
        <span aria-hidden className="type-caret ml-1 inline-block h-[0.78em] w-px translate-y-2 bg-accent" />
        <motion.span
          key={`language-${greeting.language}`}
          aria-hidden
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mt-5 block font-mono text-[11px] uppercase tracking-[0.34em] text-zinc-600"
        >
          {greeting.language}
        </motion.span>
      </div>
    </div>
  )
}

function ProofBand() {
  return (
    <section aria-label="Selected proof" className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline shadow-panel sm:grid-cols-2 lg:grid-cols-4">
      {telemetry.map((item) => (
        <div key={item.label} className="bg-background/88 p-5">
          <p className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-600">
            {item.label}
          </p>
          <p className="mt-3 font-display text-[30px] font-semibold leading-none text-white">
            {item.value}
            {item.unit && (
              <span className="ml-1 text-[15px] font-medium text-zinc-500">
                {item.unit}
              </span>
            )}
          </p>
          <p className="mt-2 text-[13px] leading-snug text-zinc-500">{item.caption}</p>
        </div>
      ))}
    </section>
  )
}

// ─── Featured systems. Equal columns, less in-your-face ──────────────────

type System = {
  id: string
  title: string
  problem: string
  tags: string[]
  caseStudy: string
  product?: string
  external?: { label: string; href: string }
  status: 'live' | 'shipped' | 'in-development'
}

const systems: System[] = [
  {
    id: 'pulseql',
    title: 'PulseQL',
    problem:
      'A governed data workspace for teams that want AI-assisted analysis without losing control of review, privacy, or operational trust.',
    tags: ['Data Workspace', 'Governed AI', 'Desktop Product'],
    caseStudy: '/projects/pulseql',
    product: '/products/pulseql',
    status: 'live',
  },
  {
    id: 'atrium',
    title: 'Atrium',
    problem:
      'A knowledge product for teams that need answers from company documents with clear citations, honest refusal, and permission-aware user experience.',
    tags: ['Knowledge Search', 'Citations', 'Enterprise Access'],
    caseStudy: '/projects/atrium',
    status: 'in-development',
  },
  {
    id: 'relay',
    title: 'Relay',
    problem:
      'A coordination layer for AI-assisted engineering teams that need shared context, stronger review signals, and safer workflows across tools.',
    tags: ['Engineering Context', 'Team Workflows', 'AI Safety'],
    caseStudy: '/projects/relay',
    external: { label: 'GitHub', href: 'https://github.com/sagar8080' },
    status: 'in-development',
  },
]

function FeaturedSystems() {
  return (
    <Section id="case-studies">
      <SectionHeader
        eyebrow="Featured systems"
        title="Three projects, one thesis."
        lede="AI is most useful when it answers questions it can ground, refuses the ones it cannot, and runs inside boundaries the team can defend. Each project below is a different angle on that idea."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {systems.map((s) => (
          <SystemCard key={s.id} system={s} />
        ))}
      </div>
    </Section>
  )
}

function SystemCard({ system }: { system: System }) {
  return (
    <Spotlight as="article" className="surface group relative flex min-h-[430px] flex-col overflow-hidden p-5">
      <SystemVisual id={system.id} />

      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-[19px] font-semibold text-white md:text-[21px]">
          {system.title}
        </h3>
        <StatusPill kind={system.status} />
      </div>

      <p className="mt-3 flex-1 text-[13.5px] leading-[1.7] text-zinc-400 md:text-[14px]">
        {system.problem}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {system.tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-hairline pt-4 text-[13px]">
        <Link
          href={system.caseStudy}
          className="font-medium text-zinc-200 transition-colors hover:text-white"
        >
          Case study →
        </Link>
        {system.product && (
          <>
            <span className="text-zinc-700" aria-hidden>
              ·
            </span>
            <Link
              href={system.product}
              className="font-medium text-accent transition-colors hover:text-white"
            >
              Product page →
            </Link>
          </>
        )}
        {system.external && (
          <>
            <span className="text-zinc-700" aria-hidden>
              ·
            </span>
            <a
              href={system.external.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {system.external.label} ↗
            </a>
          </>
        )}
      </div>
    </Spotlight>
  )
}

function SystemVisual({ id }: { id: string }) {
  const focus =
    id === 'pulseql'
      ? 'Governed analytics'
      : id === 'atrium'
        ? 'Enterprise knowledge'
        : 'Safer AI workflows'

  return (
    <div className="mb-5 overflow-hidden rounded-xl border border-hairline bg-black/25 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-600">
          {id}.project
        </p>
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </div>
      <div className="mt-5 min-h-24">
        <p className="font-display text-[22px] font-semibold leading-tight text-white">
          {focus}
        </p>
        <div className="mt-5 h-px w-full bg-gradient-to-r from-accent/50 via-hairline-strong to-transparent" />
        <p className="mt-4 font-mono text-[10px] uppercase tracking-eyebrow text-zinc-600">
          product summary · public view
        </p>
      </div>
    </div>
  )
}

const operatingPrinciples: {
  icon: LucideIcon
  title: string
  body: string
  proof: string
}[] = [
  {
    icon: Boxes,
    title: 'Build the data foundation first',
    body: 'Reliable AI starts with governed data systems: ingestion, schema enforcement, data quality, lakehouse tables, semantic definitions, and lineage.',
    proof: 'Iceberg + BigQuery lakehouse work across 35+ financial datasets and 20+ years of reporting context.',
  },
  {
    icon: ShieldCheck,
    title: 'Ground AI in enterprise context',
    body: 'LLM systems need retrieval evidence, metric contracts, access boundaries, audit trails, and explicit execution paths before they can be trusted.',
    proof: 'RAG work over 100K+ survey responses reduced qualitative review effort by 60%.',
  },
  {
    icon: Workflow,
    title: 'Modernize with measurable exits',
    body: 'Large rewrites need migration systems, not one-off scripts: repeatable transformations, validation gates, and clear ownership for every generated artifact.',
    proof: 'GenAI-assisted modernization moved 900+ Java modules toward Spark and Apache Beam in roughly seven months.',
  },
]

function EngineeringOperatingSystem() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Engineering operating system"
        title="The work is data infrastructure before it is AI."
        lede="Across enterprise modernization, analytics platforms, and AI systems, the same primitives keep showing up: metadata, contracts, lineage, execution traces, governance, and measurable reliability."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {operatingPrinciples.map((item, index) => {
          const Icon = item.icon
          return (
            <Spotlight key={item.title} className="surface relative overflow-hidden p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-hairline-strong bg-surface-2 text-accent">
                  <Icon size={19} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-700">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[20px] font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-zinc-400">{item.body}</p>
              <p className="mt-5 border-t border-hairline pt-4 text-[13px] leading-[1.6] text-zinc-500">
                {item.proof}
              </p>
            </Spotlight>
          )
        })}
      </div>
    </Section>
  )
}

// ─── Technical depth ───────────────────────────────────────────────────────

const depthGroups = [
  {
    label: 'Data engineering',
    icon: Database,
    focus: 'Batch, streaming, quality, and lakehouse work for enterprise data teams.',
    proof: 'Pipelines, semantic layers, and modernization systems at production scale.',
    items: [
      'Python',
      'SQL',
      'Apache Spark',
      'Apache Beam',
      'Kafka',
      'Airflow',
      'Deequ',
      'Iceberg',
    ],
  },
  {
    label: 'ML & AI systems',
    icon: BrainCircuit,
    focus: 'Model workflows, feature systems, deployment paths, and evaluation loops.',
    proof: 'Built across applied ML, MLOps, and AI-assisted review workflows.',
    items: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'MLflow',
      'Vertex AI',
      'SageMaker',
      'Feature stores',
      'Model deployment',
    ],
  },
  {
    label: 'Generative AI',
    icon: GitBranch,
    focus: 'Grounded LLM applications that keep context, evidence, and review visible.',
    proof: 'RAG systems, knowledge interfaces, and agentic AI infrastructure.',
    items: [
      'LangChain',
      'RAG pipelines',
      'Vector databases',
      'Knowledge graphs',
      'LLM applications',
      'Agentic AI',
      'Rust',
      'TypeScript',
    ],
  },
  {
    label: 'Cloud & DevOps',
    icon: Activity,
    focus: 'Cloud delivery, infrastructure automation, observability, and platform hygiene.',
    proof: 'AWS, GCP, containers, CI/CD, and production monitoring workflows.',
    items: [
      'AWS',
      'GCP',
      'Terraform',
      'Shell scripting',
      'Docker',
      'Jenkins',
      'Kubernetes',
      'Grafana',
    ],
  },
]

function TechnicalDepth() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Technical depth"
        title="The stack I work across."
        lede="Data platforms, ML systems, generative AI infrastructure, and cloud delivery. The common thread is making data and AI workflows reliable enough for enterprise use."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {depthGroups.map((g, index) => {
          const Icon = g.icon
          return (
            <Spotlight key={g.label} className="surface group min-h-[320px] p-6 md:p-7">
              <div className="flex items-start justify-between gap-5">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent/25 bg-accent/10 text-accent transition-colors group-hover:border-accent/45 group-hover:bg-accent/15">
                    <Icon size={18} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-accent">
                      {g.label}
                    </p>
                    <p className="mt-1 text-[13px] leading-[1.55] text-zinc-500">
                      {g.focus}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-700">
                  0{index + 1}
                </span>
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-accent/45 via-hairline-strong to-transparent" />

              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item}>
                    <span className="chip border-hairline-strong bg-black/20 text-zinc-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-hairline pt-4 text-[12.5px] leading-[1.65] text-zinc-500">
                {g.proof}
              </p>
            </Spotlight>
          )
        })}
      </div>
    </Section>
  )
}

// ─── Professional background ───────────────────────────────────────────────

function ProfessionalBackground() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Professional background"
        title="Where the patterns came from."
        lede="Four-plus years across enterprise data platforms, AI systems, cloud modernization, data quality, streaming pipelines, and self-serve analytics infrastructure."
      />

      <ol className="overflow-hidden rounded-xl border border-hairline">
        {experience.map((exp, i) => (
          <li
            key={exp.id}
            className={`grid gap-4 bg-surface-1 px-5 py-5 sm:grid-cols-[120px_1fr] sm:gap-6 sm:px-6 ${
              i < experience.length - 1 ? 'border-b border-hairline' : ''
            }`}
          >
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-zinc-500">
              {exp.duration.split('–')[0].trim()}
              <span className="text-zinc-700"> →</span>{' '}
              {exp.duration.split('–')[1]?.trim() || 'now'}
            </p>
            <div className="min-w-0">
              <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-baseline">
                <div>
                  <p className="text-[15px] font-medium text-white">{exp.position}</p>
                  <p className="mt-0.5 text-[13px] text-zinc-400">{exp.company}</p>
                </div>
                <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600 md:text-right">
                  {exp.location}
                </p>
              </div>
              <p className="mt-3 max-w-3xl text-[13.5px] leading-[1.65] text-zinc-400">
                {exp.summary}
              </p>
              {exp.metrics && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.metrics.map((metric) => (
                    <span
                      key={`${exp.id}-${metric.value}-${metric.caption}`}
                      className="rounded-md border border-hairline bg-black/20 px-2.5 py-1.5"
                    >
                      <span className="font-mono text-[11px] text-zinc-200">
                        {metric.value}
                      </span>
                      <span className="ml-2 text-[12px] text-zinc-500">
                        {metric.caption}
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div>
        <TextLink href="/resume" accent>
          Full résumé
        </TextLink>
      </div>
    </Section>
  )
}

// ─── Writing ───────────────────────────────────────────────────────────────

function Writing({ posts }: { posts: HomePostPreview[] }) {
  if (posts.length === 0) return null
  return (
    <Section>
      <SectionHeader
        eyebrow="Writing"
        title="Notes on the decisions behind the systems."
        lede="Short technical notes. Published when there's something specific to say, not on a schedule."
      />

      <ul className="divide-y divide-hairline border-y border-hairline">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/writing/${post.slug}`}
              className="group grid items-baseline gap-3 py-5 sm:grid-cols-[1fr_auto] sm:gap-6"
            >
              <div className="space-y-1.5">
                <p className="text-[15px] font-medium text-zinc-200 transition-colors group-hover:text-white">
                  {post.title}
                </p>
                <p className="line-clamp-1 text-[13px] text-zinc-500">{post.excerpt}</p>
              </div>
              <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
                {post.status === 'published' ? 'Published' : 'Draft'} ·{' '}
                {formatHomeDate(post.date)}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <TextLink href="/writing" accent>
          All notes
        </TextLink>
      </div>
    </Section>
  )
}

function formatHomeDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
