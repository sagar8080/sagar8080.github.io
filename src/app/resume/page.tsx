import {
  Eyebrow,
  Tag,
  Section,
  PrimaryButton,
  SecondaryButton,
} from '@/components/site/Atoms'
import { education, experience, profile } from '@/lib/content'

export default function ResumePage() {
  return (
    <div className="theme-page theme-resume">
      <div className="theme-content space-y-16 md:space-y-20">
      <header className="max-w-[760px] space-y-6">
        <p className="eyebrow">
          <span className="eyebrow-bar" aria-hidden />
          Résumé
        </p>
        <h1 className="font-display text-[44px] font-semibold leading-[1.04] tracking-normal text-terracotta sm:text-[58px] lg:text-[68px]">
          Data &amp; <em>AI Engineer</em>
        </h1>
        <p className="max-w-[680px] text-[16px] leading-[1.75] text-zinc-400 md:text-[17px]">
          {profile.tagline}
        </p>
        <p className="max-w-[720px] text-[14px] leading-[1.7] text-zinc-500 md:text-[14.5px]">
          {profile.subhead}
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

      <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-600">
        <span>Jump to</span>
        <a href="#experience" className="text-zinc-400 transition-colors hover:text-accent">
          Experience
        </a>
        <a href="#education" className="text-zinc-400 transition-colors hover:text-accent">
          Education
        </a>
      </nav>

      <div className="space-y-16">
        <Section id="experience">
            <Eyebrow label="Experience" />
            <ol className="space-y-4">
              {experience.map((exp) => (
                <li key={exp.id}>
                  <div className="resume-experience">
                    <div className="grid gap-5 xl:grid-cols-[1fr_auto] xl:items-start">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/25 bg-accent/10 font-mono text-[10.5px] text-accent">
                            {exp.index}
                          </span>
                          <div className="min-w-0">
                            <h2 className="font-display text-[20px] font-semibold text-terracotta md:text-[22px]">
                              {exp.position}
                            </h2>
                            <p className="mt-0.5 text-[14px] text-zinc-400">{exp.company}</p>
                          </div>
                        </div>
                      </div>
                      <p className="font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500 xl:text-right">
                        {exp.duration}
                        <span className="text-zinc-700"> · </span>
                        {exp.location}
                      </p>
                    </div>

                    <p className="mt-5 max-w-3xl text-[14px] leading-[1.75] text-zinc-300 md:text-[14.5px]">
                      {exp.summary}
                    </p>

                    {exp.metrics && exp.metrics.length > 0 && (
                      <ul className="resume-metrics mt-6 grid gap-5 sm:grid-cols-3">
                        {exp.metrics.map((m, i) => (
                          <li key={m.value + i} className="px-0 py-1">
                            <div className="font-display text-[18px] font-semibold tabular-nums text-white">
                              {m.value}
                            </div>
                            <div className="mt-0.5 text-[11.5px] text-zinc-500">
                              {m.caption}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    <ul className="mt-5 space-y-2.5">
                      {exp.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex gap-3 text-[13.5px] leading-[1.7] text-zinc-400 md:text-[14px]"
                        >
                          <span
                            aria-hidden
                            className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-1.5 pt-4">
                      {exp.technologies.map((t) => (
                        <li key={t}>
                          <Tag>{t}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
        </Section>

        <Section id="education">
          <Eyebrow label="Education" />
          <ol className="grid gap-4 md:grid-cols-2">
            {education.map((ed) => (
              <li key={ed.id}>
                <div className="resume-education h-full p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-[18px] font-semibold text-terracotta md:text-[20px]">
                        {ed.degree}
                      </h2>
                      {ed.focus && (
                        <p className="mt-1 text-[13px] text-zinc-500">{ed.focus}</p>
                      )}
                      <p className="mt-2 text-[13.5px] text-zinc-400">{ed.institution}</p>
                    </div>
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  </div>
                  <p className="mt-4 font-mono text-[10.5px] uppercase tracking-eyebrow text-zinc-500">
                    {ed.duration} · {ed.location}
                  </p>
                  {ed.highlights && ed.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2 pt-4">
                      {ed.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-[13px] leading-[1.7] text-zinc-400"
                        >
                          <span
                            aria-hidden
                            className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>
      </div>
      </div>
    </div>
  )
}
