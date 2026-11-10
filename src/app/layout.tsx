import type { Metadata } from 'next'
import { Manrope, JetBrains_Mono, Newsreader } from 'next/font/google'
import './globals.css'
import './secondary-theme.css'
import './writing.css'
import './engraving.css'
import './smooth-scroll.css'
import SiteNav from '@/components/site/SiteNav'
import SiteFooter from '@/components/site/SiteFooter'
import SiteBackdrop from '@/components/site/SiteBackdrop'
import SmoothScroll from '@/components/site/SmoothScroll'

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
const editorial = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-editorial',
  style: ['normal', 'italic'],
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
    'Data Engineer, AI Engineer, Data Platforms, AI Workflows, Cloud Modernization, Kivi, Buntini',
  authors: [{ name: 'Sagar Das' }],
  openGraph: {
    title: 'Sagar Das · Data & AI Engineer',
    description:
      'Scalable data platforms, cloud modernization, semantic layers, RAG systems, and trusted agentic AI infrastructure.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${manrope.variable} ${manropeDisplay.variable} ${jetbrainsMono.variable} ${editorial.variable} font-sans min-h-screen flex flex-col antialiased`}
      >
        <SiteBackdrop>
          <SmoothScroll />
          <SiteNav />
          <main id="main-content" tabIndex={-1} className="relative z-10 flex-1">
            {children}
          </main>
          <div className="relative z-10">
            <SiteFooter />
          </div>
        </SiteBackdrop>
      </body>
    </html>
  )
}
