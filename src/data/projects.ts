import type { Project } from '../types'

// TODO: replace placeholder entries with your real projects
// type: 'personal' | 'volunteer' — controls the badge color on each card
export const projects: Project[] = [
  {
    name: 'Exhibition',
    description: 'This portfolio site — built with React, TypeScript, Vite, and Tailwind CSS. Deployed automatically to GitHub Pages via GitHub Actions.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    repoUrl: 'https://github.com/PassiveParadigm/exhibition',
    type: 'personal',
  },
  {
    name: 'Project Name',
    description: 'A short description of what this project does and what problem it solves. Keep it to 1–2 sentences.',
    techStack: ['Node.js', 'PostgreSQL', 'React'],
    repoUrl: 'https://github.com/PassiveParadigm/your-repo',
    liveUrl: '',
    type: 'personal',
  },
  {
    name: 'Volunteer Project',
    description: 'Description of volunteer work — the org, what you built, and the impact.',
    techStack: ['Python', 'FastAPI', 'TypeScript'],
    repoUrl: '',
    type: 'volunteer',
  },
]
