'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      id: 'data-fusion',
      title: 'Data Fusion Engineering',
      description: 'Comprehensive data pipeline solution for processing and analyzing large-scale datasets using Google Cloud Platform services.',
      image: '/gcp.jpg',
      technologies: ['Google Cloud', 'Dataflow', 'BigQuery', 'Python'],
      github: 'https://github.com/sagar8080/data-fusion-engineering',
      demo: '#'
    },
    {
      id: 'semantic-search',
      title: 'Intelligent Record Management',
      description: 'AI-powered document processing system with semantic search capabilities for efficient information retrieval.',
      image: '/doc_processing.jpg',
      technologies: ['Python', 'NLP', 'Elasticsearch', 'FastAPI'],
      github: 'https://github.com/sagar8080/semantic-search-system',
      demo: '#'
    },
    {
      id: 'loan-prediction',
      title: 'Loan Default Prediction System',
      description: 'Machine learning model to predict loan defaults using historical data and advanced feature engineering.',
      image: '/ml_pipeline.jpg',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'MLflow'],
      github: 'https://github.com/sagar8080/loan-default-prediction',
      demo: '#'
    },
    {
      id: 'fintech-analytics',
      title: 'Data Prep for Fintech Analytics',
      description: 'ETL pipeline for processing financial transaction data and generating actionable insights.',
      image: '/coding.jpg',
      technologies: ['Apache Spark', 'AWS', 'Python', 'Airflow'],
      github: 'https://github.com/sagar8080/data-prep-for-fintech-loan-analytics',
      demo: '#'
    },
    {
      id: 'eks-monitoring',
      title: 'Monitoring EKS Cluster',
      description: 'Comprehensive monitoring solution for Kubernetes clusters with alerting and visualization.',
      image: '/kubernetes.jpg',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'AWS'],
      github: 'https://github.com/sagar8080/eks-and-monitoring',
      demo: '#'
    },
    {
      id: 'sports-analytics',
      title: 'Sports Analytics System',
      description: 'Data analysis platform for sports performance metrics and predictive modeling.',
      image: '/sports_analytics.jpg',
      technologies: ['Python', 'Pandas', 'Tableau', 'Statistics'],
      github: 'https://www.kaggle.com/code/sagardas96/das-inst627-fall-2023',
      demo: '#'
    }
  ]

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl mb-16 text-center"
          style={{ color: 'var(--light)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card rounded-xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                <h3 className="text-xl mb-3 text-center font-semibold" style={{ color: 'var(--light)' }}>
                  {project.title}
                </h3>

                <div className="mb-4 flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: 'var(--tag-bg)',
                        color: 'var(--tag-text)'
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <p className="text-sm mb-4 flex-1" style={{ color: 'var(--light)' }}>
                  {project.description}
                </p>

                <div className="flex justify-center gap-4 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300"
                    style={{ color: 'var(--light)' }}
                    whileHover={{ scale: 1.1, color: 'var(--tag-name)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300"
                    style={{ color: 'var(--light)' }}
                    whileHover={{ scale: 1.1, color: 'var(--tag-name)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
