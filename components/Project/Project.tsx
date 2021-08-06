import React from 'react'
import styles from './Project.module.scss'

export type ProjectProps = {
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  screenshot: string
}

const Project: React.FC<ProjectProps> = (props) => {
  const { title, description, technologies, github, demo, screenshot } = props
  // TODO: Display projects
  return (
    <div className={styles.project}>
      <h3>{title}</h3>
    </div>
  )
}

export default Project
