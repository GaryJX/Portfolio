import React from 'react'
import Image from 'next/image'
import styles from './Project.module.scss'

export type ProjectProps = {
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  screenshotSrc: string
}

const Project: React.FC<ProjectProps> = (props) => {
  const { title, description, technologies, github, demo, screenshotSrc } =
    props
  // TODO: Display projects
  return (
    <div className={styles.project}>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <div className={styles.projectDescription}>{description}</div>
        <ul className={styles.projectStack}>
          {technologies.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <div>TODO: Github</div>
          <div>TODO: Demo</div>
        </div>
      </div>
      <div className={styles.projectImage}>
        <Image
          src={screenshotSrc}
          alt="Find My IP Project"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Project
