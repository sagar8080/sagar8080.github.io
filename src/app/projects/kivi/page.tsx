import type { Metadata } from 'next'
import { CaseStudy, CaseStudyData } from '@/components/site/CaseStudy'

export const metadata: Metadata = {
  title: 'Kivi · Case study · Sagar Das',
  description: 'Designing a local-first workbench for delegated data, AI, and ML work, with persistent objectives, bounded execution, and verifiable outcomes.',
}

const data: CaseStudyData = {
  eyebrow: 'Case study · Product',
  title: 'Kivi. Delegated work, with evidence that stays.',
  status: 'In development',
  oneLine:
    'A local-first workbench for delegated data, AI, and ML work, designed to keep the objective, authority, and evidence together from investigation to verified outcome.',
  tags: ['Data, AI & ML', 'Delegated Work', 'Local-first'],

  problem:
    'A useful AI answer is only the beginning of real data work. An investigation can span queries, pipeline changes, model runs, approvals, and remote jobs. When that work is scattered across chats and tools, the person has to reconstruct what was requested, what was approved, what actually ran, and which evidence supports the result. Kivi is built around carrying that responsibility through the whole job.',

  constraints: [
    'Keep the objective and its evidence independent of any one conversation, model, or application window.',
    'Give people, agents, and automation the same governed capabilities, with explicit permissions and cost limits.',
    'Keep project files local and reviewable in version control, with credentials outside the project.',
    'Make data access intentional: no unrequested scans, and no raw data disclosure to a model by default.',
    'Check whether the requested outcome was achieved and reconcile uncertain execution before retrying.',
  ],

  overview: [
    'Kivi brings data connections, analytics, engineering, applied ML, AI tools, and operations into a project-based desktop workbench. The working loop starts with an objective and its boundaries, then connects the plan, proposed changes, execution, and verification to that objective.',
    'The design keeps continuity in a project host rather than in the chat window. A small Rust kernel owns permissions, budgets, approvals, and the work record. Domain services supply capabilities, while the app provides editors, review surfaces, and evidence views.',
  ],

  decisions: [
    {
      decision: 'Make the objective the unit of work',
      why:
        'A conversation is one way to reach an objective. The objective needs to keep its acceptance criteria, plan revisions, attempts, and evidence when the conversation changes or execution pauses for approval.',
    },
    {
      decision: 'Enforce boundaries in the execution path',
      why:
        'Permissions and budgets belong in the system that runs the work. Kivi is designed to check data disclosure, execution limits, and approvals at that boundary, so changing a model or interface does not change the rules.',
    },
    {
      decision: 'Keep authored work in project files',
      why:
        'Pipelines, models, dashboards, and rules should be inspectable and versioned like code. Local state records execution and evidence, while authored files remain available for review and reuse.',
    },
    {
      decision: 'Treat verification and recovery as part of the job',
      why:
        'A successful tool call does not prove that an objective was met. The design links checks to acceptance criteria and requires uncertain operations to be reconciled before retrying, so recovery does not duplicate consequential work.',
    },
  ],

  outcome: [
    'Kivi replaces the earlier analytics-workspace approach with a broader design for delegated work across data, AI, and ML. The product brings the workbench and domain capabilities together around a shared project and governed execution path.',
    'Development is focused on continuity across interruptions, reviewable changes, and evidence-backed outcomes. These goals guide implementation and validation as the product develops.',
  ],

  current:
    'In development, with macOS first. Durable execution, recovery, and the workbench experience remain active areas of implementation and validation.',

  links: [
    { label: 'Explore Kivi', href: '/products/kivi', accent: true },
    { label: 'Email about Kivi', href: 'mailto:sagardas.work@gmail.com?subject=Kivi' },
  ],
}

export default function Page() {
  return <CaseStudy data={data} />
}
