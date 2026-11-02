import type { Metadata } from 'next'
import { CaseStudy, type CaseStudyData } from '@/components/site/CaseStudy'
import { buntini } from '@/lib/buntini'

export const metadata: Metadata = {
  title: 'Buntini · Case study · Sagar Das',
  description: 'Building a private Mac companion with a playful character, a choice of AI models, and explicit permissions for everyday tasks.',
}

const data: CaseStudyData = {
  eyebrow: 'Case study · Desktop companion',
  title: 'Buntini. A little company, with a useful side.',
  status: 'Shipped',
  oneLine: 'A private desktop cat for the Mac that combines companionship, everyday assistance, and a choice of on-device or cloud AI.',
  tags: ['macOS', 'Personal AI', 'Local-first', 'Rust + React'],
  problem: 'Personal assistants can feel detached from the place where the work happens. They answer in a separate window, lose the context of the day, and ask people to trust broad access to their apps. Buntini explores a more personal shape: a companion that lives on the desktop, helps with small everyday tasks, and makes its boundaries visible.',
  constraints: [
    'Make the character feel present and expressive without getting in the way of the Mac.',
    'Let the person choose between Apple Intelligence, local models, and cloud providers.',
    'Keep conversations and memories on the Mac, with credentials in the macOS Keychain.',
    'Allow apps individually and require review of proposed reminders, calendar events, notes, and Mail drafts.',
    'Retain task inputs, approvals, and receipts so unfinished work can continue without silently repeating uncertain actions.',
  ],
  overview: [
    'Buntini is a desktop cat with customizable coats, eyes, and accessories. It roams and naps on windows, and opens a conversation when you want to ask for help. Everyday requests include music, summaries, timers, reminders, and questions about the apps you allow.',
    'A React interface and animated character sit over a Rust desktop application. Native helpers support Apple Intelligence, speech, and audio, while an MLX worker supports local models. The model choice changes where reasoning runs; the privacy and action controls stay part of the app.',
  ],
  decisions: [
    { decision: 'Give usefulness a little personality', why: 'The cat is part of the interaction, with a customizable look and expressive behavior. Its role is to make the assistant approachable while keeping the conversation and task details easy to reach.' },
    { decision: 'Separate companionship from model choice', why: 'People can use Apple Intelligence, a local Qwen or Gemma model, or a cloud provider. The companion remains familiar when they switch, and the app explains the requirements for each brain.' },
    { decision: 'Make access specific and reviewable', why: 'App access and cloud disclosure are separate controls. Local context sharing with cloud models starts off. Proposed actions show their details for review before execution, while recognized direct commands follow the explicit request.' },
    { decision: 'Keep evidence with saved tasks', why: 'A multi-step request may pause for approval or missing information. Saved tasks retain the inputs, decisions, and verified receipts needed to continue, and stop uncertain writes without automatically replaying them.' },
  ],
  outcome: [
    'An open-source Mac app that brings an animated companion, conversation, model selection, and everyday app integrations together. Distribution uses a Developer ID signed and notarized macOS installer.',
    'The product includes persistent timers, saved conversations, optional memories and morning briefs, and integrations with apps such as Calendar, Reminders, Notes, Music, and Mail. The portfolio preview illustrates the interaction; the downloadable app performs the work.',
  ],
  current: 'Available for Apple silicon Macs with macOS 13 or later. Apple Intelligence requires macOS 26. Device, permission-flow, and cloud-provider validation remain ongoing; capabilities depend on the selected brain and granted access.',
  links: [
    { label: 'Meet Buntini', href: '/products/buntini', accent: true },
    { label: 'Download for macOS', href: buntini.downloadUrl },
    { label: 'Source on GitHub', href: buntini.repository, external: true },
    { label: 'Privacy policy', href: buntini.privacyUrl, external: true },
  ],
}

export default function Page() {
  return <CaseStudy data={data} />
}
