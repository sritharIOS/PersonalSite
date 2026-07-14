import { highlights } from '../data/resume'

export default function Highlights() {
  return (
    <section id="work" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Selected Work &amp; Impact</h2>
      <p className="text-slate-600 max-w-2xl mb-10">
        A few projects that best show scope of ownership — from 0→1 platform builds to
        large-scale migrations and AI-driven engineering.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="rounded-2xl border border-slate-200 p-6 hover:border-accent/50 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-ink">{h.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{h.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {h.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
