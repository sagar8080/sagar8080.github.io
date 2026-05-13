import { CaseStudy, CaseStudyData } from '@/components/site/CaseStudy'

const data: CaseStudyData = {
  eyebrow: 'Case study · Product',
  title: 'Atrium. Grounded answers from your own documents, with permissions kept honest.',
  status: 'In development',
  oneLine:
    'A knowledge product for teams that need answers from company documents with citations, permission-aware experiences, and honest refusal when the corpus is not enough.',
  tags: ['Enterprise Knowledge', 'Citations', 'Access-Aware AI'],

  problem:
    'Enterprises sit on documents scattered across many tools. Search returns noise, and generic AI chatbots can sound confident even when the source material does not support the answer. Atrium is focused on making company knowledge easier to ask about without pretending uncertainty is solved by nicer phrasing.',

  constraints: [
    'Respect customer access boundaries.',
    'Time to first answer in minutes, not weeks.',
    'Show citations users can inspect.',
    'Say so when the available material does not support an answer.',
  ],

  overview: [
    'Atrium is presented publicly as an enterprise knowledge experience: connect content, ask questions, inspect citations, and avoid unsupported answers.',
    'The public summary stays focused on the user-facing problem, product promise, and design-partner fit.',
  ],

  decisions: [
    {
      decision: 'Refusal as a feature, not a fallback',
      why:
        'The product should be more useful when it is honest about uncertainty. Unsupported answers damage trust faster than slower answers.',
    },
    {
      decision: 'Permissions must be part of the experience',
      why:
        'Enterprise knowledge products have to respect who is allowed to see what. That cannot be reduced to a prompt or a footnote.',
    },
    {
      decision: 'Citations are non-negotiable',
      why:
        'Users should be able to inspect why an answer exists. The product is oriented around verifiable answers, not just fluent responses.',
    },
  ],

  outcome: [
    'In active development with the public story limited to the user-facing problem, product promise, and design-partner fit.',
  ],

  current:
    'Active development. Open to design-partner conversations with teams whose document corpus and access boundaries do not fit generic AI search tools.',

  links: [
    {
      label: 'Email. Design-partner conversations',
      href: 'mailto:sagardas.work@gmail.com?subject=Atrium%20design%20partner',
      accent: true,
    },
    { label: 'Other projects', href: '/projects' },
  ],
}

export default function Page() {
  return <CaseStudy data={data} />
}
