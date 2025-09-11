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

    // Enhanced particle system with vibrant colors and more particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      type: 'node' | 'database' | 'arrow' | 'data' | 'gear' | 'cloud'
      color: string
      rotation: number
      rotationSpeed: number
      pulse: number
      pulseSpeed: number
    }> = []

    // Create enhanced particles with more vibrant colors
    const createParticles = () => {
      const colors = [
        'rgba(59, 130, 246, 0.6)', // bright blue
        'rgba(16, 185, 129, 0.6)', // bright green
        'rgba(245, 158, 11, 0.7)',  // bright amber
        'rgba(239, 68, 68, 0.6)',   // bright red
        'rgba(139, 92, 246, 0.7)',  // bright violet
        'rgba(236, 72, 153, 0.6)',  // bright pink
        'rgba(6, 182, 212, 0.6)',   // bright cyan
        'rgba(34, 197, 94, 0.6)',   // bright emerald
        'rgba(251, 146, 60, 0.7)',  // bright orange
        'rgba(168, 85, 247, 0.7)'   // bright purple
      ]

      const types: ('node' | 'database' | 'arrow' | 'data' | 'gear' | 'cloud')[] = ['node', 'database', 'arrow', 'data', 'gear', 'cloud']

      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 20 + 4,
          opacity: Math.random() * 0.8 + 0.3,
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.03,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01
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

        // Calculate pulsing size
        const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.3)
        const currentOpacity = particle.opacity * (0.7 + Math.sin(particle.pulse) * 0.3)

        // Draw particle based on type
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        ctx.globalAlpha = currentOpacity
        ctx.fillStyle = particle.color

        switch (particle.type) {
          case 'node':
            // Draw neural network node
            ctx.beginPath()
            ctx.arc(0, 0, pulseSize, 0, Math.PI * 2)
            ctx.fill()
            // Inner circle
            ctx.beginPath()
            ctx.arc(0, 0, pulseSize * 0.3, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
            ctx.fill()
            ctx.fillStyle = particle.color
            break

          case 'database':
            // Draw database cylinder
            const dbHeight = pulseSize * 1.5
            const dbWidth = pulseSize
            // Top semicircle
            ctx.beginPath()
            ctx.arc(0, -dbHeight / 2, dbWidth / 2, 0, Math.PI)
            ctx.fill()
            // Bottom semicircle
            ctx.beginPath()
            ctx.arc(0, dbHeight / 2, dbWidth / 2, Math.PI, 2 * Math.PI)
            ctx.fill()
            // Middle rectangle
            ctx.fillRect(-dbWidth / 2, -dbHeight / 2, dbWidth, dbHeight)
            break

          case 'arrow':
            // Draw data flow arrow
            ctx.beginPath()
            ctx.moveTo(0, -pulseSize)
            ctx.lineTo(pulseSize * 0.5, 0)
            ctx.lineTo(pulseSize * 0.3, 0)
            ctx.lineTo(pulseSize * 0.3, pulseSize)
            ctx.lineTo(-pulseSize * 0.3, pulseSize)
            ctx.lineTo(-pulseSize * 0.3, 0)
            ctx.lineTo(-pulseSize * 0.5, 0)
            ctx.closePath()
            ctx.fill()
            break

          case 'data':
            // Draw data-like symbol
            ctx.font = `${pulseSize * 1.5}px monospace`
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText('{}', 0, 0)
            break

          case 'gear':
            // Draw engineering gear
            const teeth = 8
            const innerRadius = pulseSize * 0.6
            const outerRadius = pulseSize
            ctx.beginPath()
            for (let i = 0; i < teeth * 2; i++) {
              const angle = (i * Math.PI) / teeth
              const radius = i % 2 === 0 ? outerRadius : innerRadius
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              if (i === 0) ctx.moveTo(x, y)
              else ctx.lineTo(x, y)
            }
            ctx.closePath()
            ctx.fill()
            break

          case 'cloud':
            // Draw cloud shape
            ctx.beginPath()
            ctx.arc(-pulseSize * 0.5, 0, pulseSize * 0.4, 0, Math.PI * 2)
            ctx.arc(0, -pulseSize * 0.2, pulseSize * 0.5, 0, Math.PI * 2)
            ctx.arc(pulseSize * 0.5, 0, pulseSize * 0.4, 0, Math.PI * 2)
            ctx.arc(0, pulseSize * 0.2, pulseSize * 0.5, 0, Math.PI * 2)
            ctx.fill()
            break
        }

        // Enhanced glow effect
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

            if (distance < 150) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              const alpha = (150 - distance) / 150 * 0.25
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`
              ctx.lineWidth = 1.2
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
      style={{ opacity: 0.7 }}
    />
  )
}

export default AnimatedBackground
