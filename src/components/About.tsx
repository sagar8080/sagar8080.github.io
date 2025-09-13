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
          className="max-w-4xl mx-auto"
        >
          {/* Background and Education */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
              Background & Education
            </h3>
            <div className="bg-gray-100/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-300/30 dark:border-gray-700/30 shadow-xl">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I hold a Master's degree in Information Systems from the University of Maryland, where I specialized in data engineering and machine learning.
                My academic journey equipped me with a strong foundation in computer science principles, statistical analysis, and modern data architectures.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My professional path has been driven by a passion for solving complex data challenges at scale. I've worked with Fortune 500 companies,
                academic institutions, and innovative startups, consistently delivering solutions that transform raw data into actionable insights.
              </p>
            </div>
          </div>

          {/* What I Bring to the Table */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400">
              What I Bring to the Table
            </h3>
            <div className="bg-gray-100/10 dark:bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-300/30 dark:border-gray-700/30 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Excellence</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• <strong className="text-blue-400">Scalable Architecture:</strong> Designed systems handling 20M+ daily events</li>
                    <li>• <strong className="text-blue-400">Performance Optimization:</strong> Reduced pipeline runtimes from 6 hours to 45 minutes</li>
                    <li>• <strong className="text-blue-400">AI/ML Integration:</strong> Built RAG systems processing 100K+ documents</li>
                    <li>• <strong className="text-blue-400">Cloud Expertise:</strong> Multi-cloud deployments on AWS, GCP, and Azure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Leadership & Impact</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• <strong className="text-purple-400">Cross-functional Leadership:</strong> Led teams delivering enterprise data platforms</li>
                    <li>• <strong className="text-purple-400">Innovation Driver:</strong> Pioneered AI adoption reducing analysis time by 60%</li>
                    <li>• <strong className="text-purple-400">Mentorship:</strong> Guided junior engineers in modern data practices</li>
                    <li>• <strong className="text-purple-400">Business Value:</strong> Delivered solutions serving 6 Fortune 500 clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Defender Game */}
          <div className="flex flex-col space-y-6">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-green-400">
                Data Defender Challenge
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                Test your skills in this interactive data challenge game
              </p>
            </div>
            <div className="bg-gray-100/20 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-300/50 dark:border-gray-700/50 shadow-2xl">
              <DataDefenderGame />
            </div>
          </div>
        </motion.div>

        {/* Additional Content Section */}
        <div className="mt-20 text-center">
        </div>
      </div>
    </motion.section>
  )
}

export default About
