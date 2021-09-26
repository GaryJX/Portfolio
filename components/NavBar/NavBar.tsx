import React, { useState, MouseEvent } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu'
import LogoTitle from '@/components/LogoTitle/LogoTitle'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import styles from './NavBar.module.scss'
import useScrollSectionHighlight from '@/hooks/useScrollSectionHighlight'

const NavBar: React.FC = () => {
  useScrollSectionHighlight(styles.navMenu, styles.activeLink)
  const [menuOpen, setMenuOpen] = useState(false)
  const isLargeNavSize = useMediaQuery({
    query: '(min-width: 48em)',
  })

  const handleClickNav = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const href = (event.target as HTMLAnchorElement).getAttribute('href')!
    document.querySelector(href)?.scrollIntoView()
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <a className={styles.skipToContent} href="#main">
        Skip to content
      </a>
      <div className={styles.navContainer}>
        <Fade triggerOnce duration={1000}>
          <LogoTitle />
        </Fade>
        <nav
          className={`${styles.navMenu} ${
            menuOpen ? styles.open : styles.closed
          }`}
        >
          <Fade
            direction="down"
            cascade
            triggerOnce
            damping={0.2}
            duration={isLargeNavSize ? 500 : 0}
            delay={isLargeNavSize ? 300 : 0}
          >
            <ul>
              <li>
                <a href="#home" onClick={handleClickNav}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleClickNav}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              {/* <li>
                <a href="#experience">Experience</a>
              </li> */}
              <li>
                <a href="#projects" onClick={handleClickNav}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleClickNav}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </Fade>
        </nav>

        <div className={styles.navBtns}>
          {/* <ThemeToggle /> */}
          <Fade triggerOnce duration={1000}>
            <HamburgerMenu
              open={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          </Fade>
        </div>
      </div>
    </header>
  )
}

export default NavBar
