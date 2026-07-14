import { education, certifications } from '../data/resume'

export default function EducationCerts() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-12">
        <div>
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((e) => (
              <div key={e.degree}>
                <h3 className="font-semibold text-ink text-sm">{e.degree}</h3>
                <p className="text-sm text-slate-600 mt-0.5">{e.school}</p>
                <p className="text-xs text-slate-500 mt-0.5">{e.dates}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-6">Certifications</h2>
          <div className="space-y-6">
            {certifications.map((c) => (
              <div key={c.name}>
                <h3 className="font-semibold text-ink text-sm">{c.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{c.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
