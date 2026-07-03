import React from 'react'
import { Reveal } from './components/ui'
import {
  Nav,
  Hero,
  StatsStrip,
  Marquee,
  Overview,
  ExperienceLog,
  ProjectsGrid,
  SkillsGrid,
  PublicationsList,
  ContactFooter,
} from './components/sections'
import { resumeData } from './data/resumeData'
import { useTheme } from './hooks/useTheme'

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function App() {
  const { profile, summary, education, skills, experience, personalProjects, publications, stats, tickerTags } = resumeData
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-bg">
      <Nav initials={initials(profile.name)} name={profile.name} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero profile={profile} />
        <StatsStrip stats={stats} />
        <Marquee items={tickerTags} />

        <Reveal>
          <Overview summary={summary} stack={profile.stack} education={education} />
        </Reveal>

        <div className="bg-bg-alt">
          <Reveal>
            <ExperienceLog experiences={experience} />
          </Reveal>
        </div>

        <Reveal>
          <ProjectsGrid projects={personalProjects} />
        </Reveal>

        <div className="bg-bg-alt">
          <Reveal>
            <SkillsGrid skills={skills} />
          </Reveal>
        </div>

        <Reveal>
          <PublicationsList publications={publications} />
        </Reveal>

        <ContactFooter profile={profile} />
      </main>
    </div>
  )
}

export default App
