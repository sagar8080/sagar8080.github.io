'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      id: 'umd',
      institution: 'University of Maryland',
      degree: 'Master of Information Management',
      duration: '2023 - 2025',
      location: 'College Park, MD',
      gpa: '3.97/4.0',
      achievements: [
        'Specialized in Data Science and Machine Learning',
        'Full tuition scholarship for the entire program duration',
        'Active in data science club and intramural sports'
      ]
    },
    {
      id: 'puchd',
      institution: 'Panjab University Chandigarh',
      degree: 'Bachelor of Engineering in Information Technology',
      duration: '2015 - 2019',
      location: 'Chandigarh, India',
      gpa: '7.72/10.0',
      achievements: [
        'Thesis on wireless sensor network classification using ML algorithms',
        'Member of Entrepreneurship Development Cell',
        'Participated in inter-university football championships'
      ]
    }
  ]

  return (
    <motion.section
      id="education"
      className="section-wrap"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="section-shell">
        <div className="text-center mb-14">
          <p className="eyebrow">Education</p>
          <h2 className="section-title mt-3">Academic foundation</h2>
          <p className="section-description mx-auto">
            Formal training in information systems, machine learning, and software engineering fundamentals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              className="surface-card p-6 md:p-8"
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/28 p-3">
                  <GraduationCap className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{edu.degree}</h3>
                  <p className="text-slate-700 dark:text-slate-300 mt-1">{edu.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300 mt-4">
                <div className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.duration}</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                GPA: <span className="text-slate-900 dark:text-slate-100">{edu.gpa}</span>
              </p>

              <div className="mt-5">
                <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-3 inline-flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-slate-700 dark:text-slate-300">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Education
