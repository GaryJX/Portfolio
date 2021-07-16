import React from 'react'
import styles from '@/styles/NavBar.module.scss'
import LogoTitle from '@/components/LogoTitle'
import Menu from '@/components/Menu'

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <LogoTitle />
        <Menu />
      </div>
    </nav>
  )
}

export default NavBar
