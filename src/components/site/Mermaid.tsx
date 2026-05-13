'use client'

import { useEffect, useId, useState } from 'react'

// Renders a Mermaid diagram client-side. Mermaid is loaded via dynamic import
// so it stays out of the initial bundle for routes that don't use it. Themed
// for the light paper palette: ink text, line borders, terracotta accent,
// sage and ochre supports.
export default function Mermaid({ chart }: { chart: string }) {
  const reactId = useId().replace(/[^a-zA-Z0-9]/g, '_')
  const [svg, setSvg] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      try {
        const m = await import('mermaid')
        const mermaid = m.default

        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          securityLevel: 'loose',
          // Small console-style text keeps long labels inside Mermaid's
          // generated node boxes without stretching the diagram vertically.
          fontFamily:
            'Consolas, "JetBrains Mono", "SFMono-Regular", Menlo, Monaco, monospace',
          themeVariables: {
            // Surfaces (paper)
            background: '#faf7f2',
            primaryColor: '#faf7f2',
            primaryTextColor: '#1c1917',
            primaryBorderColor: '#d4cdbe',

            // Lines + edges (ink)
            lineColor: '#78716c',
            edgeLabelBackground: '#faf7f2',

            // Accent (terracotta)
            secondaryColor: '#f4e6dd',
            secondaryBorderColor: '#b45a3c',
            secondaryTextColor: '#1c1917',
            tertiaryColor: '#f3efe7',
            tertiaryBorderColor: '#e5e0d6',
            tertiaryTextColor: '#44403c',

            // Cluster (subgraph) backgrounds
            clusterBkg: 'rgba(28, 25, 23, 0.02)',
            clusterBorder: '#d4cdbe',

            // Text
            textColor: '#1c1917',
            fontSize: '9px',
            mainBkg: '#faf7f2',
            nodeBorder: '#d4cdbe',

            // Sequence diagrams
            actorBkg: '#faf7f2',
            actorBorder: '#b45a3c',
            actorTextColor: '#1c1917',
            actorLineColor: '#78716c',
            signalColor: '#44403c',
            signalTextColor: '#1c1917',
            labelBoxBkgColor: '#faf7f2',
            labelBoxBorderColor: '#b45a3c',
            labelTextColor: '#1c1917',
            loopTextColor: '#78716c',
            noteBkgColor: '#f4e6dd',
            noteBorderColor: '#b45a3c',
            noteTextColor: '#1c1917',

            // ER / state
            attributeBackgroundColorOdd: '#faf7f2',
            attributeBackgroundColorEven: 'rgba(28, 25, 23, 0.02)',
          },
          flowchart: {
            curve: 'basis',
            padding: 14,
            nodeSpacing: 44,
            rankSpacing: 56,
            useMaxWidth: true,
            htmlLabels: true,
            // Wrap long node labels at ~160px so they stay inside the
            // shape; the matching CSS in globals.css applies the actual
            // word-wrap to the rendered foreignObject text.
            wrappingWidth: 160,
          },
          sequence: {
            useMaxWidth: true,
            actorMargin: 56,
            messageMargin: 36,
            boxMargin: 10,
          },
          themeCSS: `
            .nodeLabel, .edgeLabel, .label, text,
            foreignObject div, foreignObject span, foreignObject p {
              font-family: Consolas, "JetBrains Mono", "SFMono-Regular", Menlo, Monaco, monospace !important;
              font-size: 9px !important;
              letter-spacing: 0;
              line-height: 1.25 !important;
              text-align: center !important;
              text-anchor: middle !important;
            }
            /* Wrap long labels inside their node shape rather than letting
               them spill horizontally. The 160px ceiling matches the
               wrappingWidth set in the flowchart config above. */
            .node .label > div,
            .node .nodeLabel,
            foreignObject p {
              max-width: 160px !important;
              white-space: normal !important;
              overflow-wrap: break-word !important;
              word-break: normal !important;
              hyphens: auto;
            }
            .node foreignObject { overflow: visible !important; }
            .node rect, .node polygon, .node circle, .node ellipse {
              stroke-width: 1.25px;
            }
          `,
        })

        const id = `mmd_${reactId}`
        const { svg } = await mermaid.render(id, chart)
        if (!cancelled) setSvg(svg)
      } catch (e) {
        if (!cancelled) {
          const msg = e instanceof Error ? e.message : 'Diagram render failed.'
          setErr(msg)
        }
      }
    })()

    return () => {
      cancelled = true
    }
  }, [chart, reactId])

  return (
    <figure className="mermaid-block my-10 overflow-hidden rounded-md border border-line bg-paper">
      <div className="flex items-center justify-between border-b border-line px-4 py-2 font-mono text-[10.5px] uppercase tracking-eyebrow text-ink-3">
        <span>diagram</span>
        <span className="hidden text-ink-4 sm:inline">scroll horizontally if needed</span>
      </div>
      <div className="overflow-x-auto px-3 py-5 md:px-6 md:py-6">
        {svg ? (
          <div
            className="mermaid-rendered flex w-full justify-center"
            // SVG is generated by mermaid, which we trust.
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ) : err ? (
          <pre className="whitespace-pre-wrap font-mono text-[12px] text-terracotta">
            {err}
          </pre>
        ) : (
          <div className="grid h-32 place-items-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-3">
            rendering diagram…
          </div>
        )}
      </div>
    </figure>
  )
}
