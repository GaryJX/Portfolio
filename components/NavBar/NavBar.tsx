import React from 'react'
import styles from './NavBar.module.scss'

const NavBar: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <a href="">Gary Xie</a>
        <div>
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

          <div>Close Menu Icon</div>
        </div>

        <div>
          <div>Toggle Theme Button</div>
          <div>Hamburger Menu</div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
