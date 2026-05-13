import { CaseStudy, CaseStudyData } from '@/components/site/CaseStudy'

const data: CaseStudyData = {
  eyebrow: 'Case study · Infrastructure',
  title:
    'Relay. Shared context and load-bearing safety for AI-assisted engineering teams.',
  status: 'In development',
  oneLine:
    'A coordination layer for engineering teams whose work is now half-AI — shared context, visible verification, and review patterns that survive the velocity.',
  tags: ['AI Engineering', 'Team Context', 'Workflow Safety'],

  problem:
    'Every engineering team I\'ve watched adopt AI coding tools hits the same wall around month three. The bottleneck stops being how fast you can generate code and starts being how fast you can verify what was generated, by whom, and with what context. Decisions evaporate into side channels. Reviews lose teeth. Relay is the bet that the next interesting product surface in AI engineering isn\'t a better autocomplete — it\'s the coordination layer underneath the autocompletes.',

  constraints: [
    'Help humans and agents share working context without forcing either to write status updates.',
    'Make verification something you can point at, not something you have to vouch for.',
    'Respect the fact that engineering context is sensitive — code, decisions, and people\'s reasoning don\'t leak.',
    'Sit alongside whatever AI coding tools the team already uses, not replace them.',
  ],

  overview: [
    'A coordination product for teams whose engineering work is now half-AI: shared context that travels with the work, verification someone other than the author can inspect, and review patterns that don\'t collapse the moment the team starts moving fast.',
    'It\'s aimed at the teams that have already crossed the "AI is making us productive" line and are looking for the second-order question — how do we keep the work defensible as it speeds up?',
  ],

  decisions: [
    {
      decision: 'Verification has to be visible',
      why:
        'AI-assisted engineering generates a lot of plausible-looking work. Teams need to distinguish actual proof from plausible claims at a glance — not by re-running everything themselves. Visibility of verification is the load-bearing UX bet.',
    },
    {
      decision: 'Context follows the work, not the tool',
      why:
        'The more tools a team uses, the easier it is for important decisions to vanish into side channels. Relay\'s job is to keep relevant context attached to the change as it moves between tools, agents, and humans.',
    },
    {
      decision: 'Safety is a product property, not a vibe',
      why:
        'Vibes-based safety doesn\'t survive a real incident. Relay encodes review and coordination patterns explicitly, so a team\'s safety posture isn\'t whatever the loudest engineer felt comfortable with that week.',
    },
  ],

  outcome: [
    'In active development with focused conversations open with teams running multi-tool AI engineering workflows. The product is shaped around three properties — shared context, visible verification, explicit review — whose absence is what teams eventually write a postmortem about.',
  ],

  current:
    'Active development. Open to early conversations with teams whose AI-assisted engineering velocity is starting to outpace their ability to verify, review, and coordinate.',

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
