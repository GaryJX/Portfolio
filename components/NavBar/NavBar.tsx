import React, { useState } from 'react'

import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu'
import styles from './NavBar.module.scss'

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="" className={styles.navLogo}>
          Gary Xie
        </a>

        <div className={styles.navMenu}>
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
        </div>

        <div className={styles.navBtns}>
          <div>Toggle Theme Button</div>
          <HamburgerMenu
            open={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          />
        </div>
      </nav>
    </header>
  )
}

export default NavBar
