'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/ExperienceBeautiful'
import Projects from '@/components/Projects'
import PhotographyCarousel from '@/components/PhotographyCarousel'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import FeaturedArticles from '@/components/FeaturedArticles'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import ThemeToggle from '@/components/ThemeToggle'

const sections = ['hero', 'projects', 'about', 'experience', 'skills', 'education', 'articles', 'photography', 'contact']

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = documentHeight > 0 ? Math.min(100, (window.scrollY / documentHeight) * 100) : 0
      setScrollProgress(progress)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : systemPrefersDark

    document.documentElement.classList.toggle('dark', shouldUseDark)
    setIsDarkMode(shouldUseDark)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-transparent">
      <AnimatedBackground isDark={isDarkMode} />
      
      <header>
        <Navigation activeSection={activeSection} sections={sections} />
        <ThemeToggle isDark={isDarkMode} toggle={toggleTheme} />
        <Hero />
      </header>

      <div className="fixed top-0 left-0 z-[70] h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 transition-all duration-200" style={{ width: `${scrollProgress}%` }} />

      <nav className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-3" aria-label="Section quick navigation">
        {sections
          .filter((section) => section !== 'hero')
          .map((section) => {
            const selected = section === activeSection
            return (
              <button
                key={section}
                onClick={() => {
                  const el = document.getElementById(section)
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  selected
                    ? 'w-8 bg-blue-500'
                    : 'w-2.5 bg-slate-400/50 hover:bg-slate-500/70 dark:bg-slate-500/45 dark:hover:bg-slate-400/70'
                }`}
                aria-label={`Jump to ${section}`}
                aria-current={selected ? 'page' : undefined}
              />
            )
          })}
      </nav>

      <AnimatePresence mode="wait">
        <motion.main
          className="relative z-10 pt-24"
        >
          <Projects />
          <About />
          <Experience />
          <Skills />
          <Education />
          <FeaturedArticles />
          <PhotographyCarousel />
          <Contact />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}
