import { profile, stats, primarySkills } from '../data/resume'

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-10 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-grain"
        style={{ backgroundSize: '18px 18px' }}
      />
      <div
        className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full -z-10 opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, #e8590c33, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-32 w-[26rem] h-[26rem] rounded-full -z-10 opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2f5d5033, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto">
        <p className="text-accent font-medium text-sm tracking-[0.2em] uppercase">
          Staff Engineer, Mobile &amp; Full-Stack — {profile.location}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {primarySkills.map((skill) => (
            <span
              key={skill}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-ink/15 text-ink/70"
            >
              {skill}
            </span>
          ))}
        </div>

        <h1 className="mt-8 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-ink">
          I build products that <span className="italic text-accent">3 million people</span> trust every day.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-ink/70 leading-relaxed">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="px-6 py-3 rounded-full bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors"
          >
            See the work
          </a>
          <a
            href={profile.resumeFile}
            download
            className="px-6 py-3 rounded-full border border-ink/15 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
          >
            Download resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-ink/15 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-display text-3xl text-ink">{s.value}</dt>
              <dd className="text-xs text-ink/50 mt-1 uppercase tracking-wide leading-snug min-h-[3.6em]">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
