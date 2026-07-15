import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/resume'
import ProjectVisual from '../components/ProjectVisual'
import StarRating from '../components/StarRating'

export default function CaseStudy() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = index >= 0 ? projects[index] : undefined

  if (!project) {
    return <Navigate to="/#work" replace />
  }

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <section className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <Link to="/#work" className="text-sm font-medium text-accent hover:underline">
        ← Back to work
      </Link>

      <span className="block font-display text-sm text-accent mt-8">
        {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
      </span>
      <h1 className="font-display text-4xl sm:text-5xl text-ink mt-2 leading-tight">
        {project.title}
      </h1>
      <p className="text-sm text-ink/50 mt-3">
        {project.company} · {project.timeframe}
      </p>

      <div className="mt-8">
        <ProjectVisual project={project} index={index} />
      </div>

      <p className="mt-10 text-lg text-ink/70 leading-relaxed">
        <span className="font-medium text-ink">The challenge: </span>
        {project.problem}
      </p>

      <ul className="mt-6 space-y-3">
        {project.approach.map((a, i) => (
          <li key={i} className="text-ink/70 leading-relaxed flex gap-3">
            <span className="text-accent mt-1 flex-shrink-0">→</span>
            <span>{a}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm font-medium text-ink bg-ink/5 rounded-xl px-4 py-3">
        {project.impact}
      </p>

      {project.ratingUplift && (
        <div className="mt-6">
          <StarRating before={project.ratingUplift.before} after={project.ratingUplift.after} />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-ink/5 text-ink/60">
            {t}
          </span>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4">
          {project.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}

      <div className="mt-16 pt-8 border-t border-ink/10 flex items-center justify-between gap-4">
        <Link to={`/work/${prev.slug}`} className="text-sm text-ink/60 hover:text-accent transition-colors">
          ← {prev.title}
        </Link>
        <Link to={`/work/${next.slug}`} className="text-sm text-ink/60 hover:text-accent transition-colors text-right">
          {next.title} →
        </Link>
      </div>
    </section>
  )
}
