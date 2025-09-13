'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy, Users, Target, Star, TrendingUp } from 'lucide-react'

const Education = () => {
  const education = [
    {
      id: 'umd',
      institution: 'University of Maryland',
      degree: 'Master of Information Management',
      duration: '2023 - 2025',
      location: 'College Park, MD',
      gpa: '3.97/4.0',
      gpaPercentage: 99.25,
      theme: 'primary',
      gradient: 'from-blue-500 via-purple-500 to-indigo-600',
      bgGradient: 'from-blue-500/10 via-purple-500/5 to-indigo-500/10',
      borderColor: 'border-blue-500/30',
      icon: <GraduationCap className="w-6 h-6" />,
      achievements: [
        {
          text: 'Specialized in Data Science and Machine Learning',
          icon: <Target className="w-4 h-4" />,
          category: 'Specialization'
        },
        {
          text: 'Received a full tuition scholarship for the entire course duration',
          icon: <Award className="w-4 h-4" />,
          category: 'Achievement'
        },
        {
          text: 'Participated in intramural sports and data science club activities',
          icon: <Users className="w-4 h-4" />,
          category: 'Activities'
        }
      ]
    },
    {
      id: 'puchd',
      institution: 'Panjab University Chandigarh',
      degree: 'Bachelor of Engineering in Information Technology',
      duration: '2015 - 2019',
      location: 'Chandigarh, India',
      gpa: '7.72/10.0',
      gpaPercentage: 77.2,
      theme: 'secondary',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      bgGradient: 'from-emerald-500/10 via-teal-500/5 to-cyan-500/10',
      borderColor: 'border-emerald-500/30',
      icon: <BookOpen className="w-6 h-6" />,
      achievements: [
        {
          text: 'Thesis on classifying Wireless Sensor Networks using ML algorithms',
          icon: <TrendingUp className="w-4 h-4" />,
          category: 'Research'
        },
        {
          text: 'Member of the Panjab University Entrepreneurship Development Cell',
          icon: <Star className="w-4 h-4" />,
          category: 'Leadership'
        },
        {
          text: 'Participated in inter-university football championships',
          icon: <Trophy className="w-4 h-4" />,
          category: 'Sports'
        }
      ]
    }
  ]

  return (
    <motion.section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 relative min-h-screen"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          whileHover={{
            scale: 1.2,
            filter: "brightness(1.5) drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))",
            transition: { duration: 0.3 }
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          whileHover={{
            scale: 1.3,
            filter: "brightness(1.5) drop-shadow(0 0 30px rgba(16, 185, 129, 0.6))",
            transition: { duration: 0.3 }
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"
          whileHover={{
            scale: 1.1,
            filter: "brightness(1.5) drop-shadow(0 0 30px rgba(147, 51, 234, 0.6))",
            transition: { duration: 0.3 }
          }}
        />
      </div>

      {/* Connecting Timeline Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="educationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 50 300 Q 400 250 750 300 T 1050 300"
          stroke="url(#educationGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6"
          >
            <GraduationCap className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Academic Journey</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent mb-6"
          >
            Education
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Building a strong foundation through academic excellence and continuous learning in technology and data science.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`relative group`}
            >
              {/* Card Container */}
              <div className={`bg-gray-100/20 dark:bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border ${edu.borderColor} shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-[1.02]`}>
                {/* Header Section */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${edu.gradient} shadow-lg mr-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-gray-900 dark:text-white">
                        {edu.icon}
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="space-y-4 mb-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-blue-400" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-green-400" />
                      {edu.location}
                    </div>
                  </div>

                  {/* GPA Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GPA</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{edu.gpa}</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${edu.gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${edu.gpaPercentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-400" />
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {edu.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start group/item"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${edu.gradient} mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-200`}>
                          <div className="text-gray-900 dark:text-white">
                            {achievement.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">
                            {achievement.text}
                          </p>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full bg-gradient-to-r ${edu.gradient} text-white font-medium mt-1`}>
                            {achievement.category}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r ${edu.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-r ${edu.gradient} opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Education
