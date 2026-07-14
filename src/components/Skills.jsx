import { skillGroups, expertiseAreas } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Skills &amp; Expertise</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {skillGroups.map((g) => (
          <div key={g.category}>
            <h3 className="text-sm font-semibold text-ink mb-3">{g.category}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 text-slate-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200">
        <h3 className="text-sm font-semibold text-ink mb-3">Core Areas of Expertise</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-2">
          {expertiseAreas.map((a) => (
            <div key={a} className="text-sm text-slate-600 flex gap-2">
              <span className="text-accent">&bull;</span>
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
