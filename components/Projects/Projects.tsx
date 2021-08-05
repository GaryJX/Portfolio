import React, { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Project, { ProjectProps } from '@/components/Project/Project'
import styles from './Projects.module.scss'

const projects: ProjectProps[] = [
  {
    title: 'Find My IP',
    description: 'TODO: description',
    technologies: ['Next.js', 'React'],
    github: 'https://github.com/GaryJX/<todo>',
    demo: 'https://<todo>.vercel.app',
    screenshot: '/todo/path/to/image',
  },
  {
    title: 'Video Chat App',
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
      {projects.map((props) => (
        <Project {...props} />
      ))}
    </div>
  )
}

export default Projects
