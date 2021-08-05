import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import styles from './SectionHeader.module.scss'

type SectionHeaderProps = {
  title: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    // <Fade triggerOnce direction="up" duration={500}>
    <div className={styles.sectionHeader}>{title}</div>
    // </Fade>
  )
}

export default SectionHeader
