'use client'

import { useEffect, useState } from 'react'
import type { ArticleHeading } from '@/lib/writing-outline'

export default function SectionMarkers({ headings }: { headings: ArticleHeading[] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? '')

  useEffect(() => {
    let frame = 0
    function update() {
      frame = 0
      let current = headings[0]?.id ?? ''
      for (const heading of headings) {
        const element = document.getElementById(heading.id)
        if (element && element.getBoundingClientRect().top <= 180) current = heading.id
      }
      setActiveId(current)
    }
    function onScroll() { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame) }
  }, [headings])

  if (headings.length < 2) return null
  const links = (
    <ol>
      {headings.map((heading, i) => (
        <li key={heading.id}>
          <a href={`#${heading.id}`} aria-current={activeId === heading.id ? 'location' : undefined}>
            <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>{heading.text}
          </a>
        </li>
      ))}
    </ol>
  )
  return (
    <aside className="reader-sidebar">
      <nav className="reader-toc" aria-label="On this page"><p>On this page</p>{links}<a className="reader-back-top" href="#article-top">Back to top ↑</a></nav>
      <details className="reader-mobile-toc"><summary>On this page</summary><nav aria-label="Article contents">{links}</nav></details>
    </aside>
  )
}
