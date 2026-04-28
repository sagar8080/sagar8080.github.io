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
          <h3 className="section-title mt-3">Ready to scale your data infrastructure?</h3>
          <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
            Available for consulting, full-time opportunities, and high-impact collaborations around data engineering, AI systems, and cloud modernization.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
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
              className="surface-card flex items-center gap-3 px-4 sm:px-6 py-3.5 sm:py-4 text-slate-800 dark:text-slate-200 hover:border-blue-400/60 transition-all duration-300"
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

        <motion.div className="text-sm md:text-base text-center text-slate-700 dark:text-slate-300 mb-10 py-4">
          <p>Prefer async-first collaboration with clear milestones and measurable outcomes.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
