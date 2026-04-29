'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="relative z-20 py-16 px-4 sm:px-6 lg:px-8 mt-10"
    >
      <div className="section-shell">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
          >
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
              © {currentYear} Sagar Das
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <span className="font-mono text-xs">stack:</span>
            <motion.div
              whileHover={{ scale: 1.15, color: '#34d399' }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Heart size={16} fill="currentColor" className="text-emerald-500/80" />
            </motion.div>
            <span className="font-mono text-xs">next.js · react · tailwind</span>
          </motion.div>
        </div>

        {/* Footer Bottom Bar */}
        <motion.div className="border-t border-emerald-500/10 dark:border-emerald-500/15 mt-8 pt-6 text-center text-xs font-mono text-zinc-500 dark:text-zinc-500">
          // static export · keyboard-friendly · honors prefers-reduced-motion
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
