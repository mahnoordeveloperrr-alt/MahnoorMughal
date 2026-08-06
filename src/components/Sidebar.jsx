export default function Sidebar({ isOpen, onClose }) {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    onClose()
    if (targetId && targetId !== '#') {
      const el = document.querySelector(targetId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar">
      <button className="close-btn" onClick={onClose}>✕</button>
      <div className="sidebar-content-wrapper">
        <div className="sidebar-links">
          <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a>
          <a href="#case-study" onClick={(e) => handleLinkClick(e, '#case-study')}>Case Study</a>
          <a href="#services" onClick={(e) => handleLinkClick(e, '#services')}>Services</a>
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact Me</a>
        </div>
        <div className="sidebar-contact-section">
          <div className="sidebar-contact-info">
            <div className="contact-label">CONTACT</div>
            <a
              href="mailto:mahnoor.mughal.developerrr@gmail.com"
              className="contact-email-link"
            >
              mahnoor.mughal.<br />developerrr@gmail.com
            </a>
          </div>
          <a
            href="mailto:mahnoor.mughal.developerrr@gmail.com"
            className="sidebar-contact-btn"
          >
            Contact Us
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}