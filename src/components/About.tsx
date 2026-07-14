import { profile, beyondWork } from '../data/resume'
import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="pt-10 pb-20 px-6 max-w-4xl mx-auto">
      <div ref={ref} className="reveal">
        <h2 className="font-display text-3xl text-ink mb-6">A bit about how I work</h2>
        <div className="space-y-4">
          {profile.summary.map((paragraph, i) => (
            <p key={i} className="text-ink/70 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-ink/10 overflow-hidden flex flex-col sm:flex-row">
          <img
            src={beyondWork.image}
            alt="Cricket team photo"
            className="w-full sm:w-56 h-48 sm:h-auto object-cover"
          />
          <div className="p-6 flex flex-col justify-center">
            <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
              {beyondWork.headline}
            </p>
            <p className="text-sm text-ink/70 leading-relaxed">{beyondWork.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
