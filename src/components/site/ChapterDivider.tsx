// Editorial pause between major sections. A thin centered hairline with a
// small accent glyph in the middle. Pure CSS, server-component-friendly.
//
// Pick a glyph from the small set; default is a centered diamond.

const GLYPHS = {
  diamond: '◆',
  asterisk: '✱',
  dot: '·',
  square: '▪',
} as const

export default function ChapterDivider({
  glyph = 'diamond',
}: {
  glyph?: keyof typeof GLYPHS
}) {
  return (
    <div className="chapter-divider" aria-hidden>
      <span className="font-mono text-[14px] text-accent/60">{GLYPHS[glyph]}</span>
    </div>
  )
}
