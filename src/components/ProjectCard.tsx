import type { Project } from '../types'
import Badge from './Badge'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col gap-3 hover:border-emerald-800 transition-colors duration-150 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-neutral-100 leading-snug">{project.name}</h3>
        <span
          className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-mono ${
            project.type === 'volunteer'
              ? 'border-teal-700 text-teal-400'
              : 'border-emerald-800 text-emerald-400'
          }`}
        >
          {project.type}
        </span>
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed line-clamp-4">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {project.techStack.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>
    </div>
  )
}
