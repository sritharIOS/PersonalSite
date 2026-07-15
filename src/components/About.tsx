import { profile, beyondWork } from '../data/resume'
import useReveal from '../hooks/useReveal'

// Phrases to visually emphasize within the About paragraphs.
const highlights = [
  'As a founding engineer at a fintech startup',
  'AI-assisted development',
  'AI agent workflows',
  'Test-driven development',
]

function renderWithHighlights(text: string) {
  const pattern = new RegExp(`(${highlights.join('|')})`, 'g')
  return text.split(pattern).map((part, i) =>
    highlights.includes(part) ? (
      <strong key={i} className="text-ink font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="pt-10 pb-20 px-6 max-w-4xl mx-auto">
      <div ref={ref} className="reveal">
        <h2 className="font-display text-3xl text-ink mb-6">A bit about how I work</h2>
        <div className="space-y-4">
          {profile.summary.map((paragraph, i) => (
            <p key={i} className="text-ink/70 leading-relaxed text-lg">
              {renderWithHighlights(paragraph)}
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
