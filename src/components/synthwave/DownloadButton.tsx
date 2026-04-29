'use client'

import React from 'react'
import { type PlatformDownload } from '@/lib/content'

const platformIcons: Record<string, React.ReactNode> = {
  macOS: (
    <svg viewBox="0 0 14 14" className="h-3 w-3 shrink-0" fill="currentColor" aria-hidden>
      <path d="M11.05 7.67c-.02-1.9 1.55-2.82 1.62-2.87-.88-1.29-2.26-1.46-2.75-1.48-1.17-.12-2.29.69-2.88.69-.6 0-1.52-.67-2.5-.65C3.22 3.38 1.9 4.1 1.17 5.28-0.3 7.68.77 11.23 2.19 13.16c.72 1.04 1.58 2.2 2.7 2.16 1.09-.04 1.5-.7 2.82-.7 1.31 0 1.69.7 2.83.68 1.17-.02 1.91-1.06 2.62-2.1.83-1.2 1.17-2.37 1.19-2.43-.03-.01-2.28-.87-2.3-3.1zM9.1 2.37C9.67 1.67 10.05.7 9.95-.26 9.07-.22 8.02.33 7.43 1.01 6.9 1.62 6.44 2.62 6.56 3.56c.97.07 1.96-.47 2.54-1.19z" />
    </svg>
  ),
  Linux: (
    <svg viewBox="0 0 14 16" className="h-3 w-3 shrink-0" fill="currentColor" aria-hidden>
      <path d="M7 0C4.24 0 2 2.24 2 5c0 1.42.58 2.7 1.5 3.62V11c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V8.62C11.42 7.7 12 6.42 12 5c0-2.76-2.24-5-5-5zM5.5 13h3v1c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1z" />
    </svg>
  ),
  Windows: (
    <svg viewBox="0 0 14 14" className="h-3 w-3 shrink-0" fill="currentColor" aria-hidden>
      <path d="M0 1.93L5.73 1.14V6.61H0V1.93zM6.41 1.04L14 0V6.61H6.41V1.04zM0 7.39H5.73V12.85L0 12.07V7.39zM6.41 7.39H14V14L6.41 12.96V7.39z" />
    </svg>
  ),
}

export function DownloadButton({ download }: { download: PlatformDownload }) {
  return (
    <>
      {download.files.map((f) => (
        <a
          key={f.label}
          href={f.url}
          className="group flex items-center gap-1.5 rounded-sm border border-vint-cyan/35 bg-vint-cyan/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-vint-cream transition-colors hover:border-vint-cyan/70 hover:bg-vint-cyan/10"
        >
          <span className="text-vint-cyan transition-colors group-hover:text-vint-cream">
            {platformIcons[download.platform]}
          </span>
          <span>{download.platform}</span>
          <span className="text-zinc-500">{f.label}</span>
          <span className="ml-0.5 text-zinc-500 transition-colors group-hover:text-zinc-400">↓</span>
        </a>
      ))}
    </>
  )
}
