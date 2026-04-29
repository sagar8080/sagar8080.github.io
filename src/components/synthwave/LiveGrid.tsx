'use client'

import { useEffect, useRef } from 'react'

export function LiveGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let offset = 0

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const W = canvas!.offsetWidth
      const H = canvas!.offsetHeight
      canvas!.width = W * dpr
      canvas!.height = H * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function draw() {
      const W = canvas!.offsetWidth
      const H = canvas!.offsetHeight
      ctx!.clearRect(0, 0, W, H)

      const horizon = H * 0.54
      const vpx = W / 2

      // Vertical lines converging to vanishing point
      const numV = 26
      for (let i = 0; i <= numV; i++) {
        const xBottom = (i / numV) * W
        const edgeness = Math.abs(i / numV - 0.5) * 2
        ctx!.strokeStyle = `rgba(34,211,238,${0.07 + edgeness * 0.05})`
        ctx!.lineWidth = 0.5
        ctx!.beginPath()
        ctx!.moveTo(vpx, horizon)
        ctx!.lineTo(xBottom, H)
        ctx!.stroke()
      }

      // Horizontal lines scrolling toward the viewer
      const numH = 14
      for (let i = 0; i < numH; i++) {
        const t = ((i / numH) + offset) % 1
        const ease = t * t
        const y = horizon + (H - horizon) * ease
        if (y <= horizon || y > H) continue
        ctx!.strokeStyle = `rgba(34,211,238,${ease * 0.16})`
        ctx!.lineWidth = 0.5
        ctx!.beginPath()
        ctx!.moveTo(0, y)
        ctx!.lineTo(W, y)
        ctx!.stroke()
      }

      // Pink horizon line
      const hGrad = ctx!.createLinearGradient(0, 0, W, 0)
      hGrad.addColorStop(0, 'transparent')
      hGrad.addColorStop(0.15, 'rgba(236,72,153,0.06)')
      hGrad.addColorStop(0.5, 'rgba(236,72,153,0.38)')
      hGrad.addColorStop(0.85, 'rgba(236,72,153,0.06)')
      hGrad.addColorStop(1, 'transparent')
      ctx!.fillStyle = hGrad
      ctx!.fillRect(0, horizon - 0.5, W, 1)

      // Soft sky glow just above horizon
      const skyGrad = ctx!.createLinearGradient(0, horizon - 70, 0, horizon)
      skyGrad.addColorStop(0, 'transparent')
      skyGrad.addColorStop(1, 'rgba(236,72,153,0.045)')
      ctx!.fillStyle = skyGrad
      ctx!.fillRect(0, horizon - 70, W, 70)

      offset = (offset + 0.0035) % 1
      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}
