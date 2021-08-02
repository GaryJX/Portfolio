import React, { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import styles from './Projects.module.scss'

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <SectionHeader title="Projects" />
      <p>Coming soon...</p>
    </div>
  )
}

export default Projects
