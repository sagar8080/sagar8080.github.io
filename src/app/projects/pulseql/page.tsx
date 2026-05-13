import { CaseStudy, CaseStudyData } from '@/components/site/CaseStudy'

const data: CaseStudyData = {
  eyebrow: 'Case study · Product',
  title: 'PulseQL. Governed data work, built for review.',
  status: 'Active',
  oneLine:
    'A desktop workspace for teams that want AI-assisted data work without giving up review, privacy, or governance.',
  tags: ['Data Workspace', 'Governed AI', 'Reviewable Workflows'],

  problem:
    'Most analytics teams I\'ve worked with end up in one of two corners. They ban AI from production data work because it can\'t survive a review, or they let it operate invisibly and inherit work nobody can defend. Both are losing positions for the same reason — the work isn\'t inspectable. PulseQL is the bet that the uncomfortable middle, using AI but keeping every step visible, is the version teams will actually trust.',

  constraints: [
    'Feel like an analyst\'s tool, not an admin console — engineers and analysts had to be able to use it without help from a platform team.',
    'Treat review as how the work moves, not as a bolt-on approval step at the end.',
    'Make privacy and governance default behavior, not opt-in configuration.',
    'Make every output defensible — the kind of work an analyst could put in front of a finance lead or a compliance review without flinching.',
  ],

  overview: [
    'A focused desktop workspace where teams can ask data questions, watch AI-assisted work get drafted in front of them, and decide what they\'re willing to ship. The whole loop — ask, review, refine, approve, share — happens in one place instead of spreading across notebooks, dashboards, and chat threads.',
    'The promise is plain: faster iteration on the easy questions, stronger evidence on the hard ones, and nothing leaving the workspace that the team can\'t stand behind.',
  ],

  decisions: [
    {
      decision: 'Review is the workflow, not a checkpoint',
      why:
        'AI assistance only earns trust when the team can see what was proposed before they accept it. PulseQL makes the proposed work the primary view; approval is the side effect of having actually looked at it, not a separate hoop.',
    },
    {
      decision: 'Governance ships with the product',
      why:
        'The teams I built this for can\'t treat data access, approvals, or audit trails as Phase 2. Those have to be visible in the first screen, or the product fails on day one inside a serious organization.',
    },
    {
      decision: 'Stay narrow on purpose',
      why:
        'PulseQL doesn\'t try to be a platform. It tries to be the best workspace for the specific moment when someone is using AI to draft data work that other people will rely on. Everything else is intentionally out of scope.',
    },
  ],

  outcome: [
    'v1.1 currently in late-stage testing across macOS, Windows, and Linux — releasing soon. Early users are the kind I wanted: small data teams that care about being able to defend the work they ship.',
  ],

  current:
    'Active development. Early-access conversations are open with teams whose review and governance needs don\'t fit generic AI data tools.',

  links: [
    { label: 'Launch page', href: '/products/pulseql', accent: true },
    { label: 'Email. Early access conversations', href: 'mailto:sagardas.work@gmail.com?subject=PulseQL' },
  ],
}

export default function Page() {
  return <CaseStudy data={data} />
}
