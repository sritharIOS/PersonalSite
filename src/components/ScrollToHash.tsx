import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Handles smooth-scrolling to #hash targets on route changes, since client-side
// navigation doesn't trigger the browser's native hash scroll behavior.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // Wait a tick for the target route's content to mount.
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
