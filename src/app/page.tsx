import Portfolio from './Portfolio'
import { getAllPosts } from '@/lib/writing'

export default async function HomePage() {
  const all = await getAllPosts()
  const recentPosts = all
    .filter((post): post is typeof post & { status: 'draft' | 'published' } =>
      post.status === 'published' || post.status === 'draft'
    )
    .slice(0, 3)
    .map(({ slug, title, date, status }) => ({ slug, title, date, status }))

  return <Portfolio recentPosts={recentPosts} />
}
