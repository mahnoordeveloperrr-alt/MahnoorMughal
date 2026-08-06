import { useEffect, useRef, useState, useCallback, forwardRef, useImperativeHandle } from 'react'
import gsap from 'gsap'

// Global variables for gallery timelines (so they survive re-renders)
let galleryTl1 = null
let galleryTl2 = null

const KovePortfolio = forwardRef(({ isOpen, currentProject, setCurrentProject, onClose, openDesc }, ref) => {
  const containerRef = useRef(null)
  // refs for each gallery's columns
  const col1Refs = useRef({}) // key: projectNumber -> column1 DOM element
  const col2Refs = useRef({}) // key: projectNumber -> column2 DOM element

  useImperativeHandle(ref, () => containerRef.current)

  // Helper to assign ref to column1 for a specific project
  const setCol1Ref = (projNum) => (el) => {
    if (el) col1Refs.current[projNum] = el
  }
  // Helper for column2
  const setCol2Ref = (projNum) => (el) => {
    if (el) col2Refs.current[projNum] = el
  }

  // Initialize infinite scroll *after* the opening animation is done
  const initInfiniteScroll = useCallback(() => {
    // Kill any previous animations
    if (galleryTl1) galleryTl1.kill()
    if (galleryTl2) galleryTl2.kill()

    const col1 = col1Refs.current[currentProject]
    const col2 = col2Refs.current[currentProject]
    if (!col1 || !col2) return

    const totalHeight = col1.scrollHeight
    const halfHeight = totalHeight / 2

    // Reset positions
    gsap.set(col1, { y: 0 })
    gsap.set(col2, { y: -halfHeight })

    // Create infinite scroll animations
    galleryTl1 = gsap.to(col1, {
      y: -halfHeight,
      duration: 20,
      ease: 'none',
      repeat: -1,
      onRepeat: () => gsap.set(col1, { y: 0 })
    })

    galleryTl2 = gsap.to(col2, {
      y: 0,
      duration: 20,
      ease: 'none',
      repeat: -1,
      onRepeat: () => gsap.set(col2, { y: -halfHeight })
    })

    // Attach hover & click events to all images inside the active gallery
    const activeGallery = document.querySelector(`.kove-gallery[data-project="${currentProject}"]`)
    if (activeGallery) {
      const images = activeGallery.querySelectorAll('.kove-column img')
      images.forEach(img => {
        const enter = () => {
          galleryTl1?.pause()
          galleryTl2?.pause()
          gsap.to(img, { scale: 1.08, duration: 0.4 })
        }
        const leave = () => {
          galleryTl1?.resume()
          galleryTl2?.resume()
          gsap.to(img, { scale: 1, duration: 0.4 })
        }
        const click = (e) => {
          e.stopPropagation()
          openDesc()
        }
        img.addEventListener('mouseenter', enter)
        img.addEventListener('mouseleave', leave)
        img.addEventListener('click', click)

        // Store cleanup on the image itself
        img._cleanup = () => {
          img.removeEventListener('mouseenter', enter)
          img.removeEventListener('mouseleave', leave)
          img.removeEventListener('click', click)
        }
      })
    }
  }, [currentProject, openDesc])

  // Opening animation – runs once when isOpen becomes true
  useEffect(() => {
    if (!isOpen) return

    // Ensure gallery wrapper is hidden until the animation starts
    gsap.set('.kove-galleryWrapper', { opacity: 0 })
    gsap.set('.kove-gallery.active .kove-column1', { y: '120%' })
    gsap.set('.kove-gallery.active .kove-column2', { y: '-120%' })

    const tl = gsap.timeline({
      onComplete: initInfiniteScroll, // start infinite scroll after entrance
    })

    tl
      .set('.kove-galleryWrapper', { opacity: 1 }) // make gallery visible immediately
      .fromTo('.kove-brand', { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.kove-nav a', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.3')
      .fromTo('.kove-project-content.active .kove-centerText h1', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }, '-=0.2')
      .fromTo('.kove-project-content.active .kove-project-details', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .fromTo('.kove-bottom', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo('.kove-gallery.active .kove-column1', { y: '120%' }, { y: '0%', duration: 1.2, ease: 'power4.out' }, '-=0.5')
      .fromTo('.kove-gallery.active .kove-column2', { y: '-120%' }, { y: '0%', duration: 1.2, ease: 'power4.out' }, '-=1.0')

    return () => {
      tl.kill()
      gsap.set('.kove-galleryWrapper', { opacity: 0 })
      if (galleryTl1) galleryTl1.kill()
      if (galleryTl2) galleryTl2.kill()
    }
  }, [isOpen, initInfiniteScroll]) // initInfiniteScroll is stable due to useCallback

  // Project switching with entrance animations
  const switchProject = useCallback((num) => {
    if (num === currentProject) return
    setCurrentProject(num)
    // Small delay for DOM update, then animate
    setTimeout(() => {
      const activeContent = document.querySelector(`.kove-project-content[data-project="${num}"]`)
      if (activeContent) {
        gsap.fromTo(activeContent.querySelector('.kove-centerText h1'),
          { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out' })
        gsap.fromTo(activeContent.querySelector('.kove-project-details'),
          { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.15 })
      }
    }, 10)
  }, [currentProject, setCurrentProject])

  // Generate double images array for a project (5 images then same 5 again)
  const getDoubleImages = (projNum, startIdx) => {
  const imgs = []
  const BASE = import.meta.env.BASE_URL
  for (let i = 0; i < 5; i++) {
    const imgNum = ((startIdx + i) % 5) + 1
    imgs.push(`${BASE}img/pro${projNum}-${imgNum}.png`)
  }
  // duplicate
  for (let i = 0; i < 5; i++) {
    const imgNum = ((startIdx + i) % 5) + 1
    imgs.push(`${BASE}img/pro${projNum}-${imgNum}.png`)
  }
  return imgs
}

  return (
    <div className={`kove-portfolio ${isOpen ? 'active' : ''}`} ref={containerRef}>
      <section className="kove-hero">
        <div className="kove-left">
          <header className="kove-header">
            <div className="kove-brand">PORTFOLIO</div>
            <nav className="kove-nav">
              {[
                { num: 1, label: 'STUDIO LUMINA' },
                { num: 2, label: 'TENNISX' },
                { num: 3, label: 'ORRA' },
                { num: 4, label: 'ANNATAR' }
              ].map(link => (
                <a key={link.num} href="#"
                  className={`kove-nav-link ${currentProject === link.num ? 'active' : ''}`}
                  data-project={link.num}
                  onClick={(e) => { e.preventDefault(); switchProject(link.num) }}>
                  {link.label}
                </a>
              ))}
              <a href="#" className="kove-back-btn" onClick={(e) => { e.preventDefault(); onClose() }}>← BACK</a>
            </nav>
          </header>

          {/* Project contents */}
          {[1, 2, 3, 4].map(n => (
            <div key={n} className={`kove-project-content ${currentProject === n ? 'active' : ''}`} data-project={n}>
              <div className="kove-centerText">
                {n === 1 && <h1>Studio<br />Lumina</h1>}
                {n === 2 && <h1>Tennis<span style={{ fontWeight: 700, fontFamily: 'Oswald, sans-serif' }}>X</span></h1>}
                {n === 3 && <h1>ORRA</h1>}
                {n === 4 && <h1>Annatar<br />Forge</h1>}
              </div>
              <div className="kove-project-details">
                <div className="kove-detail-left">
                  <span className="kove-tag">
                    {['Web Design / UI-UX / Branding', 'Web Design / Sports / Wellness', 'E-commerce / AI Integration / Branding', 'Branding / High-End Fashion / Storytelling'][n-1]}
                  </span>
                  <p>{['Luxury Interior Design Studio Website — Milan', 'Tennis Performance & Wellness Landing Page', 'Luxury Jewelry Brand & AI-Powered Try-On Experience', 'Premium Alpine Fashion & Branding Experience'][n-1]}</p>
                </div>
                <div className="kove-detail-right">
                  <div className="kove-stack">
                    <span>React</span><span>Tailwind</span><span>JavaScript</span>
                    {n === 3 && <span>AI</span>}
                  </div>
                  <a href={[
                    'https://mahnoordeveloperrr-alt.github.io/studio-lumina/',
                    'https://mahnoordeveloperrr-alt.github.io/tennis-landing/',
                    'https://mahnoordeveloperrr-alt.github.io/orra-jewelry/',
                    'https://mahnoordeveloperrr-alt.github.io/annatar-forge/'
                  ][n-1]} target="_blank" className="kove-live-link">VIEW LIVE ↗</a>
                </div>
              </div>
              <div className="kove-bottom">
                <span>{['Studio Lumina', 'TennisX', 'ORRA Jewelry', 'Annatar Forge'][n-1]}</span>
                <span dangerouslySetInnerHTML={{ __html: ['Timeless Elegance ×<br />Contemporary Functionality', 'Performance ×<br />Wellness Community', 'AI Virtual Try-On ×<br />Premium Collections', 'Altitude ×<br />Artisanship'][n-1] }}></span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery wrapper with columns */}
        <div className="kove-galleryWrapper">
          {[1, 2, 3, 4].map(n => {
            const col1Images = getDoubleImages(n, 0) // column1: images 1,2,3,4,5 then again
            const col2Images = getDoubleImages(n, 1) // column2: images 2,3,4,5,1 then again
            return (
              <div key={n} className={`kove-gallery ${currentProject === n ? 'active' : ''}`} data-project={n}>
                <div className="kove-column kove-column1" ref={setCol1Ref(n)}>
                  {col1Images.map((src, i) => (
                    <img key={`${n}-c1-${i}`} src={src} alt="" loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        const fallback = document.createElement('div')
                        fallback.style.cssText = 'width:100%;height:200px;background:#2a2a2a;display:flex;align-items:center;justify-content:center;color:white;font-size:1.5rem;font-weight:bold;'
                        fallback.innerText = 'IMG MISSING'
                        e.target.parentNode.insertBefore(fallback, e.target)
                      }}
                    />
                  ))}
                </div>
                <div className="kove-column kove-column2" ref={setCol2Ref(n)}>
                  {col2Images.map((src, i) => (
                    <img key={`${n}-c2-${i}`} src={src} alt="" loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        const fallback = document.createElement('div')
                        fallback.style.cssText = 'width:100%;height:200px;background:#2a2a2a;display:flex;align-items:center;justify-content:center;color:white;font-size:1.5rem;font-weight:bold;'
                        fallback.innerText = 'IMG MISSING'
                        e.target.parentNode.insertBefore(fallback, e.target)
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
})

KovePortfolio.displayName = 'KovePortfolio'
export default KovePortfolio