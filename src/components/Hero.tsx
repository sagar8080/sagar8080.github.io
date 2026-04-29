'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [highlightIdx, setHighlightIdx] = useState(0)
  const [greetingIdx, setGreetingIdx] = useState(0)
  const highlights = [
    'Pipelines you can replay and audit',
    'RAG with eval hooks, not vibes',
    'Failure modes handled before scale',
  ]
  const greetings = [
    { greeting: 'Hello', language: 'English' },
    { greeting: 'Hola', language: 'Spanish' },
    { greeting: 'Bonjour', language: 'French' },
    { greeting: 'Hallo', language: 'German' },
    { greeting: 'Ciao', language: 'Italian' },
    { greeting: 'Ola', language: 'Portuguese' },
    { greeting: 'Privet', language: 'Russian' },
    { greeting: 'Konnichiwa', language: 'Japanese' },
    { greeting: 'Ni hao', language: 'Mandarin' },
    { greeting: 'Annyeonghaseyo', language: 'Korean' },
    { greeting: 'Marhaba', language: 'Arabic' },
    { greeting: 'Namaste', language: 'Hindi' },
    { greeting: 'Namaskar', language: 'Odia' },
    { greeting: 'Hej', language: 'Swedish' },
    { greeting: 'Hei', language: 'Norwegian' },
    { greeting: 'Merhaba', language: 'Turkish' },
    { greeting: 'Yassas', language: 'Greek' },
    { greeting: 'Salam', language: 'Persian' },
    { greeting: 'Shalom', language: 'Hebrew' },
    { greeting: 'Jambo', language: 'Swahili' },
    { greeting: 'Aloha', language: 'Hawaiian' },
    { greeting: 'Sawasdee', language: 'Thai' },
    { greeting: 'Xin chao', language: 'Vietnamese' },
    { greeting: 'Kamusta', language: 'Filipino' },
    { greeting: 'Halo', language: 'Indonesian' },
    { greeting: 'Bula', language: 'Fijian' },
    { greeting: 'Szia', language: 'Hungarian' },
    { greeting: 'Dzien dobry', language: 'Polish' },
    { greeting: 'God dag', language: 'Danish' },
    { greeting: 'Salaam', language: 'Urdu' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % highlights.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [highlights.length])

  useEffect(() => {
    const greetingTimer = setInterval(() => {
      setGreetingIdx((prev) => (prev + 1) % greetings.length)
    }, 1400)
    return () => clearInterval(greetingTimer)
  }, [greetings.length])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/8 via-transparent to-amber-500/10 dark:from-emerald-500/12 dark:to-teal-900/20" />
      <div className="max-w-6xl mx-auto relative z-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-10 lg:gap-16 items-center">
          <motion.div
            className="space-y-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="eyebrow">Data · ML · AI systems</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
              I turn messy data into systems you can bet on.
            </h1>
            <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0">
              Pipelines, analytics, and agentic workflows — instrumented end to end for teams that need speed without gambling on correctness.
            </p>
            <div className="surface-card p-4 md:p-5 inline-flex flex-wrap items-center gap-2.5 md:gap-3 text-sm md:text-base text-zinc-700 dark:text-zinc-200">
              <span className="font-mono text-emerald-600 dark:text-emerald-400" aria-hidden>
                $
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">signal</span>
              <motion.span key={highlightIdx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
                {highlights[highlightIdx]}
              </motion.span>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 md:gap-3 pt-1.5 md:pt-2">
              <a href="#contact" className="btn-primary">
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#projects" className="btn-secondary">
                View featured work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 text-sm font-mono font-medium text-emerald-700 dark:text-emerald-400/90 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
              >
                resume.pdf
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
          >
            <div className="w-full max-w-md flex flex-col items-center text-center gap-5 md:gap-6">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-xl overflow-hidden border border-emerald-500/35 dark:border-emerald-400/25 shadow-lg shadow-emerald-900/15 dark:shadow-emerald-900/30 ring-1 ring-emerald-500/10">
                <Image
                  src="profile_picture.png"
                  alt="Sagar Das"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover object-[10%_50%]"
                  priority
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-50">Sagar Das</h2>
              <div className="h-28 flex flex-col items-center justify-center">
                <motion.span
                  key={greetingIdx}
                  className="inline-block min-h-[3.5rem] text-center text-5xl md:text-6xl font-bold font-mono leading-none text-emerald-600 dark:text-emerald-400"
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {greetings[greetingIdx].greeting}
                </motion.span>
                <span className="inline-block mt-1 text-center text-sm font-mono text-zinc-500 dark:text-zinc-400">
                  {greetings[greetingIdx].language}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          className="text-zinc-400 dark:text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors duration-300 p-2 rounded-full hover:bg-emerald-500/5 dark:hover:bg-emerald-500/10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
