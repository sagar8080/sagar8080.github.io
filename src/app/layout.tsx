import type { Metadata } from 'next'
import './globals.css'
import AnimatedBackground from '../components/AnimatedBackground'

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
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-dark text-light font-sans">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  )
}
