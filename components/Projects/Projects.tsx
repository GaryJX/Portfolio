import React, { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Project, { ProjectProps } from '@/components/Project/Project'
import styles from './Projects.module.scss'
import { Fade } from 'react-awesome-reveal'

const projects: ProjectProps[] = [
  {
    title: 'Code Cube',
    description:
      'An online front‑end development live code editor for protoyping with HTML, CSS, and JavaScript. Authenticates with Github and Google OAuth providers.',
    technologies: ['Go', 'MongoDB', 'React', 'TypeScript'],
    github: 'https://github.com/GaryJX/code-cube',
    demo: 'https://code-cube.garyxie.me',
    screenshotSrc: '/projects/code-cube.jpg',
  },
  {
    title: 'Video Chat App',
    description:
      'A web application to communicate with others online via video chat, using WebSocket and WebRTC protocols.',
    technologies: ['React', 'TypeScript', 'Socket.IO'],
    github: 'https://github.com/GaryJX/video-chat-app',
    demo: 'https://video-chat.garyxie.me',
    screenshotSrc: '/projects/video-chat-app.jpg',
  },
  {
    title: 'Find My IP',
    description:
      'A web app for finding your public information based on IP address including ISP, location, and time zone.',
    technologies: ['React', 'TypeScript', 'Geo Location IP API'],
    github: 'https://github.com/GaryJX/find-my-ip',
    demo: 'https://find-my-ip.garyxie.me',
    screenshotSrc: '/projects/find-my-ip-expanded.jpg',
  },
]

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <Fade triggerOnce direction="up">
        <SectionHeader title="Projects" />
      </Fade>
      <div className={styles.projectList}>
        {projects.map((props, index) => (
          <Project
            key={index}
            {...props}
            direction={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
