import { CaseStudy, CaseStudyData } from '@/components/site/CaseStudy'

const data: CaseStudyData = {
  eyebrow: 'Case study · Infrastructure',
  title:
    'Relay. Shared context and load-bearing safety for AI-assisted engineering teams.',
  status: 'In development',
  oneLine:
    'A coordination product for AI-assisted engineering teams that need shared context, clearer verification, and safer workflows across tools.',
  tags: ['AI Engineering', 'Team Context', 'Workflow Safety'],

  problem:
    'As teams adopt multiple AI coding tools, the bottleneck shifts from generation to coordination. Decisions get scattered, verification becomes hard to audit, and teams need stronger ways to understand what happened before they trust the next change.',

  constraints: [
    'Help humans and agents share context without adding busywork.',
    'Make verification easier to inspect.',
    'Respect sensitive engineering context.',
    'Keep the product useful across different tools and workflows.',
  ],

  overview: [
    'Relay is presented publicly as a team workflow product for AI-assisted engineering: shared context, clearer proof of work, and safer collaboration across coding tools.',
    'The public summary stays focused on the user-facing problem and team workflow value while the product is being developed.',
  ],

  decisions: [
    {
      decision: 'Verification should be visible',
      why:
        'Teams need to distinguish actual proof from plausible claims. Relay is shaped around making that distinction easier in AI-assisted engineering work.',
    },
    {
      decision: 'Context should follow the work',
      why:
        'The more tools a team uses, the easier it is for important decisions to vanish into side channels. The product direction is to keep context available where decisions are made.',
    },
    {
      decision: 'Safety should not depend on vibes',
      why:
        'AI-assisted engineering workflows need explicit review and coordination patterns. The public summary stays focused on workflow value while the product evolves.',
    },
  ],

  outcome: [
    'In active development with the summary focused on team workflow value and the problem Relay is meant to solve.',
  ],

  current:
    'Active development. Open to early conversations with teams running multi-tool AI coding workflows where context, verification, and review quality are becoming bottlenecks.',

  links: [
    {
      label: 'Email. Early access',
      href: 'mailto:sagardas.work@gmail.com?subject=Relay%20early%20access',
      accent: true,
    },
  ],
}

export default function Page() {
  return <CaseStudy data={data} />
}
