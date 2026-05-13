'use client'

import Image from 'next/image'
import { useState } from 'react'
import { SectionHeader } from '@/components/site/Atoms'
import { photos } from '@/lib/content'
import Lightbox from '@/components/site/Lightbox'

// Infinite auto-scrolling marquee. Photos are grayscale by default and pop
// to color on hover. Click any photo to open the lightbox. Hover anywhere on
// the strip pauses the scroll. Lightbox open also pauses.
export default function PhotoStrip() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  // Render the photos twice. The CSS animation translates the track by -50%,
  // which lands the duplicate at the visual origin for a seamless loop.
  const doubled = [...photos, ...photos]

  function open(i: number) {
    setOpenIdx(i % photos.length)
  }
  function close() {
    setOpenIdx(null)
  }
  function prev() {
    setOpenIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
  }
  function next() {
    setOpenIdx((i) => (i === null ? null : (i + 1) % photos.length))
  }

  return (
    <section className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeader
          eyebrow="Offline"
          title="Field notes. Analog photography."
          lede="Shot on an Olympus EM-10 between trips and walks. A quieter counterweight to the systems work: composition, patience, and noticing what the frame leaves out."
        />
      </div>

      {/* Strip */}
      <div
        className="marquee-mask -mx-6 px-6"
        data-paused={openIdx !== null ? 'true' : 'false'}
      >
        <ul className="marquee-track">
          {doubled.map((p, i) => {
            const realIdx = i % photos.length
            return (
              <li key={`${p.src}-${i}`}>
                <button
                  type="button"
                  onClick={() => open(realIdx)}
                  className="photo-frame group relative block aspect-[4/5] w-[260px] sm:w-[300px]"
                  aria-label={`Open photo ${realIdx + 1}: ${p.caption}`}
                >
                  <Image
                    src={p.src}
                    alt={p.caption}
                    fill
                    sizes="(min-width: 640px) 300px, 260px"
                    className="object-cover"
                    priority={i < 2}
                  />
                  {/* Frame number. Soft mono label in the top-left */}
                  <span className="absolute left-2.5 top-2.5 z-10 rounded bg-black/55 px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-zinc-300 backdrop-blur">
                    {String(realIdx + 1).padStart(2, '0')} /{' '}
                    {String(photos.length).padStart(2, '0')}
                  </span>
                  {/* Pop-out affordance. Visible only on hover */}
                  <span className="absolute right-2.5 top-2.5 z-10 grid h-6 w-6 place-items-center rounded bg-black/55 font-mono text-[11px] text-zinc-300 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    ⤢
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {openIdx !== null && (
        <Lightbox
          photo={photos[openIdx]}
          index={openIdx}
          total={photos.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
