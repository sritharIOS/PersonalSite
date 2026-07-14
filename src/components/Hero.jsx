import { profile, stats } from '../data/resume'

export default function Hero() {
  return (
    <section id="top" className="pt-36 pb-20 px-6 max-w-5xl mx-auto">
      <p className="text-accent font-medium text-sm tracking-wide uppercase mb-4">
        {profile.location} · Available for opportunities
      </p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight leading-tight">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl sm:text-2xl text-slate-700 font-medium">
        {profile.title} — {profile.subtitle}
      </p>
      <p className="mt-6 max-w-2xl text-slate-600 leading-relaxed">
        {profile.summary.slice(0, 320)}…
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={profile.resumeFile}
          download
          className="px-5 py-3 rounded-full bg-ink text-white text-sm font-medium hover:bg-accent transition-colors"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-5 py-3 rounded-full border border-slate-300 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
        >
          Get in Touch
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-full border border-slate-300 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 rounded-full border border-slate-300 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
        >
          GitHub
        </a>
      </div>

      <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-200 pt-8">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="text-2xl font-bold text-ink">{s.value}</dt>
            <dd className="text-sm text-slate-500 mt-1">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
