import './impact-proof.css'

const sourceToIngestion = 'M127 58H157Q170 58 179 47L189 37Q198 26 211 26H224Q237 26 246 37L256 47Q265 58 273 58'
const ingestionToDataset = 'M327 58H355Q368 58 377 69L387 79Q396 90 409 90H427Q440 90 449 79L459 69Q468 58 473 58'

export default function ImpactProof() {
  return (
    <figure className="impact-proof">
      <figcaption className="impact-proof-caption">
        <p className="impact-proof-label">Data onboarding</p>
        <p className="impact-proof-metric">
          <span>4 days</span>
          <span className="sr-only"> to </span>
          <span className="impact-proof-arrow" aria-hidden="true">→</span>
          <span>hours</span>
        </p>
        <p className="impact-proof-method">Metadata-driven pipelines</p>
      </figcaption>

      <div className="impact-proof-diagram" role="img" aria-label="Source configuration flows through ingestion to a ready dataset">
        <svg viewBox="0 0 600 116" fill="none" aria-hidden="true">
          <path className="impact-proof-guides" d="M48 58H552M100 15v14m0 58v14M300 15v14m0 58v14M500 15v14m0 58v14" />
          <g className="impact-proof-ghost">
            <path d={sourceToIngestion} />
            <path d={ingestionToDataset} />
          </g>
          <path className="impact-proof-trace impact-proof-trace-source" d={sourceToIngestion} pathLength={1} />
          <path className="impact-proof-trace impact-proof-trace-dataset" d={ingestionToDataset} pathLength={1} />
          <g className="impact-proof-packets">
            <path className="impact-proof-packet impact-proof-packet-source" d={sourceToIngestion} pathLength={1} />
            <path className="impact-proof-packet impact-proof-packet-trail impact-proof-packet-source-trail" d={sourceToIngestion} pathLength={1} />
            <path className="impact-proof-packet impact-proof-packet-dataset" d={ingestionToDataset} pathLength={1} />
            <path className="impact-proof-packet impact-proof-packet-trail impact-proof-packet-dataset-trail" d={ingestionToDataset} pathLength={1} />
          </g>
          <g className="impact-proof-rings">
            <circle className="impact-proof-ring impact-proof-activate-source" cx="100" cy="58" r="33" />
            <circle className="impact-proof-ring impact-proof-activate-ingestion" cx="300" cy="58" r="33" />
            <circle className="impact-proof-ring impact-proof-activate-dataset" cx="500" cy="58" r="33" />
          </g>
          <g className="impact-proof-nodes">
            <circle className="impact-proof-node impact-proof-activate-source" cx="100" cy="58" r="27" />
            <circle className="impact-proof-node impact-proof-activate-ingestion" cx="300" cy="58" r="27" />
            <circle className="impact-proof-node impact-proof-activate-dataset" cx="500" cy="58" r="27" />
          </g>
          <g className="impact-proof-symbols">
            <path d="M90 49h20m-20 9h20m-20 9h20" />
            <circle cx="96" cy="49" r="2" />
            <circle cx="104" cy="58" r="2" />
            <circle cx="98" cy="67" r="2" />
            <path d="m288 54 12-6 12 6-12 6-12-6Zm0 6 12 6 12-6m-24 6 12 6 12-6" />
            <path d="m490 58 7 7 13-14" />
          </g>
        </svg>
        <div className="impact-proof-stages" aria-hidden="true">
          <span>Source configuration</span>
          <span>Ingestion</span>
          <span>Dataset ready</span>
        </div>
      </div>
    </figure>
  )
}
