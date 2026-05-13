import HomeClient, { type HomePostPreview } from './HomeClient'
import { getAllPosts } from '@/lib/writing'

const HOME_POSTS_LIMIT = 4

export default async function HomePage() {
  const all = await getAllPosts()
  // Home only surfaces published + draft notes. Archive entries live behind
  // the /writing index and link out to Medium.
  const recentPosts: HomePostPreview[] = all
    .filter((p): p is typeof p & { status: 'draft' | 'published' } =>
      p.status === 'published' || p.status === 'draft'
    )
    .slice(0, HOME_POSTS_LIMIT)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      status: p.status,
      excerpt: p.excerpt,
    }))

  return <HomeClient recentPosts={recentPosts} />
}
