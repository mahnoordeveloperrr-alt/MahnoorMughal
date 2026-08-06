import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsPanel from './components/ProjectsPanel'
import KovePortfolio from './components/KovePortfolio'
import DescriptionPanel from './components/DescriptionPanel'
import CaseStudy from './components/CaseStudy'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

const projectData = {
  1: {
    name: "Studio Lumina",
    overview: 'Studio Lumina is a high-end interior design studio website founded in Milan. The goal of this project was to create a digital presence that reflects the brand\'s "timeless elegance" and "contemporary functionality".',
    tech: "React, Tailwind, JavaScript",
    features: ["Immersive hero section with elegant typography", "Clear service categories (Residential/Commercial)", "Process workflow visualization", "Team introduction section", "Achievement/trust indicators", "Fully responsive design"],
    category: "Web Design / UI-UX / Branding",
    liveLink: "https://mahnoordeveloperrr-alt.github.io/studio-lumina/",
  },
  2: {
    name: "TennisX",
    overview: "TennisX is a modern landing page designed for tennis enthusiasts. This project combines sports and wellness.",
    tech: "React, Tailwind, JavaScript",
    features: ["Energetic hero section with bold typography", "Activity tracking dashboard", "Upcoming matches and events section", "Coaching/services pricing display", "Testimonials section with star ratings", "Fully responsive design"],
    category: "Web Design / Sports / Wellness / Data Visualization",
    liveLink: "https://mahnoordeveloperrr-alt.github.io/tennis-landing/",
  },
  3: {
    name: "ORRA Jewelry",
    overview: 'ORRA Jewelry is a luxury jewelry brand\'s website that showcases exclusive gemstone rings and premium collections. The most unique feature of this project is the AI-powered "virtual try-on" system.',
    tech: "React, Tailwind, JavaScript, AI",
    features: ["AI-powered virtual ring try-on feature", "Diamond shape selector (Oval, Cushion, Round, Princess, Pear)", "Brand partnerships showcase", '"Lesedi La Rona" record-breaking diamond highlight', "Customer testimonials carousel", "Fully responsive design"],
    category: "Web Design / E-commerce / AI Integration / Branding",
    liveLink: "https://mahnoordeveloperrr-alt.github.io/orra-jewelry/",
  },
  4: {
    name: "Annatar Forge",
    overview: 'Annatar Forge is a premium alpine fashion brand that combines high-altitude adventure with luxury clothing. The brand narrative is built around "where altitude meets artisanship".',
    tech: "React, Tailwind, JavaScript",
    features: ["Premium hero section with mountain/climbing theme", "Product showcase with pricing ($2,890 USD)", '"Summit Collective" - client trust indicators', "Design philosophy section", "Career timeline and team introduction", "Interactive Q&A section", "Fully responsive design"],
    category: "Web Design / Branding / High-End Fashion / Storytelling",
    liveLink: "https://mahnoordeveloperrr-alt.github.io/annatar-forge/",
  },
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [animationsReady, setAnimationsReady] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isKoveOpen, setIsKoveOpen] = useState(false)
  const [isDescOpen, setIsDescOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(1)

  const loaderTitleRef = useRef(null)
  const loaderRef = useRef(null)
  const adjestRef = useRef(null)
  const heroPlaceholderRef = useRef(null)
  const heroVideoRef = useRef(null)
  const mainVideoRef = useRef(null)
  const playPauseBtnRef = useRef(null)
  const counterNumberRef = useRef(null)
  const counterLabelRef = useRef(null)
  const smallTextRef = useRef(null)
  const buttonRefs = useRef([])
  const navLogoRef = useRef(null)
  const navMenuRef = useRef(null)
  const kovePortfolioRef = useRef(null)
  const descPanelRef = useRef(null)
  const overlayRef = useRef(null)
  const aboutHeroTitleRef = useRef(null)
  const capabilitiesTitleRef = useRef(null)
  const marqueeWrapperRef = useRef(null)
  const contactFormRef = useRef(null)
  const submitBtnRef = useRef(null)

  let counterLoopTl = useRef(null)
  let koveGalleryTl1 = useRef(null)
  let koveGalleryTl2 = useRef(null)

  const openKovePortfolio = useCallback((projectNum) => {
    setIsKoveOpen(true)
    setCurrentProject(projectNum || 1)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeKovePortfolio = useCallback(() => {
    if (koveGalleryTl1.current) koveGalleryTl1.current.kill()
    if (koveGalleryTl2.current) koveGalleryTl2.current.kill()
    if (isDescOpen) setIsDescOpen(false)
    setIsKoveOpen(false)
    document.body.style.overflow = ''
    ScrollTrigger.refresh()
  }, [isDescOpen])

  const openDescriptionPanel = useCallback(() => {
    setIsDescOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeDescriptionPanel = useCallback(() => {
    setIsDescOpen(false)
    document.body.style.overflow = isKoveOpen ? 'hidden' : ''
  }, [isKoveOpen])

 useEffect(() => {
  // Scroll to top immediately
  window.scrollTo(0, 0);

  // Remove hash from URL without reloading
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  // Disable browser's automatic scroll restoration
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}, []);

  const initScrollAnimations = useCallback(() => {
    if (window.history?.scrollRestoration) window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    ScrollTrigger.refresh()

    // About hero title SplitType
    if (window.SplitType && aboutHeroTitleRef.current) {
      const el = aboutHeroTitleRef.current
      el.style.wordBreak = 'normal'
      el.style.overflowWrap = 'normal'
      el.style.hyphens = 'none'
      el.style.whiteSpace = 'normal'
      const split = new window.SplitType(el, { types: 'chars', wordDelimiter: ' ', tagName: 'span' })
      gsap.set(split.chars, { color: '#d4d4d4', whiteSpace: 'normal', wordBreak: 'normal' })
      ScrollTrigger.create({
        trigger: '#aboutHero',
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
        onUpdate: (self) => {
          const total = split.chars.length
          const reveal = Math.floor(self.progress * total)
          split.chars.forEach((c, i) => { c.style.color = i <= reveal ? '#111111' : '#d4d4d4' })
        },
      })
    }

    // Capabilities title
    if (window.SplitType && capabilitiesTitleRef.current) {
      const el = capabilitiesTitleRef.current
      const split = new window.SplitType(el, { types: 'words' })
      gsap.set(split.words, { color: '#9ca3af', opacity: 1 })
      ScrollTrigger.create({
        trigger: '#capabilities',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        onEnter: () => split.words.forEach((w, i) => gsap.to(w, { color: '#000000', duration: 0.3, delay: i * 0.15, ease: 'power2.out' })),
        onLeaveBack: () => split.words.forEach((w, i) => gsap.to(w, { color: '#9ca3af', duration: 0.3, delay: (split.words.length - 1 - i) * 0.15, ease: 'power2.out' })),
      })
    }

    // Marquee
    const mw = marqueeWrapperRef.current
    if (mw) {
      const rows = mw.querySelectorAll('.marquee-row')
      rows.forEach((row) => {
        const orig = Array.from(row.children)
        const cw = mw.offsetWidth
        let tw = 0
        row.innerHTML = ''
        orig.forEach((it) => { row.appendChild(it); tw += it.offsetWidth + 15 })
        while (tw < cw * 2) { orig.forEach((it) => { row.appendChild(it.cloneNode(true)); tw += it.offsetWidth + 15 }) }
        const sw = orig.reduce((a, it) => a + it.offsetWidth + 15, 0)
        gsap.set(row, { x: 0, opacity: 1 })
        gsap.to(row, { x: -sw, duration: 25, ease: 'none', repeat: -1 })
        row.addEventListener('mouseenter', () => gsap.to(row, { timeScale: 0, duration: 0.3 }))
        row.addEventListener('mouseleave', () => gsap.to(row, { timeScale: 1, duration: 0.5 }))
      })
    }

    // Footer
    gsap.from('.footer-container', { y: 80, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.footer-container', start: 'top 85%' } })
    gsap.from('.top-row .col', { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.footer-container', start: 'top 85%' } })
    gsap.from('.huge-title-wrapper', { y: 60, opacity: 0, duration: 1.2, delay: 0.2, ease: 'power4.out', scrollTrigger: { trigger: '.footer-container', start: 'top 85%' } })
    gsap.from('.bottom-row', { y: 20, opacity: 0, duration: 0.8, delay: 0.6, ease: 'power2.out', scrollTrigger: { trigger: '.footer-container', start: 'top 85%' } })

    // Contact
    const cTl = gsap.timeline({ scrollTrigger: { trigger: '.contact-container', start: 'top 85%', toggleActions: 'play none none none' } })
    cTl.from('.giant-bg-text h1', { scale: 0.8, opacity: 0, duration: 1.2, ease: 'power4.out' })
      .from('.form-box', { y: 100, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.6')
      .from('.reach-label', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
      .from('.form-left .input-line', { y: 30, opacity: 0, duration: 0.7, stagger: 0.15 }, '-=0.3')
      .from('.textarea-group', { y: 30, opacity: 0, duration: 0.7 }, '-=0.6')
      .from('.bottom-actions', { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
      .fromTo('.submit-btn', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.2')

    // Services
    gsap.from('.services .heading h1', { y: 120, opacity: 0, duration: 1.2, ease: 'power4.out', scrollTrigger: { trigger: '.services', start: 'top 70%' } })
    gsap.from('.services .heading p', { y: 40, opacity: 0, duration: 1, delay: 0.25, scrollTrigger: { trigger: '.services', start: 'top 70%' } })
    document.querySelectorAll('.service-item').forEach((item) => {
      gsap.from(item, { scrollTrigger: { trigger: item, start: 'top 85%' }, y: 80, opacity: 0, duration: 1, ease: 'power3.out' })
    })
    gsap.from('.services .note', { y: 40, opacity: 0, duration: 0.8, scrollTrigger: { trigger: '.services .note', start: 'top 90%' } })

    // About floating images
    gsap.to('.top-image', { y: -15, duration: 3, repeat: -1, yoyo: true, ease: 'power1.inOut' })
    gsap.to('.bottom-image', { y: 15, duration: 3, repeat: -1, yoyo: true, ease: 'power1.inOut' })
    gsap.from('.about-hero-title', { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out' })
    gsap.from('.tag', { opacity: 0, y: -20, duration: 0.8, delay: 0.2 })
    gsap.from('.top-image', { opacity: 0, x: 40, duration: 1, delay: 0.3 })
    gsap.from('.bottom-image', { opacity: 0, x: -40, duration: 1, delay: 0.4 })
    gsap.from('.hero-buttons-wrapper', { opacity: 0, y: 30, duration: 0.8, delay: 0.5 })
    gsap.from('.capabilities-footer', { opacity: 0, y: 20, duration: 0.8, scrollTrigger: { trigger: '.capabilities-footer', start: 'top 90%' } })

    // Service toggles
    document.querySelectorAll('.service-item').forEach((service) => {
      const btn = service.querySelector('.toggle')
      const content = service.querySelector('.service-content')
      const items = content.querySelectorAll('li')
      btn.addEventListener('click', () => {
        const isOpen = service.classList.contains('active')
        document.querySelectorAll('.service-item').forEach((card) => {
          const c = card.querySelector('.service-content')
          const b = card.querySelector('.toggle')
          const li = card.querySelectorAll('li')
          card.classList.remove('active')
          b.textContent = '+'
          gsap.to(li, { opacity: 0, y: 20, duration: 0.15, stagger: { each: 0.02, from: 'end' } })
          gsap.to(c, { height: 0, duration: 0.45, ease: 'power2.inOut' })
        })
        if (isOpen) return
        service.classList.add('active')
        btn.textContent = '-'
        gsap.to(content, { height: 'auto', duration: 0.55, ease: 'power3.out' })
        gsap.fromTo(items, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, delay: 0.15, ease: 'power2.out' })
      })
    })

    ScrollTrigger.refresh()
  }, [])

  // Loader animation
  useEffect(() => {
    if (!isLoading) return
    const body = document.body
    body.style.overflow = 'hidden'
    body.style.overflowX = 'hidden'

    const loader = loaderRef.current
    const loaderTitle = loaderTitleRef.current
    const heroPlaceholder = heroPlaceholderRef.current
    const adjest = adjestRef.current
    const navLogo = navLogoRef.current
    const navMenu = navMenuRef.current
    const smallText = smallTextRef.current
    const buttons = buttonRefs.current

    const heroRect = heroPlaceholder.getBoundingClientRect()
    const heroCenterX = heroRect.left + heroRect.width / 2
    const heroCenterY = heroRect.top + heroRect.height / 2
    const heroFontSize = parseFloat(window.getComputedStyle(heroPlaceholder).fontSize)
    const ltRect = loaderTitle.getBoundingClientRect()
    const loaderCenterX = ltRect.left + ltRect.width / 2
    const loaderCenterY = ltRect.top + ltRect.height / 2
    const loaderFontSize = parseFloat(window.getComputedStyle(loaderTitle).fontSize)
    const verticalOffset = 80
    const deltaX = heroCenterX - loaderCenterX
    const deltaY = heroCenterY + verticalOffset - loaderCenterY
    const scaleFactor = heroFontSize / loaderFontSize

    const textFinalTop = heroRect.top + verticalOffset
    const viewportHeight = window.innerHeight
    const loaderSlideDuration = 0.85
    const fractionUntilTextRevealed = textFinalTop / viewportHeight
    const colorChangeOffset = loaderSlideDuration * fractionUntilTextRevealed

    gsap.set(loaderTitle, { y: '120%', opacity: 0, scale: 1, x: 0, transformOrigin: 'center center', color: '#ffffff' })
    gsap.set(loader, { y: 0, overflow: 'hidden' })
    gsap.set(navLogo, { opacity: 0, y: -25 })
    gsap.set(navMenu, { opacity: 0, y: -25 })
    gsap.set(smallText, { opacity: 0, y: 25 })
    buttons.forEach(b => gsap.set(b, { opacity: 0, y: 35, scale: 0.9 }))

    const tl = gsap.timeline({
      onComplete: () => {
        heroPlaceholder.remove()
        loader.style.display = 'none'
        loader.style.pointerEvents = 'none'
        body.style.overflow = ''
        body.style.overflowX = ''
        const currentRect = loaderTitle.getBoundingClientRect()
        const adjestRect = adjest.getBoundingClientRect()
        loaderTitle.style.position = 'absolute'
        loaderTitle.style.left = (currentRect.left - adjestRect.left) + 'px'
        loaderTitle.style.top = (currentRect.top - adjestRect.top) + 'px'
        loaderTitle.style.zIndex = '5'
        loaderTitle.style.pointerEvents = 'none'
        adjest.appendChild(loaderTitle)
        setIsLoading(false)

        if (window.innerWidth >= 768) {
          const heroScrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: '.herosection',
              start: 'top top',
              end: '+=700',
              pin: '.herosection',
              scrub: 1,
              pinSpacing: true,
            },
          })
          heroScrollTl.to('#heroVideo', { y: -280, ease: 'none' }, 0)
            .to('#mainVideo', { height: 700, ease: 'none' }, 0)
            .to('#playPauseBtn', { opacity: 1, ease: 'none' }, 0.3)
        }
        initScrollAnimations()
        startCounterLoop()
        setAnimationsReady(true)
      },
    })

    tl.to(loaderTitle, { y: '0%', opacity: 1, duration: 0.85, ease: 'power3.out' })
      .to({}, { duration: 0.6 })
      .set(loader, { overflow: 'visible' })
      .to(loaderTitle, { x: deltaX, y: deltaY, scale: scaleFactor, duration: 1.2, ease: 'power2.inOut' })
      .call(() => {
        const finalRect = loaderTitle.getBoundingClientRect()
        loaderTitle.style.cssText = `position:fixed;left:${finalRect.left}px;top:${finalRect.top}px;width:${finalRect.width}px;height:${finalRect.height}px;color:#fff;font-size:${heroFontSize}px;font-weight:900;white-space:nowrap;opacity:1;transform:none;margin:0;padding:0;line-height:0.85;pointer-events:none;z-index:10000;`
        adjest.appendChild(loaderTitle)
      })
      .to({}, { duration: 0.4 })
      .set(loader, { overflow: 'hidden' })
      .to(loader, { y: '-100%', duration: loaderSlideDuration, ease: 'power3.in' })
      .to(loaderTitle, { color: '#000000', duration: 0.35, ease: 'power2.out' }, `-=${(loaderSlideDuration - colorChangeOffset).toFixed(2)}`)
      .to(navLogo, { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
      .to(navMenu, { opacity: 1, y: 0, duration: 0.5 }, '-=0.4')
      .to(smallText, { opacity: 1, y: 0, duration: 0.55 }, '-=0.25')
      .to(buttons, { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.14, ease: 'back.out(1.3)' }, '-=0.15')

    return () => { tl.kill() }
  }, [isLoading])

  const startCounterLoop = () => {
    const cn = counterNumberRef.current
    const cl = counterLabelRef.current
    if (!cn || !cl) return
    if (counterLoopTl.current) counterLoopTl.current.kill()
    gsap.set([cn, cl], { y: 0, opacity: 1 })
    function showUsers() {
      return gsap.timeline()
        .to([cn, cl], { y: 30, opacity: 0, duration: 0.7, ease: 'power2.in' })
        .call(() => { cn.textContent = '100'; cl.textContent = 'users' })
        .fromTo([cn, cl], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' })
        .to({}, { duration: 2.5 })
    }
    function showPublished() {
      return gsap.timeline()
        .to([cn, cl], { y: 30, opacity: 0, duration: 0.7, ease: 'power2.in' })
        .call(() => { cn.textContent = '2026'; cl.textContent = 'published' })
        .fromTo([cn, cl], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' })
        .to({}, { duration: 2.5 })
    }
    counterLoopTl.current = gsap.timeline({ repeat: -1 })
    counterLoopTl.current.add(showUsers()).add(showPublished())
  }

  // Mouse parallax
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      const ht = document.querySelector('.hero-title-placeholder')
      const st = document.querySelector('.small-text')
      if (ht) gsap.to(ht, { x: x * 30, y: y * 20, duration: 0.8, ease: 'power2.out' })
      if (st) gsap.to(st, { x: -x * 15, y: -y * 10, duration: 0.8, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Keyboard escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (isDescOpen) closeDescriptionPanel()
        else if (isKoveOpen) closeKovePortfolio()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isDescOpen, isKoveOpen, closeDescriptionPanel, closeKovePortfolio])

  return (
    <>
      <Cursor />
      {isLoading && <Loader ref={loaderRef} titleRef={loaderTitleRef} />}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar
        logoRef={navLogoRef}
        menuRef={navMenuRef}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        isMenuActive={sidebarOpen}
      />
      <HeroSection
        placeholderRef={heroPlaceholderRef}
        adjestRef={adjestRef}
        videoRef={heroVideoRef}
        mainVideoRef={mainVideoRef}
        playPauseBtnRef={playPauseBtnRef}
        counterNumberRef={counterNumberRef}
        counterLabelRef={counterLabelRef}
        smallTextRef={smallTextRef}
        buttonRefs={buttonRefs}
        blurBg={sidebarOpen}
      />
      <AboutSection titleRef={aboutHeroTitleRef} capabilitiesTitleRef={capabilitiesTitleRef} marqueeWrapperRef={marqueeWrapperRef} openKove={openKovePortfolio} />
      <ProjectsPanel openKove={openKovePortfolio} />
      <KovePortfolio
        ref={kovePortfolioRef}
        isOpen={isKoveOpen}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        onClose={closeKovePortfolio}
        openDesc={openDescriptionPanel}
        galleryTl1={koveGalleryTl1}
        galleryTl2={koveGalleryTl2}
      />
      <DescriptionPanel
        ref={descPanelRef}
        overlayRef={overlayRef}
        isOpen={isDescOpen}
        onClose={closeDescriptionPanel}
        currentProject={currentProject}
        projectData={projectData}
      />
      <CaseStudy />
      <Services />
      <Contact formRef={contactFormRef} submitBtnRef={submitBtnRef} />
      <Footer />
    </>
  )
}