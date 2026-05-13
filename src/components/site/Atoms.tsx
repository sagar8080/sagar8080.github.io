// Shared design atoms for the portfolio + product pages.
// All visual primitives live here so spacing, type, and color stay consistent
// across the editorial portfolio and the product-led PulseQL page.

import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { ReactNode, HTMLAttributes } from 'react'

// ─── Eyebrow ───────────────────────────────────────────────────────────────
// A small mono caption above section titles. Optional trailing rule, used to
// anchor sections without making them feel heavy. Now leads with a small
// accent bar that draws in on mount (CSS-only, see .eyebrow-bar).
export function Eyebrow({
  label,
  withRule = true,
  align = 'left',
}: {
  label: string
  withRule?: boolean
  align?: 'left' | 'center'
}) {
  if (align === 'center') {
    return (
      <div className="flex items-center justify-center gap-3">
        {withRule && <div className="h-px w-12 bg-hairline" />}
        <p className="eyebrow">{label}</p>
        {withRule && <div className="h-px w-12 bg-hairline" />}
      </div>
    )
  }
  return (
    <div className="flex items-center gap-4">
      <p className="eyebrow">
        <span className="eyebrow-bar" aria-hidden />
        {label}
      </p>
      {withRule && (
        <div className="h-px flex-1 bg-gradient-to-r from-hairline to-transparent" />
      )}
    </div>
  )
}

// ─── SectionHeader ─────────────────────────────────────────────────────────
// Standard section opener: eyebrow + title + optional lede.
export function SectionHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
}) {
  return (
    <div className="space-y-4">
      <Eyebrow label={eyebrow} />
      <h2 className="font-display text-display-sm font-semibold text-white md:text-display-md">
        {title}
      </h2>
      {lede && (
        <p className="max-w-2xl text-[15px] leading-[1.7] text-zinc-400 md:text-[16px]">
          {lede}
        </p>
      )}
    </div>
  )
}

// ─── PageHeader ────────────────────────────────────────────────────────────
// Same shape as SectionHeader, but rendered as <h1> for top-of-page headers.
export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
}) {
  return (
    <header className="space-y-5">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="font-display text-display-md font-semibold text-white sm:text-[44px] lg:text-display-lg">
        {title}
      </h1>
      {lede && (
        <p className="max-w-2xl text-[15px] leading-[1.7] text-zinc-400 md:text-[16px]">
          {lede}
        </p>
      )}
    </header>
  )
}

// ─── Tag (mono chip) ───────────────────────────────────────────────────────
export function Tag({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>
}

// ─── StatusPill ────────────────────────────────────────────────────────────
//
type StatusKind = 'live' | 'shipped' | 'draft' | 'in-development'
export function StatusPill({ kind, children }: { kind: StatusKind; children?: ReactNode }) {
  const cls =
    kind === 'live' || kind === 'in-development'
      ? 'pill-live'
      : kind === 'shipped'
        ? 'pill-shipped'
        : 'pill-draft'
  const label =
    children ??
    (kind === 'live'
      ? 'Active'
      : kind === 'shipped'
        ? 'Shipped'
        : kind === 'in-development'
          ? 'In development'
          : 'Draft')
  const isWarm = kind === 'live' || kind === 'in-development'
  return (
    <span className={`pill ${cls}`}>
      {isWarm && (
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {label}
    </span>
  )
}

// ─── Buttons ───────────────────────────────────────────────────────────────
type ButtonProps = {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
}

const baseBtn =
  'group inline-flex h-11 items-center gap-2 rounded-lg px-5 text-[13px] font-medium transition-all'

export function PrimaryButton({ href, children, external, className = '' }: ButtonProps) {
  const cls = `${baseBtn} bg-white text-black hover:bg-zinc-200 ${className}`
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <Arrow />
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
      <Arrow />
    </Link>
  )
}

export function SecondaryButton({ href, children, external, className = '' }: ButtonProps) {
  const cls = `${baseBtn} border border-hairline bg-surface-1 text-zinc-200 hover:border-hairline-strong hover:bg-surface-2 hover:text-white ${className}`
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

export function GhostButton({ href, children, external, className = '' }: ButtonProps) {
  const cls = `inline-flex h-11 items-center gap-2 px-2 text-[13px] font-medium text-zinc-400 transition-colors hover:text-white ${className}`
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <ExternalLink aria-hidden size={14} strokeWidth={1.8} />
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
      <ArrowRight aria-hidden size={14} strokeWidth={1.8} />
    </Link>
  )
}

function Arrow() {
  return (
    <ArrowRight
      aria-hidden
      size={15}
      strokeWidth={1.8}
      className="transition-transform group-hover:translate-x-0.5"
    />
  )
}

// ─── TextLink ──────────────────────────────────────────────────────────────
export function TextLink({
  href,
  children,
  external,
  accent = false,
}: {
  href: string
  children: ReactNode
  external?: boolean
  accent?: boolean
}) {
  const cls = `inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors ${
    accent ? 'text-accent hover:text-white' : 'text-zinc-300 hover:text-white'
  }`
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
      <ExternalLink aria-hidden size={13} strokeWidth={1.8} />
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
      <ArrowRight aria-hidden size={13} strokeWidth={1.8} />
    </Link>
  )
}

// ─── Section wrapper ───────────────────────────────────────────────────────
// Establishes vertical rhythm. Use everywhere instead of ad-hoc spacing.
export function Section({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`space-y-8 ${className}`}>
      {children}
    </section>
  )
}

// ─── BentoCard ─────────────────────────────────────────────────────────────
// A card primitive used in feature grids. `span` controls how many columns it
// occupies on the lg breakpoint (defaults to 1 of 3).
export function BentoCard({
  index,
  title,
  body,
  children,
  span = 1,
}: {
  index?: string
  title: string
  body?: ReactNode
  children?: ReactNode
  span?: 1 | 2 | 3
}) {
  const colSpan =
    span === 3 ? 'lg:col-span-3' : span === 2 ? 'lg:col-span-2' : 'lg:col-span-1'
  return (
    <div className={`surface flex flex-col p-6 ${colSpan}`}>
      {index && (
        <span className="font-mono text-[10.5px] uppercase tracking-eyebrow text-accent">
          {index}
        </span>
      )}
      <h3 className="mt-3 font-display text-[18px] font-semibold text-white md:text-[20px]">
        {title}
      </h3>
      {body && (
        <p className="mt-2.5 text-[13.5px] leading-[1.7] text-zinc-400 md:text-[14.5px]">
          {body}
        </p>
      )}
      {children}
    </div>
  )
}

// ─── ProductPanel ──────────────────────────────────────────────────────────
// Polished panel for product UI mockups. Includes a discreet window-chrome bar
// so the inner content reads as an app surface, not a card.
export function ProductPanel({
  chrome = 'pulseql · workspace',
  children,
  accent = true,
  className = '',
}: {
  chrome?: string
  children: ReactNode
  accent?: boolean
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden ${
        accent ? 'panel-product' : 'surface-raised'
      } ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-hairline bg-black/30 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        <span className="ml-3 font-mono text-[11px] tracking-wide text-zinc-600">
          {chrome}
        </span>
      </div>
      {children}
    </div>
  )
}

// ─── CodeBlock ─────────────────────────────────────────────────────────────
export function CodeBlock({
  language,
  children,
}: {
  language?: string
  children: ReactNode
}) {
  return (
    <div className="code-surface overflow-hidden">
      {language && (
        <div className="border-b border-hairline px-4 py-2 font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
          {language}
        </div>
      )}
      <pre className="overflow-x-auto px-4 py-4 text-[12.5px] leading-[1.75]">{children}</pre>
    </div>
  )
}

// ─── DiagramFlow ───────────────────────────────────────────────────────────
// Thin-line architecture flow. Renders horizontal on md+ and vertical on
// mobile. Pass an array of stages; each becomes a labelled node connected by
// hairline edges.
export type FlowStage = {
  label: string
  body?: string
  accent?: boolean
}

export function DiagramFlow({ stages }: { stages: FlowStage[] }) {
  return (
    <div className="surface-raised overflow-hidden p-6 md:p-8">
      {/* Mobile: vertical list with index + downward connectors */}
      <ol className="space-y-0 md:hidden">
        {stages.map((s, i) => (
          <li key={s.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border font-mono text-[10px] ${
                  s.accent
                    ? 'border-accent/40 bg-accent/10 text-accent'
                    : 'border-hairline-strong bg-surface-2 text-zinc-400'
                }`}
              >
                {i + 1}
              </span>
              {i < stages.length - 1 && (
                <span aria-hidden className="my-1 w-px flex-1 bg-hairline" />
              )}
            </div>
            <div className="flex-1 pb-6">
              <p className="text-[14px] font-medium text-white">{s.label}</p>
              {s.body && (
                <p className="mt-0.5 text-[12.5px] text-zinc-500">{s.body}</p>
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop: horizontal flow with thin-line connectors */}
      <div className="hidden md:block">
        <div className="flex items-stretch gap-3">
          {stages.map((s, i) => (
            <div key={s.label} className="flex flex-1 items-stretch">
              <div className="flex w-full flex-col gap-2">
                <div
                  className={`rounded-lg border px-4 py-3 ${
                    s.accent
                      ? 'border-accent/40 bg-accent/[0.06]'
                      : 'border-hairline bg-surface-2'
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-500">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-1.5 text-[13px] font-medium text-white">{s.label}</p>
                  {s.body && (
                    <p className="mt-1 text-[11.5px] leading-[1.55] text-zinc-500">
                      {s.body}
                    </p>
                  )}
                </div>
              </div>
              {i < stages.length - 1 && (
                <div
                  aria-hidden
                  className="flex w-6 shrink-0 items-center justify-center"
                >
                  <span className="font-mono text-[12px] text-zinc-700">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── HairlineDivider ───────────────────────────────────────────────────────
export function HairlineDivider({
  className = '',
}: HTMLAttributes<HTMLDivElement> & { className?: string }) {
  return <div className={`h-px w-full bg-hairline ${className}`} />
}

// ─── Glass card alias (back-compat with existing pages) ────────────────────
// Some legacy consumers reference `.glass-card` classNames; keep them mapped
// to `.surface` so older markup keeps rendering correctly during the rebuild.
