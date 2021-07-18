import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'

export const Home: React.FC = () => {
  return (
    <main id="main">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills"></section>
      <section id="experience"></section>
      <section id="projects"></section>
      <section id="contact"></section>
    </main>
  )
}

export default Home
