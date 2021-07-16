import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Menu.module.scss'
import { motion, useAnimation } from 'framer-motion'
import LogoTitle from '@/components/LogoTitle'
import Hamburger from '@/components/Hamburger'
import { FaSun, FaMoon } from 'react-icons/fa'
import ThemeToggle from '@/components/ThemeToggle'

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const animating = useRef(false)
  const controls = useAnimation()

  useEffect(() => {
    animateToggleMenu()
  }, [menuOpen])

  const animateToggleMenu = async () => {
    if (menuOpen) {
      await controls.start('visible')
    } else {
      await controls.start('closed')
      await controls.start('hidden')
    }
    animating.current = false
  }

  return (
    <div className={`${styles.menu}`}>
      <motion.ul
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        initial="hidden"
        variants={{
          hidden: {
            clipPath: 'inset(100vh 0vh 0vh)',
            transition: { duration: 0 },
          },
          visible: { clipPath: 'inset(0vh 0vh 0vh)' },
          closed: {
            clipPath: 'inset(0vh 0vh 100vh)',
          },
        }}
      >
        {/* // TODO: Create a duplicate of the NavBar here so that it will show up in the mobile menu */}
        <div className={styles.navMenuHeader}>
          <LogoTitle />
          <Hamburger
            menuOpen={menuOpen}
            onToggleMenuOpen={() => {
              if (animating.current) return
              animating.current = true
              setMenuOpen((prev) => !prev)
            }}
          />
        </div>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Resume</a>
        </li>
      </motion.ul>
      {/* // TODO: Delete this, use ThemeToggle instead */}
      {/* <div className={styles.toggleTheme}>
        <FaSun />
        <FaMoon />
      </div> */}
      <ThemeToggle />
      <div className={styles.hamburger}>
        <Hamburger
          menuOpen={menuOpen}
          onToggleMenuOpen={() => {
            if (animating.current) return
            animating.current = true
            setMenuOpen((prev) => !prev)
          }}
        />
      </div>
    </div>
  )
}

export default Menu
