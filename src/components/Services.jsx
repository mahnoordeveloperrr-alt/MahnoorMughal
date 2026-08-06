export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="heading">
          <h1>SOLUTION<br />I OFFER</h1>
          <p>Professional web experiences crafted with modern design, smooth animations and conversion-focused development.</p>
        </div>
        <div className="service-list">
          {[
            { title: 'LANDING PAGE', desc: 'Premium responsive landing page with modern UI, SEO structure and GSAP animations.', price: '$150', items: ['Fully Responsive', 'SEO-Friendly Structure', 'Modern & Clean UI', 'Cross Browser Compatibility', 'Interactive GSAP Animations', 'Performance Optimization', 'Conversion Focused'] },
            { title: 'MULTI PAGE WEBSITE', desc: 'Complete responsive business website with scalable architecture.', price: '$300', items: ['Mobile Responsive', 'Multi Page Website', 'Fast Performance', 'SEO-Friendly Structure', 'Modern UI', 'Accessibility Improvements', 'Easy To Manage'] },
            { title: 'WEBSITE REDESIGN', desc: 'Transform your outdated website into a modern premium experience.', price: '$250', items: ['Complete Website Redesign', 'Modern Responsive Layout', 'Improved UX/UI', 'Performance Boost', 'SEO Improvements', 'Fresh Visual Identity', 'Optimized Code Structure'] },
          ].map((s, i) => (
            <div className="service-item" key={i}>
              <div className="service-top">
                <div className="service-left"><h3>{s.title}</h3><p>{s.desc}</p></div>
                <div className="service-right"><span className="price">{s.price}</span><button className="toggle">+</button></div>
              </div>
              <div className="service-content"><ul>{s.items.map((item, j) => <li key={j}>{item}</li>)}</ul></div>
            </div>
          ))}
        </div>
        <div className="cta-button-wrap">
          <button className="cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Start Your Project →</button>
        </div>
        <p className="note">* Final pricing depends on project scope, features and custom requirements.</p>
      </div>
    </section>
  )
}