// Components mapping passed to next-mdx-remote. Custom <pre> handler detects
// fenced ```mermaid blocks and renders them via the Mermaid client component
// instead of as a code block.

import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import Mermaid from '@/components/site/Mermaid'
import { PullQuote, Sidenote, Stat, Figure, Aside } from '@/components/site/WritingPrimitives'

type CodeChild = {
  props?: {
    className?: string
    children?: ReactNode
  }
}

function extractText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (
    typeof node === 'object' &&
    node !== null &&
    'props' in (node as { props?: { children?: ReactNode } })
  ) {
    const props = (node as { props?: { children?: ReactNode } }).props
    return extractText(props?.children)
  }
  return ''
}

export const mdxComponents = {
  pre: (props: ComponentPropsWithoutRef<'pre'>) => {
    const child = props.children as CodeChild | undefined
    const className = child?.props?.className ?? ''

    // Mermaid blocks: ```mermaid ... ```
    if (className.includes('language-mermaid')) {
      const code = extractText(child?.props?.children).replace(/\n$/, '')
      return <Mermaid chart={code} />
    }

    // Default: render the styled <pre> for other code fences.
    return <pre {...props} />
  },
  // Inline visual primitives. Drop these into MDX posts to break up dense
  // prose. See WritingPrimitives.tsx for the full surface.
  PullQuote,
  Sidenote,
  Stat,
  Figure,
  Aside,
}
