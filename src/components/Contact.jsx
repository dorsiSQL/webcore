import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')

  const handleWhatsApp = () => {
    const message = `Hola, soy ${name || 'un interesado'}, me interesa hacer un sitio web`
    const url = `https://wa.me/5491136593661?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-box">
          <div className="section-heading section-heading-left">
            <span className="section-label">Contacto</span>
            <h2>Contactame</h2>
            <p>
              Contame qué necesitas y vemos cómo ayudarte a crear una solución
              digital profesional.
            </p>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <span>Tu nombre</span>
              <input
                type="text"
                placeholder="Ej: Juan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
              />
            </div>

            <button onClick={handleWhatsApp} className="btn btn-primary">
              Enviar mensaje por WhatsApp
            </button>

            <div className="contact-item">
              <span>Email</span>
              <strong>webcoresys@gmail.com</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact