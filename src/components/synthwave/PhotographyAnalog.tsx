'use client'

import Image from 'next/image'
import { photos } from '@/lib/content'

export function PhotographyAnalog() {
  const loop = [...photos, ...photos]

  return (
    <section id="offline" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cyan/80">
          // mode/offline
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
          OFFLINE_MODE <span className="text-vint-cyan">//</span> ANALOG
        </h2>
        <p className="mt-3 max-w-2xl font-mono text-sm text-zinc-400">
          Street, landscape, and frames in between. Hover for capture metadata.
        </p>
      </div>

      <div className="mt-12 marquee-wrap">
        <div className="marquee-track">
          {loop.map((photo, idx) => (
            <figure
              key={`${photo.src}-${idx}`}
              className="group relative h-56 w-40 shrink-0 overflow-hidden rounded-sm border border-vint-cyan/20 md:h-72 md:w-52"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover grayscale contrast-90 sepia-[0.3] transition-all duration-500 group-hover:grayscale-0 group-hover:sepia-0 group-hover:contrast-100"
                sizes="(max-width: 768px) 160px, 208px"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-2.5 pb-2 pt-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-vint-cream">
                  {photo.caption}
                </div>
                <div className="mt-0.5 font-mono text-[10px] text-zinc-400">{photo.meta}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
