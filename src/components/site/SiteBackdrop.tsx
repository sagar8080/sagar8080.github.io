'use client'

import { usePathname } from 'next/navigation'
import { createContext, useContext, useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from 'react'

const BackdropMotion = createContext({ paused: false, toggle: () => {} })

export function useBackdropMotion() {
  return useContext(BackdropMotion)
}

// A small second ink deposit shares the same paper screen as the graphite.
const graphiteMarks: string[] = []
const copperMarks: string[] = []
for (let row = 0; row < 17; row++) {
  for (let column = 0; column < 18; column++) {
    const variation = (column * 73 + row * 41 + column * row * 19) % 97
    const x = (5 + column * 10 + (variation % 7 - 3) * .75).toFixed(1)
    const y = (5 + row * 10 + (variation % 11 - 5) * .52).toFixed(1)
    const length = .15 + variation % 5 * .14

    if (variation % 6 === 0) {
      copperMarks.push(`M${x} ${y}l${(length + .65).toFixed(2)} -.4`)
    } else {
      graphiteMarks.push(`M${x} ${y}l${length.toFixed(2)} -.15`)
    }
  }
}

const graphiteScreen = graphiteMarks.join('')
const copperScreen = copperMarks.join('')

const marginEngravings = {
  left: {
    rails: [
      'M12 393V306C12 221 29 168 67 121L99 79',
      'M23 393V308C23 230 40 174 77 127L109 85',
      'M36 374V312C36 242 52 188 88 141L120 99',
      'M50 359V316C50 255 65 201 99 156L131 114',
    ],
    marks: [
      'M5 382H57M5 347H57M5 313H57',
      'M15 270L54 262M21 233L62 223M31 199L74 186M45 169L87 154M64 137L104 123M84 111L124 96',
      'M12 203V100H41M7 100H18M12 95V106M9 160H16M9 145H16M9 130H16',
    ],
  },
  right: {
    rails: [
      'M133 24V132C133 190 111 228 63 259L27 282',
      'M122 24V130C122 183 101 219 56 249L20 272',
      'M110 41V128C110 175 91 209 48 237L13 260',
      'M98 60V126C98 167 80 199 41 225L8 247',
    ],
    marks: [
      'M92 65H140M92 99H140M92 131H140',
      'M92 160L130 173M79 184L117 200M60 206L98 222M40 224L77 241M23 237L58 254',
      'M132 231V314H103M127 314H138M132 309V320M129 252H135M129 267H135M129 282H135',
    ],
  },
}

function MarginEngraving({ side }: { side: keyof typeof marginEngravings }) {
  const { rails, marks } = marginEngravings[side]

  return (
    <svg
      className={`backdrop-margin backdrop-margin-${side}`}
      viewBox="0 0 144 420"
      preserveAspectRatio={side === 'left' ? 'xMinYMax meet' : 'xMaxYMin meet'}
      fill="none"
    >
      <g className="backdrop-margin-guide">
        {rails.map((rail) => <path key={rail} d={rail} vectorEffect="non-scaling-stroke" />)}
      </g>
      {rails.map((rail) => (
        <path className="backdrop-margin-trace" key={rail} d={rail} pathLength="1" vectorEffect="non-scaling-stroke" />
      ))}
      {marks.map((mark) => (
        <path className="backdrop-margin-mark" key={mark} d={mark} pathLength="1" vectorEffect="non-scaling-stroke" />
      ))}
      {rails.map((rail, index) => (
        <path
          className="backdrop-margin-packet"
          key={`packet-${rail}`}
          d={rail}
          pathLength="1"
          vectorEffect="non-scaling-stroke"
          style={{ '--packet-phase': index * .23 } as CSSProperties}
        />
      ))}
      <g className="backdrop-junctions">
        {side === 'left' ? <>
          <rect x="8" y="302" width="8" height="8" rx="1" />
          <circle cx="36" cy="312" r="4" />
          <circle cx="99" cy="79" r="4" />
        </> : <>
          <rect x="129" y="128" width="8" height="8" rx="1" />
          <circle cx="110" cy="128" r="4" />
          <circle cx="27" cy="282" r="4" />
        </>}
      </g>
    </svg>
  )
}

function BackdropArtwork() {
  const id = useId()
  const screen = `url(#${id}-screen)`

  return (
    <svg className="backdrop-artwork" width="100%" height="100%">
      <defs>
        <pattern id={`${id}-screen`} width="180" height="170" patternUnits="userSpaceOnUse">
          <path d={graphiteScreen} fill="none" stroke="#54594b" strokeOpacity=".32" strokeWidth=".95" strokeLinecap="round" />
          <path d={copperScreen} fill="none" stroke="#a35d43" strokeOpacity=".5" strokeWidth="1.15" strokeLinecap="round" />
        </pattern>
        <radialGradient id={`${id}-density`}>
          <stop stopColor="white" />
          <stop offset=".32" stopColor="white" stopOpacity=".86" />
          <stop offset=".64" stopColor="white" stopOpacity=".39" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`${id}-left`} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
          <ellipse cx="13%" cy="34%" rx="82%" ry="105%" fill={`url(#${id}-density)`} />
        </mask>
        <mask id={`${id}-right`} maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
          <ellipse cx="89%" cy="69%" rx="80%" ry="108%" fill={`url(#${id}-density)`} />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill={screen} opacity=".28" />
      <g className="backdrop-ink backdrop-ink-left" mask={`url(#${id}-left)`}>
        <rect width="100%" height="100%" fill={screen} />
      </g>
      <g className="backdrop-ink backdrop-ink-right" mask={`url(#${id}-right)`}>
        <rect width="100%" height="100%" fill={screen} />
      </g>
    </svg>
  )
}

function sectionProgress(top: number, viewportHeight: number) {
  const t = Math.min(1, Math.max(0, (viewportHeight - top) / (viewportHeight * .85)))
  return t * t * (3 - 2 * t)
}

export default function SiteBackdrop({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false)
  const backdrop = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const toggle = () => setPaused((value) => !value)

  // The margin signal follows distance. The homepage light follows its sections.
  useEffect(() => {
    const surface = backdrop.current
    if (!surface) return

    const home = document.querySelector('.portfolio')
    const work = home?.querySelector('.folio-work')
    const personal = home?.querySelector('.work-feature-buntini')
    const impact = home?.querySelector('.folio-record')
    const story = work && personal && impact ? { work, personal, impact } : null
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const listeners = new AbortController()
    let frame = 0

    const paint = () => {
      frame = 0
      if (paused || reducedMotion.matches) return

      const travel = -window.scrollY / 900
      const height = window.innerHeight
      const progress = story && height > 0 ? {
        work: sectionProgress(story.work.getBoundingClientRect().top, height),
        personal: sectionProgress(story.personal.getBoundingClientRect().top, height),
        impact: sectionProgress(story.impact.getBoundingClientRect().top, height),
      } : null

      surface.style.setProperty('--signal-travel', String(travel))
      if (progress) {
        surface.style.setProperty('--story-work', String(progress.work))
        surface.style.setProperty('--story-personal', String(progress.personal))
        surface.style.setProperty('--story-impact', String(progress.impact))
      }
    }

    const queuePaint = () => {
      if (!frame && !paused && !reducedMotion.matches) frame = requestAnimationFrame(paint)
    }
    window.addEventListener('scroll', queuePaint, { passive: true, signal: listeners.signal })
    window.addEventListener('resize', queuePaint, { signal: listeners.signal })
    reducedMotion.addEventListener('change', queuePaint, { signal: listeners.signal })
    paint()
    if (story) {
      surface.dataset.story = 'true'
    } else {
      surface.style.removeProperty('--story-work')
      surface.style.removeProperty('--story-personal')
      surface.style.removeProperty('--story-impact')
    }

    return () => {
      listeners.abort()
      cancelAnimationFrame(frame)
      delete surface.dataset.story
    }
  }, [paused, pathname])

  return (
    <BackdropMotion.Provider value={{ paused, toggle }}>
      <div ref={backdrop} className="site-backdrop" data-paused={paused || undefined} aria-hidden="true">
        <div className="backdrop-light-field">
          <div className="backdrop-light backdrop-light-copper" />
          <div className="backdrop-light backdrop-light-slate" />
        </div>
        <BackdropArtwork />
        <MarginEngraving side="left" />
        <MarginEngraving side="right" />
      </div>
      {children}
    </BackdropMotion.Provider>
  )
}

export function BackdropControl() {
  const { paused, toggle } = useBackdropMotion()

  return (
    <button type="button" className="backdrop-control" onClick={toggle}>
      {paused ? 'Play background' : 'Pause background'}
    </button>
  )
}
