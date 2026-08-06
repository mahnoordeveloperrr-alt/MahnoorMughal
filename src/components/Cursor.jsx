import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const ref = useRef(null)
  useEffect(() => {
    const cursor = ref.current
    if (!cursor) return
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2
    let posX = mouseX, posY = mouseY
    gsap.set(cursor, { x: posX, y: posY })
    const onMove = (e) => { mouseX = e.clientX; mouseY = e.clientY }
    window.addEventListener('mousemove', onMove)
    gsap.ticker.add(() => {
      posX += (mouseX - posX) * 0.18
      posY += (mouseY - posY) * 0.18
      gsap.set(cursor, { x: posX, y: posY })
    })
    const addHover = () => cursor.classList.add('hover')
    const removeHover = () => cursor.classList.remove('hover')
    const addLight = () => cursor.classList.add('light-cursor')
    const removeLight = () => cursor.classList.remove('light-cursor')
    const hovers = document.querySelectorAll('a, button, .pill, .panel, .case-card, .kove-column img, .service-item, .kove-nav-link, .kove-desc-close-inline')
    hovers.forEach(el => { el.addEventListener('mouseenter', addHover); el.addEventListener('mouseleave', removeHover) })
    const lights = document.querySelectorAll('.sidebar a, .sidebar-contact-section, .sidebar-contact-btn, .contact-email-link, .sidebar .close-btn')
    lights.forEach(el => { el.addEventListener('mouseenter', addLight); el.addEventListener('mouseleave', removeLight) })
    document.body.style.cursor = 'none'
    return () => {
      window.removeEventListener('mousemove', onMove)
      gsap.ticker.remove(() => {})
    }
  }, [])
  return (
    <div className="cursor-outline" id="cursorOutline" ref={ref}>
      <svg viewBox="0 0 120 120">
        <path d="M25 12 Q20 15 20 24 L23 98 Q24 108 34 108 Q40 108 45 101 L63 73 Q66 68 73 68 L100 68 Q109 68 112 61 Q114 54 107 49 L38 14 Q32 10 25 12Z"></path>
      </svg>
    </div>
  )
}