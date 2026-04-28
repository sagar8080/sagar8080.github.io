'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import Image from 'next/image'

const projects = [
  {
    id: 'data-fusion',
    title: 'BigQuery Analytics Fabric',
    description: 'Streaming-first data platform design for large-scale analytics with governance and observability.',
    image: '/gcp.jpg',
    impact: '20M+ daily events',
    category: 'Data Engineering',
    technologies: ['Google Cloud', 'Dataflow', 'BigQuery', 'Python', 'Pub/Sub'],
    github: 'https://github.com/sagar8080/data-fusion-engineering',
    demo: '#'
  },
  {
    id: 'semantic-search',
    title: 'Intelligent Record Management',
    description: 'RAG-powered document intelligence stack for semantic retrieval and decision support.',
    image: '/doc_processing.jpg',
    impact: '100K+ docs processed',
    category: 'AI Systems',
    technologies: ['Python', 'NLP', 'Elasticsearch', 'FastAPI', 'LangChain'],
    github: 'https://github.com/sagar8080/semantic-search-system',
    demo: '#'
  },
  {
    id: 'loan-prediction',
    title: 'Loan Default Prediction',
    description: 'End-to-end ML workflow for risk prediction with explainable features and reproducible training.',
    image: '/ml_pipeline.jpg',
    impact: 'Faster underwriting decisions',
    category: 'Machine Learning',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'MLflow'],
    github: 'https://github.com/sagar8080/loan-default-prediction',
    demo: '#'
  },
  {
    id: 'fintech-analytics',
    title: 'Fintech Data Prep Engine',
    description: 'Batch and incremental ETL framework for financial metrics and operations reporting.',
    image: '/coding.jpg',
    impact: 'Reliable recurring analytics',
    category: 'Data Engineering',
    technologies: ['Apache Spark', 'AWS', 'Python', 'Airflow'],
    github: 'https://github.com/sagar8080/data-prep-for-fintech-loan-analytics',
    demo: '#'
  },
  {
    id: 'eks-monitoring',
    title: 'EKS Monitoring Stack',
    description: 'Kubernetes observability system with metrics, dashboards, and alert policy automation.',
    image: '/kubernetes.jpg',
    impact: 'Operational visibility',
    category: 'Platform',
    technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'AWS'],
    github: 'https://github.com/sagar8080/eks-and-monitoring',
    demo: '#'
  },
  {
    id: 'sports-analytics',
    title: 'Sports Analytics Lab',
    description: 'Exploratory analytics environment for performance prediction and model experimentation.',
    image: '/sports_analytics.jpg',
    impact: 'Predictive insights',
    category: 'Machine Learning',
    technologies: ['Python', 'Pandas', 'Tableau', 'Statistics'],
    github: 'https://www.kaggle.com/code/sagardas96/das-inst627-fall-2023',
    demo: '#'
  }
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeProject, setActiveProject] = useState('data-fusion')

  const filters = useMemo(() => {
    const tags = Array.from(new Set(projects.map((project) => project.category)))
    return ['All', ...tags]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const spotlightProject = projects.find((project) => project.id === activeProject) ?? projects[0]

  return (
    <section id="projects" className="section-wrap">
      <div className="section-shell">
        <div className="text-center mb-14">
          <p className="eyebrow">Featured work</p>
          <h2 className="section-title mt-3">Work that ships</h2>
          <p className="section-description mx-auto">
            Selected projects across data engineering, ML, and platform reliability with measurable outcomes.
          </p>
        </div>

        <motion.div
          className="surface-card p-6 mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  filter === activeFilter
                    ? 'bg-blue-500 text-white shadow-md shadow-blue-500/25'
                    : 'bg-slate-200/70 text-slate-700 hover:bg-slate-300/80 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:bg-slate-700/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div key={spotlightProject.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <p className="eyebrow">Project spotlight</p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-2">{spotlightProject.title}</h3>
            <p className="mt-3 text-slate-700 dark:text-slate-300">{spotlightProject.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {spotlightProject.technologies.map((tech) => (
                <span key={tech} className="pill-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`surface-card overflow-hidden flex flex-col text-left transition-all duration-300 hover:-translate-y-1 ${
                project.id === activeProject ? 'ring-2 ring-blue-400/70' : ''
              }`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="inline-flex w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-3">
                  {project.impact}
                </div>
                <h3 className="text-xl mb-3 font-semibold text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="pill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm mb-4 flex-1 text-slate-700 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={16} className="mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Case summary
                  </motion.a>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
