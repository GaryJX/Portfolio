import React from 'react'
import styles from '@/styles/Projects.module.scss'
import { motion } from 'framer-motion'
import FadeInOnVisible from '@/components/animation/FadeInOnVisible'

const Projects: React.FC = () => (
  <div className={styles.projects}>
    <h2>Projects</h2>
    <div className={styles.projectsGrid}>
      <FadeInOnVisible className={styles.projectCard}>
        <h3>Project 1</h3>
        <a href={'#'}>View Project</a>
        {/* <img src="https://picsum.photos/400/800" /> */}
      </FadeInOnVisible>
      <FadeInOnVisible className={styles.projectCard}>
        <h3>Project 1</h3>
        <a href={'#'}>View Project</a>
        {/* <img src="https://picsum.photos/400/800" /> */}
      </FadeInOnVisible>
    </div>
  </div>
)
export default Projects
