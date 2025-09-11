'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  isDark: boolean
  toggle: () => void
}

const ThemeToggle = ({ isDark, toggle }: ThemeToggleProps) => {
  return (
    <motion.button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 p-3 rounded-full glassmorphism"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
