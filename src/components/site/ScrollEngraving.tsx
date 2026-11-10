export type EngravingVariant = 'work' | 'record' | 'writing' | 'photos' | 'contact'

type Figure = {
  guide: string
  lines: readonly string[]
  packetLines: readonly number[]
  nodes?: readonly [stage: 'source' | 'target', x: number, y: number][]
  matches?: readonly string[]
}

function circle(x: number, y: number, radius: number) {
  const diameter = radius * 2
  return `M${x - radius} ${y}a${radius} ${radius} 0 1 0 ${diameter} 0a${radius} ${radius} 0 1 0 -${diameter} 0Z`
}

const scale = Array.from({ length: 21 }, (_, tick) => {
  const x = 288 + 18 * tick
  return `M${x} 281v${tick % 5 === 0 ? 10 : 4}`
}).join('')

const lensScale = Array.from({ length: 48 }, (_, tick) => {
  const angle = tick / 48 * 2 * Math.PI
  const outerRadius = 137
  const innerRadius = outerRadius - (tick % 4 === 0 ? 10 : 4)
  const point = (radius: number) =>
    `${(534 + Math.cos(angle) * radius).toFixed(1)} ${(158 + Math.sin(angle) * radius).toFixed(1)}`
  return `M${point(outerRadius)}L${point(innerRadius)}`
}).join('')

const figures: Record<EngravingVariant, Figure> = {
  work: {
    guide: `M288 281H648${scale}M288 177H648M361 74V266M589 74V266
      M438 108v13m-6-6h12M517 108v13m-6-6h12M477 235v13m-6-6h12`,
    lines: [
      'M288 177H355',
      'M367 177h22q13 0 20-11l25-39q7-12 21-12h46q14 0 22 12l25 39q7 11 20 11h15',
      'M367 177h22q13 0 20 11l25 41q7 13 21 13h46q14 0 22-13l25-41q7-11 20-11h15',
      'M595 177H648',
      circle(361, 177, 6),
      circle(589, 177, 6),
      'M648 177l-9-6m9 6-9 6',
    ],
    packetLines: [1, 2],
    nodes: [['source', 361, 177], ['target', 589, 177]],
  },
  record: {
    guide: `M288 281H648${scale}M288 81V281M648 81V281
      M342 81V273M396 81V273M450 81V273M504 81V273M558 81V273M612 81V273
      M288 112H648M288 157H648M288 202H648M288 247H648`,
    lines: [
      'M288 112h54V94h90v18h216',
      'M288 157h108v-18h36v18h36v-18h90v18h90',
      'M288 202h72v-18h54v18h72v-18h72v18h90',
      'M288 247h162v-18h90v18h108',
      'M342 74v-9h90v9',
      'M450 263v8h90v-8',
    ],
    packetLines: [0, 2],
    nodes: [['source', 288, 112], ['target', 648, 202]],
  },
  writing: {
    guide: 'M359 44h202l37 37v207H359zM561 44v37h37M381 93v169M574 105v157M376 262H579',
    lines: [
      'M399 106h101',
      'M399 124h149',
      'M399 142h129',
      'M399 160h152',
      'M399 178h91',
      'M399 203h140',
      'M399 221h156',
      'M399 239h112',
      'M446 167c20 3 49 2 76-2s58-9 77-25l23-20h38',
      'M622 133h24',
    ],
    packetLines: [8],
    nodes: [['source', 446, 167], ['target', 660, 120]],
    matches: ['M425 160h66', 'M443 178h31'],
  },
  photos: {
    guide: `${lensScale}${circle(534, 158, 117)}${circle(534, 158, 76)}
      M381 158h21m264 0h21M534 13v11m0 268v11`,
    lines: [
      circle(534, 158, 123),
      circle(534, 158, 101),
      'M534 57L581 132L608 87',
      'M621.5 107.5L581 185L632 184',
      'M621.5 208.5L534 212L557 256',
      'M534 259L487 185L460 229',
      'M446.5 208.5L487 132L436 132',
      'M446.5 107.5L534 104L511 60',
      'M534 104L581 132V185L534 212L487 185V132Z',
    ],
    packetLines: [0],
  },
  contact: {
    guide: `M289 178H669M508 76v205${circle(508, 178, 48)}${circle(508, 178, 25)}
      M319 103v22m-11-11h22M640 236v22m-11-11h22`,
    lines: [
      'M319 114c37 0 68 4 93 12 46 15 59 52 96 52',
      'M640 247c-37 0-67-5-91-13-45-15-56-56-41-56',
      'M319 130c45 0 70 5 94 13 35 12 50 31 75 37',
      'M640 231c-43 0-67-4-89-12-34-12-46-32-27-40',
      circle(508, 178, 6),
    ],
    packetLines: [0, 1],
    nodes: [['target', 508, 178]],
  },
}

export default function ScrollEngraving({
  variant,
  className,
}: {
  variant: EngravingVariant
  className?: string
}) {
  const { guide, lines, packetLines, nodes = [], matches = [] } = figures[variant]

  return (
    <svg
      className={className ? `scroll-engraving ${className}` : 'scroll-engraving'}
      data-variant={variant}
      viewBox="0 0 720 420"
      preserveAspectRatio="xMaxYMin meet"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth=".85"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path className="engraving-guide" d={guide} opacity=".32" />
      {lines.map((line) => (
        <path key={line} className="engraving-line" d={line} pathLength={1} />
      ))}
      {matches.map((match) => (
        <path key={match} className="engraving-match" d={match} />
      ))}
      {packetLines.map((index) => (
        <path key={index} className="engraving-packet" d={lines[index]} pathLength={1} />
      ))}
      {nodes.map(([stage, x, y]) => (
        <circle key={stage} className="engraving-node" data-stage={stage} cx={x} cy={y} r={3} />
      ))}
    </svg>
  )
}
