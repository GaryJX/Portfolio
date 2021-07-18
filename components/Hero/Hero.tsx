import React, { useState } from 'react'
import styles from './Hero.module.scss'

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <h3>Hi, my name is</h3>
      <h2>Gary Xie.</h2>
      <h1>I build things for the web.</h1>
    </div>
  )
}

export default Hero
