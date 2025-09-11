'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { SiAmazon, SiGooglecloud, SiPython, SiApachespark, SiApachekafka, SiDocker, SiKubernetes, SiTerraform, SiGooglebigquery, SiAmazonredshift, SiApacheairflow, SiApache, SiDatabricks, SiDbt, SiTensorflow, SiPytorch, SiOpenai, SiGit, SiRust, SiScikitlearn, SiSnowflake, SiApacheflink, SiPresto, SiClickhouse, SiElasticsearch, SiMongodb, SiPostgresql, SiApachehadoop, SiApachehive, SiTableau, SiStreamlit, SiJupyter, SiPandas, SiNumpy } from 'react-icons/si'

// --- Data for the component ---

// 1. Tools for the Infinite Carousel (replace placeholder with actual icons)
const tools = [
  { name: 'AWS', icon: <SiAmazon size={40} color="#FF9900" /> },
  { name: 'GCP', icon: <SiGooglecloud size={40} color="#4285F4" /> },
  { name: 'Python', icon: <SiPython size={40} color="#3776AB" /> },
  { name: 'Apache Spark', icon: <SiApachespark size={40} color="#E25A1C" /> },
  { name: 'Kafka', icon: <SiApachekafka size={40} color="#FFFFFF" /> },
  { name: 'Docker', icon: <SiDocker size={40} color="#2496ED" /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={40} color="#326CE5" /> },
  { name: 'Terraform', icon: <SiTerraform size={40} color="#623CE4" /> },
  { name: 'BigQuery', icon: <SiGooglebigquery size={40} color="#4285F4" /> },
  { name: 'Redshift', icon: <SiAmazonredshift size={40} color="#FF9900" /> },
  { name: 'Airflow', icon: <SiApacheairflow size={40} color="#017CEE" /> },
  { name: 'Apache Iceberg', icon: <SiApache size={40} color="#E25A1C" /> },
  { name: 'Delta Lake', icon: <SiDatabricks size={40} color="#623CE4" /> },
  { name: 'DBT', icon: <SiDbt size={40} color="#FF694B" /> },
  { name: 'TensorFlow', icon: <SiTensorflow size={40} color="#FF6F00" /> },
  { name: 'PyTorch', icon: <SiPytorch size={40} color="#EE4C2C" /> },
  { name: 'LangChain', icon: <SiOpenai size={40} color="#10A37F" /> },
  { name: 'Git', icon: <SiGit size={40} color="#F05032" /> },
  { name: 'Rust', icon: <SiRust size={40} color="#FFFFFF" /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn size={40} color="#F7931E" /> },
  { name: 'Snowflake', icon: <SiSnowflake size={40} color="#29B5E8" /> },
  { name: 'Apache Flink', icon: <SiApacheflink size={40} color="#E6526F" /> },
  { name: 'Apache Beam', icon: <SiApache size={40} color="#016BF8" /> },
  { name: 'Presto', icon: <SiPresto size={40} color="#0095D5" /> },
  { name: 'ClickHouse', icon: <SiClickhouse size={40} color="#FF0000" /> },
  { name: 'Elasticsearch', icon: <SiElasticsearch size={40} color="#00A5D5" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#4169E1" /> },
  { name: 'Apache Hadoop', icon: <SiApachehadoop size={40} color="#66CCFF" /> },
  { name: 'Apache Hive', icon: <SiApachehive size={40} color="#FDEE21" /> },
  { name: 'Tableau', icon: <SiTableau size={40} color="#E97627" /> },
  { name: 'Streamlit', icon: <SiStreamlit size={40} color="#FF4B4B" /> },
  { name: 'Jupyter', icon: <SiJupyter size={40} color="#F37626" /> },
  { name: 'Pandas', icon: <SiPandas size={40} color="#8B5CF6" /> },
  { name: 'NumPy', icon: <SiNumpy size={40} color="#4DABCF" /> }
];

// 2. Methods and Concepts for the Static Grid
const methods = [
  'Data Structures & Algorithms',
  'Distributed Systems',
  'MLOps',
  'CI/CD Pipelines',
  'GitOps',
  'RAG Systems',
  'Vector Databases',
  'Fine-tuning',
  'Prompt Engineering',
  'REST APIs',
  'Backend Development',
  'Model Deployment & Monitoring',
  'Feature Engineering',
  'A/B Testing',
  'Server Side Programming',
  'Data Lakehouse Architecture',
  'Data Mesh',
  'Data Governance',
  'ETL/ELT Pipelines',
  'Real-time Data Processing',
  'Data Warehousing',
  'Data Cataloging',
  'Streaming Analytics',
  'Event-Driven Architecture',
  'Data Observability',
  'Data Security',
  'Automated Machine Learning',
  'Explainable AI',
  'Federated Learning',
  'Edge Computing',
  'IoT Data Integration',
  'Data Quality',
  'Metadata Management',
  'Data Lineage',
  'Batch Processing'
];


// --- The Main Component ---

const Skills = () => {
  const duplicatedTools = useMemo(() => [...tools, ...tools], []);

  return (
    <motion.section
      id="skills"
      className="py-16 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tools & Technologies
        </motion.h2>
      </div>

      {/* Infinite Carousel for Tool Icons */}
      <div className="w-full overflow-hidden relative mb-16 md:mb-20" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <motion.div
          className="flex items-center bg-gray-100/20 dark:bg-gray-900/20 rounded-lg p-4"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ ease: 'linear', duration: 45, repeat: Infinity }}
        >
          {duplicatedTools.map((tool, index) => (
            <div key={index} className="flex-shrink-0 mx-8 flex flex-col items-center justify-center h-28 w-40">
              <div className="hover:scale-110 transition-all duration-300">
                {tool.icon}
              </div>
              <span className="text-sm text-gray-900 dark:text-white mt-2 text-center">{tool.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Static Grid for Methods & Concepts */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Methods & Concepts
        </motion.h3>
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {methods.map((method) => (
            <motion.div
              key={method}
              className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 border border-gray-300/50 dark:border-gray-600/50 hover:border-blue-400/50 bg-gray-100/10 dark:bg-gray-800/10 hover:bg-blue-500/10 dark:hover:bg-blue-500/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                {method}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
