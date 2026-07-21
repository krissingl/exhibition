import type { Project } from '../types'

export const projects: Project[] = [
  {
    name: 'Exhibition',
    description: 'This portfolio site - built with React, TypeScript, Vite, and Tailwind CSS. Deployed automatically to GitHub Pages via GitHub Actions.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    links: [{ label: 'View Repo', url: 'https://github.com/krissingl/exhibition' }],
    type: 'personal',
  },
  {
    name: 'QuestReserve',
    description: 'A full-stack booking platform for a dungeon raid experience company. Features role-based access for admins, dungeon providers, and adventurers; a real-time availability engine that prevents double-bookings; and a complete booking lifecycle from discovery through checkout.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    links: [{ label: 'View Repo', url: 'https://github.com/krissingl/questReserve' }],
    type: 'personal',
  },
  {
    name: 'Moon Trail',
    description: "Homage to the classic game, Oregon Trail- but on the Moon. A lunar survival simulator. Players outfit a rover within a hard weight budget name a five-person crew, and navigate a branching 18-landmark route across the moon. A tick-based simulation engine drives crew-scaled resource depletion, ration an exposure penalties, escalating random-event probability, and a supply-trading economy — plus an arcade shooting mini-game. Runs entirely client-side with no backend dependency.",
    techStack: ['React', 'Redux', 'JavaScript', 'Webpack', 'Babel', 'CSS Modules', 'Netlify'],
    links: [{ label: 'View Repo', url: 'https://github.com/krissingl/moonTrail' }, { label: 'Play Test', url: 'https://moontrail.netlify.app/' }],
    type: 'personal',
  },
  {
    name: 'Women Innovators of Idaho',
    description: "Volunteer developer for W.IN. Technical Innovations, serving as the technical arm for a non-profit that lacked in-house engineering. Cleaned and organized thousands of constituent records in their LGL donor CRM, and built events, forms, and workflows that non-technical volunteers couldn't configure themselves - all without code access, which meant every solution required working creatively within the platform's constraints to match what the org actually needed. W.IN is a super cool program that encourages young women and girls to pursue careers in STEM.",
    techStack: ['LGL CRM', 'Data Management'],
    links: [{ label: 'Check Us Out', url: 'https://www.women-innovators.org/' }],
    type: 'volunteer',
  },
]
