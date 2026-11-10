'use client'

import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { photos } from '@/lib/content'
import Lightbox from '@/components/site/Lightbox'
import { photoAssets } from '@/components/site/photo-assets'

function frameNumber(index: number) {
  return String(index + 1).padStart(2, '0')
}

export default function PhotoStrip() {
  const reelRef = useRef<HTMLDivElement>(null)
  const firstRunRef = useRef<HTMLUListElement>(null)
  const resumeAt = useRef(0)
  const alignment = useRef({ pitch: 0, offset: 0 })
  const [centered, setCentered] = useState(0)
  const [motion, setMotion] = useState<boolean | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduced = useReducedMotion()
  const playing = motion ?? !reduced
  const lightboxOpen = openIndex !== null

  useEffect(() => {
    const reel = reelRef.current
    const firstRun = firstRunRef.current
    if (!reel || !firstRun) return

    let lastCentered = -1
    const syncCentered = () => {
      const { pitch, offset } = alignment.current
      if (!pitch) return

      const slot = Math.round((reel.scrollLeft - offset) / pitch)
      const index = (slot % photos.length + photos.length) % photos.length
      if (index !== lastCentered) {
        lastCentered = index
        setCentered(index)
      }
    }

    const resize = new ResizeObserver(() => {
      const run = firstRun.getBoundingClientRect()
      const pitch = run.width / photos.length
      const start = run.left - reel.getBoundingClientRect().left + reel.scrollLeft
      alignment.current = { pitch, offset: start + (pitch - reel.clientWidth) / 2 }
      syncCentered()
    })
    resize.observe(reel)
    resize.observe(firstRun)
    reel.addEventListener('scroll', syncCentered, { passive: true })

    return () => {
      resize.disconnect()
      reel.removeEventListener('scroll', syncCentered)
    }
  }, [])

  useEffect(() => {
    const reel = reelRef.current
    if (!reel || !playing || lightboxOpen) return

    let frame = 0
    let lastTime = 0
    let position = reel.scrollLeft
    let lastWrite = position

    function roll(now: number) {
      if (!reel) return
      const elapsed = lastTime ? Math.min(now - lastTime, 50) : 0
      lastTime = now
      const loopWidth = alignment.current.pitch * photos.length
      if (loopWidth && now >= resumeAt.current && !reel.matches(':focus-visible, :has(:focus-visible)')) {
        if (reel.scrollLeft !== lastWrite) position = reel.scrollLeft
        position = (position + elapsed * .038) % loopWidth
        reel.scrollLeft = position
        lastWrite = reel.scrollLeft
      }
      frame = requestAnimationFrame(roll)
    }

    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame)
      lastTime = 0
      if (entry.isIntersecting) frame = requestAnimationFrame(roll)
    })
    observer.observe(reel)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [playing, lightboxOpen])

  function step(direction: number) {
    const reel = reelRef.current
    const { pitch, offset } = alignment.current
    if (!reel || !pitch) return

    resumeAt.current = performance.now() + 700
    const slot = Math.round((reel.scrollLeft - offset) / pitch)
    let destination = offset + (slot + direction) * pitch
    const loopWidth = pitch * photos.length

    if (destination < 0) {
      reel.scrollLeft += loopWidth
      destination += loopWidth
    } else if (destination > reel.scrollWidth - reel.clientWidth) {
      reel.scrollLeft -= loopWidth
      destination -= loopWidth
    }

    reel.scrollTo({ left: destination, behavior: reduced ? 'instant' : 'smooth' })
  }

  const close = useCallback(() => setOpenIndex(null), [])
  const previous = useCallback(() => {
    setOpenIndex((index) => index === null ? null : (index - 1 + photos.length) % photos.length)
  }, [])
  const next = useCallback(() => {
    setOpenIndex((index) => index === null ? null : (index + 1) % photos.length)
  }, [])

  return (
    <div className="film-carousel" role="region" aria-roledescription="carousel" aria-label="Photography">
      <div className="folio-shell film-rail">
        <button type="button" className="folio-link" onClick={() => setOpenIndex(0)}>
          Browse all {photos.length} frames <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <span className="film-counter" aria-hidden="true">
          Frame <b>{frameNumber(centered)}</b> / {photos.length}
        </span>
        <div className="film-controls" role="group" aria-label="Carousel controls">
          <button type="button" onClick={() => step(-1)} aria-label="Previous frame"><ArrowLeft size={17} aria-hidden="true" /></button>
          <button type="button" onClick={() => setMotion(!playing)} aria-label={playing ? 'Pause carousel' : 'Play carousel'}>
            {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next frame"><ArrowRight size={17} aria-hidden="true" /></button>
        </div>
      </div>
      <div className="film-stage">
        <div className="film-perforations" aria-hidden="true" />
        <div
          className="film-viewport"
          ref={reelRef}
          data-playing={playing}
          tabIndex={0}
          role="group"
          aria-label="Photographs. Use the arrow keys or swipe to scroll."
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')) return
            event.preventDefault()
            step(event.key === 'ArrowLeft' ? -1 : 1)
          }}
          onTouchStart={() => { resumeAt.current = performance.now() + 1200 }}
          onTouchMove={() => { resumeAt.current = performance.now() + 1200 }}
          onWheel={(event) => {
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) resumeAt.current = performance.now() + 850
          }}
        >
          <div className="film-track">
            {[false, true].map((duplicate) => (
              <ul className="film-run" ref={duplicate ? undefined : firstRunRef} aria-hidden={duplicate || undefined} key={String(duplicate)}>
                {photos.map((photo, index) => {
                  const asset = photoAssets[photo.src]
                  return (
                    <li className="film-frame" data-centered={centered === index || undefined} key={photo.src}>
                      <button
                        type="button"
                        tabIndex={duplicate ? -1 : undefined}
                        aria-label={`Open photograph ${index + 1}: ${photo.caption}`}
                        onMouseDown={(event) => { if (duplicate) event.preventDefault() }}
                        onClick={() => setOpenIndex(index)}
                      >
                        <span className="film-image">
                          {/* Checked-in srcset keeps the static export responsive. */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            alt=""
                            width={asset?.width}
                            height={asset?.height}
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 620px) min(calc(70vw - 26px), 320px), 300px"
                            srcSet={asset?.srcSet}
                            src={photo.preview}
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                          />
                        </span>
                        <span className="film-caption" aria-hidden="true">
                          <span className="film-number">{frameNumber(index)}</span>
                          <span>{photo.caption}</span>
                          <ArrowUpRight size={14} />
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            ))}
          </div>
        </div>
        <div className="film-perforations" aria-hidden="true" />
      </div>
      {openIndex !== null && (
        <Lightbox photo={photos[openIndex]} index={openIndex} total={photos.length} onClose={close} onPrev={previous} onNext={next} />
      )}
    </div>
  )
}
