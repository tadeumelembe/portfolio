import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Container from '@/components/Container'
import { fullName } from '@/utils/constants'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-line bg-surface">
        <Container className="py-6 text-sm text-muted">
          © {new Date().getFullYear()} {fullName}
        </Container>
      </footer>
    </>
  )
}
