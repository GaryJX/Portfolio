import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import WorkExperience from '@/components/WorkExperience/WorkExperience'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'

export const Home: React.FC = () => {
  return (
    <main id="main">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}

export default Home
