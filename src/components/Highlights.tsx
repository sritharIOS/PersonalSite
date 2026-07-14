import { projects, type Project } from '../data/resume'
import useReveal from '../hooks/useReveal'
import ArchitectureDiagram from './ArchitectureDiagram'

const blockGradients = [
  'from-accent/25 via-accent/5 to-transparent',
  'from-moss/25 via-moss/5 to-transparent',
  'from-accent/20 via-moss/10 to-transparent',
  'from-moss/20 via-accent/10 to-transparent',
  'from-ink/15 via-accent/5 to-transparent',
]

interface ProjectCaseProps {
  project: Project
  index: number
}

function ProjectCase({ project, index }: ProjectCaseProps) {
  const ref = useReveal()
  const reversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className="reveal grid md:grid-cols-2 gap-10 md:gap-16 items-center py-14 border-b border-ink/10 last:border-0"
    >
      <div className={reversed ? 'md:order-2' : ''}>
        <span className="font-display text-sm text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-display text-3xl sm:text-4xl text-ink mt-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-ink/50 mt-2">
          {project.company} · {project.timeframe}
        </p>

        <p className="mt-6 text-ink/70 leading-relaxed">
          <span className="font-medium text-ink">The challenge: </span>
          {project.problem}
        </p>

        <ul className="mt-5 space-y-2">
          {project.approach.map((a, i) => (
            <li key={i} className="text-sm text-ink/70 leading-relaxed flex gap-2">
              <span className="text-accent mt-1 flex-shrink-0">→</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-sm font-medium text-ink bg-ink/5 rounded-xl px-4 py-3">
          {project.impact}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-ink/5 text-ink/60">
              {t}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-4">
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
      </div>

      <div className={reversed ? 'md:order-1' : ''}>
        {project.screenshots && project.screenshots.length > 0 ? (
          <div
            className={`relative aspect-[4/3] rounded-3xl bg-gradient-to-br ${blockGradients[index % blockGradients.length]} border border-ink/10 overflow-hidden flex items-center justify-center gap-4 p-6`}
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
        ) : project.diagram ? (
          <div
            className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${blockGradients[index % blockGradients.length]} border border-ink/10 flex items-center justify-center p-6`}
          >
            <ArchitectureDiagram />
          </div>
        ) : (
          <div
            className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${blockGradients[index % blockGradients.length]} border border-ink/10 flex items-center justify-center`}
          >
            <span className="font-display text-7xl sm:text-8xl text-ink/10 select-none">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Highlights() {
  return (
    <section id="work" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="font-display text-3xl text-ink mb-3">Selected work</h2>
      <p className="text-ink/60 max-w-xl mb-4">
        Projects that show the range — 0→1 platform builds, large-scale rebuilds, platform
        architecture, and recent work in agentic AI.
      </p>

      <div>
        {projects.map((p, i) => (
          <ProjectCase key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
