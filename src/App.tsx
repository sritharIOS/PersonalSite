import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Highlights from './components/Highlights'
import Skills from './components/Skills'
import EducationCerts from './components/EducationCerts'
import Contact from './components/Contact'
import CaseStudy from './pages/CaseStudy'
import ScrollToHash from './components/ScrollToHash'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Highlights />
      <Skills />
      <Experience />
      <EducationCerts />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-paper text-ink">
        <Nav />
        <ScrollToHash />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
