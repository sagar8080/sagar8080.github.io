import Link from 'next/link'
import { PageHeader, Eyebrow, Tag, StatusPill, Section } from '@/components/site/Atoms'
import Spotlight from '@/components/site/Spotlight'
import { projects as otherProjects } from '@/lib/content'

type FeaturedProject = {
  slug: string
  title: string
  status: 'live' | 'shipped' | 'in-development'
  statusLabel: string
  oneLine: string
  tags: string[]
  productHref?: string
  githubHref?: string
}

// Headline systems. Each has a full case-study page.
const featured: FeaturedProject[] = [
  {
    slug: 'pulseql',
    title: 'PulseQL',
    status: 'live',
    statusLabel: 'v1.1 — releasing soon',
    oneLine:
      'Governed analytics workspace for teams that want AI-assisted data work with review, privacy, and operational trust.',
    tags: ['Data Workspace', 'Governed AI', 'Reviewable Workflows'],
    productHref: '/products/pulseql',
    githubHref: 'https://github.com/sagar8080/pulseQL-releases',
  },
  {
    slug: 'atrium',
    title: 'Atrium',
    status: 'in-development',
    statusLabel: 'In development · Phase 2',
    oneLine:
      'Enterprise knowledge product for teams that need cited answers from company documents, access-aware experiences, and honest refusal when the corpus is not enough.',
    tags: ['Enterprise Knowledge', 'Citations', 'Access-Aware AI'],
  },
  {
    slug: 'relay',
    title: 'Relay',
    status: 'in-development',
    statusLabel: 'In development',
    oneLine:
      'Coordination product for AI-assisted engineering teams that need shared context, clearer verification, and safer workflows across tools.',
    tags: ['AI Engineering', 'Team Context', 'Workflow Safety'],
    githubHref: 'https://github.com/sagar8080',
  },
]

// Filter out projects already covered as featured case studies.
const featuredIds = new Set(['semantic-search'])
const others = otherProjects.filter((p) => !featuredIds.has(p.id))

export default function ProjectsIndexPage() {
  return (
    <div className="mx-auto max-w-[90rem] px-6 pb-24 pt-12 md:pt-16">
      <div className="mx-auto max-w-editorial space-y-20">
      <PageHeader
        eyebrow="Projects"
        title="Case studies & other work."
        lede="Headline systems get a public product summary: problem, requirements, product choices, and outcome. The summaries stay product-level by design."
      />

      <Section>
        <Eyebrow label="Case studies" />
        <ul className="space-y-3">
          {featured.map((p) => (
            <li key={p.slug}>
              <Spotlight className="surface group overflow-hidden">
              <Link
                href={`/projects/${p.slug}`}
                className="block p-7 md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-[22px] font-semibold text-terracotta transition-colors group-hover:text-terracotta-2 md:text-[26px]">
                        {p.title}
                      </h2>
                      <StatusPill kind={p.status}>{p.statusLabel}</StatusPill>
                    </div>
                    <p className="mt-3 max-w-2xl text-[14px] leading-[1.7] text-zinc-400 md:text-[15px]">
                      {p.oneLine}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <li key={t}>
                          <Tag>{t}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col items-start gap-2 text-[12.5px] text-zinc-500 md:items-end">
                    <span className="font-mono uppercase tracking-eyebrow text-zinc-600">
                      Read case study
                    </span>
                    <span className="text-[15px] text-zinc-300 transition-colors group-hover:text-accent">
                      →
                    </span>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      {p.productHref && (
                        <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                          Product page
                        </span>
                      )}
                      {p.githubHref && (
                        <span className="rounded-md border border-hairline bg-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-eyebrow text-zinc-400">
                          GitHub
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
              </Spotlight>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Eyebrow label="Other work" />
        <p className="max-w-2xl text-[14px] leading-[1.7] text-zinc-400 md:text-[14.5px]">
          Earlier and adjacent projects. Shipped, archived, or experimental. Each
          links to source. Same patterns recur under NDA elsewhere.
        </p>

        <ul className="grid gap-3 sm:grid-cols-2">
          {others.map((p) => (
            <li key={p.id}>
              <Spotlight className="surface group h-full overflow-hidden">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-3 p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-[16px] font-semibold text-terracotta md:text-[17px]">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-eyebrow text-zinc-600">
                    {p.categoryLabel}
                  </span>
                </div>
                <p className="text-[13px] leading-[1.65] text-zinc-400">
                  {p.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  <ul className="flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 4).map((t) => (
                      <li key={t}>
                        <Tag>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                  <span className="ml-auto text-[12px] text-zinc-500 transition-colors group-hover:text-white">
                    Source ↗
                  </span>
                </div>
              </a>
              </Spotlight>
            </li>
          ))}
        </ul>
      </Section>
      </div>
    </div>
  )
}
