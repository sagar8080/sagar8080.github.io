'use client'

import { useEffect, useState } from 'react'

const formatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

export function useClock(): string {
  const [now, setNow] = useState<string>('--:--:--')

  useEffect(() => {
    const tick = () => setNow(formatter.format(new Date()))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return now
}
