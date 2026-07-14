import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Highlights from './components/Highlights'
import Skills from './components/Skills'
import EducationCerts from './components/EducationCerts'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Skills />
        <Experience />
        <EducationCerts />
        <Contact />
      </main>
    </div>
  )
}
