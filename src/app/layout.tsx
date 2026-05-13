import type { Metadata } from 'next'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SiteNav from '@/components/site/SiteNav'
import SiteFooter from '@/components/site/SiteFooter'
import AtmosphereBackground from '@/components/site/AtmosphereBackground'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
})
const manropeDisplay = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sagar8080.github.io'),
  title: 'Sagar Das · Data & AI Engineer',
  description:
    'Data & AI Engineer building scalable data platforms, modernization systems, and Rust + TypeScript infrastructure for trusted agentic AI workflows.',
  keywords:
    'Data Engineer, AI Engineer, Data Platforms, AI Workflows, Cloud Modernization, PulseQL',
  authors: [{ name: 'Sagar Das' }],
  openGraph: {
    title: 'Sagar Das · Data & AI Engineer',
    description:
      'Scalable data platforms, cloud modernization, semantic layers, RAG systems, and trusted agentic AI infrastructure.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${manropeDisplay.variable} ${jetbrainsMono.variable} font-sans bg-paper text-ink-2 min-h-screen flex flex-col antialiased`}
      >
        {/* Edge-anchored survey rings + Claude-style warm blobs that
            breathe in the corners. The middle of the viewport is left
            clean so content reads on plain paper. z-index 0 so it sits
            above body's bg-paper, below the grain (z 1) and content (z 10). */}
        <AtmosphereBackground />
        {/* Quiet paper grain on top of the atmosphere. */}
        <div className="grain-overlay" aria-hidden />
        <SiteNav />
        <main className="relative z-10 flex-1">{children}</main>
        <div className="relative z-10">
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
