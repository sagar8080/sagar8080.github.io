import type { Metadata } from 'next'
import PageRedirect from '@/components/site/PageRedirect'

export const metadata: Metadata = {
  title: 'Continue to Kivi · Sagar Das',
  robots: { index: false },
  alternates: { canonical: '/projects/kivi/' },
}

export default function Page() {
  return <PageRedirect href="/projects/kivi/" />
}
