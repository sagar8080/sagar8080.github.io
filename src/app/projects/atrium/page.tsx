import { CaseStudy, CaseStudyData } from '@/components/site/CaseStudy'

const data: CaseStudyData = {
  eyebrow: 'Case study · Product',
  title: 'Atrium. Grounded answers from your own documents, with permissions kept honest.',
  status: 'In development',
  oneLine:
    'A knowledge product that gives teams grounded answers from their own documents — with citations, access boundaries, and honest refusal when the source material won\'t support an answer.',
  tags: ['Enterprise Knowledge', 'Citations', 'Access-Aware AI'],

  problem:
    'Every enterprise has the same problem in a different costume: critical decisions live inside scattered documents, and the tools meant to find them either hallucinate confidently or return the same keyword soup in a friendlier wrapper. Atrium starts from the opposite premise — that an answer the team can\'t verify is worse than no answer at all.',

  constraints: [
    'Citations had to be inspectable, not decorative — a click should land on the actual source paragraph.',
    'Permission boundaries had to be respected at the answer layer, not just the search index. If you can\'t see a doc, the answer can\'t silently use it.',
    'When the available material doesn\'t support an answer, the product had to say so plainly. Refusal had to be a feature.',
    'The first useful answer had to land in minutes, not after a six-month rollout.',
  ],

  overview: [
    'A knowledge product that lets teams connect the documents they already have — wherever those live — and ask questions of them with citations attached and access boundaries respected. When there isn\'t enough material to ground an answer, Atrium says so instead of guessing.',
    'It\'s shaped for the teams that can\'t accept a confident-sounding wrong answer: legal, finance, security, customer success, and the small group of leaders who depend on those teams to be right.',
  ],

  decisions: [
    {
      decision: 'Refusal is a feature, not a fallback',
      why:
        'A confident wrong answer destroys more trust than ten "I don\'t know"s. Refusal is the design choice that makes the product credible when it does answer — and the choice that most generic AI search tools won\'t make.',
    },
    {
      decision: 'Permissions are part of the experience',
      why:
        'Enterprise knowledge products that punt on access boundaries get pulled out by security in week three. Atrium treats access as a first-class input to every answer, not a bolt-on filter applied after.',
    },
    {
      decision: 'Every answer points to its evidence',
      why:
        'Verifiability is the only durable form of trust in AI search. Atrium is built so users can land on the exact passage that supports any claim — which is also the only honest way to evaluate the product.',
    },
  ],

  outcome: [
    'In active development with design-partner conversations underway. The shape is settled around three properties — grounded, refused, and permission-aware — that, taken together, separate it from generic AI search.',
  ],

  current:
    'Active development. Open to design-partner conversations with teams whose document corpus and access boundaries don\'t fit generic AI search tools.',

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
