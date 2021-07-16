import React, { useRef } from 'react'
import { useAnimation } from 'framer-motion'
import styles from '@/styles/Hamburger.module.scss'

type HamburgerProps = {
  menuOpen: boolean
  onToggleMenuOpen: () => void
}

const Hamburger: React.FC<HamburgerProps> = ({
  menuOpen,
  onToggleMenuOpen,
}) => {
  const menuOpenRef = useRef(false)
  const animating = useRef(false)
  const controls = useAnimation()

  return (
    <button
      className={styles.hamburger}
      // onClick={async () => {
      //   if (animating.current) return
      //   animating.current = true
      //   if (menuOpenRef.current) {
      //     await controls.start('closed')
      //     await controls.start('hidden')
      //   } else {
      //     await controls.start('visible')
      //   }
      //   animating.current = false
      //   menuOpenRef.current = !menuOpenRef.current
      // }}
      onClick={onToggleMenuOpen}
    >
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
    </button>
  )
}

export default Hamburger
