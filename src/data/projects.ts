import type { Project } from '../types'
import moontrailTitle from '../assets/moontrail/title-screen.jpg'
import moontrailTrail from '../assets/moontrail/trail-view.jpg'
import moontrailRover from '../assets/moontrail/rover-travel.gif'
import questreserveBrowse from '../assets/questreserve/browse-adventures.jpg'
import questreserveDetail from '../assets/questreserve/adventure-detail.jpg'
import questreserveBooking from '../assets/questreserve/booking-flow.gif'

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
    images: [
      { src: questreserveBrowse, alt: 'QuestReserve browse page, with the adventure list on the left and a detail pane showing The Lonely Mountain — Treasure Vault' },
      { src: questreserveDetail, alt: 'Detail view for the Moria — The Bridge of Khazad-dûm adventure, showing its difficulty, rating, and image gallery' },
      { src: questreserveBooking, alt: 'Animated walkthrough of the QuestReserve booking flow' },
    ],
    links: [{ label: 'View Repo', url: 'https://github.com/krissingl/questReserve' }],
    type: 'personal',
  },
  {
    name: 'Moon Trail',
    description: "Homage to the classic game, Oregon Trail- but on the Moon. A lunar survival simulator. Players outfit a rover within a hard weight budget name a five-person crew, and navigate a branching 18-landmark route across the moon. A tick-based simulation engine drives crew-scaled resource depletion, ration an exposure penalties, escalating random-event probability, and a supply-trading economy — plus an arcade shooting mini-game. Runs entirely client-side with no backend dependency.",
    techStack: ['React', 'Redux', 'JavaScript', 'Webpack', 'Babel', 'CSS Modules', 'Netlify'],
    images: [
      { src: moontrailTitle, alt: 'Moon Trail title screen: pixel-art starfield with a MOON_TRAIL card and a START button' },
      { src: moontrailTrail, alt: 'Moon Trail gameplay: a rover crossing the cratered lunar surface with Earth in the sky, above mission, supply, and crew status readouts' },
      { src: moontrailRover, alt: 'Animated clip of the rover selection screen. Three rovers to choose from.' },
    ],
    links: [{ label: 'Play Test', url: 'https://moontrail.netlify.app/' }, { label: 'View Repo', url: 'https://github.com/krissingl/moonTrail' }],
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
