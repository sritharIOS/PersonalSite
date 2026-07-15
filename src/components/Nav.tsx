import { useEffect, useState } from 'react'
import { profile } from '../data/resume'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? 'bg-paper/90 backdrop-blur border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto relative flex items-center justify-center px-6 py-4">
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/60 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeFile}
            download
            className="text-sm font-medium px-4 py-2 rounded-full bg-ink text-paper hover:bg-accent transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden absolute right-6 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-b border-ink/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeFile}
            download
            className="text-sm font-medium px-4 py-2 rounded-full bg-ink text-paper text-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
