function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-box">
          <div className="section-heading section-heading-left">
            <span className="section-label">Contacto</span>
            <h2>Hablemos de tu proyecto</h2>
            <p>
              Si necesitás una web profesional, una landing page o mejorar tu
              presencia digital, podés escribirme directamente.
            </p>
          </div>

          <div className="contact-info">
            <a href="mailto:webcoresys@gmail.com" className="contact-item">
              <span>Email</span>
              <strong>webcoresys@gmail.com</strong>
            </a>

            <a href="tel:1136593661" className="contact-item">
              <span>Teléfono</span>
              <strong>1136593661</strong>
            </a>

            <div className="contact-item">
              <span>Instagram</span>
              <strong>Próximamente</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
