import React, { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import styles from './About.module.scss'

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <SectionHeader title="About Me" />
      <div className={styles.container}>
        <div className={styles.aboutText}>
          <p>
            Hello! My name is Gary, and I’m a software developer specializing in
            building extraordinary experiences for the web. Currently, I am a
            3rd year Computer Science undergraduate student at University of
            Toronto,
          </p>
        </div>
        <div className={styles.skills}>
          Skills
          {/* // TODO: Maybe merge skills section into here as a second column, so that I have something to take up horizontal space in About for? (or take a photo of myself?)*/}
        </div>
      </div>
    </div>
  )
}

export default About
