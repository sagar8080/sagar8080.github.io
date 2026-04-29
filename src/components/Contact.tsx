'use client'

import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

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
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sagardas08',
      text: 'linkedin.com/in/sagardas08'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/sagar8080',
      text: 'github.com/sagar8080'
    }
  ]

  return (
    <section id="contact" className="section-wrap relative">
      <div className="section-shell">
        <motion.div className="text-center surface-card p-6 sm:p-8 md:p-12">
          <p className="eyebrow">Contact</p>
          <h3 className="section-title mt-3">Let&apos;s ship something defensible</h3>
          <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto text-zinc-700 dark:text-zinc-300">
            Open to consulting, full-time roles, and tight collaborations on data platforms and AI systems — async-first, with clear milestones and measurable exits.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 rounded-full border border-cyan-400/35 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-800 dark:text-cyan-300">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            Currently available for new projects
          </div>
        </motion.div>

        <motion.div className="mt-7 md:mt-8 flex justify-center gap-3 sm:gap-4 flex-wrap">
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card flex items-center gap-3 px-4 sm:px-6 py-3.5 sm:py-4 text-zinc-800 dark:text-zinc-200 hover:border-cyan-500/45 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon size={22} />
              <div className="text-left">
                <div className="font-medium text-sm">{link.label}</div>
                <div className="text-xs opacity-80">{link.text}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="text-sm md:text-base text-center font-mono text-zinc-500 dark:text-zinc-400 mb-10 py-4">
          <p># prefers-email · timezone: US/Eastern · will sign NDA</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
