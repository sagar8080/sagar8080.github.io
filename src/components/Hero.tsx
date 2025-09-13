'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [currentName, setCurrentName] = useState(0)
  const [currentHello, setCurrentHello] = useState(0)
  const [currentColor, setCurrentColor] = useState(0)

  // Random color combinations for the hello greeting
  const colorSchemes = [
    'from-blue-400 via-purple-400 via-pink-400 to-red-400',
    'from-emerald-400 via-teal-400 via-cyan-400 to-blue-400',
    'from-orange-400 via-red-400 via-pink-400 to-purple-400',
    'from-yellow-400 via-orange-400 via-red-400 to-pink-400',
    'from-indigo-400 via-purple-400 via-blue-400 to-cyan-400',
    'from-green-400 via-emerald-400 via-teal-400 to-blue-400',
    'from-rose-400 via-pink-400 via-purple-400 to-indigo-400',
    'from-amber-400 via-orange-400 via-yellow-400 to-red-400',
    'from-violet-400 via-purple-400 via-indigo-400 to-blue-400',
    'from-lime-400 via-green-400 via-emerald-400 to-teal-400'
  ]

  const hellos = [
    { greeting: 'Hello', language: 'English', pronunciation: 'HEL-oh' },
    { greeting: 'Hola', language: 'Spanish', pronunciation: 'OH-lah' },
    { greeting: 'Bonjour', language: 'French', pronunciation: 'bon-ZHOOR' },
    { greeting: 'Hallo', language: 'German', pronunciation: 'HAH-loh' },
    { greeting: 'Ciao', language: 'Italian', pronunciation: 'CHOW' },
    { greeting: 'Olá', language: 'Portuguese', pronunciation: 'oh-LAH' },
    { greeting: 'Привет', language: 'Russian', pronunciation: 'pree-VYET' },
    { greeting: 'こんにちは', language: 'Japanese', pronunciation: 'kohn-nee-chee-wah' },
    { greeting: '你好', language: 'Chinese (Mandarin)', pronunciation: 'nee how' },
    { greeting: '안녕하세요', language: 'Korean', pronunciation: 'ahn-nyung-ha-seh-yo' },
    { greeting: 'مرحبا', language: 'Arabic', pronunciation: 'mar-ha-ba' },
    { greeting: 'नमस्ते', language: 'Hindi', pronunciation: 'nuh-muh-stay' },
    { greeting: 'ନମସ୍କାର', language: 'Odia', pronunciation: 'nuh-muh-skar' },
    { greeting: 'Hallo', language: 'Dutch', pronunciation: 'HAH-loh' },
    { greeting: 'Hej', language: 'Swedish', pronunciation: 'hey' },
    { greeting: 'Hej', language: 'Danish', pronunciation: 'hey' },
    { greeting: 'Hei', language: 'Norwegian', pronunciation: 'hey' },
    { greeting: 'Hei', language: 'Finnish', pronunciation: 'hey' },
    { greeting: 'Cześć', language: 'Polish', pronunciation: 'chesht' },
    { greeting: 'Merhaba', language: 'Turkish', pronunciation: 'meh-rah-bah' },
    { greeting: 'Γεια σας', language: 'Greek', pronunciation: 'yah sas' },
    { greeting: 'Salam', language: 'Persian', pronunciation: 'sah-LAHM' },
    { greeting: 'Shalom', language: 'Hebrew', pronunciation: 'shah-LOHM' },
    { greeting: 'Namaste', language: 'Nepali', pronunciation: 'nah-mah-stay' },
    { greeting: 'Jambo', language: 'Swahili', pronunciation: 'JAHM-boh' },
    { greeting: 'Habari', language: 'Swahili', pronunciation: 'hah-BAH-ree' },
    { greeting: 'Ni hao', language: 'Chinese (alternate)', pronunciation: 'nee how' },
    { greeting: 'Aloha', language: 'Hawaiian', pronunciation: 'ah-LOH-hah' }
  ]

  const names = [
    'Sagar Das',        // English
    'सागर दास',         // Hindi (Devanagari)
    'ସାଗର ଦାସ'         // Odia
  ]
  const fullText = 'Data Engineer | ML Engineer | AI Engineer'

  useEffect(() => {
    let index = 0
    let timer: NodeJS.Timeout

    const typeText = () => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
        timer = setTimeout(typeText, 100)
      } else {
        // Pause for 2 seconds, then restart
        setTimeout(() => {
          setTypedText('')
          index = 0
          typeText() // Restart typing
        }, 2000)
      }
    }

    typeText() // Start typing

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const nameTimer = setInterval(() => {
      setCurrentName((prev) => (prev + 1) % names.length)
    }, 2000)
    return () => clearInterval(nameTimer)
  }, [names.length])

  useEffect(() => {
    const helloTimer = setInterval(() => {
      setCurrentHello((prev) => (prev + 1) % hellos.length)
    }, 1000)
    return () => clearInterval(helloTimer)
  }, [hellos.length])

  useEffect(() => {
    const colorTimer = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colorSchemes.length)
    }, 3000)
    return () => clearInterval(colorTimer)
  }, [colorSchemes.length])

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/3 to-indigo-900/5 dark:from-blue-100/5 dark:via-purple-100/3 dark:to-indigo-100/5" />

      {/* Animated Background */}
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto relative z-20 w-full">
        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-[80vh]">
          {/* Left Side - Profile and Info */}
          <motion.div
            className="text-center lg:text-left space-y-8 flex flex-col justify-center h-[70vh] lg:h-[90vh]"
          >
            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-start mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative group">
                <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                  <Image
                    src="/profile_picture.png"
                    alt="Sagar Das"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400/40"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent font-bold"
            >
              {names[currentName]}
            </motion.h1>

            {/* Typewriter Title */}
            <motion.div
              className="mb-8"
            >
              <p className="text-lg md:text-xl font-medium text-blue-300 dark:text-blue-400">
                {typedText}<span className="animate-pulse">|</span>
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6"
            >
              <motion.a
                href="#projects"
                className="btn-primary text-sm px-6 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary text-sm px-6 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Huge Hello Display */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-8 h-[70vh] lg:h-[90vh]"
          >
            <motion.h2
              className="text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] 2xl:text-[15rem] font-black text-white leading-none text-center"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {hellos[currentHello].greeting}
            </motion.h2>

            {/* Language Info */}
            <motion.div
              className="text-center mt-4"
            >
              <p className="text-sm text-gray-200 dark:text-gray-200 font-medium">
                {hellos[currentHello].language}
              </p>
              <p className="text-xs text-gray-200 dark:text-gray-200 italic mt-1">
                Pronunciation: {hellos[currentHello].pronunciation}
              </p>
            </motion.div>

            <motion.p
              className="text-sm md:text-base text-gray-600 dark:text-gray-500 text-center max-w-sm mt-6"
            >
              Greeting you in 30 languages around the world
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100/10 dark:hover:bg-gray-800/10"
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
