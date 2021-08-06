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
        <h3>{title}</h3>
        <div>{description}</div>
        <ul>
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
