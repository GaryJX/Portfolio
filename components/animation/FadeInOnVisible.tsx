import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeInOnVisible: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <motion.div
      className={className}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: '2rem' },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInOnVisible
