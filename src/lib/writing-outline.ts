export type ArticleHeading = { id: string; text: string }

export function getArticleHeadings(content: string): ArticleHeading[] {
  return Array.from(content.replace(/```[\s\S]*?```/g, '').matchAll(/^##\s+(.+)$/gm), (match, i) => ({
    id: `section-${i + 1}`,
    text: match[1].replace(/[*_`]/g, ''),
  }))
}

type Node = { type: string; depth?: number; data?: { hProperties?: Record<string, unknown> }; children?: Node[] }

// Assign anchors during MDX compilation, so links work before hydration.
export function remarkSectionIds() {
  return (tree: Node) => {
    let count = 0
    function visit(node: Node) {
      if (node.type === 'heading' && node.depth === 2) {
        node.data ??= {}
        node.data.hProperties = { ...node.data.hProperties, id: `section-${++count}` }
      }
      node.children?.forEach(visit)
    }
    visit(tree)
  }
}
