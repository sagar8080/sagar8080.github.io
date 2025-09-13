'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  activeSection: string
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

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
      className="fixed w-full z-50 bg-gray-100/10 dark:bg-gray-900/40 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm transition-all duration-300 group text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"
                  initial={{ width: activeSection === item.id ? '100%' : '0%' }}
                  animate={{ width: activeSection === item.id ? '100%' : '0%' }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none transition-all duration-300 p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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
            className="md:hidden absolute top-20 left-0 w-full shadow-lg overflow-hidden bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-2 pt-2 pb-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full px-4 py-3 text-center transition-all duration-300 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300/70 dark:hover:bg-gray-700/70"
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
