import { useState } from 'react'
import { experience, type ExperienceItem } from '../data/resume'
import useReveal from '../hooks/useReveal'

interface RoleProps {
  item: ExperienceItem
  defaultOpen: boolean
}

function Role({ item, defaultOpen }: RoleProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="relative pl-8 pb-10 last:pb-0 border-l border-ink/10 last:border-transparent">
      <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-paper" />

      <button onClick={() => setOpen((v) => !v)} className="w-full text-left">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-medium text-ink">
            {item.role} <span className="text-ink/50">· {item.company}</span>
          </h3>
          <span className="text-xs text-ink/40 whitespace-nowrap">{item.dates}</span>
        </div>
        <p className="text-sm text-ink/40 mt-0.5">{item.location}</p>
      </button>

      {open && (
        <>
          <ul className="mt-4 space-y-2">
            {item.bullets.map((b, i) => (
              <li key={i} className="text-sm text-ink/70 leading-relaxed flex gap-2">
                <span className="text-accent mt-1.5 flex-shrink-0">&bull;</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-ink/40 mt-3 leading-relaxed">{item.skills}</p>
        </>
      )}

      <button onClick={() => setOpen((v) => !v)} className="mt-3 text-xs font-medium text-accent hover:underline">
        {open ? 'Show less' : 'Show details'}
      </button>
    </div>
  )
}

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <div ref={ref} className="reveal">
        <h2 className="font-display text-3xl text-ink mb-3">Where I've worked</h2>
        <p className="text-ink/60 max-w-xl mb-10">14+ years across FinTech, Mortgage, Lending, Supply Chain, and SaaS.</p>

        <div className="mt-8">
          {experience.map((item, i) => (
            <Role key={item.company + item.dates} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
