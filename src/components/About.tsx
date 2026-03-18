'use client'

import { motion } from 'framer-motion'
import DataDefenderGame from './DataDefenderGame'

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start"
        >
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent dark:from-blue-500/20 dark:via-purple-500/10 rounded-3xl p-8 border border-gray-200/30 dark:border-gray-700/30 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Snapshot
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mt-3">
                I love turning messy data into clarity.
              </h3>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                I earned my Master&apos;s degree in Information Systems from the University of Maryland, focused on data engineering and machine learning. I care deeply about building systems people can rely on—pipelines that are fast, resilient, and easy to trust.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Over the years, I&apos;ve partnered with Fortune 500 teams, academic labs, and startups, translating complex problems into calm, usable data products that help people move with confidence.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                className="bg-gray-100/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">Daily events processed</p>
                <p className="text-3xl font-semibold text-gray-900 dark:text-white mt-2">20M+</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Real-time analytics at scale</p>
              </motion.div>
              <motion.div
                className="bg-gray-100/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">Pipeline runtime gains</p>
                <p className="text-3xl font-semibold text-gray-900 dark:text-white mt-2">6h → 45m</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Optimization that unlocks agility</p>
              </motion.div>
              <motion.div
                className="bg-gray-100/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">Docs processed</p>
                <p className="text-3xl font-semibold text-gray-900 dark:text-white mt-2">100K+</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">LLM-powered search experiences</p>
              </motion.div>
              <motion.div
                className="bg-gray-100/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">Fortune 500 clients</p>
                <p className="text-3xl font-semibold text-gray-900 dark:text-white mt-2">6+</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Enterprise-grade delivery</p>
              </motion.div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-100/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30 shadow-xl">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Strengths</h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <span><strong className="text-blue-400">Scalable Architecture:</strong> Designed systems handling 20M+ daily events.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <span><strong className="text-blue-400">Performance Optimization:</strong> Reduced pipeline runtimes from 6 hours to 45 minutes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <span><strong className="text-blue-400">AI/ML Integration:</strong> Built RAG systems processing 100K+ documents.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                  <span><strong className="text-blue-400">Cloud Expertise:</strong> Multi-cloud deployments on AWS, GCP, and Azure.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30 shadow-xl">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Leadership & Impact</h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                  <span><strong className="text-purple-400">Cross-functional Leadership:</strong> Led teams delivering enterprise data platforms.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                  <span><strong className="text-purple-400">Innovation Driver:</strong> Pioneered AI adoption reducing analysis time by 60%.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                  <span><strong className="text-purple-400">Mentorship:</strong> Guided junior engineers in modern data practices.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                  <span><strong className="text-purple-400">Business Value:</strong> Delivered solutions serving 6 Fortune 500 clients.</span>
                </li>
              </ul>
            </div>
          </div>

        </motion.div>

        <div className="mt-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">
              Data Defender Challenge
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-sm mx-auto mt-2">
              Test your skills in this interactive data challenge game.
            </p>
          </div>
          <div className="bg-gray-100/20 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-300/50 dark:border-gray-700/50 shadow-2xl">
            <DataDefenderGame />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
