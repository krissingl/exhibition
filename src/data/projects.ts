import type { Project } from '../types'

export const projects: Project[] = [
  {
    name: 'Exhibition',
    description: 'This portfolio site - built with React, TypeScript, Vite, and Tailwind CSS. Deployed automatically to GitHub Pages via GitHub Actions.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    repoUrl: 'https://github.com/krissingl/exhibition',
    type: 'personal',
  },
  {
    name: 'QuestReserve',
    description: 'A full-stack booking platform for a dungeon raid experience company. Features role-based access for admins, dungeon providers, and adventurers; a real-time availability engine that prevents double-bookings; and a complete booking lifecycle from discovery through checkout.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/krissingl/questReserve',
    type: 'personal',
  },
  {
    name: 'Women Innovators of Idaho',
    description: "Volunteer developer for W.I.N. Technical Innovations, serving as the technical arm for a non-profit that lacked in-house engineering. Cleaned and organized thousands of constituent records in their LGL donor CRM, and built events, forms, and workflows that non-technical volunteers couldn't configure themselves - all without code access, which meant every solution required working creatively within the platform's constraints to match what the org actually needed.",
    techStack: ['LGL CRM', 'Data Management'],
    type: 'volunteer',
  },
]
