'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { ArrowUpRight, ArrowDown, ArrowRight } from 'lucide-react'
import { experience, telemetry } from '@/lib/content'
import PhotoStrip from '@/components/site/PhotoStrip'
import GreetingCycle from '@/components/site/GreetingCycle'
import './portfolio.css'

export type HomePostPreview = {
  slug: string
  title: string
  date: string
  status: 'draft' | 'published'
  excerpt: string
}

const projects = [
  {
    id: 'pulseql',
    number: '01',
    title: 'PulseQL',
    category: 'DATA WORKSPACE / RUST + TYPESCRIPT',
    description: 'Powerful analysis. Thoughtful guardrails.',
    detail: 'A governed desktop workspace for AI-assisted data analysis.',
    status: 'Explore the product',
    href: '/products/pulseql',
  },
  {
    id: 'atrium',
    number: '02',
    title: 'Atrium',
    category: 'ENTERPRISE KNOWLEDGE / RAG',
    description: 'Answers with something to stand on.',
    detail: 'Company knowledge, grounded in citations and access boundaries.',
    status: 'In development',
    href: '/projects/atrium',
  },
  {
    id: 'relay',
    number: '03',
    title: 'Relay',
    category: 'AI WORKFLOWS / ENGINEERING TOOLS',
    description: 'Shared context. Better decisions.',
    detail: 'A coordination layer for teams building with AI.',
    status: 'In development',
    href: '/projects/relay',
  },
]

function ProjectArt({ id }: { id: string }) {
  if (id === 'pulseql')
    return (
      <div className="project-art art-pulse" aria-hidden="true">
        <div className="art-corner">P/01 / THE DATA WORKSPACE</div>
        <div className="pulse-window">
          <div className="window-top">
            <span className="window-mark">p.</span>
            <span>PulseQL</span>
            <span className="window-dots">•••</span>
          </div>
          <div className="window-body">
            <div className="window-sidebar">
              <span>WORKSPACE</span>
              <b>◈ Overview</b>
              <span>▤ Sources</span>
              <span>⌘ Workpad</span>
              <span>↗ Activity</span>
              <i>LOCAL FIRST</i>
            </div>
            <div className="window-main">
              <span className="mini-label">YOUR DATA, IN CONTEXT</span>
              <strong>
                Good questions.
                <br />
                Grounded answers.
              </strong>
              <div className="query-line">
                Ask something of your data <ArrowUpRight size={13} />
              </div>
              <div className="mini-chart">
                {[24, 40, 32, 58, 48, 69, 62, 85, 76, 96, 88, 115].map(
                  (h, i) => (
                    <i key={i} style={{ height: h }} />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
        <span className="art-footnote">
          Interface study · governed analytics
        </span>
      </div>
    )
  if (id === 'atrium')
    return (
      <div className="project-art art-atrium" aria-hidden="true">
        <span className="art-corner">A/02 / KNOWLEDGE, CONNECTED</span>
        <div className="atrium-form">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <i key={i} style={{ inset: `${i * 16}px ${i * 19}px 0` }} />
          ))}
          <span>a</span>
        </div>
        <span className="art-footnote">From information to understanding.</span>
      </div>
    )
  return (
    <div className="project-art art-relay" aria-hidden="true">
      <span className="art-corner">R/03 / CONTEXT IN MOTION</span>
      <div className="relay-form">
        <i />
        <i />
        <i />
        <span className="relay-node node-one" />
        <span className="relay-node node-two" />
        <span className="relay-node node-three" />
      </div>
      <span className="art-footnote">One shared thread. Every tool.</span>
    </div>
  )
}

export default function HomeClient({
  recentPosts,
}: {
  recentPosts: HomePostPreview[]
}) {
  const pageRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = pageRef.current
    if (!root) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return
    const sections = root.querySelectorAll(
      '.editorial-heading, .project-entry, .about-spread, .impact-strip, .experience-section, .note-row, .contact-spread',
    )
    sections.forEach((section) => section.setAttribute('data-reveal', ''))
    root.classList.add('motion-ready')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => {
      observer.disconnect()
      root.classList.remove('motion-ready')
    }
  }, [])
  return (
    <div className="portfolio" ref={pageRef}>
      <section className="portfolio-hero" aria-labelledby="hero-title">
        <div className="hero-topline">
          <span>
            <i /> DATA & AI ENGINEER
          </span>
          <span>SELECTED PROJECTS & ENGINEERING NOTES</span>
        </div>
        <div className="hero-composition">
          <div className="hero-type">
            <p className="hero-intro">Hi, I’m Sagar.</p>
            <h1 id="hero-title">
              <span className="hero-title-line">I build the data systems</span>
              <em>powering AI</em>
            </h1>
            <p className="hero-description">
              I turn fragmented enterprise data into reliable platforms, then build
              AI applications on top of them, from ingestion and processing to
              retrieval, evaluation, and production deployment.
            </p>
            <a
              className="round-link"
              href="#selected-work"
              aria-label="Explore selected work"
            >
              <span className="circle-arrow">
                <ArrowDown size={19} />
              </span>
              See the work
            </a>
          </div>
          <div className="hero-greeting">
            <GreetingCycle />
          </div>
        </div>
        <div className="hero-bottom">
          <span>PYTHON / SQL / SPARK / BIGQUERY / RUST / TYPESCRIPT</span>
          <span>
            20M events/day · 900+ modules modernized{' '}
            <span className="tiny-star">✳</span>
          </span>
        </div>
      </section>

      <section
        className="selected-work"
        id="selected-work"
        aria-labelledby="work-title"
      >
        <div className="editorial-heading">
          <div>
            <span className="folio-label">01 / SELECTED WORK</span>
            <h2 id="work-title">
              Projects & <em>case studies.</em>
            </h2>
          </div>
          <Link className="underlined-link" href="/projects">
            All projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-entry project-${project.id}`}
              key={project.id}
            >
              <Link
                href={project.href}
                className="project-art-link"
                aria-label={`Explore ${project.title}`}
              >
                <ProjectArt id={project.id} />
                <span className="project-open">
                  <ArrowUpRight size={22} />
                </span>
              </Link>
              <div className="project-meta">
                <span>{project.category}</span>
                <span>{project.number}</span>
              </div>
              <div className="project-title">
                <h3>
                  <Link href={project.href}>{project.title}</Link>
                </h3>
                <span>{project.status}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <p className="project-detail">{project.detail}</p>
              <Link
                className="case-study-link"
                href={`/projects/${project.id}`}
              >
                Read case study <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="about-spread" aria-labelledby="about-title">
        <div>
          <span className="folio-label">02 / THE APPROACH</span>
          <div className="about-symbol" aria-hidden="true">
            ✳
          </div>
        </div>
        <div>
          <h2 id="about-title">
            The best systems make
            <br />
            the complex feel <em>clear.</em>
          </h2>
          <div className="about-copy">
            <p>
              My work lives where data engineering meets product thinking. From
              enterprise lakehouses to local AI tools, I care about what happens
              beneath the interface and how it feels to use what’s above it.
            </p>
            <p>
              Build the foundation. Keep the evidence visible. Make failure
              recoverable. These are the details that turn an interesting
              prototype into something people can rely on.
            </p>
          </div>
          <Link className="underlined-link" href="/resume">
            More about my background <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <div className="impact-strip" aria-label="Selected career outcomes">
        {telemetry.map((item) => (
          <div key={item.label}>
            <strong>
              {item.value}
              <small>{item.unit}</small>
            </strong>
            <span>{item.caption}</span>
          </div>
        ))}
      </div>

      <section
        className="experience-section"
        aria-labelledby="experience-title"
      >
        <div>
          <span className="folio-label">03 / ALONG THE WAY</span>
          <h2 id="experience-title">
            Good work.
            <br />
            <em>Good company.</em>
          </h2>
          <Link className="underlined-link" href="/resume">
            Full résumé <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="experience-list">
          {experience.map((job) => (
            <div className="experience-row" key={job.id}>
              <span>{job.duration}</span>
              <h3>{job.company}</h3>
              <p>{job.position}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="photo-section" aria-labelledby="photo-title">
        <div className="editorial-heading">
          <div>
            <span className="folio-label">04 / AWAY FROM THE SCREEN</span>
            <h2 id="photo-title">
              A different kind of <em>focus.</em>
            </h2>
          </div>
          <p>
            Wandering, noticing, making photographs.
            <br />A few frames from life in between.
          </p>
        </div>
        <PhotoStrip showHeader={false} />
      </section>

      {recentPosts.length > 0 && (
        <section className="notes-section" aria-labelledby="notes-title">
          <div className="editorial-heading">
            <div>
              <span className="folio-label">05 / FIELD NOTES</span>
              <h2 id="notes-title">
                Thinking <em>out loud.</em>
              </h2>
            </div>
            <Link className="underlined-link" href="/writing">
              All writing <ArrowUpRight size={17} />
            </Link>
          </div>
          <div>
            {recentPosts.slice(0, 3).map((post) => (
              <Link
                className="note-row"
                href={`/writing/${post.slug}`}
                key={post.slug}
              >
                <span>
                  {post.status === 'draft'
                    ? 'IN PROGRESS'
                    : new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                        timeZone: 'UTC',
                      })}
                </span>
                <h3>{post.title}</h3>
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="contact-spread">
        <span className="folio-label">HAVE SOMETHING IN MIND?</span>
        <Link href="/contact">
          Let’s make
          <br />
          <em>it matter.</em>
          <span className="contact-arrow">
            <ArrowUpRight />
          </span>
        </Link>
        <div>
          <p>Interesting problems. Thoughtful people. Good conversations.</p>
          <a
            href="https://github.com/sagar8080"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find me on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
