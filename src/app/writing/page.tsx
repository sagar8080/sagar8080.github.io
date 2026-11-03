import type { Metadata } from 'next'
import { PageHeader } from '@/components/site/Atoms'
import WritingTimeline from '@/components/site/WritingTimeline'
import { getAllPosts } from '@/lib/writing'

export const metadata: Metadata = {
  title: 'Writing · Sagar Das',
  description: 'Notes on AI, agentic systems, and architecture. Search the archive or explore it by year and month.',
}

export default async function WritingIndex() {
  const posts = await getAllPosts()
  return (
    <div className="theme-page theme-writing">
      <div className="theme-content writing-content">
        <PageHeader
          eyebrow="The writing desk"
          title={<>Notes on the<br /><em>systems I build.</em></>}
          lede="Decisions, experiments, and lessons from building AI and data systems. An evolving record of how I think about the work."
        />
        <WritingTimeline posts={posts.map(({ content, ...post }) => ({
          ...post,
          searchText: content.replace(/```[\s\S]*?```/g, '').replace(/<[^>]*>/g, ' '),
        }))} />
      </div>
    </div>
  )
}
