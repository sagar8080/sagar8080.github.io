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
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} Sagar Das. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
          >
            <span>Built with</span>
            <motion.div
              whileHover={{ scale: 1.2, color: '#ef4444' }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.div>
            <span>using Next.js & React</span>
          </motion.div>
        </div>

        {/* Footer Bottom Bar */}
        <motion.div className="border-t border-slate-300/40 dark:border-slate-700/40 mt-8 pt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Built for fast loading, clear storytelling, and production-grade credibility.
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
