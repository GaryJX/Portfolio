import React, { useState } from 'react'

import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu'
import LogoTitle from '@/components/LogoTitle/LogoTitle'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import styles from './NavBar.module.scss'

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <LogoTitle />

        <nav
          className={`${styles.navMenu} ${
            menuOpen ? styles.open : styles.closed
          }`}
        >
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              {/* // TODO: Not sure if I should put Resume here? */}
              <a href="#">Resume</a>
            </li>
          </ul>
        </nav>

        <div className={styles.navBtns}>
          <ThemeToggle />
          <HamburgerMenu
            open={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  )
}

export default NavBar
