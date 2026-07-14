import { useState } from 'react'
import { experience } from '../data/resume'

function Role({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="relative pl-8 pb-10 last:pb-0 border-l border-slate-200 last:border-transparent">
      <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-white" />

      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold text-ink">
            {item.role} · <span className="text-slate-600 font-medium">{item.company}</span>
          </h3>
          <span className="text-xs text-slate-500 whitespace-nowrap">{item.dates}</span>
        </div>
        <p className="text-sm text-slate-500 mt-0.5">{item.location}</p>
      </button>

      <p className="text-xs text-slate-500 mt-3 leading-relaxed">
        <span className="font-medium text-slate-600">Stack: </span>
        {item.skills}
      </p>

      {open && (
        <ul className="mt-4 space-y-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-sm text-slate-600 leading-relaxed flex gap-2">
              <span className="text-accent mt-1.5 flex-shrink-0">&bull;</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-3 text-xs font-medium text-accent hover:underline"
      >
        {open ? 'Show less' : 'Show details'}
      </button>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Experience</h2>
      <p className="text-slate-600 max-w-2xl mb-10">14+ years across FinTech, Mortgage, Lending, Supply Chain, and SaaS.</p>

      <div className="mt-8">
        {experience.map((item, i) => (
          <Role key={item.company + item.dates} item={item} defaultOpen={i < 2} />
        ))}
      </div>
    </section>
  )
}
