import { PageHeader, Eyebrow, Section } from '@/components/site/Atoms'
import { contactLinks } from '@/lib/content'

const fits = [
  'Data platform builds. Ingestion, lakehouse, semantics, governance',
  'Agentic AI workflows. Retrieval, eval gates, agent memory, contracts',
  'Migration work. Legacy data stacks to GCP / AWS / Iceberg',
  'Reviews and architecture audits. Short engagements, written deliverables',
]

const notForMe = [
  'Generic prompt engineering or "AI strategy" decks',
  'AI products that need to read raw production data to be useful',
  'Full-stack consumer app builds without a data or AI core',
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-12 md:pt-16 space-y-14">
      <PageHeader
        eyebrow="Contact"
        title="Open to consulting, full-time roles, and collaborations on data and AI infrastructure."
        lede="Async-first, with clear milestones and measurable exits. Best reached over email. I aim to reply within a working day."
      />

      <Section>
        <Eyebrow label="Channels" />
        <ul className="grid gap-3 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target={link.id === 'email' ? undefined : '_blank'}
                rel={link.id === 'email' ? undefined : 'noopener noreferrer'}
                className="surface group flex h-full flex-col justify-between p-5"
              >
                <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
                  {link.label}
                </p>
                <p className="mt-3 truncate text-[14.5px] font-medium text-white">
                  {link.display}
                </p>
                <span className="mt-3 text-[12px] text-zinc-500 transition-colors group-hover:text-accent">
                  {link.id === 'email' ? 'Compose →' : 'Open ↗'}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Eyebrow label="What I'm best suited for" />
        <ul className="space-y-2.5">
          {fits.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[14.5px] leading-[1.7] text-zinc-300 md:text-[15px]"
            >
              <span
                aria-hidden
                className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Eyebrow label="Probably not me" />
        <ul className="space-y-2.5">
          {notForMe.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-[14px] leading-[1.7] text-zinc-500"
            >
              <span
                aria-hidden
                className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-zinc-700"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="surface relative overflow-hidden p-7 md:p-9">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
        <p className="font-display text-[18px] leading-[1.5] text-zinc-200 md:text-[20px]">
          The best emails describe a specific problem, what you&apos;ve already tried,
          and what &ldquo;done&rdquo; looks like. I&apos;ll come back with whether I think
          I&apos;m the right person for it. Even if the answer is no.
        </p>
      </div>
    </div>
  )
}
