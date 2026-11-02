import type { Metadata } from 'next'
import KiviProduct from './KiviProduct'

export const metadata: Metadata = {
  title: 'Kivi · Delegated data, AI & ML work · Sagar Das',
  description: 'A local-first workbench for delegated data, AI, and ML work. Persistent objectives, explicit boundaries, and evidence from investigation to verified outcome. In development, macOS first.',
}

export default function Page() {
  return <KiviProduct />
}
