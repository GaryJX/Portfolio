import React, { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import styles from './Skills.module.scss'
import { Fade } from 'react-awesome-reveal'
import SkillsSection from './SkillsSection/SkillsSection'

const skills = {
  Languages: [
    'Python',
    'JavaScript/TypeScript',
    'C',
    'C++',
    'Java',
    'Go',
    'SQL',
    'Bash',
    'HTML/CSS',
  ],
  Frameworks: [
    'React',
    'Vue',
    'Redux',
    'Flask',
    'Node.js',
    'Express',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
  ],
  Tools: ['Git', 'Docker', 'Jenkins', 'Agile', 'Scrum', 'Jira', 'Unix/Linux'],
}

const Skills: React.FC = () => {
  return (
    <div className={styles.skills}>
      <Fade triggerOnce direction="up">
        <SectionHeader title="Skills" />
        <div className={styles.skillSection}>
          {Object.entries(skills).map(([section, skills]) => (
            <SkillsSection key={section} title={section} skills={skills} />
          ))}
        </div>
      </Fade>
    </div>
  )
}

export default Skills
