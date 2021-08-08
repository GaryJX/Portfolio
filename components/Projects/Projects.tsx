import React, { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Project, { ProjectProps } from '@/components/Project/Project'
import styles from './Projects.module.scss'
import { Fade } from 'react-awesome-reveal'

const projects: ProjectProps[] = [
  {
    title: 'Video Chat App',
    description:
      'A web application to connect online with others via video chat, using WebSocket and WebRTC protocols.',
    technologies: ['React', 'TypeScript', 'Socket.IO'],
    github: 'https://github.com/GaryJX/video-chat-app',
    demo: 'https://garyjx-video-chat.vercel.app',
    screenshotSrc: '/projects/video-chat-app.jpg',
  },
  {
    title: 'Find My IP',
    description:
      'A web app for finding your public information based on IP address including ISP, location, and time zone.',
    technologies: ['React', 'TypeScript', 'Geo Location IP API'],
    github: 'https://github.com/GaryJX/find-my-ip',
    demo: 'https://garyjx-find-my-ip.vercel.app/',
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
