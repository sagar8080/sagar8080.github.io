'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { SiAmazon, SiGooglecloud, SiPython, SiApachespark, SiApachekafka, SiDocker, SiKubernetes, SiTerraform, SiGooglebigquery, SiAmazonredshift, SiApacheairflow, SiApache, SiDatabricks, SiDbt, SiTensorflow, SiPytorch, SiOpenai, SiGit, SiRust, SiScikitlearn, SiSnowflake, SiApacheflink, SiPresto, SiClickhouse, SiElasticsearch, SiMongodb, SiPostgresql, SiApachehadoop, SiApachehive, SiTableau, SiStreamlit, SiJupyter, SiPandas, SiNumpy, SiMysql, SiMongodb as SiNeo4j, SiLinux } from 'react-icons/si'

// --- Data for the component ---

// 1. Tools for the Infinite Carousel (replace placeholder with actual icons)
const tools = [
  // Programming & Frameworks
  { name: 'Python', icon: <SiPython size={40} color="#3776AB" /> },
  { name: 'SQL', icon: <SiPostgresql size={40} color="#336791" /> },
  { name: 'Scala', icon: <SiApache size={40} color="#DC322F" /> },
  { name: 'Bash', icon: <SiLinux size={40} color="#FCC624" /> },
  { name: 'FastAPI', icon: <SiPython size={40} color="#009688" /> },
  { name: 'LangChain', icon: <SiOpenai size={40} color="#10A37F" /> },
  { name: 'DBT', icon: <SiDbt size={40} color="#FF694B" /> },
  { name: 'Great Expectations', icon: <SiPython size={40} color="#F7931E" /> },
  { name: 'Pytest', icon: <SiPython size={40} color="#0A9EDC" /> },
  
  // Data Engineering Tools
  { name: 'Apache Spark', icon: <SiApachespark size={40} color="#E25A1C" /> },
  { name: 'Apache Beam', icon: <SiApache size={40} color="#016BF8" /> },
  { name: 'Kafka', icon: <SiApachekafka size={40} color="#FFFFFF" /> },
  { name: 'Airflow', icon: <SiApacheairflow size={40} color="#017CEE" /> },
  { name: 'Apache Iceberg', icon: <SiApache size={40} color="#E25A1C" /> },
  { name: 'Airbyte', icon: <SiApache size={40} color="#5A67D8" /> },
  { name: 'Terraform', icon: <SiTerraform size={40} color="#623CE4" /> },
  { name: 'Docker', icon: <SiDocker size={40} color="#2496ED" /> },
  { name: 'Deequ', icon: <SiApache size={40} color="#FF6B35" /> },
  
  // Databases & Storage
  { name: 'Redshift', icon: <SiAmazonredshift size={40} color="#FF9900" /> },
  { name: 'BigQuery', icon: <SiGooglebigquery size={40} color="#4285F4" /> },
  { name: 'Postgres', icon: <SiPostgresql size={40} color="#4169E1" /> },
  { name: 'MySQL', icon: <SiMysql size={40} color="#4479A1" /> },
  { name: 'DynamoDB', icon: <SiAmazon size={40} color="#FF9900" /> },
  { name: 'DuckDB', icon: <SiPostgresql size={40} color="#FFF000" /> },
  { name: 'Neo4j', icon: <SiMongodb size={40} color="#008CC1" /> },
  { name: 'Elasticsearch', icon: <SiElasticsearch size={40} color="#00A5D5" /> },
  { name: 'FAISS', icon: <SiPython size={40} color="#FF6F00" /> },
  
  // GenAI Tools
  { name: 'BERT', icon: <SiTensorflow size={40} color="#FF6F00" /> },
  { name: 'LangChain', icon: <SiOpenai size={40} color="#10A37F" /> },
  { name: 'AWS Bedrock', icon: <SiAmazon size={40} color="#FF9900" /> },
  { name: 'RAG Systems', icon: <SiOpenai size={40} color="#412991" /> },
  { name: 'Knowledge Graphs', icon: <SiMongodb size={40} color="#FF4500" /> },
  { name: 'Transformers', icon: <SiPytorch size={40} color="#EE4C2C" /> },
  { name: 'LLM APIs', icon: <SiOpenai size={40} color="#412991" /> }
];

// 2. Methods and Concepts organized into 4 blocks
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
];


// --- The Main Component ---

const Skills = () => {
  const duplicatedTools = useMemo(() => [...tools, ...tools], []);

  return (
    <motion.section
      id="skills"
      className="py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent"
        >
          Tools & Technologies
        </motion.h2>
      </div>

      {/* Infinite Carousel for Tool Icons */}
      <div className="w-full overflow-hidden relative mb-16 md:mb-20" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <motion.div
          className="flex items-center rounded-lg p-4"
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

      {/* Methods & Concepts - 4 Block Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent"
        >
          Methods & Concepts
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodsGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className="bg-transparent border border-gray-200/30 dark:border-gray-700/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {group.title}
              </h4>
              <div className="space-y-2">
                {group.items.map((method, methodIndex) => (
                  <motion.div
                    key={method}
                    className="px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 border border-gray-300/30 dark:border-gray-600/30 hover:border-blue-400/50 bg-transparent hover:bg-blue-500/5 dark:hover:bg-blue-500/10"
                  >
                    <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                      {method}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
