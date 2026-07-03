import React from 'react'
import { Container, Pill } from '../ui'
import { SectionHeading } from './SectionHeading'

export function Overview({ summary, stack, education }) {
  return (
    <section id="overview" className="py-16 sm:py-24">
      <Container size="lg">
        <SectionHeading index={1} title="Overview" />
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16">
          <p className="text-lg sm:text-xl leading-relaxed text-text">{summary}</p>

          <div className="flex flex-col gap-8">
            {stack?.length > 0 && (
              <div className="border border-border p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">Core stack</p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            )}

            {education?.length > 0 && (
              <div className="border border-border p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">Education</p>
                <ul className="flex flex-col gap-4">
                  {education.map((item) => (
                    <li key={item.id}>
                      <p className="font-medium text-text leading-snug">{item.degree.split(' (')[0]}</p>
                      <p className="text-sm text-text-muted mt-1">{item.school} · {item.year}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
