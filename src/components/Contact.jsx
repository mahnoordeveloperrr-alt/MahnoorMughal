import { useRef } from 'react'

export default function Contact({ formRef, submitBtnRef }) {
  const formInternalRef = useRef(null)
  const btnInternalRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formInternalRef.current || formRef.current
    const btn = btnInternalRef.current || submitBtnRef.current
    if (!form || !btn) return
    btn.innerHTML = 'Sending <span class="arrow">...</span>'
    btn.style.backgroundColor = '#000'
    btn.style.color = '#fff'
    btn.style.pointerEvents = 'none'
    const formData = new FormData(form)
    try {
      const response = await fetch(form.action, { method: 'POST', body: formData, headers: { Accept: 'application/json' } })
      if (response.ok) {
        try { await window.emailjs.send('service_q0aas7p', 'template_bi6cvoo', { to_email: formData.get('email'), to_name: formData.get('first_name'), message: "Thank you for contacting me! I'll get back to you within 24 hours.", reply_to: 'mahnoormughal@example.com' }) } catch (e) {}
        btn.innerHTML = 'Sent <span class="arrow">✓</span>'
        form.reset()
        setTimeout(() => { btn.innerHTML = 'Submit <span class="arrow">→</span>'; btn.style.backgroundColor = 'transparent'; btn.style.color = '#000'; btn.style.pointerEvents = 'auto' }, 3000)
      } else {
        btn.innerHTML = 'Error <span class="arrow">✗</span>'
        setTimeout(() => { btn.innerHTML = 'Submit <span class="arrow">→</span>'; btn.style.backgroundColor = 'transparent'; btn.style.color = '#000'; btn.style.pointerEvents = 'auto' }, 3000)
      }
    } catch {
      btn.innerHTML = 'Error <span class="arrow">✗</span>'
      setTimeout(() => { btn.innerHTML = 'Submit <span class="arrow">→</span>'; btn.style.backgroundColor = 'transparent'; btn.style.color = '#000'; btn.style.pointerEvents = 'auto' }, 3000)
    }
  }

  return (
    <div style={{ position: 'relative', width: '100%', background: '#000000', padding: '4rem 0' }} id="contact">
      <div className="giant-bg-text"><h1>CONTACT</h1></div>
      <section className="contact-container">
        <form className="form-box" ref={formRef || formInternalRef} onSubmit={handleSubmit} action="https://formspree.io/f/xbdnqyev" method="POST">
          <div className="form-left">
            <span className="reach-label">Reach Us</span>
            <input type="text" className="input-line" placeholder="First Name" name="first_name" required />
            <input type="text" className="input-line" placeholder="Last Name" name="last_name" required />
            <input type="email" className="input-line" placeholder="Email" name="email" required />
          </div>
          <div className="form-right">
            <div className="textarea-group">
              <textarea className="input-line" placeholder="Type your message here" name="message" required></textarea>
            </div>
            <div className="bottom-actions">
              <div className="consent-row">
                <input type="checkbox" className="custom-checkbox" id="consent" required />
                <label htmlFor="consent" className="consent-label">I give permission to contact me at this email address.</label>
              </div>
              <button type="submit" className="submit-btn" ref={submitBtnRef || btnInternalRef}>Submit <span className="arrow">→</span></button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}