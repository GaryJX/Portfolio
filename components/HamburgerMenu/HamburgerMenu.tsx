import React from 'react'
import styles from './HamburgerMenu.module.scss'

type HamburgerMenuProps = {
  open: boolean
  onClick: () => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = (props) => {
  const { open, onClick } = props

  return (
    <button
      className={`${styles.hamburgerMenu} ${
        open ? styles.open : styles.closed
      }`}
      onClick={onClick}
    >
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
    </button>
  )
}

export default HamburgerMenu
