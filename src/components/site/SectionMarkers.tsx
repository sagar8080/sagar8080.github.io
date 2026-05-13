'use client'

import { useEffect, useState } from 'react'

// Renders a small numbered rail in the left margin of writing posts. Lists
// every <h2> in the article, highlights the one currently in view, and
// scrolls smoothly to the section on click. Hidden below xl (kept out of
// reading width on smaller screens).
type Heading = { id: string; text: string }

export default function SectionMarkers() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return
    const h2s = Array.from(article.querySelectorAll('h2'))
    const list: Heading[] = h2s.map((h, i) => {
      // MDX h2s rarely have ids; assign one if missing so we can anchor.
      if (!h.id) h.id = `section-${i + 1}`
      return { id: h.id, text: h.textContent ?? '' }
    })
    setHeadings(list)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    h2s.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  if (headings.length < 2) return null

  return (
    <nav
      aria-label="Section markers"
      className="pointer-events-none fixed left-6 top-1/2 hidden -translate-y-1/2 xl:block"
    >
      <ul className="pointer-events-auto space-y-2 border-l border-hairline pl-3">
        {headings.map((h, i) => {
          const isActive = activeId === h.id
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`flex items-baseline gap-2 font-mono text-[10.5px] uppercase tracking-eyebrow transition-colors ${
                  isActive ? 'text-accent' : 'text-zinc-600 hover:text-zinc-300'
                }`}
              >
                <span className="tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span className="max-w-[180px] truncate">{h.text}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
