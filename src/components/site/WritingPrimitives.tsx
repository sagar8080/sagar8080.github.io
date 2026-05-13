// Inline visual primitives for MDX writing posts. Drop one of these into a
// post to break up dense prose. Server-component-friendly. Styles live in
// globals.css under .pullquote, .sidenote, .stat-block, .aside-block.

import Image from 'next/image'
import type { ReactNode } from 'react'

export function PullQuote({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <aside className="pullquote">
      {children}
      {attribution && (
        <footer className="mt-3 font-sans text-[12.5px] not-italic text-zinc-500">
          {attribution}
        </footer>
      )}
    </aside>
  )
}

export function Sidenote({ children }: { children: ReactNode }) {
  return <aside className="sidenote">{children}</aside>
}

export function Stat({
  value,
  label,
  caption,
}: {
  value: string
  label: string
  caption?: string
}) {
  return (
    <div className="stat-block">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
      {caption && <span className="text-[12px] text-zinc-500">{caption}</span>}
    </div>
  )
}

export function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
}: {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}) {
  return (
    <figure className="my-9 space-y-3">
      <div className="surface-raised overflow-hidden p-1.5">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-md"
        />
      </div>
      {caption && (
        <figcaption className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function Aside({ glyph = '·', children }: { glyph?: string; children: ReactNode }) {
  return (
    <div className="aside-block">
      <span className="aside-glyph" aria-hidden>
        {glyph}
      </span>
      <p className="aside-body">{children}</p>
    </div>
  )
}
