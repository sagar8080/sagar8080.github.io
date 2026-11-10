import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/components/site/Atoms'
import { buntini } from '@/lib/buntini'

export const metadata: Metadata = {
  title: 'Download Buntini for macOS · Sagar Das',
  description: 'Download the latest Buntini disk image for Apple silicon Macs with macOS 13 or later.',
  robots: { index: false },
}

export default function Page() {
  return (
    <section className="theme-page theme-content theme-download space-y-6 py-24">
      {/* GitHub Pages is a static export; refresh provides a stable custom URL. */}
      <meta httpEquiv="refresh" content={`0;url=${buntini.downloadUrl}`} />
      <PageHeader
        eyebrow="Buntini for macOS"
        title={<>A little company <em>is on its way.</em></>}
        lede="Your download should start shortly. If it doesn’t, use the button below. Open the disk image, drag Buntini to Applications, and say hello."
        engraving="contact"
      />
      <p className="text-xs text-ink-3">{buntini.requirements}. Apple Intelligence requires macOS 26.</p>
      <div className="flex flex-wrap items-center gap-5">
        <a className="btn btn--md btn--primary" href={buntini.downloadUrl}><Download size={16} /> Download macOS installer</a>
        <Link href="/products/buntini" className="inline-flex items-center gap-2 text-sm text-terracotta"><ArrowLeft size={14} /> Back to Buntini</Link>
      </div>
      <a href={buntini.releasesUrl} className="inline-block text-xs text-ink-3 underline">Release notes and checksums</a>
    </section>
  )
}
