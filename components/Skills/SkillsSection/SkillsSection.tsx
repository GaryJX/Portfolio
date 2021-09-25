import React from 'react'
import styles from './SkillsSection.module.scss'

type SkillsSectionProps = {
  title: string
  skills: string[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ title, skills }) => {
  return (
    <div className={styles.skillsSection}>
      <h2>{title}</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsSection
