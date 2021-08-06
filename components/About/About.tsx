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
            {/* <Fade
              triggerOnce
              cascade
              direction="up"
              damping={0.5}
              duration={500}
            > */}
            <p>Hello, my name is Gary!</p>
            <p>
              I’m a software developer based in Toronto, Canada, and I am
              currently in my 3rd year of studying Computer Science at
              University of Toronto.
            </p>
            <p>
              I’ve been lucky enough to experience a variety of software
              development internships during my undergraduate studies. I have
              previously interned at{' '}
              <a href="https://verto.health/" target="_blank" rel="noreferrer">
                Verto
              </a>
              , and I am currently finishing up a 16-month internship at{' '}
              <a href="https://www.ibm.com/" target="_blank" rel="noreferrer">
                IBM
              </a>
              .
            </p>
            {/* </Fade> */}
          </div>
          <div className={styles.skills}>
            {/* <Fade triggerOnce direction="up" duration={500} delay={1000}> */}
            <p>Here are a few technologies I’ve been working with recently:</p>
            {/* </Fade> */}
            {/* <Fade
              triggerOnce
              cascade
              direction="up"
              duration={500}
              delay={1500}
            > */}
            <ul>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Golang</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
            {/* </Fade> */}
            {/* // TODO: Maybe merge skills section into here as a second column, so that I have something to take up horizontal space in About for? (or take a photo of myself?)*/}
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default About
