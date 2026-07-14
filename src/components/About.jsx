import { profile } from '../data/resume'

export default function About() {
  return (
    <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">About</h2>
      <p className="text-slate-700 leading-relaxed max-w-3xl">{profile.summary}</p>
    </section>
  )
}
