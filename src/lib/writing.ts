import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

// `published`. Full local body, indexed in the published section
// `draft`    . Outline only, indexed in the draft section
// `archive`  . Older work that lives elsewhere (Medium); index renders it
//               as a link-out card and the local /writing/[slug] page shows a
//               short blurb + redirect notice
export type PostStatus = 'draft' | 'published' | 'archive'

export type PostFrontmatter = {
  title: string
  date: string // ISO YYYY-MM-DD
  excerpt: string
  status: PostStatus
  tags?: string[]
  // Optional pointer to the original publication (Medium, etc). When present
  // the post page shows an "Originally on Medium" notice in the header and
  // the index can render the entry as a primarily external link.
  mediumUrl?: string
  // Estimated reading time in minutes (optional. Falls back to a word count).
  readingTime?: number
  series?: string
  seriesOrder?: number
}

export type Post = PostFrontmatter & {
  slug: string
  content: string // raw MDX body
}

const WRITING_DIR = path.join(process.cwd(), 'content', 'writing')

async function readMdxFiles(): Promise<{ slug: string; raw: string }[]> {
  let entries: string[]
  try {
    entries = await fs.readdir(WRITING_DIR)
  } catch {
    return []
  }
  const mdxFiles = entries.filter((e) => e.endsWith('.mdx'))
  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '')
      const raw = await fs.readFile(path.join(WRITING_DIR, file), 'utf8')
      return { slug, raw }
    })
  )
}

function parsePost(slug: string, raw: string): Post {
  const { data, content } = matter(raw)
  return {
    slug,
    title: String(data.title ?? slug),
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? ''),
    excerpt: String(data.excerpt ?? ''),
    status: (data.status as PostStatus) ?? 'draft',
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    mediumUrl:
      typeof data.mediumUrl === 'string' && data.mediumUrl.length > 0
        ? data.mediumUrl
        : undefined,
    readingTime:
      typeof data.readingTime === 'number' ? data.readingTime : Math.max(1, Math.ceil(content.replace(/```[\s\S]*?```/g, '').split(/\s+/).length / 220)),
    series: typeof data.series === 'string' ? data.series : undefined,
    seriesOrder: typeof data.seriesOrder === 'number' ? data.seriesOrder : undefined,
    content,
  }
}

// Chronological across every status. Same-day series retain their reading order.
function sortPosts(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    const date = b.date.localeCompare(a.date)
    if (date) return date
    if (a.series && a.series === b.series) return (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0)
    return a.title.localeCompare(b.title)
  })
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await readMdxFiles()
  return sortPosts(files.map(({ slug, raw }) => parsePost(slug, raw)))
}

export async function getPostSlugs(): Promise<string[]> {
  const files = await readMdxFiles()
  return files.map((f) => f.slug)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const raw = await fs.readFile(path.join(WRITING_DIR, `${slug}.mdx`), 'utf8')
    return parsePost(slug, raw)
  } catch {
    return null
  }
}
