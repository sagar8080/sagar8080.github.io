'use client'

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Subtle particle system with reduced count and increased randomness
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      type: 'triangle' | 'circle' | 'star'
      color: string
      rotation: number
      rotationSpeed: number
      pulse: number
      pulseSpeed: number
    }> = []

    // Create enhanced particles with more vibrant colors
    const createParticles = () => {
      const colors = [
        'rgba(59, 130, 246, 0.7)', // bright blue
        'rgba(16, 185, 129, 0.7)', // bright green
        'rgba(245, 158, 11, 0.8)',  // bright amber
        'rgba(239, 68, 68, 0.7)',   // bright red
        'rgba(139, 92, 246, 0.8)',  // bright violet
        'rgba(236, 72, 153, 0.7)',  // bright pink
        'rgba(6, 182, 212, 0.7)',   // bright cyan
        'rgba(34, 197, 94, 0.7)',   // bright emerald
        'rgba(251, 146, 60, 0.8)',  // bright orange
        'rgba(168, 85, 247, 0.8)'   // bright purple
      ]

      const types: ('triangle' | 'circle' | 'star')[] = ['triangle', 'circle', 'star']

      for (let i = 0; i < 12; i++) {
        particles.push({
          x: Math.random() * canvas.width * 0.9 + canvas.width * 0.05, // Avoid edges slightly
          y: Math.random() * canvas.height * 0.9 + canvas.height * 0.05, // Avoid edges slightly
          vx: (Math.random() - 0.5) * 1.2, // Slower, more elegant movement
          vy: (Math.random() - 0.5) * 1.2, // Slower, more elegant movement
          size: Math.random() * 25 + 8, // Larger size range for better visibility
          opacity: Math.random() * 0.6 + 0.3, // More visible opacity (0.3-0.9)
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.05, // More varied rotation
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.03 + 0.005 // More varied pulsing
        })
      }
    }

    createParticles()

    // Enhanced animation loop with pulsing effects
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.rotation += particle.rotationSpeed
        particle.pulse += particle.pulseSpeed

        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size

        // Calculate pulsing size with reduced effect
        const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.15)
        const currentOpacity = particle.opacity * (0.9 + Math.sin(particle.pulse) * 0.1)

        // Draw particle based on type
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        ctx.globalAlpha = currentOpacity
        ctx.fillStyle = particle.color

        switch (particle.type) {
          case 'circle':
            // Draw circle
            ctx.beginPath()
            ctx.arc(0, 0, pulseSize, 0, Math.PI * 2)
            ctx.fill()
            break

          case 'triangle':
            // Draw triangle
            ctx.beginPath()
            ctx.moveTo(0, -pulseSize)
            ctx.lineTo(-pulseSize * 0.866, pulseSize * 0.5)
            ctx.lineTo(pulseSize * 0.866, pulseSize * 0.5)
            ctx.closePath()
            ctx.fill()
            break

          case 'star':
            // Draw star
            const spikes = 5
            const outerRadius = pulseSize
            const innerRadius = pulseSize * 0.4
            ctx.beginPath()
            for (let i = 0; i < spikes * 2; i++) {
              const angle = (i * Math.PI) / spikes
              const radius = i % 2 === 0 ? outerRadius : innerRadius
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              if (i === 0) ctx.moveTo(x, y)
              else ctx.lineTo(x, y)
            }
            ctx.closePath()
            ctx.fill()
            break
        }

        // Subtle glow effect
        ctx.shadowColor = particle.color
        ctx.shadowBlur = pulseSize * 0.8
        ctx.fill()
        ctx.shadowBlur = 0

        ctx.restore()

        // Draw connections with nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              const alpha = (100 - distance) / 100 * 0.04 // Even more subtle connections
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  )
}

export default AnimatedBackground
