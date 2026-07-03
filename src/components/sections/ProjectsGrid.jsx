import React from 'react'
import { Container, Pill } from '../ui'
import { SectionHeading } from './SectionHeading'

function tagsFor(project) {
  return project.highlights
    .map((h) => h.split(':')[0].trim())
    .filter((t) => t.length < 34)
    .slice(0, 4)
}

export function ProjectsGrid({ projects }) {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <Container size="lg">
        <SectionHeading index={3} title="Projects" subtitle="Selected systems — research and self-directed builds." />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article key={project.id} className="border border-border p-6 flex flex-col gap-4">
              <div>
                <p className="font-mono text-xs text-accent mb-2">{`P-0${i + 1}`}</p>
                <h3 className="font-display text-xl font-bold text-text leading-snug">{project.role}</h3>
                {project.startDate && <p className="font-mono text-xs text-text-muted mt-1">{project.startDate}</p>}
              </div>

              <p className="text-text-muted leading-relaxed">
                {project.highlights[0].split(':').slice(1).join(':').trim()}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {tagsFor(project).map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
