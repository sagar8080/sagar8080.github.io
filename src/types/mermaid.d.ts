// Ambient declaration so TypeScript doesn't fail in environments where
// `mermaid` isn't yet installed (the package is in package.json. Run
// `npm install` and the real types from the published package will take
// precedence over this fallback).
declare module 'mermaid' {
  type ThemeVariables = Record<string, string>

  interface MermaidConfig {
    startOnLoad?: boolean
    theme?: string
    securityLevel?: 'strict' | 'loose' | 'antiscript' | 'sandbox'
    fontFamily?: string
    themeVariables?: ThemeVariables
    flowchart?: Record<string, unknown>
    sequence?: Record<string, unknown>
    [key: string]: unknown
  }

  interface RenderResult {
    svg: string
    bindFunctions?: (element: Element) => void
  }

  interface MermaidAPI {
    initialize: (config: MermaidConfig) => void
    render: (id: string, text: string) => Promise<RenderResult>
  }

  const mermaid: MermaidAPI
  export default mermaid
}
