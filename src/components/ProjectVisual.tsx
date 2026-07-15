import type { Project } from '../data/resume'
import ArchitectureDiagram from './ArchitectureDiagram'
import TestingPipelineDiagram from './TestingPipelineDiagram'

export const blockGradients = [
  'from-accent/25 via-accent/5 to-transparent',
  'from-moss/25 via-moss/5 to-transparent',
  'from-accent/20 via-moss/10 to-transparent',
  'from-moss/20 via-accent/10 to-transparent',
  'from-ink/15 via-accent/5 to-transparent',
]

interface ProjectVisualProps {
  project: Project
  index: number
  className?: string
}

export default function ProjectVisual({ project, index, className = '' }: ProjectVisualProps) {
  const gradient = blockGradients[index % blockGradients.length]

  if (project.image) {
    return (
      <div
        className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${gradient} border border-ink/10 flex items-center justify-center p-4 overflow-hidden ${className}`}
      >
        <img
          src={project.image}
          alt={`${project.title} — screenshot`}
          className="w-full h-full object-contain rounded-2xl"
        />
      </div>
    )
  }

  if (project.logos && project.logos.length > 0) {
    return (
      <div
        className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${gradient} border border-ink/10 flex flex-col items-center justify-center gap-5 p-8 ${className}`}
      >
        {project.logos.map((src) => (
          <img
            key={src}
            src={src}
            alt={`${project.title} — tooling logo`}
            className="w-full max-w-[220px] h-auto object-contain bg-white/80 rounded-xl shadow-md border border-ink/10 p-4"
          />
        ))}
      </div>
    )
  }

  if (project.screenshots && project.screenshots.length > 0) {
    return (
      <div
        className={`relative aspect-[4/3] rounded-3xl bg-gradient-to-br ${gradient} border border-ink/10 overflow-hidden flex items-center justify-center gap-4 p-6 ${className}`}
      >
        {project.screenshots.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${project.title} — screenshot ${i + 1}`}
            className="h-full max-h-full w-auto rounded-2xl shadow-xl border border-ink/10 object-cover"
            style={{ transform: i % 2 === 0 ? 'rotate(-3deg)' : 'rotate(2deg)' }}
          />
        ))}
      </div>
    )
  }

  if (project.diagram) {
    return (
      <div
        className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${gradient} border border-ink/10 flex items-center justify-center p-6 ${className}`}
      >
        <ArchitectureDiagram />
      </div>
    )
  }

  if (project.pipeline) {
    return (
      <div
        className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${gradient} border border-ink/10 flex items-center justify-center p-6 ${className}`}
      >
        <TestingPipelineDiagram />
      </div>
    )
  }

  return (
    <div
      className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${gradient} border border-ink/10 flex items-center justify-center ${className}`}
    >
      <span className="font-display text-7xl sm:text-8xl text-ink/10 select-none">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )
}
