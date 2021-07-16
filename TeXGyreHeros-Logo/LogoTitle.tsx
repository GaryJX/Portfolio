import React, { useContext } from 'react'
import Logo from '@/components/Logo'
import styles from '@/styles/LogoTitle.module.scss'
import GlobalContext from '@/context/GlobalContext'

// HTML for creating LogoTitle SVG using TeX-Gyre-Heros font
const LogoTitle: React.FC<any> = () => {
  const { setLoading } = useContext(GlobalContext)
  return (
    <div className={styles.logoTitle} onClick={() => setLoading(true)}>
      <div className={styles.title}>
        <h2 style={{ lineHeight: '32px' }}>Gary Xie</h2>
        <p>Software Developer</p>
      </div>
    </div>
  )
}

export default LogoTitle
