export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="top-row">
            <div className="col col-bio"><div className="bio-text"><span>Solo creative director crafting bold digital experiences for forward-thinking brands.</span></div></div>
            <div className="col col-explore">
              <h4>Explore</h4>
              <div className="explore-links">
                <a href="#projects">Portfolio</a><a href="#services">Services</a><a href="#case-study">Case Studies</a><a href="#contact">Contact</a>
              </div>
            </div>
            <div className="col col-follow">
              <h4>Follow me</h4>
              <div className="follow-links">
                <a href="https://twitter.com/memahnoorme" target="_blank" className="follow-item"><span className="icon-box x">X</span><span>Twitter</span></a>
                <a href="https://www.linkedin.com/in/mahnoor-developer/" target="_blank" className="follow-item"><span className="icon-box linkedin">in</span><span>LinkedIn</span></a>
                <a href="https://github.com/mahnoordeveloperrr-alt" target="_blank" className="follow-item">
                  <span className="icon-box github"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></span><span>GitHub</span></a>
              </div>
            </div>
            <div className="col col-contact">
              <h4>Call Mahnoor</h4>
              <div className="contact-info">
                <a href="mailto:mahnoor.mughal.developerrr@gmail.com" className="contact-email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  mahnoor.mughal.<br />developerrr@gmail.com
                </a>
                <a href="#contact" className="contact-cta">Let's work together <span className="cta-arrow">→</span></a>
              </div>
            </div>
          </div>
          <div className="huge-title-wrapper"><div className="huge-title">Mahnoor</div></div>
        </div>
        <div className="bottom-row">
          <div className="bottom-left"><span>Mahnoor ©2026</span><span className="separator">•</span><span>Privacy Policy</span><span className="separator">•</span><span>Terms of Service</span></div>
          <div className="bottom-right"><span>Cach</span><span className="separator">•</span><span>12:45 PM</span><span className="separator">•</span><span>9°C</span><span className="separator">•</span><span>◎</span></div>
        </div>
      </div>
    </div>
  )
}