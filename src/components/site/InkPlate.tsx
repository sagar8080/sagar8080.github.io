import { useId } from 'react'
import './greeting-motion.css'

// Each line is spaced across a ribbon whose width changes as it folds.
const inkLines = Array.from({ length: 36 }, (_, line) => (
  Array.from({ length: 58 }, (_, point) => {
    const x = point * 18 - 108
    const layer = line / 35
    const fold = 55 * Math.sin(x / 146 - .2) - 25 * Math.cos(x / 101)
    const width = 20 + 90 * (.5 + .5 * Math.sin(x / 206 - .35)) ** 2
    const y = 184 + fold + (layer * 2 - 1) * width + 19 * Math.sin(x / 99 + layer * 2.7)
    return `${x},${y.toFixed(1)}`
  })
))
const inkHatching = inkLines.map((line) => `M${line.join('L')}`).join(' ')
const inkSilhouette = `M${inkLines[0].join('L')}L${inkLines[inkLines.length - 1].slice().reverse().join('L')}Z`

export default function InkPlate({ className }: { className: string }) {
  const id = useId()
  const blue = `${id}-blue`
  const rust = `${id}-rust`
  const stipple = `${id}-stipple`
  const hatching = `${id}-hatching`
  const silhouette = `${id}-silhouette`
  return (
    <svg className={`ink-plate ${className}`} viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={blue} x1="0" x2="1" y1="0" y2=".65">
          <stop offset="0" stopColor="#52695e" stopOpacity=".2" />
          <stop offset=".44" stopColor="#345681" />
          <stop offset="1" stopColor="#536894" stopOpacity=".6" />
        </linearGradient>
        <linearGradient id={rust} x1="0" x2="1" y1="0" y2=".65">
          <stop offset="0" stopColor="#b94f36" stopOpacity=".15" />
          <stop offset=".63" stopColor="#bc6246" />
          <stop offset="1" stopColor="#aa6946" stopOpacity=".65" />
        </linearGradient>
        <pattern id={stipple} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r=".6" fill="#253f68" opacity=".42" />
          <circle cx="4" cy="4" r=".38" fill="#253f68" opacity=".34" />
        </pattern>
        <path id={hatching} d={inkHatching} />
        <path id={silhouette} d={inkSilhouette} />
      </defs>
      <g className="ink-plate-imprint">
        <g className="ink-plate-marks" fill="none">
          <path d="M60 83V54H89 M711 54H740V83 M60 277V306H89 M711 306H740V277 M60 180H740 M400 54V306" />
          <circle cx="400" cy="180" r="105" />
        </g>
        <g className="ink-layer ink-layer-warm">
          <use href={`#${silhouette}`} fill={`url(#${rust})`} opacity=".17" />
          <use href={`#${hatching}`} fill="none" stroke={`url(#${rust})`} />
        </g>
        <g className="ink-layer ink-layer-cool">
          <use href={`#${silhouette}`} fill={`url(#${blue})`} opacity=".12" />
          <use href={`#${silhouette}`} fill={`url(#${stipple})`} />
          <use href={`#${hatching}`} fill="none" stroke={`url(#${blue})`} />
        </g>
      </g>
    </svg>
  )
}
