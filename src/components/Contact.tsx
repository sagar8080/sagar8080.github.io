'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, Github, BookOpen } from 'lucide-react'

const Contact = () => {
  const contactLinks = [
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+1-2404959874',
      text: '+1 (240) 495-9874'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:sagardas.work@gmail.com',
      text: 'sagardas.work@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sagardas08',
      text: 'linkedin.com/in/sagardas08'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sagar8080',
      text: 'github.com/sagar8080'
    }
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="py-16 px-8 md:px-16">
        <motion.div
          className="text-center bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/10 dark:border-gray-700/20"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
            Let's Talk About Your Data Needs
          </h3>
          <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto text-gray-800 dark:text-gray-200 drop-shadow-md">
            Whether you're looking to build a data platform, optimize existing pipelines, or explore how AI/ML can enhance your data strategy, I'd love to hear from you.
          </p>
        </motion.div>
        </div>

        <motion.div
          className="mt-8 flex justify-center gap-6 flex-wrap"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-600/50 text-gray-800 dark:text-gray-200 hover:bg-blue-50/90 dark:hover:bg-blue-900/60 hover:border-blue-400/60 dark:hover:border-blue-500/60 shadow-xl hover:shadow-2xl"
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <link.icon size={24} />
              </motion.div>
              <div className="text-left">
                <div className="font-medium text-sm">{link.label}</div>
                <div className="text-xs opacity-80">{link.text}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="text-sm md:text-base justify-center text-center text-gray-800 dark:text-gray-200 mb-10 py-4 drop-shadow-md"
        >
          <p>Available for consulting, full-time opportunities, and collaborations</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
