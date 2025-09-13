'use client'

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Auto-play the video when component mounts
    const playVideo = async () => {
      try {
        await video.play()
      } catch (error) {
        console.log('Video autoplay failed:', error)
      }
    }

    playVideo()

    // Handle video end - loop it
    const handleVideoEnd = () => {
      video.currentTime = 0
      video.play()
    }

    video.addEventListener('ended', handleVideoEnd)

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        {/* You can replace this with your video file path */}
        <source src="/videos/space-background.mp4" type="video/mp4" />
        <source src="/videos/space-background.webm" type="video/webm" />
        {/* Fallback for browsers that don't support video */}
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/50"></div>
    </div>
  )
}

export default AnimatedBackground
