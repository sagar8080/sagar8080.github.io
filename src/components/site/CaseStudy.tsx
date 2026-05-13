'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Tag, Eyebrow, StatusPill, TextLink } from '@/components/site/Atoms'
import Spotlight from '@/components/site/Spotlight'

export type CaseStudySection = {
  heading: string
  body: string | string[]
}

export type CaseStudyDecision = {
  decision: string
  why: string
}

export type CaseStudyLink = {
  label: string
  href: string
  external?: boolean
  accent?: boolean
}

export type CaseStudyData = {
  eyebrow: string
  title: string
  oneLine: string
  status: 'Active' | 'Shipped' | 'In development'
  tags: string[]
  problem: string
  constraints: string[]
  overview: string | string[]
  diagram?: string[]
  decisions: CaseStudyDecision[]
  outcome: string | string[]
  current: string
  links: CaseStudyLink[]
}

const TOC = [
  { id: 'problem', label: 'Problem' },
  { id: 'constraints', label: 'Requirements' },
  { id: 'overview', label: 'Product overview' },
  { id: 'decisions', label: 'Product choices' },
  { id: 'outcome', label: 'Outcome' },
  { id: 'current', label: 'Current status' },
  { id: 'links', label: 'Links' },
]

function statusKind(status: CaseStudyData['status']) {
  if (status === 'Active') return 'live' as const
  if (status === 'Shipped') return 'shipped' as const
  return 'in-development' as const
}

export function CaseStudy({ data }: { data: CaseStudyData }) {
  const [active, setActive] = useState<string>('problem')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    TOC.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <article className="mx-auto max-w-editorial px-6 pb-24 pt-12 md:pt-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-[13px] text-zinc-500 transition-colors hover:text-white"
      >
        ← All projects
      </Link>

      {/* Header */}
      <header className="mt-10 max-w-3xl space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow">{data.eyebrow}</p>
          <StatusPill kind={statusKind(data.status)}>{data.status}</StatusPill>
        </div>
        <h1 className="font-display text-display-md font-semibold leading-[1.05] tracking-tight text-white sm:text-[44px] lg:text-display-lg">
          {data.title}
        </h1>
        <p className="text-[16px] leading-[1.7] text-zinc-400 md:text-[17px]">
          {data.oneLine}
        </p>
        <ul className="flex flex-wrap gap-1.5 pt-1">
          {data.tags.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
      </header>

      {/* Body grid: sticky TOC on lg+ / stacked on smaller */}
      <div className="mt-14 grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
        {/* TOC */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
            On this page
          </p>
          <ul className="mt-4 space-y-1.5 border-l border-hairline">
            {TOC.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`-ml-px block border-l py-1 pl-3 text-[12.5px] transition-all duration-200 ${
                      isActive
                        ? 'border-accent bg-accent/5 text-white'
                        : 'border-transparent text-zinc-500 hover:border-accent/30 hover:bg-accent/5 hover:text-zinc-200'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </aside>

        {/* Sections */}
        <div className="max-w-prose space-y-16">
          <Section id="problem" heading="Problem">
            <Body content={data.problem} />
          </Section>

          <Section id="constraints" heading="Requirements">
            <ul className="space-y-3">
              {data.constraints.map((c) => (
                <li
                  key={c}
                  className="flex gap-3 text-[14.5px] leading-[1.7] text-zinc-300 md:text-[15px]"
                >
                  <span
                    aria-hidden
                    className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="overview" heading="Product overview">
            <Body content={data.overview} />
            {data.diagram && (
              <ol className="mt-7 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline">
                {data.diagram.map((stage, i) => (
                  <li
                    key={stage}
                    className="grid items-center gap-3 bg-surface-1 px-5 py-4 transition-colors hover:bg-surface-2 sm:grid-cols-[40px_1fr_24px] sm:px-6"
                  >
                    <span className="font-mono text-[11px] tabular-nums text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[13.5px] text-zinc-200 md:text-[14px]">
                      {stage}
                    </span>
                    {i < data.diagram!.length - 1 ? (
                      <span aria-hidden className="text-zinc-700 sm:text-right">↓</span>
                    ) : (
                      <span />
                    )}
                  </li>
                ))}
              </ol>
            )}
          </Section>

          <Section id="decisions" heading="Key decisions">
            <ul className="space-y-3">
              {data.decisions.map((d, i) => (
                <li key={d.decision}>
                  <Spotlight className="surface p-6 md:p-7">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[10.5px] tabular-nums text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="font-display text-[16px] font-semibold text-white md:text-[17px]">
                        {d.decision}
                      </p>
                    </div>
                    <p className="mt-2.5 text-[13.5px] leading-[1.7] text-zinc-400 md:text-[14.5px]">
                      {d.why}
                    </p>
                  </Spotlight>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="outcome" heading="Outcome">
            <Body content={data.outcome} />
          </Section>

          <Section id="current" heading="Current status">
            <p className="text-[14.5px] leading-[1.7] text-zinc-300 md:text-[15px]">
              {data.current}
            </p>
          </Section>

          <Section id="links" heading="Links">
            <ul className="space-y-2">
              {data.links.map((l) => (
                <li key={l.href}>
                  <TextLink
                    href={l.href}
                    external={l.external}
                    accent={l.accent}
                  >
                    {l.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </article>
  )
}

function Section({
  id,
  heading,
  children,
}: {
  id: string
  heading: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="case-section">
      <Eyebrow label={heading} />
      {children}
    </section>
  )
}

function Body({ content }: { content: string | string[] }) {
  const paragraphs = Array.isArray(content) ? content : [content]
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[14.5px] leading-[1.75] text-zinc-300 md:text-[15.5px]"
        >
          {p}
        </p>
      ))}
    </div>
  )
}
