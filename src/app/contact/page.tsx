import { PageHeader, Eyebrow, Section } from '@/components/site/Atoms'
import { contactLinks } from '@/lib/content'

const helpfulAreas = [
  'Data platform builds — ingestion, lakehouse, semantics, governance',
  'Agentic AI workflows — retrieval, evaluation, agent memory, contracts',
  'Migration work — moving legacy data stacks toward GCP, AWS, or Iceberg',
  'Reviews and architecture conversations — short engagements with written notes',
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-6 pb-24 pt-12 md:pt-16">
      <div className="mx-auto max-w-4xl space-y-14">
      <PageHeader
        eyebrow="Contact"
        title="Always happy to hear from you."
        lede="Consulting, full-time roles, collaborations, or just a friendly chat about a problem you're thinking through. Email tends to be the easiest way to start; I try to reply within a working day."
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
        <Eyebrow label="Where I can usually help" />
        <ul className="space-y-2.5">
          {helpfulAreas.map((item) => (
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
        <p className="mt-5 text-[13.5px] leading-[1.7] text-zinc-500 md:text-[14px]">
          Open to other directions too. If your problem doesn&apos;t quite fit the list
          above, please still reach out — worst case I can probably point you toward
          someone better suited.
        </p>
      </Section>

      <div className="surface relative overflow-hidden p-7 md:p-9">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
        <p className="font-display text-[18px] leading-[1.5] text-zinc-200 md:text-[20px]">
          A couple of lines about what you&apos;re working on and what would be helpful
          is plenty to start. We can take it from there at whatever pace works for
          you.
        </p>
      </div>
      </div>
    </div>
  )
}
