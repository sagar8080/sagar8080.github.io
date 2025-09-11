'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Sagar Das. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-center text-gray-600 dark:text-gray-400">
            Designed and developed by Sagar Das • Data Engineer & ML Enthusiast
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
