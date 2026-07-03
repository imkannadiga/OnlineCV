import React from 'react'
import { Container, Reveal, ThemeToggle } from './components/ui'
import {
  ResumeHeader,
  SummaryBlock,
  ExperienceSection,
  EducationSection,
  SkillsSection,
  PublicationsSection,
} from './components/resume'
import { resumeData } from './data/resumeData'
import { useTheme } from './hooks/useTheme'

function App() {
  const { profile, summary, education, skills, experience, personalProjects, publications } = resumeData
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-bg">
      {/* Subtle gradient background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-30 transition-opacity duration-500"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, var(--color-primary), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, var(--color-accent), transparent 50%)',
        }}
      />

      <ThemeToggle theme={theme} onToggle={toggleTheme} className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50" />

      <main className="relative pt-12 pb-16">
        <Container size="default">
          <ResumeHeader profile={profile} />
          <Reveal>
            <SummaryBlock summary={summary} sectionTitle="Professional Summary" />
          </Reveal>
          <Reveal>
            <EducationSection education={education} />
          </Reveal>
          <Reveal>
            <SkillsSection skills={skills} sectionTitle="Technical Skills" />
          </Reveal>
          <Reveal>
            <ExperienceSection experiences={experience} sectionTitle="Professional Experience" />
          </Reveal>
          <Reveal>
            <ExperienceSection experiences={personalProjects} sectionTitle="Personal Projects & Research" />
          </Reveal>
          <Reveal>
            <PublicationsSection publications={publications} sectionTitle="Publications" />
          </Reveal>
        </Container>
      </main>
    </div>
  )
}

export default App
