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
      className="fixed top-3 right-3 z-[60] p-2.5 rounded-full glassmorphism border border-slate-300/40 dark:border-slate-700/40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-teal-400" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
