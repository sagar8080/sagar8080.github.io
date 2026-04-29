'use client'

import { motion } from 'framer-motion'
import { BriefcaseBusiness, Calendar, Cpu, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 'wells-fargo-capgemini',
      company: 'Wells Fargo (via Capgemini America Inc.)',
      position: 'Data Engineer',
      duration: 'Oct 2025 – Present',
      location: 'Charlotte, NC',
      summary: 'Leading enterprise cloud modernization and event-driven data quality delivery.',
      achievements: [
        'Leading a GCP migration proof-of-concept for enterprise Ground-to-Cloud strategy.',
        'Building Airflow + Dataflow quality pipelines triggered from SQL Server to GCS drops, curating trusted Iceberg lakehouse data.'
      ],
      technologies: ['GCP', 'Airflow', 'Dataflow', 'Pub/Sub', 'Apache Iceberg']
    },
    {
      id: 'umd-data-specialist',
      company: 'University of Maryland',
      position: 'Data Specialist',
      duration: 'Sep 2023 – May 2025',
      location: 'College Park, MD',
      summary: 'Built high-throughput analytics and AI systems for academic operations and research.',
      achievements: [
        'Streamed 20M+ ELMS events/day into BigQuery for analytics across 230 programs.',
        'Optimized 119-table ingestion runtime from 6 hours to 45 minutes using CDC + validation.',
        'Built RAG tooling for 100K+ survey responses, reducing review timelines from 5 to 2 days.'
      ],
      technologies: ['BigQuery', 'Pub/Sub', 'Dataflow', 'LangChain', 'Elasticsearch', 'Python']
    },
    {
      id: 'ta-senior-engineer',
      company: 'Tiger Analytics',
      position: 'Senior Software Engineer - Data Platform',
      duration: 'Jul 2021 – Jul 2023',
      location: 'Chennai, India',
      summary: 'Led delivery of a self-serve data fabric used by Fortune 500 clients.',
      achievements: [
        'Built a multi-tenant data fabric across AWS and GCP for 6 enterprise clients.',
        'Reduced source onboarding cycle time by 90% with standardized ingestion and compliance controls.',
        'Improved platform API performance with a 750ms median latency reduction.'
      ],
      technologies: ['AWS', 'Spark', 'Airflow', 'FastAPI', 'Kubernetes', 'DataHub']
    },
    {
      id: 'xenonstack-engineer',
      company: 'Xenonstack Pvt. Limited',
      position: 'Intern & Software Engineer',
      duration: 'Jan 2019 – Nov 2019',
      location: 'Chandigarh, India',
      summary: 'Built the data engineering foundation for realtime analytics and MLOps workflows.',
      achievements: [
        'Migrated Hadoop jobs to Databricks, processing 10GB/day telemetry from 45 IoT sites.',
        'Enabled incremental forecasting pipelines with 15-minute prediction freshness.',
        'Improved ML iteration speed by 33% through MLflow integration.'
      ],
      technologies: ['Databricks', 'Spark', 'Kafka', 'Delta Lake', 'MLflow']
    }
  ]

  return (
    <motion.section
      id="experience"
      className="section-wrap"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="section-shell">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-mono text-emerald-800 dark:text-emerald-300 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>experience.log</span>
          </div>
          <p className="eyebrow">Experience</p>
          <h2 className="section-title mt-3">A track record of shipping under scale</h2>
          <p className="section-description mx-auto">
            From vendor floors to research labs — same through-line: make the data path observable before you optimize it.
          </p>
        </div>

        <div className="relative space-y-6">
          <div className="hidden md:block absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/45 via-teal-500/35 to-transparent" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="surface-card p-6 md:p-8 md:pl-14 relative overflow-hidden"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              <div className="hidden md:flex absolute left-3 top-7 h-5 w-5 items-center justify-center rounded-full border border-emerald-500/45 bg-zinc-50 dark:bg-zinc-950">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/65 via-teal-500/50 to-amber-500/40" />

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <BriefcaseBusiness className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    {exp.company}
                  </h3>
                  <p className="text-base text-slate-700 dark:text-slate-300 mt-1">{exp.position}</p>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 rounded-lg border border-slate-300/50 dark:border-slate-700/50 px-3 py-2 bg-white/50 dark:bg-slate-900/40">
                  <div className="inline-flex items-center gap-1.5 mr-3">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mt-4">{exp.summary}</p>

              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="mt-1 text-emerald-600 dark:text-emerald-500 font-mono">{'>'}</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="inline-flex items-center rounded-md border border-emerald-500/28 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono font-medium text-emerald-800 dark:text-emerald-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
