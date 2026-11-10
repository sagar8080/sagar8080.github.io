import {
  Eyebrow,
  Tag,
  Section,
  PrimaryButton,
  SecondaryButton,
} from '@/components/site/Atoms'
import ScrollEngraving from '@/components/site/ScrollEngraving'
import Credentials from '@/components/site/Credentials'
import { education, experience, profile } from '@/lib/content'

export default function ResumePage() {
  return (
    <div className="theme-page theme-resume">
      <div className="theme-content space-y-16 md:space-y-20">
        <header className="folio-page-heading engraving-scene engraving-scene-page space-y-6">
          <ScrollEngraving variant="record" />
          <Eyebrow label="Résumé" />
          <h1>Data &amp; <em>AI Engineer</em></h1>
          <p className="resume-lede">
            I build the pipelines, data stores, and services behind analytics and AI products.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <PrimaryButton href={profile.resumeUrl} external>
              Download PDF
            </PrimaryButton>
            <SecondaryButton href="https://linkedin.com/in/sagardas08" external>
              LinkedIn
            </SecondaryButton>
            <SecondaryButton href="mailto:sagardas.work@gmail.com">Email</SecondaryButton>
          </div>
        </header>

        <nav className="resume-nav" aria-label="Résumé sections">
          <span>Jump to</span>
          <a href="#credentials">Credentials</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </nav>

        <div className="space-y-16">
          <Section id="credentials">
            <h2 className="eyebrow"><span className="eyebrow-rule" aria-hidden />Credentials</h2>
            <Credentials />
          </Section>
          <Section id="experience">
            <h2 className="eyebrow"><span className="eyebrow-rule" aria-hidden />Experience</h2>
            <ol>
              {experience.map((exp) => (
                <li key={exp.id} className="resume-experience">
                  <div className="resume-entry-header">
                    <h3 className="resume-entry-title">
                      {exp.position} <span className="resume-employer">at {exp.company}</span>
                    </h3>
                    <p className="resume-entry-meta">
                      {exp.duration} <span aria-hidden="true">·</span> {exp.location}
                    </p>
                  </div>

                  <p className="resume-entry-summary">{exp.summary}</p>

                  {exp.metrics && exp.metrics.length > 0 && (
                    <ul className="resume-metrics">
                      {exp.metrics.map((metric) => (
                        <li key={metric.caption}>
                          <span className="resume-metric-value">{metric.value}</span>{' '}
                          <span>{metric.caption}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul className="resume-details">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>

                  <ul className="resume-technologies">
                    {exp.technologies.map((technology) => (
                      <li key={technology}><Tag>{technology}</Tag></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="education">
            <h2 className="eyebrow"><span className="eyebrow-rule" aria-hidden />Education</h2>
            <ol className="resume-education-list">
              {education.map((ed) => (
                <li key={ed.id} className="resume-education">
                  <div className="resume-entry-header">
                    <h3 className="resume-entry-title">
                      {ed.degree} <span className="resume-employer">at {ed.institution}</span>
                    </h3>
                    <p className="resume-entry-meta">
                      {ed.duration} <span aria-hidden="true">·</span> {ed.location}
                    </p>
                  </div>
                  {ed.focus && <p className="resume-entry-summary">{ed.focus}</p>}
                  {ed.highlights && ed.highlights.length > 0 && (
                    <ul className="resume-details">
                      {ed.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </Section>
        </div>
      </div>
    </div>
  )
}
