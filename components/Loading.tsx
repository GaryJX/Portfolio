import React, { useEffect } from 'react'
import styles from '@/styles/Loading.module.scss'
import Logo from '@/components/Logo'
import LogoTitle from '@/components/LogoTitle'
import { motion, useAnimation } from 'framer-motion'

type LoadingProps = {
  onAnimationComplete: () => void
}

const Loading: React.FC<LoadingProps> = ({ onAnimationComplete }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [])

  return (
    <motion.div
      className={styles.loadingContainer}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1, ease: 'easeInOut', delay: 2 }}
      variants={{
        hidden: { clipPath: 'inset(0 0 0 0)' },
        visible: { clipPath: 'inset(0 0 100vh 0)' },
      }}
      onAnimationComplete={() => onAnimationComplete()}
    >
      <div className={styles.logoTitleContainer}>
        <LogoTitle />
      </div>
      <Logo animate={true} />
    </motion.div>
  )
}

export default Loading
