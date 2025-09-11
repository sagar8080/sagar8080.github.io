'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, TrendingUp, Users, Zap, Database, Code, Shield, BarChart3, ChevronDown, ArrowRight, Sparkles, Award, Target, Lightbulb, Rocket } from 'lucide-react'
import { useState } from 'react'

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null)

  const experiences = [
  {
    id: 'umd-data-specialist',
    phase: 'Innovation & Research',
    company: 'University of Maryland',
    position: 'Data Specialist',
    duration: 'Sep 2023 – May 2025',
    location: 'College Park, MD',
    theme: 'academic',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    bgGradient: 'from-cyan-500/10 via-blue-500/5 to-indigo-500/10',
    borderColor: 'border-cyan-500/30',
    icon: <Lightbulb className="w-8 h-8" />,
    narrative: 'Applying cutting-edge data engineering and ML methods to solve real-world data challenges at scale.',
    category: 'AI/ML',
    technologies: ['LangChain', 'FAISS', 'RAG', 'NLP', 'Streamlit', 'Elasticsearch'],
    impact: 'Weeks → hours',
    text: `
      • Designed a Pub/Sub–Dataflow pipeline to stream 20M+ ELMS events/day into BigQuery for Superset dashboards, enabling engagement analytics for 230 academic programs.
      • Optimized ingestion of 119 Redshift tables with Python, SQL, and Informatica; implemented CDC and validation checks, slashing pipeline runtime from 6 hours to 45 minutes.
      • Rebuilt a data warehouse by crafting custom fact and dimension tables, enabling hierarchical KPI analysis for Tableau dashboards across 12 departments.
      • Developed an LLM-powered RAG tool with Streamlit, LangChain, and Elasticsearch; processed 100K+ survey responses for semantic search, sentiment analysis, and summarization, shrinking review timelines from 5 to 2 days.
    `,
    achievements: [
      {
        text: 'Designed a Pub/Sub–Dataflow pipeline to stream 20M+ ELMS events/day into BigQuery for Superset dashboards, enabling engagement analytics for 230 academic programs.',
        icon: <TrendingUp className="w-5 h-5" />,
        impact: '20M+ daily events',
        category: 'Real-time Analytics',
        technologies: ['Pub/Sub', 'Dataflow', 'BigQuery', 'Superset']
      },
      {
        text: 'Optimized ingestion of 119 Redshift tables with Python, SQL, and Informatica; implemented CDC and validation checks, slashing pipeline runtime from 6 hours to 45 minutes.',
        icon: <Zap className="w-5 h-5" />,
        impact: '6 hours → 45 minutes',
        category: 'Performance',
        technologies: ['Python', 'SQL', 'Informatica', 'Redshift', 'CDC']
      },
      {
        text: 'Rebuilt a data warehouse by crafting custom fact and dimension tables, enabling hierarchical KPI analysis for Tableau dashboards across 12 departments.',
        icon: <Database className="w-5 h-5" />,
        impact: '12 departments',
        category: 'Data Architecture',
        technologies: ['Data Warehouse', 'Fact Tables', 'Dimension Tables', 'Tableau', 'KPI Analysis']
      },
      {
        text: 'Developed an LLM-powered RAG tool with Streamlit, LangChain, and Elasticsearch; processed 100K+ survey responses for semantic search, sentiment analysis, and summarization, shrinking review timelines from 5 to 2 days.',
        icon: <Code className="w-5 h-5" />,
        impact: '5 days → 2 days',
        category: 'AI/ML',
        technologies: ['LLM', 'RAG', 'Streamlit', 'LangChain', 'Elasticsearch', 'NLP']
      }
    ]
  },

  // Tiger Analytics
  {
    id: 'ta-senior-engineer',
    phase: 'Platform Engineering',
    company: 'Tiger Analytics',
    position: 'Senior Software Engineer - Data Platform',
    duration: 'Jul 2021 – Jul 2023',
    location: 'Chennai, India',
    theme: 'enterprise',
    gradient: 'from-yellow-400 via-orange-500 to-red-600',
    bgGradient: 'from-yellow-500/10 via-orange-500/5 to-red-500/10',
    borderColor: 'border-yellow-500/30',
    icon: <Target className="w-8 h-8" />,
    narrative: 'Led the efforts to build a self-serve data-fabric on AWS and GCP, used by 6 Fortune 500 clients to streamline enterprise data operations and analytics.',
    category: 'Architecture',
    technologies: ['FastAPI', 'AWS ECS', 'Airflow', 'Airbyte', 'Spark', 'Deequ', 'Apache Iceberg', 'S3', 'AWS Glue', 'Kubernetes', 'Athena', 'Redshift', 'DataHub'],
    impact: 'Multi-tenant platform',
    text: `
      • Led a cross-functional team to deliver a self-serve AWS Data Fabric, driving data mesh adoption for six Fortune 500 clients and accelerating time-to-insight across five domains.
      • Engineered batch and streaming ingest pipelines for 10+ sources, integrating CDC, encryption, and AWS Macie, reducing onboarding cycle time by 90% and meeting PII compliance.
      • Built a Spark + Deequ data quality framework running 30+ rules for parity, schema validation, and anomaly detection; eliminated 85% invalid records before publishing.
      • Piloted Apache Iceberg lakehouse on S3, enabling schema evolution, time-travel queries, and optimized reads—delivering cost-effective versioned datasets for ML workloads.
      • Developed FastAPI microservices deployed on Kubernetes, allowing 85+ daily users to launch ELT jobs via Airflow + Spark UI without engineer dependencies.
      • Implemented DataHub metadata catalog, boosting daily active users by 3x and expanding cross-domain data sharing.
      • Optimized platform performance: reduced median API latency by 750ms, improved cold start times by 500ms.
    `,
    achievements: [
      {
        text: 'Led a cross-functional team to deliver a self-serve AWS Data Fabric, driving data mesh adoption for six Fortune 500 clients and accelerating time-to-insight across five domains.',
        icon: <Users className="w-5 h-5" />,
        impact: '6 Fortune 500 clients',
        category: 'Leadership',
        technologies: ['AWS', 'Data Mesh', 'Cross-functional Team']
      },
      {
        text: 'Engineered batch and streaming ingest pipelines for 10+ sources, integrating CDC, encryption, and AWS Macie, reducing onboarding cycle time by 90% and meeting PII compliance.',
        icon: <Zap className="w-5 h-5" />,
        impact: '90% faster onboarding',
        category: 'Automation',
        technologies: ['CDC', 'Encryption', 'AWS Macie', 'PII Compliance']
      },
      {
        text: 'Built a Spark + Deequ data quality framework running 30+ rules for parity, schema validation, and anomaly detection; eliminated 85% invalid records before publishing.',
        icon: <Shield className="w-5 h-5" />,
        impact: '85% invalid records filtered',
        category: 'Data Quality',
        technologies: ['Spark', 'Deequ', 'Data Validation', 'Schema Validation']
      },
      {
        text: 'Piloted Apache Iceberg lakehouse on S3, enabling schema evolution, time-travel queries, and optimized reads—delivering cost-effective versioned datasets for ML workloads.',
        icon: <Database className="w-5 h-5" />,
        impact: 'Cost-effective ML datasets',
        category: 'Innovation',
        technologies: ['Apache Iceberg', 'S3', 'Lakehouse', 'Schema Evolution']
      },
      {
        text: 'Developed FastAPI microservices deployed on Kubernetes, allowing 85+ daily users to launch ELT jobs via Airflow + Spark UI without engineer dependencies.',
        icon: <Code className="w-5 h-5" />,
        impact: '85+ daily users',
        category: 'Microservices',
        technologies: ['FastAPI', 'Kubernetes', 'Airflow', 'Spark']
      },
      {
        text: 'Implemented DataHub metadata catalog, boosting daily active users by 3x and expanding cross-domain data sharing.',
        icon: <BarChart3 className="w-5 h-5" />,
        impact: '3x daily active users',
        category: 'Metadata',
        technologies: ['DataHub', 'Metadata Catalog', 'Cross-domain Sharing']
      },
      {
        text: 'Optimized platform performance: reduced median API latency by 750ms, improved cold start times by 500ms.',
        icon: <TrendingUp className="w-5 h-5" />,
        impact: '750ms latency reduction',
        category: 'Performance',
        technologies: ['API Optimization', 'Cold Start Optimization', 'Performance Tuning']
      }
    ]
  },

  // Xenonstack Pvt. Limited
  {
    id: 'xenonstack-engineer',
    phase: 'Data Engineering',
    company: 'Xenonstack Pvt. Limited',
    position: 'Intern & Software Engineer',
    duration: 'Jan 2019 – Nov 2019',
    location: 'Chandigarh, India',
    theme: 'industry',
    gradient: 'from-green-400 via-teal-500 to-blue-600',
    bgGradient: 'from-green-500/10 via-teal-500/5 to-blue-500/10',
    borderColor: 'border-green-500/30',
    icon: <Rocket className="w-8 h-8" />,
    narrative: 'Building the technical foundation that would shape my entire career in data engineering and MLOps.',
    category: 'Real-time Analytics',
    technologies: ['Databricks', 'Spark', 'Kafka', 'Delta Lake', 'MLflow'],
    impact: 'Streaming IoT data',
    text: `
      • Migrated legacy Hadoop jobs to Databricks (Spark + Kafka), streaming 10GB/day of telemetry from 45 IoT sites into a Delta Lake built on medallion architecture.
      • Enabled incremental loading for timely forecasts, powering 15-minute demand predictions.
      • Integrated MLflow for pipeline experiment tracking and model registry—improving iteration velocity by 33% for forecasting and anomaly detection.
    `,
    achievements: [
      {
        text: 'Migrated legacy Hadoop jobs to Databricks (Spark + Kafka), streaming 10GB/day of telemetry from 45 IoT sites into a Delta Lake built on medallion architecture.',
        icon: <Database className="w-5 h-5" />,
        impact: '10GB/day processing',
        category: 'Infrastructure',
        technologies: ['Hadoop', 'Databricks', 'Spark', 'Kafka', 'Delta Lake']
      },
      {
        text: 'Enabled incremental loading for timely forecasts, powering 15-minute demand predictions.',
        icon: <TrendingUp className="w-5 h-5" />,
        impact: '15-minute predictions',
        category: 'Real-time Analytics',
        technologies: ['Incremental Loading', 'Demand Forecasting', 'Real-time Processing']
      },
      {
        text: 'Integrated MLflow for pipeline experiment tracking and model registry—improving iteration velocity by 33% for forecasting and anomaly detection.',
        icon: <Code className="w-5 h-5" />,
        impact: '33% faster iteration',
        category: 'MLOps',
        technologies: ['MLflow', 'Experiment Tracking', 'Model Registry', 'Pipeline Optimization']
      }
    ]
  }
];


  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Leadership': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Automation': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'Data Quality': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Performance': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Metadata': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      'Microservices': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      'Infrastructure': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      'MLOps': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Real-time Analytics': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'Data Architecture': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
      'AI/ML': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      'Architecture': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
      'Platform': 'bg-lime-500/20 text-lime-300 border-lime-500/30'
    }
    return colors[category] || 'bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30'
  }

  return (
    <motion.section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse cursor-pointer"
          whileHover={{
            scale: 1.2,
            filter: "brightness(1.5) drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))",
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000 cursor-pointer"
          whileHover={{
            scale: 1.3,
            filter: "brightness(1.5) drop-shadow(0 0 30px rgba(16, 185, 129, 0.6))",
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000 cursor-pointer"
          whileHover={{
            scale: 1.1,
            filter: "brightness(1.5) drop-shadow(0 0 30px rgba(147, 51, 234, 0.6))",
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-3000 cursor-pointer"
          whileHover={{
            scale: 1.15,
            filter: "brightness(1.5) drop-shadow(0 0 40px rgba(99, 102, 241, 0.6))",
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        />
      </div>

      {/* Connecting Timeline Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 50 300 Q 400 250 750 300 T 1050 300"
          stroke="url(#timelineGradient)"
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
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Award className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Professional Journey</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
        </motion.div>

        {/* Continuous Growth Trajectory */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => {
            const isSelected = selectedExperience === exp.id

            return (
              <motion.div
                key={exp.id}
                className="relative mb-16"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline Node */}
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r ${exp.gradient} shadow-2xl flex items-center justify-center z-20 cursor-pointer`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    boxShadow: `0 0 40px ${exp.gradient.includes('emerald') ? 'rgba(16, 185, 129, 0.8)' :
                               exp.gradient.includes('purple') ? 'rgba(147, 51, 234, 0.8)' :
                               exp.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.8)' : 'rgba(59, 130, 246, 0.8)'}`
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="text-gray-900 dark:text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.icon}
                  </motion.div>
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  className={`relative ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-16' : 'md:ml-1/2 md:pl-16'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${exp.bgGradient} border ${exp.borderColor} backdrop-blur-xl shadow-2xl`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Card Header */}
                    <motion.div
                      className="relative p-8 md:p-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      {/* Phase Badge */}
                      <motion.div
                        className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${exp.gradient} text-white font-semibold text-sm mb-6 shadow-lg`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        {exp.phase}
                      </motion.div>

                      {/* Company Info */}
                      <div className="space-y-4">
                        <motion.h3
                          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                          viewport={{ once: true }}
                        >
                          {exp.company}
                        </motion.h3>

                        <motion.p
                          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                          viewport={{ once: true }}
                        >
                          {exp.position}
                        </motion.p>

                        <motion.div
                          className="flex flex-wrap items-center gap-4 text-gray-400"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">{exp.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">{exp.location}</span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Narrative Section */}
                    <motion.div
                      className="px-8 md:px-10 pb-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 1.0 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base mb-6">
                        {exp.narrative}
                      </p>

                      {/* Expand Button */}
                      <motion.button
                        onClick={() => setSelectedExperience(isSelected ? null : exp.id)}
                        className={`w-full py-4 px-6 rounded-2xl bg-gradient-to-r ${exp.gradient} text-white font-semibold transition-all duration-300 hover:shadow-xl flex items-center justify-center group`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 1.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="mr-3">{isSelected ? 'Collapse Details' : 'View Achievements'}</span>
                        <motion.div
                          animate={{ rotate: isSelected ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </motion.button>
                    </motion.div>

                    {/* Achievements Section */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="border-t border-gray-300 dark:border-gray-700/50"
                        >
                          <div className="p-8 md:p-10">
                            <motion.h4
                              className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              <Award className="w-6 h-6 mr-3 text-yellow-400" />
                              Key Achievements
                            </motion.h4>

                            <div className="grid gap-6 md:gap-8">
                              {exp.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  className="group relative"
                                  initial={{ opacity: 0, y: 30 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                  <div className="relative p-6 rounded-2xl bg-gray-100/20 dark:bg-gray-800/40 border border-gray-300/50 dark:border-gray-700/50 hover:border-gray-400/50 dark:hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/20 dark:hover:shadow-black/20">
                                    {/* Achievement Icon */}
                                    <motion.div
                                      className={`absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-r ${exp.gradient} flex items-center justify-center shadow-lg cursor-pointer`}
                                      whileHover={{
                                        scale: 1.2,
                                        rotate: 5,
                                        boxShadow: `0 0 25px ${exp.gradient.includes('emerald') ? 'rgba(16, 185, 129, 0.8)' :
                                                   exp.gradient.includes('purple') ? 'rgba(147, 51, 234, 0.8)' :
                                                   exp.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.8)' : 'rgba(59, 130, 246, 0.8)'}`
                                      }}
                                      whileTap={{ scale: 0.9 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <motion.div
                                        className="text-gray-900 dark:text-white"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        {achievement.icon}
                                      </motion.div>
                                    </motion.div>

                                    {/* Achievement Content */}
                                    <div className="ml-8">
                                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <h5 className="text-base font-semibold text-gray-900 dark:text-white leading-tight flex-1">
                                          {achievement.text}
                                        </h5>
                                        <div className="flex flex-col items-end gap-2">
                                          <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${exp.gradient} text-white shadow-md`}>
                                            {achievement.impact}
                                          </span>
                                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)} border`}>
                                            {achievement.category}
                                          </span>
                                        </div>
                                      </div>

                                      {/* Technologies */}
                                      <div className="flex flex-wrap gap-2">
                                        {achievement.technologies.map((tech, techIdx) => (
                                          <motion.span
                                            key={techIdx}
                                            className="px-3 py-1 rounded-full bg-gray-200/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-300/30 dark:border-gray-600/30 cursor-pointer"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.3, delay: (idx * 0.1) + (techIdx * 0.05) }}
                                            whileHover={{
                                              scale: 1.1,
                                              backgroundColor: "rgba(59, 130, 246, 0.3)",
                                              borderColor: "rgba(59, 130, 246, 0.5)",
                                              color: "#93c5fd",
                                              transition: { duration: 0.2 }
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                          >
                                            {tech}
                                          </motion.span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
