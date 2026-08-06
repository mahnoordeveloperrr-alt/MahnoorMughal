import { forwardRef } from 'react'

const DescriptionPanel = forwardRef(({ overlayRef, isOpen, onClose, currentProject, projectData }, ref) => {
  const data = projectData[currentProject] || {}

  return (
    <>
      <div className={`kove-overlay ${isOpen ? 'active' : ''}`} ref={overlayRef} onClick={onClose}></div>
      <div className={`kove-description-panel ${isOpen ? 'active' : ''}`} ref={ref}>
        <div className="kove-desc-content">
          <div className="kove-desc-header">
            <span className="kove-desc-label overview-label">OVERVIEW</span>
            <button
              className="kove-desc-close-inline"
              onClick={onClose}
              aria-label="Close panel"
              style={{ background: '#e0e0e0' }}   // darker background for contrast
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"          // directly set stroke color
                strokeWidth="2.5"      // thicker lines
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="kove-desc-scroll">
            <div className="kove-desc-block overview-block">
              <p className="kove-desc-text">{data.overview}</p>
            </div>
            <div className="kove-desc-block tech-block">
              <span className="kove-desc-label">TECH STACK</span>
              <p className="kove-desc-tech">{data.tech}</p>
            </div>
            <div className="kove-desc-block">
              <span className="kove-desc-label">KEY FEATURES</span>
              <ul className="kove-desc-features">
                {(data.features || []).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="kove-desc-block">
              <span className="kove-desc-label">CATEGORY</span>
              <p className="kove-desc-category">{data.category}</p>
            </div>
            <a href={data.liveLink} target="_blank" className="kove-desc-live">
              VISIT LIVE SITE →
            </a>
          </div>
        </div>
      </div>
    </>
  )
})

DescriptionPanel.displayName = 'DescriptionPanel'
export default DescriptionPanel