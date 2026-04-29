'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
  sections: string[]
}

const Navigation = ({ activeSection, sections }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const labelMap: Record<string, string> = {
    hero: 'Home',
    projects: 'Work',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    articles: 'Writing',
    photography: 'Photography',
    contact: 'Contact'
  }

  const navItems = sections
    .filter((section) => section !== 'hero')
    .map((section) => ({
      id: section,
      label: labelMap[section] ?? section
    }))

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 border-b border-emerald-500/10 dark:border-emerald-500/15 bg-white/65 dark:bg-zinc-950/50 backdrop-blur-xl supports-[backdrop-filter]:bg-white/55 supports-[backdrop-filter]:dark:bg-zinc-950/45"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-mono font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
          >
            Sagar Das
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`relative text-sm font-mono transition-colors duration-200 group ${
                  activeSection === item.id
                    ? 'text-zinc-900 dark:text-zinc-50'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400'
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-emerald-500"
                  initial={false}
                  animate={{ width: activeSection === item.id ? '100%' : '0%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none transition-all duration-300 p-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full shadow-lg overflow-hidden bg-white/95 dark:bg-slate-950/95 border-t border-slate-300/50 dark:border-slate-700/50"
          >
            <div className="px-2 pt-2 pb-4 space-y-1.5">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full px-4 py-3 text-center transition-all duration-300 rounded-md text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-200/60 dark:bg-slate-800/60 hover:bg-slate-300/80 dark:hover:bg-slate-700/80"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
