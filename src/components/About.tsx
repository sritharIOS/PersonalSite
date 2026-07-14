import { profile } from '../data/resume'
import useReveal from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <div ref={ref} className="reveal">
        <h2 className="font-display text-3xl text-ink mb-6">A bit about how I work</h2>
        <p className="text-ink/70 leading-relaxed text-lg">{profile.summary}</p>
      </div>
    </section>
  )
}
