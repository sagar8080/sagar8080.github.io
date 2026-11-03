'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { Expand, X } from 'lucide-react'

export default function Mermaid({ chart }: { chart: string }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '_')
  const [svg, setSvg] = useState<string | null>(null)
  const [error, setError] = useState(false)
  const [large, setLarge] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const svgIds = new Set(Array.from((svg ?? '').matchAll(/\bid="([^"]+)"/g), match => match[1]))
  const expandedSvg = svg?.replace(/(id="|url\(#|href="#|#)([A-Za-z_][\w:-]*)/g, (match, prefix, name) => svgIds.has(name) ? `${prefix}${name}_expanded` : match)

  useEffect(() => {
    let cancelled = false
    setSvg(null)
    setError(false)
    ;(async () => {
      try {
        const { default: mermaid } = await import('mermaid')
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          securityLevel: 'strict',
          htmlLabels: false,
          fontFamily: 'Consolas, SFMono-Regular, monospace',
          themeVariables: {
            background: '#f8f4eb', primaryColor: '#f3efe7', primaryTextColor: '#302b24',
            primaryBorderColor: '#d4cdbe', lineColor: '#817361', textColor: '#302b24',
            edgeLabelBackground: '#f8f4eb', secondaryColor: '#f4e6dd', tertiaryColor: '#e8eadb',
            fontSize: '13px', clusterBkg: '#f2ecdf', clusterBorder: '#d4cdbe',
            actorBkg: '#f3efe7', actorBorder: '#a45037', actorTextColor: '#302b24',
            signalColor: '#746b5e', signalTextColor: '#302b24',
            noteBkgColor: '#f4e6dd', noteTextColor: '#302b24', noteBorderColor: '#b45a3c',
          },
          flowchart: { htmlLabels: false, curve: 'basis', padding: 18, nodeSpacing: 35, rankSpacing: 48, useMaxWidth: true, wrappingWidth: 190 },
          sequence: { useMaxWidth: true, actorMargin: 40, messageMargin: 30 },
        })
        const result = await mermaid.render(`diagram_${id}`, chart)
        if (!cancelled) setSvg(result.svg)
      } catch {
        if (!cancelled) setError(true)
      }
    })()
    return () => { cancelled = true }
  }, [chart, id])

  return (
    <figure className="mermaid-block not-prose">
      <figcaption className="diagram-toolbar"><span>Architecture / diagram</span><button type="button" disabled={!svg} onClick={() => { setLarge(false); dialog.current?.showModal() }} aria-label="Expand diagram"><Expand size={13} aria-hidden="true" /> Expand</button></figcaption>
      <div className="diagram-scroll" tabIndex={0} role="region" aria-label="Architecture diagram, scroll horizontally to explore">
        {svg ? <div className="mermaid-rendered" dangerouslySetInnerHTML={{ __html: svg }} /> : error ? <div className="diagram-fallback"><p>Diagram preview unavailable. The definition is available below.</p><details><summary>View diagram source</summary><pre>{chart}</pre></details></div> : <p className="diagram-loading" role="status">Drawing the diagram…</p>}
      </div>
      <dialog ref={dialog} className="diagram-dialog" aria-label="Expanded architecture diagram">
        <div className="diagram-dialog-head"><span>Architecture diagram</span><div className="diagram-dialog-actions"><button type="button" aria-pressed={!large} onClick={() => setLarge(false)}>Fit</button><button type="button" aria-pressed={large} onClick={() => setLarge(true)}>Larger</button><button type="button" onClick={() => dialog.current?.close()} aria-label="Close diagram"><X size={20} /></button></div></div>
        {expandedSvg && <div className={`diagram-dialog-content${large ? ' diagram-dialog-large' : ''}`} dangerouslySetInnerHTML={{ __html: expandedSvg }} />}
      </dialog>
    </figure>
  )
}
