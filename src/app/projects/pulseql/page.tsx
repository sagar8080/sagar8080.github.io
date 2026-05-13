import { CaseStudy, CaseStudyData } from '@/components/site/CaseStudy'

const data: CaseStudyData = {
  eyebrow: 'Case study · Product',
  title: 'PulseQL. Governed data work, built for review.',
  status: 'Active',
  oneLine:
    'A desktop product for teams that want AI-assisted data work with review, privacy, and governance built into the workflow.',
  tags: ['Data Workspace', 'Governed AI', 'Reviewable Workflows'],

  problem:
    'Data teams want faster answers and less tool switching, but most AI data products ask them to trade away control, reviewability, or privacy. PulseQL is built around the opposite premise: AI assistance should make data work easier to inspect, not harder to trust.',

  constraints: [
    'Keep the product understandable to analysts and engineers, not only platform teams.',
    'Make review and approval part of the normal workflow.',
    'Treat privacy and governance as default product expectations.',
    'Keep outputs traceable enough for serious business use.',
  ],

  overview: [
    'PulseQL presents a focused workspace where teams can ask questions, review AI-assisted work, and promote useful outputs without scattering the process across disconnected tools.',
    'The public product story is intentionally outcome-focused: faster iteration, clearer review, stronger governance, and less friction between analysis and production-ready data work.',
  ],

  decisions: [
    {
      decision: 'Review stays visible',
      why:
        'The product is designed so AI assistance does not become an invisible automation layer. Users should be able to understand what is being proposed before they rely on it.',
    },
    {
      decision: 'Governance is part of the product',
      why:
        'PulseQL is aimed at teams that cannot treat data access, approval, and auditability as afterthoughts. The workflow has to respect those realities from the first screen.',
    },
    {
      decision: 'Keep the surface focused',
      why:
        'The value is not another sprawling platform. It is a tighter workspace for the data workflows where AI can help without removing human judgement.',
    },
  ],

  outcome: [
    'Stable v1.0 shipping for macOS, Windows, and Linux. The product is positioned around governed AI-assisted data work and reviewable workflows.',
  ],

  current:
    'Active development. Roadmap conversations are being shaped with early users.',

  links: [
    { label: 'Launch page', href: '/products/pulseql', accent: true },
    { label: 'Email. Early access conversations', href: 'mailto:sagardas.work@gmail.com?subject=PulseQL' },
  ],
}

export default function Page() {
  return <CaseStudy data={data} />
}
