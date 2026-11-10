import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile, telemetry } from '@/lib/content'
import BuntiniCat from '@/components/buntini/Cat'
import GreetingCycle from '@/components/site/GreetingCycle'
import InkPlate from '@/components/site/InkPlate'
import PhotoStrip from '@/components/site/PhotoStrip'
import ScrollEngraving from '@/components/site/ScrollEngraving'
import ProjectCover from '@/components/site/ProjectCover'
import Credentials from '@/components/site/Credentials'
import ImpactProof from '@/components/site/ImpactProof'
import './portfolio.css'

export type HomePostPreview = {
  slug: string
  title: string
  date: string
  status: 'draft' | 'published'
}

const featured = [
  {
    id: 'kivi',
    number: '01',
    title: 'Kivi',
    category: 'Local-first workbench',
    description: 'Review a proposed change, then check what actually ran.',
  },
  {
    id: 'buntini',
    number: '02',
    title: 'Buntini',
    category: 'macOS desktop companion',
    description: 'The same care, on a smaller scale: reminders and Mail drafts you can review.',
  },
] as const

const otherWork = [
  { id: 'atrium', number: '03', title: 'Atrium', description: 'Enterprise search with citations and access controls' },
  { id: 'relay', number: '04', title: 'Relay', description: 'Shared context for teams building with AI' },
]

function KiviArtwork() {
  const signalPath = 'M103 201h88l50 60h84l47-60h85'

  return (
    <div className="work-art work-art-kivi" aria-hidden="true">
      <span className="work-art-label">KIVI / WORKFLOW CONCEPT</span>
      <svg viewBox="0 0 560 370" className="kivi-schematic" fill="none">
        <defs>
          <pattern id="kivi-grid" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#f5f2e8" opacity=".3" />
          </pattern>
        </defs>
        <path d="M0 0h560v370H0z" fill="url(#kivi-grid)" />
        <g stroke="currentColor" strokeWidth="1.4">
          <path d="M103 201h85l54-61h83l47 61h85" strokeDasharray="4 5" />
          <path className="kivi-build-line" d={signalPath} pathLength="1" />
          <circle className="kivi-build-ring" cx="280" cy="201" r="79" pathLength="1" />
          <circle cx="280" cy="201" r="59" opacity=".4" />
          <circle cx="280" cy="201" r="103" strokeDasharray="2 7" opacity=".6" />
          <path d="M280 91v19m0 182v19m-110-110h18m184 0h18" />
          <rect x="89" y="187" width="28" height="28" fill="#203bae" />
          <rect className="kivi-evidence-node" x="443" y="187" width="28" height="28" fill="#fbff9e" />
          <path className="kivi-evidence-check" d="m450 201 5 5 10-11" stroke="#203bae" />
          <path d="M96 201h14m-7-7v14" />
        </g>
        <path className="kivi-scroll-signal" d={signalPath} pathLength="1" stroke="#fbff9e" strokeWidth="3" />
        <path className="kivi-trace" d={signalPath} stroke="#fbff9e" strokeWidth="3" />
        <circle className="kivi-approval-mark" cx="280" cy="261" r="5" fill="#fbff9e" />
        <g fill="currentColor" textAnchor="middle" fontSize="12" letterSpacing="1.3">
          <text x="103" y="243">OBJECTIVE</text>
          <text x="280" y="65">APPROVALS</text>
          <text x="457" y="243">EVIDENCE</text>
        </g>
        <text x="280" y="221" className="kivi-schematic-name" textAnchor="middle" fill="currentColor">Kivi</text>
        <g className="kivi-ledger">
          <rect x="94" y="291" width="372" height="62" rx="2" fill="#142773" stroke="#b6c6fa" strokeOpacity=".7" />
          <path d="M280 291v62" stroke="#b6c6fa" strokeOpacity=".36" />
          <g className="kivi-ledger-approval">
            <text x="109" y="313" fontSize="10" letterSpacing="1.2" fill="#b6c6fa">02 / APPROVAL</text>
            <text x="109" y="336" fontSize="14" fill="#fbff9e">Decision recorded</text>
          </g>
          <g className="kivi-ledger-evidence">
            <text x="295" y="313" fontSize="10" letterSpacing="1.2" fill="#b6c6fa">03 / EVIDENCE</text>
            <text x="295" y="336" fontSize="14" fill="#fbff9e">Run result attached</text>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default function Portfolio({ recentPosts }: { recentPosts: HomePostPreview[] }) {
  return (
    <div className="portfolio">
      <section className="folio-opening" aria-labelledby="hero-title">
        <div className="folio-hero folio-shell">
          <div className="hero-stage">
            <div className="hero-upper engraving-scene engraving-scene-hero">
              <div className="hero-copy">
                <p className="folio-label"><span className="folio-dot" /> {profile.role}</p>
                <Link href="/products/kivi" className="hero-current"><span>Currently building</span> Kivi <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
              <div className="hero-greeting">
                <InkPlate className="greeting-backdrop" />
                <GreetingCycle />
              </div>
            </div>
            <h1 id="hero-title" className="hero-name">{profile.name}<span aria-hidden="true">.</span></h1>
          </div>
          <div className="hero-rail">
            <a href="#selected-work" className="folio-link">Explore the work <ArrowDown size={16} aria-hidden="true" /></a>
            <span className="hero-cue" aria-hidden="true"><span /><span /><span /></span>
            <a href="#photographs" className="folio-link">Camera roll <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <div className="folio-story">
        <section id="selected-work" className="folio-shell folio-section folio-work" aria-labelledby="work-title">
          <div className="folio-heading engraving-scene">
            <div>
              <p className="folio-label chapter-label"><span>01</span> / Tools I’m building</p>
              <h2 id="work-title">Selected work.</h2>
            </div>
            <Link href="/projects" className="folio-link">All projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>

          <div className="work-spread">
            {featured.map((project) => (
              <article key={project.id} className={`work-feature work-feature-${project.id}`}>
                <ProjectCover href={`/products/${project.id}`} title={project.title}>
                  {project.id === 'kivi' ? <KiviArtwork /> : (
                    <div className="work-art work-art-buntini" aria-hidden="true">
                      <span className="work-art-label">BUNTINI / DESKTOP COMPANION</span>
                      <span className="buntini-art-type">pspsps<span>!</span></span>
                      <div className="buntini-art-cat">
                        <BuntiniCat id="homebuntini" alive={false} look={{ coat: 'white', eyes: 'green', accessory: 'bow', motion: 'calm', accent: '#cf5639' }} />
                      </div>
                    </div>
                  )}
                  <span className="work-open" aria-hidden="true"><span>Explore {project.title}</span><ArrowUpRight /></span>
                </ProjectCover>
                <div className="work-info">
                  <p className="folio-label">{project.number} / {project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link href={`/projects/${project.id}`} className="folio-link" aria-label={`Read the ${project.title} case study`}>
                    Case study <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="folio-index">
            {otherWork.map((project) => (
              <Link href={`/projects/${project.id}`} className="folio-row" key={project.id}>
                <span className="folio-label">{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ArrowUpRight size={23} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        <section id="impact" className="folio-record engraving-scene engraving-scene-record" aria-labelledby="record-title">
          <ScrollEngraving variant="record" />
          <div className="folio-shell folio-section">
            <div className="folio-heading record-heading">
              <div>
                <p className="folio-label chapter-label"><span>02</span> / From my engineering roles</p>
                <h2 id="record-title">Measured impact.</h2>
              </div>
              <Link href="/resume" className="folio-link">Full résumé <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
            <ImpactProof />
            <p className="folio-label record-outcomes-label">Other outcomes</p>
            <dl className="record-metrics">
              {telemetry.filter((item) => item.label !== 'ONBOARDING_TIME').map((item) => (
                <div key={item.label}>
                  <dt>{item.caption}</dt>
                  <dd>{item.value}<small>{item.unit}</small></dd>
                </div>
              ))}
            </dl>
            <p className="record-note">I built a retrieval prototype to find themes and quotes in 100K+ survey responses.</p>
          </div>
        </section>
        <section className="folio-shell folio-credentials" aria-label="Credentials">
          <Credentials compact />
        </section>

        {recentPosts.length > 0 && (
          <section className="folio-shell folio-section folio-writing" aria-labelledby="notes-title">
            <div className="folio-heading engraving-scene">
              <ScrollEngraving variant="writing" />
              <div>
                <p className="folio-label chapter-label"><span>03</span> / Notes from building</p>
                <h2 id="notes-title">Writing.</h2>
              </div>
              <Link href="/writing" className="folio-link">All writing <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="folio-index writing-index">
              {recentPosts.map((post) => (
                <Link className="folio-row" href={`/writing/${post.slug}`} key={post.slug}>
                  <span className="folio-label">
                    {post.status === 'draft' ? 'In progress' : new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short', year: 'numeric', timeZone: 'UTC',
                    })}
                  </span>
                  <h3>{post.title}</h3>
                  <ArrowUpRight size={23} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section id="photographs" className="folio-photos" aria-labelledby="photos-title">
          <div className="folio-shell folio-heading photo-heading engraving-scene">
            <ScrollEngraving variant="photos" className="engraving-photos" />
            <div>
              <p className="folio-label chapter-label"><span>{recentPosts.length ? '04' : '03'}</span> / Away from the screen</p>
              <h2 id="photos-title">Camera roll.</h2>
            </div>
            <p className="photo-intro">Olympus E-M10.<br />A few reasons to stop walking.</p>
          </div>
          <PhotoStrip />
        </section>

        <section className="folio-contact engraving-scene engraving-scene-contact" aria-labelledby="contact-title">
          <ScrollEngraving variant="contact" />
          <div className="folio-shell">
            <p className="folio-label chapter-label"><span>{recentPosts.length ? '05' : '04'}</span> / Contact</p>
            <h2 id="contact-title"><Link href="/contact">Say hello.<ArrowUpRight aria-hidden="true" /></Link></h2>
          </div>
        </section>
      </div>
    </div>
  )
}
