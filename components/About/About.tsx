import React, { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import styles from './About.module.scss'
import { Fade } from 'react-awesome-reveal'

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <Fade triggerOnce direction="up">
        <SectionHeader title="About Me" />
        <div className={styles.container}>
          <div className={styles.aboutText}>
            <p>Hello, my name is Gary!</p>
            <p>
              I’m a software engineer based in Toronto, Canada, currently in my
              junior year studying Computer Science at the University of
              Toronto, majoring in Software Engineering.
            </p>
            <p>
              I’ve been lucky enough to experience a variety of software
              development internships during my undergraduate studies. I have
              previously interned at{' '}
              <a href="https://verto.health/" target="_blank" rel="noreferrer">
                Verto Health
              </a>
              , and I recently finished a 16-month internship at{' '}
              <a href="https://www.ibm.com/" target="_blank" rel="noreferrer">
                IBM
              </a>
              .
            </p>
          </div>
          {/* <div className={styles.skills}>
            <p>Here are a few technologies I’ve been working with recently:</p>

            <ul>
              <li>C++</li>
              <li>Go</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div> */}
          {/* // TODO: Maybe merge skills section into here as a second column, so that I have something to take up horizontal space in About for? (or take a photo of myself?)*/}
        </div>
      </Fade>
    </div>
  )
}

export default About
