'use client'

import { Aperture, ArrowLeft, ArrowRight, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Photo } from '@/lib/content'
import { photoAssets } from '@/components/site/photo-assets'

function Projection({ photo }: { photo: Photo }) {
  const asset = photoAssets[photo.src]
  const [ratio, setRatio] = useState(() => asset ? asset.width / asset.height : null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div
      className="lightbox-print"
      style={ratio ? { aspectRatio: ratio, width: `min(100%, ${ratio * 100}cqh)` } : undefined}
      data-ready={ready}
    >
      {/* Checked-in srcset keeps the static export responsive. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={photo.caption}
        width={asset?.width}
        height={asset?.height}
        loading="eager"
        decoding="async"
        sizes={`min(92vw, ${((ratio ?? 9 / 16) * 86).toFixed(2)}dvh)`}
        srcSet={asset?.srcSet}
        src={asset ? photo.preview : photo.src}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        onLoad={({ currentTarget }) => {
          if (!asset) setRatio(currentTarget.naturalWidth / currentTarget.naturalHeight)
          setReady(true)
        }}
        onError={() => setFailed(true)}
      />
      {!ready && (
        <p className="lightbox-print-status" role="status">
          {failed ? 'This frame couldn’t load.' : 'Loading frame…'}
        </p>
      )}
    </div>
  )
}

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
  const dialogRef = useRef<HTMLDialogElement>(null)
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const root = document.documentElement
    const overflow = root.style.overflow
    dialog.showModal()
    root.style.overflow = 'hidden'
    return () => {
      root.style.overflow = overflow
      dialog.close()
      trigger?.focus({ preventScroll: true })
    }
  }, [])

  const frame = String(index + 1).padStart(2, '0')

  return (
    <dialog
      ref={dialogRef}
      className="lightbox-backdrop"
      aria-label="Camera roll photo viewer"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          if (event.key === 'ArrowLeft') onPrev()
          else onNext()
        }
      }}
    >
      <header className="lightbox-header">
        <p className="lightbox-mark"><Aperture size={17} aria-hidden="true" /> Camera roll</p>
        <p className="lightbox-count" aria-hidden="true">
          <span>Frame</span> <strong>{frame}</strong> / {String(total).padStart(2, '0')}
        </p>
        <button className="lightbox-button lightbox-close" type="button" onClick={onClose} aria-label="Close photo viewer">
          <X size={22} aria-hidden="true" />
        </button>
      </header>

      <div
        className="lightbox-stage"
        onTouchStart={(event) => {
          const point = event.touches.length === 1 ? event.touches[0] : undefined
          swipeStart.current = point ? { x: point.clientX, y: point.clientY } : null
        }}
        onTouchCancel={() => { swipeStart.current = null }}
        onTouchEnd={(event) => {
          const start = swipeStart.current
          swipeStart.current = null
          const point = event.changedTouches[0]
          if (!start || !point || event.touches.length > 0) return
          const dx = point.clientX - start.x
          const dy = point.clientY - start.y
          if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.4) return
          if (dx < 0) onNext()
          else onPrev()
        }}
      >
        <Projection key={photo.src} photo={photo} />
      </div>

      <footer className="lightbox-footer">
        <div className="lightbox-caption">
          <p className="lightbox-caption-label" aria-hidden="true">From the archive</p>
          <p>{photo.caption}</p>
        </div>
        <p className="sr-only" role="status" aria-atomic="true">
          Photo {index + 1} of {total}. {photo.caption}
        </p>
        <div className="lightbox-controls" role="group" aria-label="Photo navigation">
          <button className="lightbox-button" type="button" onClick={onPrev} aria-label="Previous photo">
            <ArrowLeft size={21} aria-hidden="true" />
          </button>
          <button className="lightbox-button" type="button" onClick={onNext} aria-label="Next photo">
            <ArrowRight size={21} aria-hidden="true" />
          </button>
        </div>
        <p className="lightbox-hint" aria-hidden="true"><kbd>←</kbd> <kbd>→</kbd> Browse <kbd>Esc</kbd> Close</p>
      </footer>
    </dialog>
  )
}
