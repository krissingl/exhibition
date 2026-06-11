import type { Project } from '../types'
import Badge from './Badge'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5 flex flex-col gap-3 hover:border-neutral-600 transition-colors duration-150">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-neutral-100 leading-snug">{project.name}</h3>
        <span
          className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-mono ${
            project.type === 'volunteer'
              ? 'border-emerald-700 text-emerald-400'
              : 'border-sky-800 text-sky-400'
          }`}
        >
          {project.type}
        </span>
      </div>

      <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {project.techStack.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>

      {(project.repoUrl || project.liveUrl) && (
        <div className="flex gap-4 pt-1 border-t border-neutral-800">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-400 hover:text-sky-300 transition-colors"
            >
              repo ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-400 hover:text-sky-300 transition-colors"
            >
              live ↗
            </a>
          )}
        </div>
      )}
    </div>
  )
}
