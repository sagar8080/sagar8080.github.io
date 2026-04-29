'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Database, Radar } from 'lucide-react'

type CapabilityDomain = {
  title: string
  subtitle: string
  icon: typeof Code2
  tools: string[]
}

const capabilityDomains: CapabilityDomain[] = [
  {
    title: 'Data Platforms',
    subtitle: 'Streaming, warehousing, and lakehouse foundations',
    icon: Database,
    tools: ['BigQuery', 'Redshift', 'Postgres', 'Kafka', 'Spark', 'Airflow', 'Apache Iceberg']
  },
  {
    title: 'AI Engineering',
    subtitle: 'RAG workflows, retrieval systems, and model ops',
    icon: BrainCircuit,
    tools: ['LangChain', 'RAG', 'Vector Search', 'Elasticsearch', 'Prompt Engineering', 'Evaluation Pipelines']
  },
  {
    title: 'Platform Reliability',
    subtitle: 'Infrastructure, deployment, and observability',
    icon: Radar,
    tools: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Data Observability', 'Security Controls']
  }
]

const coreStack = [
  'Python', 'SQL', 'Rust', 'FastAPI', 'Spark', 'Airflow', 'Kafka', 'BigQuery',
  'Postgres', 'Elasticsearch', 'Docker', 'Kubernetes', 'Terraform', 'LangChain', 'RAG'
]

const methodsGroups = [
  {
    title: "Core Engineering",
    items: [
      'Data Structures & Algorithms',
      'Distributed Systems',
      'MLOps',
      'CI/CD Pipelines',
      'GitOps',
      'REST APIs',
      'Backend Development',
      'Server Side Programming'
    ]
  },
  {
    title: "Data Architecture",
    items: [
      'Data Lakehouse Architecture',
      'Data Mesh',
      'Data Governance',
      'ETL/ELT Pipelines',
      'Real-time Data Processing',
      'Data Warehousing',
      'Data Cataloging',
      'Streaming Analytics'
    ]
  },
  {
    title: "AI & ML",
    items: [
      'RAG Systems',
      'Vector Databases',
      'Fine-tuning',
      'Prompt Engineering',
      'Model Deployment & Monitoring',
      'Feature Engineering',
      'Automated Machine Learning',
      'Explainable AI'
    ]
  },
  {
    title: "Advanced Systems",
    items: [
      'Event-Driven Architecture',
      'Data Observability',
      'Data Security',
      'Federated Learning',
      'Edge Computing',
      'IoT Data Integration',
      'Data Quality',
      'Metadata Management'
    ]
  }
]

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState(methodsGroups[0]?.title ?? '')
  const selectedGroup = useMemo(
    () => methodsGroups.find((group) => group.title === activeGroup) ?? methodsGroups[0],
    [activeGroup]
  )

  return (
    <motion.section id="skills" className="section-wrap">
      <div className="section-shell">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-mono text-emerald-800 dark:text-emerald-300 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>skills.matrix</span>
          </div>
          <p className="eyebrow">Tools and methods</p>
          <h2 className="section-title mt-3">Technical depth across the stack</h2>
          <p className="section-description mx-auto">
            The primitives I reach for when wiring pipelines, hardening platforms, and shipping retrieval-heavy AI.
          </p>
        </div>
      </div>

      <div className="section-shell mb-12">
        <motion.div className="surface-card p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-3">
            Core stack
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-2.5">
            {coreStack.map((tool, index) => (
              <div key={tool} className="text-sm font-mono text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="text-[10px] text-emerald-600/90 dark:text-emerald-500/80">{String(index + 1).padStart(2, '0')}</span>
                <span className="truncate">{tool}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-shell">
        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {capabilityDomains.map((domain, index) => {
            const Icon = domain.icon
            return (
              <motion.div
                key={domain.title}
                className="surface-card p-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-emerald-500/28 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{domain.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{domain.subtitle}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {domain.tools.map((tool) => (
                    <span key={tool} className="inline-flex items-center rounded-md border border-slate-300/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/45 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="surface-card p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {methodsGroups.map((group) => (
              <button
                key={group.title}
                onClick={() => setActiveGroup(group.title)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                  group.title === selectedGroup.title
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/25 dark:bg-emerald-500'
                    : 'bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300/80 dark:bg-zinc-800/80 dark:text-zinc-200 dark:hover:bg-zinc-700/80'
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedGroup.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">{selectedGroup.title}</h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {selectedGroup.items.map((method) => (
                <div
                  key={method}
                  className="px-3 py-2 rounded-lg text-sm font-medium border border-slate-300/40 dark:border-slate-700/40 bg-white/35 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300"
                >
                  {method}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
