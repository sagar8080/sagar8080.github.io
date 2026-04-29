'use client'

import { SynthNav } from '@/components/synthwave/SynthNav'
import { HudFrame } from '@/components/synthwave/HudFrame'
import { HeroTerminal } from '@/components/synthwave/HeroTerminal'
import { TelemetryStrip } from '@/components/synthwave/TelemetryStrip'
import { CapabilitiesGrid } from '@/components/synthwave/CapabilitiesGrid'
import { StackSection } from '@/components/synthwave/StackSection'
import { ExperienceLog } from '@/components/synthwave/ExperienceLog'
import { ProjectsGrid } from '@/components/synthwave/ProjectsGrid'
import { FeaturedProject } from '@/components/synthwave/FeaturedProject'
import { PhotographyAnalog } from '@/components/synthwave/PhotographyAnalog'
import { ContactTerminal } from '@/components/synthwave/ContactTerminal'
import { FooterTerminal } from '@/components/synthwave/FooterTerminal'

export default function Home() {
  return (
    <div className="relative min-h-screen pb-7 synth-bg">
      <div className="crt-overlay" aria-hidden />
      <SynthNav />
      <HudFrame />
      <main className="relative z-10">
        <HeroTerminal />
        <TelemetryStrip />
        <CapabilitiesGrid />
        <StackSection />
        <ExperienceLog />
        <ProjectsGrid />
        <FeaturedProject />
        <PhotographyAnalog />
        <ContactTerminal />
      </main>
      <FooterTerminal />
    </div>
  )
}
