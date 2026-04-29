'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[], offset = 80): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined' || sectionIds.length === 0) return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const onScroll = () => {
      const probe = window.scrollY + offset + 1
      let current = elements[0].id
      for (const el of elements) {
        if (el.offsetTop <= probe) current = el.id
        else break
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds, offset])

  return active
}
