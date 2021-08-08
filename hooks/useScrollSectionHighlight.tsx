import { useEffect, useMemo, useRef } from 'react'

const useScrollSectionHighlight = (navClass: string, activeClass: string) => {
  const sections = useMemo(() => {
    if (typeof window !== 'undefined') {
      return document?.querySelectorAll<HTMLElement>('section[id]')
    } else {
      return []
    }
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const scrollY = window.pageYOffset
    console.log({ scrollY })

    console.log({ sections })

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight
      const sectionTop = section.offsetTop - 65
      const sectionId = section.getAttribute('id')

      const selectionElem = document?.querySelector(
        `.${navClass} a[href*=${sectionId}]`
      )

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        selectionElem?.classList.add(activeClass)
      } else {
        selectionElem?.classList.remove(activeClass)
      }
    })
  }
}

export default useScrollSectionHighlight
