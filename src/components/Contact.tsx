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
    },
    {
      icon: BookOpen,
      label: 'Medium',
      href: 'https://medium.com/@sgx08',
      text: 'medium.com/@sgx08'
    }
  ]

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--tag-name)' }}>
            Let's Talk About Your Data Needs
          </h3>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto" style={{ color: 'var(--light)' }}>
            Whether you're looking to build a data platform, optimize existing pipelines, or explore how AI/ML can enhance your data strategy, I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 glassmorphism"
              style={{ color: 'var(--light)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: 'var(--tag-bg)'
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
          className="text-sm md:text-base justify-center text-center text-gray-300 mb-10 py-4"
          style={{ color: 'var(--tag-name)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Available for consulting, full-time opportunities, and collaborations</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
