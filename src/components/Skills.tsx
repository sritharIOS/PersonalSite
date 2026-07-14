import { skillGroups, expertiseAreas } from '../data/resume'
import useReveal from '../hooks/useReveal'

const tints = [
  'bg-accent/10 text-accent',
  'bg-moss/10 text-moss',
  'bg-ink/10 text-ink',
  'bg-accent/10 text-accent',
  'bg-moss/10 text-moss',
  'bg-ink/10 text-ink',
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
      <div ref={ref} className="reveal">
        <h2 className="font-display text-3xl text-ink mb-3">What I work with</h2>
        <p className="text-ink/60 max-w-xl mb-10">
          The tools and practices I reach for most, grouped by where they show up.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((g, i) => (
            <div key={g.category} className="rounded-2xl border border-ink/10 p-6">
              <h3 className="text-sm font-semibold text-ink mb-4">{g.category}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${tints[i % tints.length]}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-ink/10">
          <h3 className="font-display text-xl text-ink mb-6">Core strengths</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-3">
            {expertiseAreas.map((a) => (
              <div key={a} className="text-sm text-ink/70 flex gap-2">
                <span className="text-accent">&bull;</span>
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
