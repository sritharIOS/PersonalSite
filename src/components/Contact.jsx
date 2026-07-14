import { profile } from '../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="rounded-3xl bg-ink px-8 py-14 sm:px-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Let's talk</h2>
        <p className="mt-3 text-slate-300 max-w-xl mx-auto">
          Open to Staff / Principal Engineer roles in mobile, full-stack, and distributed
          systems. Reach out directly or connect on LinkedIn.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-3 rounded-full bg-white text-ink text-sm font-medium hover:bg-accent hover:text-white transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="px-5 py-3 rounded-full border border-slate-600 text-white text-sm font-medium hover:border-accent transition-colors"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-sm text-slate-400">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={profile.links.medium} target="_blank" rel="noreferrer" className="hover:text-white">
            Medium
          </a>
        </div>
      </div>

      <footer className="text-center text-xs text-slate-400 mt-8">
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
      </footer>
    </section>
  )
}
