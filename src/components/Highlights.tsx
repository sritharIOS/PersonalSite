import { Link } from 'react-router-dom'
import { projects, type Project } from '../data/resume'
import useReveal from '../hooks/useReveal'
import ProjectVisual from './ProjectVisual'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useReveal<HTMLAnchorElement>()

  return (
    <Link
      ref={ref}
      to={`/work/${project.slug}`}
      className="reveal group block rounded-3xl border border-ink/10 hover:border-accent/40 hover:shadow-lg transition-all overflow-hidden bg-white/40"
    >
      <ProjectVisual project={project} index={index} className="rounded-none border-0" />
      <div className="p-6">
        <span className="font-display text-sm text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-display text-2xl text-ink mt-2 leading-tight group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          {project.companyLogo && (
            <img
              src={project.companyLogo}
              alt={`${project.company} logo`}
              className="h-4 w-auto max-w-[80px] object-contain"
            />
          )}
          <p className="text-sm text-ink/50">{project.company}</p>
        </div>
        <p className="mt-3 text-sm text-ink/70 leading-relaxed">{project.impact}</p>
        <span className="mt-4 inline-block text-sm font-medium text-accent">
          Explore project →
        </span>
      </div>
    </Link>
  )
}

export default function Highlights() {
  return (
    <section id="work" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="font-display text-3xl text-ink mb-3">Selected work</h2>
      <p className="text-ink/60 max-w-xl mb-10">
        Projects that show the range — 0→1 platform builds, large-scale rebuilds, platform
        architecture, and recent work in agentic AI.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
