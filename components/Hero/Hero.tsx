import React, { useState, MouseEvent } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styles from './Hero.module.scss'

const Hero: React.FC = () => {
  const isLargeNavSize = useMediaQuery({
    query: '(min-width: 48em)',
  })

  const handleClickNav = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const href = (event.target as HTMLAnchorElement).getAttribute('href')!
    document.querySelector(href)?.scrollIntoView()
  }

  return (
    <div className={styles.hero}>
      {/* // TODO: Move this to a Watermark component */}
      <div className={styles.watermarkContainer}>
        <div className={styles.watermark1} />
        <div className={styles.watermark2} />
        <div className={styles.watermark3} />
      </div>
      <Fade
        triggerOnce
        cascade
        direction="up"
        damping={0.5}
        duration={500}
        delay={isLargeNavSize ? 800 : 200}
      >
        <h3 className={styles.titleSubHeader}>Hi, my name is</h3>
        <h2 className={styles.title}>Gary Xie.</h2>
        <h1 className={styles.subtitle}>I develop things for the web.</h1>
        <p className={styles.copyText}>
          I’m a software developer specializing in building extraordinary
          experiences for the web. I am currently in my 3rd year of
          undergraduate Computer Science studies at University of Toronto.
        </p>
        <div className={styles.callToActionContainer}>
          <a
            href="#projects"
            className={styles.callToAction}
            onClick={handleClickNav}
          >
            View Projects
          </a>
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className={styles.resumeBtn}
          >
            Resume
          </a> */}
        </div>
      </Fade>
    </div>
  )
}

export default Hero
