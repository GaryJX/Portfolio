import React, { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './Contact.module.scss'

// TODO: Eventually add an EmailJS form to the Contact section
const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <SectionHeader title="Contact Me" />
      <div className={styles.container}>
        <a href="https://github.com/GaryJX" target="_blank" rel="noreferrer">
          <FaGithub />
          GaryJX
        </a>
        <a
          href="https://www.linkedin.com/in/GaryJX"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          GaryJX
        </a>
        <a
          href="mailto:gary.xie@mail.utoronto.ca"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
          gary.xie@mail.utoronto.ca
        </a>
      </div>
    </div>
  )
}

export default Contact
