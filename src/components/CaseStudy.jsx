export default function CaseStudy() {
  return (
    <section className="case-study-section" id="case-study">
      <div className="case-study-header">
        <h2>Case Studies</h2>
<a
  href="https://www.linkedin.com/in/mahnoor-developer/"
  target="_blank"
  className="feedback-btn"
>
  Get in Touch
</a>      </div>
      <div className="case-study-grid">
        <div className="case-card">
          <div className="card-illustration illustration-layers">
            <svg viewBox="0 0 320 260">
              <g className="base-outline">
                <polygon points="160 20 270 75 160 130 50 75" className="stroke-line" />
                <polygon points="50 75 50 185 160 240 160 130" className="stroke-line" />
                <polygon points="160 130 270 75 270 185 160 240" className="stroke-line" />
              </g>
              <g className="geometry-slice geometry-slice-1"><polygon points="160 45 245 88 160 130 75 88" className="stroke-line" /></g>
              <g className="geometry-slice geometry-slice-2"><polygon points="160 72 245 114 160 156 75 114" className="stroke-line" /></g>
              <g className="geometry-slice geometry-slice-3"><polygon points="160 99 245 141 160 183 75 141" className="stroke-line" /></g>
              <g className="geometry-slice geometry-slice-4"><polygon points="160 126 245 168 160 210 75 168" className="stroke-line" /></g>
            </svg>
          </div>
          <div className="card-details">
            <span className="figure-tag">FIG 0.1</span>
            <h2>Problem</h2>
            <p>We identified a 40% drop in retention during onboarding due to confusing navigation, lack of visual feedback, and a disjointed mobile experience. Users abandoned the signup flow at the second step, and page load times exceeded 4.5s on slower connections.</p>
          </div>
        </div>
        <div className="case-card">
          <div className="card-illustration illustration-cubes">
            <svg viewBox="0 0 320 260">
              <g className="floating-cube floating-cube-1">
                <polygon points="90 60 140 35 190 60 140 85" className="stroke-line" />
                <polygon points="90 60 90 120 140 145 140 85" className="stroke-line" />
                <polygon points="140 85 190 60 190 120 140 145" className="stroke-line" />
              </g>
              <g className="floating-cube floating-cube-2">
                <polygon points="170 90 220 65 270 90 220 115" className="stroke-line" />
                <polygon points="170 90 170 150 220 175 220 115" className="stroke-line" />
                <polygon points="220 115 270 90 270 150 220 175" className="stroke-line" />
              </g>
              <g className="floating-cube floating-cube-3">
                <polygon points="130 145 180 120 230 145 180 170" className="stroke-line" />
                <polygon points="130 145 130 205 180 230 180 170" className="stroke-line" />
                <polygon points="180 170 230 145 230 205 180 230" className="stroke-line" />
              </g>
            </svg>
          </div>
          <div className="card-details">
            <span className="figure-tag">FIG 0.2</span>
            <h2>Our Solution</h2>
            <p>We redesigned the entire onboarding flow with a conversion-focused structure, implemented a new SEO strategy, and optimized the signup process. We added real-time validation, a progress indicator, and reduced the number of steps from 5 to 3 while improving page speed by 42%.</p>
          </div>
        </div>
        <div className="case-card">
          <div className="card-illustration illustration-bars">
            <svg viewBox="0 0 320 260">
              <g className="progress-tracks">
                <rect className="stroke-line progress-track progress-track-1" x="70" y="180" width="160" height="2" />
                <rect className="stroke-line progress-track progress-track-2" x="80" y="165" width="150" height="2" />
                <rect className="stroke-line progress-track progress-track-3" x="90" y="150" width="140" height="2" />
                <rect className="stroke-line progress-track progress-track-4" x="100" y="135" width="130" height="2" />
                <rect className="stroke-line progress-track progress-track-5" x="110" y="120" width="120" height="2" />
                <rect className="stroke-line progress-track progress-track-6" x="120" y="105" width="110" height="2" />
                <rect className="stroke-line progress-track progress-track-7" x="130" y="90" width="100" height="2" />
              </g>
            </svg>
          </div>
          <div className="card-details">
            <span className="figure-tag">FIG 0.3</span>
            <h2>The Results</h2>
            <ul>
              <li>+277% increase in conversion rate (from 8.2% to 31.5%).</li>
              <li>+62% organic traffic growth within 3 months.</li>
              <li>Page load speed improved by 42% (now 2.1s).</li>
              <li>User retention increased by 28% post-onboarding.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}