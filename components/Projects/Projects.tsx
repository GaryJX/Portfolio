import React, { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import styles from './Projects.module.scss'

const projects = [
  {
    title: 'Find My IP',
    description: 'TODO: description',
    technologies: ['Next.js', 'React'],
    github: 'https://github.com/GaryJX/<todo>',
    demo: 'https://<todo>.vercel.app',
    screenshot: '/todo/path/to/image',
  },
]

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <SectionHeader title="Projects" />
      <p>Coming soon...</p>
    </div>
  )
}

export default Projects
