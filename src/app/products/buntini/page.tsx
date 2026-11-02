import type { Metadata } from 'next'
import BuntiniProduct from './BuntiniProduct'

export const metadata: Metadata = {
  title: 'Buntini · A little company for your Mac · Sagar Das',
  description: 'Meet Buntini, a private desktop cat for your Mac. Chat, get help with everyday tasks, and choose your AI. Download for Apple silicon Macs with macOS 13 or later.',
  openGraph: {
    title: 'Buntini · A little company. A little superpower.',
    description: 'A private desktop companion for your Mac, with a brain you choose and a personality you can make your own.',
    images: [{ url: '/buntini/icon.svg', alt: 'Snowbell, Buntini’s white desktop cat' }],
  },
}

export default function Page() {
  return <BuntiniProduct />
}
