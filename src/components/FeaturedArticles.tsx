'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BookOpen, Calendar, ExternalLink, Loader2 } from 'lucide-react'

interface Article {
  title: string
  link: string
  pubDate: string
  description: string
}

interface RssItem {
  title: string
  link: string
  pubDate: string
  description: string
}

interface RssResponse {
  status: string
  items: RssItem[]
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
        const data: RssResponse = await response.json()

        if (data.status === 'ok') {
          const latestArticles = data.items.slice(0, 3).map((item) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
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
    <motion.section id="articles" className="section-wrap">
      <div className="section-shell">
        <motion.div className="text-center mb-14">
          <p className="eyebrow">Writing</p>
          <h2 className="section-title mt-3">Notes from real-world delivery</h2>
          <p className="section-description mx-auto">
            Field notes: what broke in prod, what scaled, and what I would automate next time.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="w-8 h-8 text-cyan-500" />
            </motion.div>
            <span className="ml-3 text-slate-500 dark:text-slate-300">Loading articles...</span>
          </div>
        ) : error ? (
          <div className="surface-card text-center py-20">
            <BookOpen className="w-16 h-16 text-slate-500 dark:text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600 dark:text-slate-300">{error}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <motion.article
                key={article.link}
                className="group relative surface-card p-6"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(article.pubDate)}
                    </div>
                    <ExternalLink className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-cyan-500 transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  <motion.a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-600 hover:text-sky-500 dark:text-cyan-400 dark:hover:text-cyan-300 font-mono font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
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
