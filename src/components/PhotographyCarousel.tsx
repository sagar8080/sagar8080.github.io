'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const PhotographyCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const photographyProjects = [
    { id: 'photo-1', image: '/photography/1.jpeg' },
    { id: 'photo-2', image: '/photography/2.jpeg' },
    { id: 'photo-3', image: '/photography/3.jpeg' },
    { id: 'photo-4', image: '/photography/4.jpeg' },
    { id: 'photo-5', image: '/photography/5.jpeg' },
    { id: 'photo-6', image: '/photography/6.jpeg' },
    { id: 'photo-7', image: '/photography/7.jpeg' },
    { id: 'photo-8', image: '/photography/8.jpeg' },
    { id: 'photo-9', image: '/photography/9.jpeg' },
    { id: 'photo-10', image: '/photography/10.jpeg' },
    { id: 'photo-11', image: '/photography/11.jpeg' },
    { id: 'photo-12', image: '/photography/12.jpeg' },
    { id: 'photo-13', image: '/photography/13.jpeg' }
  ]

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    const scrollAmount = 360
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section
      id="photography"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto border-t border-gray-200/20 dark:border-gray-700/20 pt-16">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Beyond the Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
              Photography as a Reset
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-4">
              Outside of data engineering, I slow down with a camera. It keeps me curious, grounded, and detail-oriented.
            </p>
            <a
              href="https://www.instagram.com/zuiko_vision/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-300 mt-4 hover:text-blue-700 dark:hover:text-blue-200 transition-colors"
            >
              Follow @zuiko_vision
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              aria-label="Scroll photography left"
              className="w-10 h-10 rounded-full border border-gray-200/40 dark:border-gray-700/40 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mx-auto" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              aria-label="Scroll photography right"
              className="w-10 h-10 rounded-full border border-gray-200/40 dark:border-gray-700/40 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <ChevronRight className="w-5 h-5 mx-auto" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photographyProjects.map((photo) => (
            <motion.div
              key={photo.id}
              className="min-w-[240px] md:min-w-[280px] lg:min-w-[320px] snap-start overflow-hidden rounded-2xl transition-transform duration-500"
              whileHover={{ y: -2 }}
            >
              <div className="relative aspect-[2/3] bg-transparent">
                <Image
                  src={photo.image}
                  alt="Photography showcase"
                  width={900}
                  height={1350}
                  className="w-full h-full object-contain"
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotographyCarousel
