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
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-100/10 dark:bg-gray-900/30 backdrop-blur-lg rounded-xl overflow-hidden flex flex-col border border-gray-200/20 dark:border-gray-700/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:-translate-y-2 hover:scale-105"
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
                <h3 className="text-xl mb-3 text-center font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <div className="mb-4 flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-blue-500/20 dark:bg-blue-500/30 text-blue-700 dark:text-blue-300 border border-blue-300/30 dark:border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm mb-4 flex-1 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="flex justify-center gap-4 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
