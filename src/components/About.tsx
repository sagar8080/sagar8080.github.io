'use client'

import { motion } from 'framer-motion'
import DataDefenderGame from './DataDefenderGame'

const About = () => {
  const strengths = [
    'Designing resilient streaming and batch architectures',
    'Building lakehouse pipelines with governance and data quality gates',
    'Shipping RAG workflows with measurable latency and relevance targets',
    'Leading cross-functional delivery from prototype to production'
  ]

  return (
    <motion.section
      id="about"
      className="section-wrap"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="section-shell">
        <div className="text-center mb-14">
          <p className="eyebrow">About</p>
          <h2 className="section-title mt-3">Why I build data systems</h2>
          <p className="section-description mx-auto">
            Most data pipelines fail because they optimize for speed first. I optimize for reliability first, then speed.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-10">
            <div className="surface-card p-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Reliability creates trust. Trust creates adoption.
              </h3>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                I earned my Master&apos;s in Information Systems at the University of Maryland, then focused my work on data engineering and ML systems where scale and reliability both matter.
              </p>
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                Across Fortune 500 teams, startups, and research environments, I build platforms that are observable, resilient, and tuned for decision-making velocity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ['20M+', 'Daily events processed'],
                ['6h to 45m', 'Pipeline runtime reduced'],
                ['100K+', 'Documents processed in RAG stack'],
                ['6+', 'Fortune 500 clients supported']
              ].map(([metric, label]) => (
                <div key={metric} className="surface-card p-5">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{metric}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface-card p-6">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Technical strengths</h4>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <p className="eyebrow">Interactive lab</p>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mt-2">Data Defender Challenge</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
                A small game I built to make data reliability concepts playful. Treat this as an Easter egg between case studies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 surface-card p-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Data Defender Challenge</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Test your reflexes against data bugs and pipeline threats.</p>
          </div>
          <div className="rounded-2xl p-2 bg-slate-100/40 dark:bg-slate-950/45">
            <DataDefenderGame />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
