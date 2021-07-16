import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import GlobalContext from '@/context/GlobalContext'
import { useContext } from 'react'

export const Home: React.FC = () => {
  const { loading } = useContext(GlobalContext)

  return (
    // TODO: Move the main styling to globals.scss? Also make it responsive (i.e. change padding based on page width)
    // TODO: Use the responsive paddings found in Hero.module.scss
    <main>
      <section>
        <Hero />
      </section>
      <section>{!loading && <Projects />}</section>
    </main>
  )
}

export default Home
