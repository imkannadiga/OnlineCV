# Online Resume

A colorful, responsive React single-page application for building and displaying an online resume/CV. Built with **Vite**, **React 18**, and **Tailwind CSS**, with reusable UI and resume-specific components.

## Features

- **Colorful dark theme** with indigo/pink accents and CSS variables for easy theming
- **Reusable UI components** in `src/components/ui/`: `Button`, `Card`, `Section`, `Badge`, `Container`, `Typography`
- **Resume-specific components** in `src/components/resume/`: header, summary, experience, education, skills
- **Sample data** in `src/data/resumeData.js` — replace with your own or load from an API
- **Accessible**: semantic HTML, focus styles, ARIA where needed
- **Responsive**: mobile-first layout

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Project structure

```
src/
├── components/
│   ├── ui/           # Generic, reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Container.jsx
│   │   ├── Section.jsx
│   │   ├── Badge.jsx
│   │   ├── Typography.jsx
│   │   └── index.js
│   └── resume/       # Resume-specific components
│       ├── ResumeHeader.jsx
│       ├── SummaryBlock.jsx
│       ├── ExperienceSection.jsx
│       ├── EducationSection.jsx
│       ├── SkillsSection.jsx
│       └── index.js
├── data/
│   └── resumeData.js # Edit this with your content
├── styles/
│   └── index.css     # Global styles + Tailwind
├── App.jsx
└── main.jsx
```

## Using the UI components

Import from the barrel file:

```jsx
import { Button, Card, Section, Badge, Container, Heading, Text } from './components/ui'

<Container size="default">
  <Section title="My Section">
    <Card>
      <Heading level={2} gradient>Title</Heading>
      <Text muted>Some text.</Text>
      <Badge variant="accent">Tag</Badge>
      <Button variant="primary" size="md">Click</Button>
    </Card>
  </Section>
</Container>
```

## Customizing

- **Theme**: Edit CSS variables in `src/styles/index.css` (`:root`).
- **Content**: Update `src/data/resumeData.js` or replace with API/JSON.
- **Layout**: Change `Container` `size` or add/remove resume sections in `App.jsx`.

## Build

```bash
npm run build
npm run preview  # preview production build
```

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- Plain CSS custom properties for theme
