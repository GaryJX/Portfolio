import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/context/GlobalContext'
import { motion, useAnimation } from 'framer-motion'
import styles from '@/styles/Hero.module.scss'

const animationProps = {
  variants: {
    hidden: { opacity: 0, translateY: '1rem' },
    visible: { opacity: 1, translateY: 0 },
  },
  transition: { duration: 0.25 },
}

const Hero: React.FC = () => {
  const { loading } = useContext(GlobalContext)
  const controls = useAnimation()
  // TODO: Below is only used for debugging responsiveness. Remove before final deployment to production
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!loading) controls.start('visible')
  }, [loading])

  useEffect(() => {
    console.log('hello')
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const handleWindowResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  return (
    <div className={styles.hero}>
      <motion.div
        className={styles.watermark}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        Developer
      </motion.div>
      {/* <div className={styles.artifactContainer}>
        <div className={styles.artifact} />
      </div> */}
      <motion.div
        className={styles.main}
        animate={controls}
        initial="hidden"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              ease: 'linear',
            },
          },
        }}
      >
        <motion.h5 {...animationProps}>Hi, my name is</motion.h5>
        <motion.h2 {...animationProps}>Gary Xie.</motion.h2>
        <motion.h3 {...animationProps}>I build things for the web.</motion.h3>
        <motion.p {...animationProps}>
          I’m a full stack software developer who specializes in
          {'<TODO>'}. I’m currently a undergraduate student at University of
          Toronto, specializing in Computer Science and Software Engineering.
        </motion.p>
        <motion.button {...animationProps} className={styles.callToAction}>
          View Projects
        </motion.button>
        <br />
        <strong style={{ fontSize: '2rem' }}>
          Page width: {windowSize.width}
        </strong>
        <br />
        <strong style={{ fontSize: '2rem' }}>
          Page Height: {windowSize.height}
        </strong>
      </motion.div>
    </div>
  )
}

export default Hero
