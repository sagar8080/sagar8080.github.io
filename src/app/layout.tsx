import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sagar8080.github.io'),
  title: 'Sagar Das | Data/ML Engineer',
  description: 'Portfolio of Sagar Das - Data Engineer, ML Engineer, and AI Engineer specializing in cloud-native data pipelines and scalable solutions.',
  keywords: 'Data Engineer, ML Engineer, AI Engineer, Python, AWS, GCP, Apache Spark, Kubernetes',
  authors: [{ name: 'Sagar Das' }],
  openGraph: {
    title: 'Sagar Das | Data/ML Engineer',
    description: 'Portfolio showcasing expertise in data engineering, MLOps, and Generative AI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`min-h-screen font-sans bg-white text-gray-900 dark:bg-dark dark:text-light ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
