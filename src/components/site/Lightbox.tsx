'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import type { Photo } from '@/lib/content'

// Modal that opens when a photo is clicked from the strip. Shows the full
// photo with EXIF caption. Closes on ESC, on backdrop click, or on the close
// button. Locks body scroll while open.
export default function Lightbox({
  photo,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  photo: Photo
  index: number
  total: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="lightbox-backdrop flex flex-col items-center justify-center gap-6 p-6 md:p-12"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${total}: ${photo.caption}`}
      onClick={onClose}
    >
      {/* Close (top-right) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-md border border-hairline-strong bg-paper text-ink transition-colors hover:border-line-2 hover:text-terracotta"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Counter (top-left) */}
      <div className="absolute left-5 top-5 font-mono text-[11px] uppercase tracking-eyebrow text-zinc-400">
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* Image. Clicking the image itself doesn't close (only backdrop does) */}
      <div
        className="relative flex max-h-[80vh] max-w-[min(1200px,90vw)] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.caption}
          width={1600}
          height={2000}
          className="h-auto max-h-[80vh] w-auto rounded-md object-contain"
          priority
        />
      </div>

      {/* Caption */}
      <div
        className="z-10 max-w-2xl space-y-1 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-mono text-[12px] uppercase tracking-eyebrow text-paper">
          {photo.caption}
        </p>
        <p className="font-mono text-[11px] tracking-wide text-zinc-500">
          {photo.meta}
        </p>
      </div>

      {/* Prev / next */}
      <div className="absolute inset-y-0 left-0 hidden items-center md:flex">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="ml-4 grid h-12 w-12 place-items-center rounded-md border border-hairline-strong bg-paper text-ink transition-colors hover:border-line-2 hover:text-terracotta"
          aria-label="Previous photo"
        >
          ←
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 hidden items-center md:flex">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="mr-4 grid h-12 w-12 place-items-center rounded-md border border-hairline-strong bg-paper text-ink transition-colors hover:border-line-2 hover:text-terracotta"
          aria-label="Next photo"
        >
          →
        </button>
      </div>

      {/* Hint */}
      <p className="absolute bottom-5 font-mono text-[10px] uppercase tracking-eyebrow text-zinc-600">
        ESC to close · ← → to navigate
      </p>
    </div>
  )
}
