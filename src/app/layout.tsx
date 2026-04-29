import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen font-sans antialiased bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100`}
      >
        {children}
      </body>
    </html>
  )
}
