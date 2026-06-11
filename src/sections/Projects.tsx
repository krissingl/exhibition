import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Modal from '../components/Modal'
import type { Project } from '../types'

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-emerald-400 text-sm mb-2">what I&apos;ve built</p>
        <h2 className="text-3xl font-bold mb-12 text-neutral-50">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
