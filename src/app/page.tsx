'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/ExperienceBeautiful'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import FeaturedArticles from '@/components/FeaturedArticles'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'articles', 'skills', 'education', 'contact']
      const scrollPosition = window.scrollY + 80

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <AnimatedBackground />
      <Navigation activeSection={activeSection} />
      <ThemeToggle isDark={isDarkMode} toggle={toggleTheme} />

      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Experience />
          <Projects />
          <FeaturedArticles />
          <Skills />
          <Education />
          <Contact />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}
