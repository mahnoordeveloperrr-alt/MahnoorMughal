export default function AboutSection({ titleRef, capabilitiesTitleRef, marqueeWrapperRef, openKove }) {
  return (
    <div className="aboutsection">
      <section className="hero" id="aboutHero">
        <a href="#" className="tag">ABOUT ME</a>
<div className="top-image">
  <img src={import.meta.env.BASE_URL + "img/about-3.jpg"} alt="Abstract decorative object" loading="lazy" />
</div>
       <div className="hero-content">
          <h1 className="about-hero-title" ref={titleRef}>
            Frontend alchemy — turning <br />ideas into gold. Building <br />modern digital experiences <br />
            through clean design and smart <br /> development for ambitious <br />brands and creative businesses.
          </h1>
        </div>
<div className="bottom-image">
  <img src={import.meta.env.BASE_URL + "img/about-4.jpg"} alt="Laptop showing design work preview" loading="lazy" />
</div>         <div className="hero-buttons-wrapper">
          <div className="hero-buttons">
            <a href="#" className="btn" onClick={(e) => { e.preventDefault(); openKove(1) }}>VIEW PROJECTS</a>
            <a href="#" className="circle-btn">↓</a>
          </div>
        </div>
      </section>

      <div className="containers" id="capabilities">
        <div className="inner-padding">
          <h2 className="title capabilities-title" ref={capabilitiesTitleRef}>CAPABILITIES</h2>
        </div>
        <div className="marquee-wrapper" ref={marqueeWrapperRef}>
          <div className="marquee-row" id="row1">
            <div className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>Vite</div>
            <div className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="#3572a5" strokeWidth="2"><path d="M12 2C8 2 6.5 3 6.5 5v3h8v1H5.5c-2 0-3.5 1.5-3.5 3.5v3c0 2 1.5 3.5 3.5 3.5h2v-3.5c0-2 1.5-3.5 3.5-3.5h3.5V12H8.5v1.5c0 2-1.5 3.5-3.5 3.5v3.5c0 2 1.5 3.5 3.5 3.5h3c2 0 3.5-1.5 3.5-3.5V13c0-2-1.5-3.5-3.5-3.5h-3.5v1.5h3.5c1 0 1.5.5 1.5 1.5v1.5H12c-2 0-3.5-1.5-3.5-3.5V8.5c0-2 1.5-3.5 3.5-3.5h3c2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.5-3.5h-3z" /></svg>Python</div>
            <div className="pill"><svg viewBox="0 0 24 24" fill="#3178c6"><rect width="24" height="24" rx="4" /><text x="12" y="17" fontFamily="Arial" fontSize="14" fill="white" fontWeight="bold" textAnchor="middle">TS</text></svg>TypeScript</div>
            <div className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="2"><circle cx="12" cy="12" r="3.5" /><path d="M12 2a8.5 8.5 0 0 1 0 17 8.5 8.5 0 0 1 0-17z" /><path d="M4.5 6.5c4.5 2.6-4.5 8 0 10.6" /><path d="M19.5 6.5c-4.5 2.6-4.5 8 0 10.6" /></svg>React</div>
            <div className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2"><path d="M4 4l16 16M20 4L4 20" /><circle cx="12" cy="12" r="3" /></svg>Tailwind</div>
            <div className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="#88cc88" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-2zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>GSAP</div>
          </div>
          <div className="marquee-row" id="row2">
            <div className="pill">OpenAI API</div>
            <div className="pill"><span style={{ fontSize: '1.2rem' }}>🤗</span> Hugging Face</div>
            <div className="pill"><svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="12" r="3" fill="#e91e63" /><circle cx="12" cy="17" r="3" fill="#4caf50" /><circle cx="16" cy="12" r="3" fill="#2196f3" /></svg>OpenCV</div>
            <div className="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 22v-4M4 12h4M20 12h-4M18.36 5.64l-2.83 2.83M5.64 18.36l2.83-2.83M18.36 18.36l-2.83-2.83M5.64 5.64l2.83 2.83" /><circle cx="12" cy="12" r="2" fill="currentColor" /></svg>Pinecone</div>
          </div>
          <div className="marquee-row" id="row3">
            <div className="pill"><svg viewBox="0 0 24 24" fill="#6c47ff"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /><circle cx="12" cy="12" r="4" /></svg>Clerk</div>
            <div className="pill"><svg viewBox="0 0 24 24" fill="#336791"><path d="M12 2C8 2 5 5 5 9c0 2.5 1.5 4.5 3.5 5.5.2.1.5-.1.5-.3v-1.5c-1.5-.5-2-2-2-3.5 0-3 2.5-5.5 5.5-5.5S18 6 18 9c0 1.5-.5 3-2 3.5V14c0 .2.3.4.5.3 2-1 3.5-3 3.5-5.5 0-4-3-7-7-7z" /></svg>PostgreSQL</div>
            <div className="pill"><svg viewBox="0 0 24 24" fill="#4db33d"><path d="M12 2C10.5 5 9 8 9 11c0 3 2 5.5 3 8V2z" /><path d="M12 21c-3-4-5-7-5-11 0-4 2-6.5 3-8h-1c-1 1.5-3 4-3 8 0 4.5 3 8 6 11z" /></svg>MongoDB</div>
            <div className="pill"><svg viewBox="0 0 24 24" fill="#2496ed"><path d="M19 12h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4 0H9v2h2v-2zm-4 0H5v2h2v-2zm12-4h-2v2h2V8zm-4 0h-2v2h2V8zm-4 0H9v2h2V8zm-4 0H5v2h2V8zm12-4h-2v2h2V4zm-4 0h-2v2h2V4zm-4 0H9v2h2V4zm-4 0H5v2h2V4z" /></svg>Docker</div>
          </div>
        </div>
        <div className="capabilities-footer">
          <span className="capabilities-footer-text">Don't see your stack?</span>
          <a href="#contact" className="capabilities-footer-btn">Let's talk <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
        </div>
      </div>
    </div>
  )
}