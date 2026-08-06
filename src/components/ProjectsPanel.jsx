import { useEffect } from 'react'
import gsap from 'gsap'

export default function ProjectsPanel({ openKove }) {
  useEffect(() => {
    const panels = document.querySelectorAll('.panel')
    panels.forEach((panel) => {
      const image = panel.querySelector('.panel-image')
      const img = panel.querySelector('img')
      const content = panel.querySelector('.top-content')
      const overlay = panel.querySelector('.overlay-panel')
      if (!image || !img || !content || !overlay) return
      const show = () => {
        panel.classList.add('active')
        gsap.to(image, { bottom: 0, duration: 0.8, ease: 'power4.out' })
        gsap.to(overlay, { opacity: 1, duration: 0.4 })
        gsap.to(img, { scale: 1.08, duration: 1.2, ease: 'power3.out' })
        gsap.to(content, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      }
      const hide = () => {
        panel.classList.remove('active')
        gsap.to(content, { opacity: 0, y: 40, duration: 0.25 })
        gsap.to(image, { bottom: '-100%', duration: 0.8, ease: 'power4.inOut' })
        gsap.to(img, { scale: 1, duration: 0.8 })
        gsap.to(overlay, { opacity: 0, duration: 0.3 })
      }
      panel.addEventListener('mouseenter', show)
      panel.addEventListener('mouseleave', hide)
      panel.addEventListener('touchstart', (e) => { e.stopPropagation(); show() }, { passive: false })
      panel.addEventListener('touchend', (e) => { e.stopPropagation(); setTimeout(hide, 1500) }, { passive: false })
    })
    return () => {
      panels.forEach(p => { p.removeEventListener('mouseenter', () => {}); p.removeEventListener('mouseleave', () => {}) })
    }
  }, [])

 const projects = [
  { num: 1, label: 'Project 01', title: 'Studio<br />Lumina', subtitle: 'Interior Design Studio', img: import.meta.env.BASE_URL + "img/pro1.png", fallback: 'STUDIO LUMINA' },
  { num: 2, label: 'Project 02', title: 'Tennis<span style="font-family: Oswald, sans-serif">X</span>', subtitle: 'Sports & Wellness', img: import.meta.env.BASE_URL + "img/pro2.png", fallback: 'TENNIS X' },
  { num: 3, label: 'Project 03', title: 'ORRA<br />Jewelry', subtitle: 'Luxury E-commerce', img: import.meta.env.BASE_URL + "img/pro3.png", fallback: 'ORRA' },
  { num: 4, label: 'Project 04', title: 'Annatar<br />Forge', subtitle: 'Alpine Fashion Brand', img: import.meta.env.BASE_URL + "img/pro4.png", fallback: 'ANNATAR' },
];

  return (
    <section className="projects-panel" id="projects">
      {projects.map((p) => (
        <div className="panel kove-trigger" data-project={p.num} key={p.num} onClick={() => openKove(p.num)}>
          <div className="label">{p.label}</div>
          <div className="panel-image">
            <div className="overlay-panel"></div>
            <img src={p.img} alt={p.fallback} loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.style.background = '#2a2a2a'
                e.target.parentElement.style.display = 'flex'
                e.target.parentElement.style.alignItems = 'center'
                e.target.parentElement.style.justifyContent = 'center'
                e.target.parentElement.innerHTML = `<span style='color:white;font-size:2rem;font-weight:bold;'>${p.fallback}</span>`
              }}
            />
          </div>
          <div className="top-content">
            <div className="glass-bg"></div>
            <h2 dangerouslySetInnerHTML={{ __html: p.title }}></h2>
            <button>View Project</button>
          </div>
          <div className="bottom-title"><h3>{p.subtitle}</h3></div>
        </div>
      ))}
    </section>
  )
}