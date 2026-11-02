import Link from 'next/link'

// Static exports cannot use server redirects. The refresh also works without JavaScript.
export default function PageRedirect({ href }: { href: string }) {
  return (
    <section className="theme-page theme-content space-y-6 py-24">
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <h1 className="font-display text-4xl text-terracotta">Continue to Kivi.</h1>
      <p>This page has moved.</p>
      <Link href={href} className="text-terracotta underline">Explore Kivi →</Link>
    </section>
  )
}
