import React, { FormEvent } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Fade } from 'react-awesome-reveal'
import emailjs from 'emailjs-com'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import styles from './Contact.module.scss'

const Contact: React.FC = () => {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className={styles.contact}>
      <Fade triggerOnce direction="up">
        <SectionHeader title="Contact Me" />
        {/* // TODO: Add contact form eventually */}
        {/* <div>
          <form onSubmit={sendEmail}>
            <div>
              <label htmlFor="name">Your Name</label>
              <input name="name" />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>

              <input name="email" />
            </div>
            <div>
              <label htmlFor="name">Message</label>

              <input name="message" />
            </div>
            <button type="submit">Send</button>
          </form>
        </div> */}
        <div className={styles.container}>
          <a href="https://github.com/garyjx" target="_blank" rel="noreferrer">
            <FaGithub />
            GaryJX
          </a>
          <a
            href="https://www.linkedin.com/in/garyxie"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            GaryJX
          </a>
          <a
            href="mailto:garyxie2000@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
            garyxie2000@gmail.com
          </a>
        </div>
      </Fade>
    </div>
  )
}

export default Contact
