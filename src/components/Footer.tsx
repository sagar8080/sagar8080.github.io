'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="relative z-20 py-16 px-4 sm:px-6 lg:px-8 mt-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Sagar Das. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
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
        <motion.div
          className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center"
        >
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
