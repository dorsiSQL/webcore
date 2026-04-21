const services = [
  'Desarrollo web para negocios',
  'Landing pages profesionales',
  'Portfolios personalizados',
  'Optimización visual y responsive',
  'Mantenimiento web',
]

function Services() {
  return (
    <section id="services" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Servicios</span>
          <h2>Qué puedo desarrollar</h2>
          <p>
            Soluciones enfocadas en mejorar presencia digital, claridad de marca
            y presentación profesional online.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service} className="service-card">
              <span className="service-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
