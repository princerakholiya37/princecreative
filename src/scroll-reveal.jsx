import { useEffect } from 'react'

const revealSelectors = [
  'main > .hero-marquee',
  'main > section > header',
  'main > section > div.relative',
  'main > section > footer',
  'section.no-tracking > .relative.mx-auto',
  'section.no-tracking article',
  'section.no-tracking [aria-label="Experience statistics"] > div',
  'footer.no-tracking > .relative',
]

const revealStyles = [
  'reveal-lift',
  'reveal-from-left',
  'reveal-from-right',
  'reveal-scale',
  'reveal-focus',
  'reveal-tilt',
]

export default function ScrollReveal() {
  useEffect(() => {
    const elements = [...new Set(document.querySelectorAll(revealSelectors.join(',')))]

    elements.forEach((element, index) => {
      element.classList.add('scroll-reveal', revealStyles[index % revealStyles.length])
      element.style.setProperty('--reveal-delay', `${Math.min((index % 5) * 80, 320)}ms`)
    })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-revealed'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-revealed', entry.isIntersecting)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return null
}
