import { profile } from '../data/resume'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <div ref={ref} className="reveal rounded-3xl bg-ink px-8 py-16 sm:px-14 text-center relative overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #e8590c, transparent 70%)' }}
        />
        <h2 className="font-display text-3xl sm:text-4xl text-paper relative">Let's talk</h2>
        <p className="mt-4 text-paper/60 max-w-xl mx-auto relative">
          Open to Staff / Principal Engineer roles in mobile, full-stack, and distributed
          systems. Reach out directly or connect on LinkedIn.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 relative">
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-3 rounded-full bg-paper text-ink text-sm font-medium hover:bg-accent hover:text-paper transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="px-5 py-3 rounded-full border border-paper/25 text-paper text-sm font-medium hover:border-accent transition-colors"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-sm text-paper/50 relative">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-paper">
            GitHub
          </a>
          <a href={profile.links.medium} target="_blank" rel="noreferrer" className="hover:text-paper">
            Medium
          </a>
        </div>
      </div>

      <footer className="text-center text-xs text-ink/40 mt-8">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
      </footer>
    </section>
  )
}
