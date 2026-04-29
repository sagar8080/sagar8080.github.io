import type { Metadata } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sagar8080.github.io'),
  title: 'Sagar Das | Senior Software & Data Engineer',
  description:
    'Senior Software Engineer and Data Engineer — mission-critical data platforms, cloud architecture, and agentic AI systems.',
  keywords: 'Data Engineer, Software Engineer, GCP, AWS, AI, RAG, Iceberg, Rust',
  authors: [{ name: 'Sagar Das' }],
  openGraph: {
    title: 'Sagar Das | Senior Software & Data Engineer',
    description: 'Data platforms, enterprise cloud architecture, and AI systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-mono min-h-screen bg-void text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
