'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BookOpen, Calendar, ExternalLink, Loader2 } from 'lucide-react'

interface Article {
  title: string
  link: string
  pubDate: string
  description: string
  thumbnail?: string
}

const FeaturedArticles = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Using a CORS proxy to fetch Medium RSS feed
        const rssUrl = 'https://medium.com/feed/@sgx08'
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`

        const response = await fetch(proxyUrl)
        const data = await response.json()

        if (data.status === 'ok') {
          const latestArticles = data.items.slice(0, 3).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            thumbnail: item.thumbnail || item.enclosure?.link
          }))
          setArticles(latestArticles)
        } else {
          throw new Error('Failed to fetch articles')
        }
      } catch (err) {
        console.error('Error fetching Medium articles:', err)
        setError('Unable to load articles at this time')
        // Fallback articles for demo
        setArticles([
          {
            title: 'Building Scalable Data Pipelines with Apache Airflow',
            link: 'https://medium.com/@sgx08/building-scalable-data-pipelines',
            pubDate: '2024-01-15',
            description: 'Learn how to design and implement robust data pipelines using Apache Airflow for modern data engineering workflows...'
          },
          {
            title: 'Machine Learning Model Deployment Best Practices',
            link: 'https://medium.com/@sgx08/ml-deployment-best-practices',
            pubDate: '2024-01-10',
            description: 'A comprehensive guide to deploying machine learning models in production environments with proper monitoring and scaling...'
          },
          {
            title: 'Real-time Analytics with Apache Kafka and Spark',
            link: 'https://medium.com/@sgx08/real-time-analytics-kafka-spark',
            pubDate: '2024-01-05',
            description: 'Implementing real-time data processing pipelines using Apache Kafka for ingestion and Apache Spark for analytics...'
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <motion.section
      id="articles"
      className="py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-200 bg-clip-text text-transparent">
            Featured Articles
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Insights and tutorials on data engineering, machine learning, and cloud technologies
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="w-8 h-8 text-blue-400" />
            </motion.div>
            <span className="ml-3 text-gray-400">Loading articles...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400">{error}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-100/10 dark:bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl h-full hover:scale-105 transition-all duration-300 border border-gray-300/50 dark:border-gray-700/50 hover:border-blue-500/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(article.pubDate)}
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  <motion.a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://medium.com/@sgx08"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Articles
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FeaturedArticles
