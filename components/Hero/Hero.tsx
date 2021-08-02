import React, { useState } from 'react'
import styles from './Hero.module.scss'

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      {/* // TODO: Move this to a Watermark component */}
      <div className={styles.watermarkContainer}>
        <div className={styles.watermark1} />
        <div className={styles.watermark2} />
        <div className={styles.watermark3} />
      </div>
      <h3 className={styles.titleSubHeader}>Hi, my name is</h3>
      <h2 className={styles.title}>Gary Xie.</h2>
      <h1 className={styles.subtitle}>I develop things for the web.</h1>
      <p className={styles.copyText}>
        I'm a software developer specializing in building extraordinary
        experiences for the web. I am currently in my 3rd year of undergraduate
        Computer Science studies at University of Toronto.
      </p>
      <div className={styles.callToActionContainer}>
        <button className={styles.callToAction}>View Projects</button>
        <a href="/resume.pdf" target="_blank" className={styles.resumeBtn}>
          Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
