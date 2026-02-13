import React from 'react'
import { Container } from './components/ui'
import {
  ResumeHeader,
  SummaryBlock,
  ExperienceSection,
  EducationSection,
  SkillsSection,
} from './components/resume'
import { resumeData } from './data/resumeData'

function App() {
  const { profile, summary, experience, education, skills } = resumeData

  return (
    <div className="min-h-screen bg-bg">
      {/* Subtle gradient background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, var(--color-primary), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, var(--color-accent), transparent 50%)',
        }}
      />
      <main className="relative pt-12 pb-16">
        <Container size="default">
          <ResumeHeader profile={profile} />
          <SummaryBlock summary={summary} />
          <ExperienceSection experiences={experience} />
          <EducationSection education={education} />
          <SkillsSection skills={skills} />
        </Container>
      </main>
    </div>
  )
}

export default App
