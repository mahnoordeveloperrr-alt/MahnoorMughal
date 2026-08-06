import { useEffect, useRef } from 'react'

export default function HeroSection({
  placeholderRef,
  adjestRef,
  videoRef,
  mainVideoRef,
  playPauseBtnRef,   // ab iska use nahi, rakh sakte hain
  counterNumberRef,
  counterLabelRef,
  smallTextRef,
  buttonRefs,
  blurBg
}) {
  const videoElRef = useRef(null)
  const heroSectionRef = useRef(null)
  const videoReadyRef = useRef(false)   // track video loaded

  useEffect(() => {
    const vid = videoElRef.current
    const mainVid = mainVideoRef.current
    const fallback = document.getElementById('videoFallback')
    const heroEl = heroSectionRef.current
    if (!vid || !mainVid || !heroEl) return

    // ---------- MUTE / UNMUTE on video click ----------
    const toggleMute = () => {
      vid.muted = !vid.muted
    }
    mainVid.addEventListener('click', toggleMute)

    // ---------- Ensure video is ready before playing ----------
    const handleCanPlay = () => {
      videoReadyRef.current = true
      // If hero is visible, start playing immediately
      const rect = heroEl.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      if (isVisible) {
        vid.play().catch(() => {})
      }
    }
    vid.addEventListener('canplay', handleCanPlay)
    // If already ready (e.g., loaded from cache), trigger directly
    if (vid.readyState >= 2) {
      handleCanPlay()
    }

    // ---------- Intersection Observer: pause when not visible ----------
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Only play if video is ready
            if (videoReadyRef.current && vid.paused) {
              vid.play().catch(() => {})
            }
          } else {
            // Pause when scrolled away
            if (!vid.paused) {
              vid.pause()
            }
          }
        })
      },
      { threshold: 0.1 } // play even if 10% visible (earlier trigger)
    )
    observer.observe(heroEl)

    // ---------- Error / Fallback ----------
    vid.addEventListener('error', () => {
      if (fallback) fallback.classList.add('show')
      vid.style.display = 'none'
    })

    const timeout = setTimeout(() => {
      if (vid.readyState < 2 && !vid.currentTime) {
        if (fallback) fallback.classList.add('show')
        vid.style.display = 'none'
      }
    }, 5000)

    vid.addEventListener('loadeddata', () => {
      if (fallback) fallback.classList.remove('show')
      vid.style.display = 'block'
    })

    return () => {
      clearTimeout(timeout)
      mainVid.removeEventListener('click', toggleMute)
      vid.removeEventListener('canplay', handleCanPlay)
      observer.disconnect()
    }
  }, [])

  return (
    <div className={`herosection ${blurBg ? 'blur-bg' : ''}`} id="heroSection" ref={heroSectionRef}>
      <div className="text">
        <div className="bottom">
          <div className="adjest" ref={adjestRef}>
            <h1 className="hero-title-placeholder" ref={placeholderRef}>
              MAHNOOR
            </h1>
          </div>
          <div className="small-text" ref={smallTextRef}>
            <div className="counter-container">
              <div className="counter-wrapper">
                <h2>
                  <span id="counterNumber" ref={counterNumberRef}>
                    100
                  </span>
                  <span>+</span>
                </h2>
                <h3 id="counterLabel" ref={counterLabelRef}>
                  users
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video" id="heroVideo" ref={videoRef}>
        <div className="main-video" id="mainVideo" ref={mainVideoRef}>
          <video
            id="myVideo"
            ref={videoElRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 220'%3E%3Crect fill='%231a1a2e' width='800' height='220'/%3E%3Ccircle cx='400' cy='110' r='40' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'/%3E%3Cpolygon points='390,90 390,130 420,110' fill='rgba(255,255,255,0.4)'/%3E%3Ctext x='400' y='175' text-anchor='middle' fill='rgba(255,255,255,0.5)' font-family='Inter,sans-serif' font-size='12' letter-spacing='3'%3ELOADING...%3C/text%3E%3C/svg%3E"
          >
            <source src={import.meta.env.BASE_URL + "img/portfolio.mp4"} type="video/mp4" />
          </video>
          <div className="video-fallback" id="videoFallback">
            <span>◆ Creative Tech Visual ◆</span>
          </div>
          {/* No play/pause button */}
        </div>
      </div>

      <div className="button">
        <a href="#services" style={{ textDecoration: 'none' }}>
          <button ref={(el) => (buttonRefs.current[0] = el)}>
            Start Your Project
          </button>
        </a>
        <a
          href="https://twitter.com/messages/compose?recipient_id=memahnoorme"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <button ref={(el) => (buttonRefs.current[1] = el)} className="color-white">
            Hire Me!
          </button>
        </a>
      </div>
    </div>
  )
}