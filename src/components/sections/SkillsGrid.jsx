import React from 'react'
import { Container, Pill } from '../ui'
import { SectionHeading } from './SectionHeading'

export function SkillsGrid({ skills }) {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <Container size="lg">
        <SectionHeading index={4} title="Skills" />

        <div className="border-t border-border">
          {skills.map((group) => (
            <div key={group.category} className="grid sm:grid-cols-[220px_1fr] gap-3 sm:gap-8 py-6 border-b border-border">
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted pt-1">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
