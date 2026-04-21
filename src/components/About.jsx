import useReveal from '../hooks/useReveal'

function About() {
  const headingReveal = useReveal()
  const card1 = useReveal()
  const card2 = useReveal()
  const card3 = useReveal()

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          ref={headingReveal.ref}
          className={`section-heading reveal ${headingReveal.isVisible ? 'reveal-visible' : ''}`}
        >
          <span className="section-label">Perfil</span>
          <h2>Sobre mí</h2>
          <p>
            Soy desarrollador web enfocado en crear soluciones digitales claras,
            modernas y funcionales. Trabajo con tecnologías actuales y una visión
            orientada a resultados reales para cada cliente.
          </p>
        </div>

        <div className="feature-grid">
          <article
            ref={card1.ref}
            className={`feature-card reveal ${card1.isVisible ? 'reveal-visible' : ''}`}
          >
            <div className="feature-icon">01</div>
            <h3>Claridad</h3>
            <p>
              Interfaces limpias, directas y pensadas para mejorar la experiencia
              del usuario.
            </p>
          </article>

          <article
            ref={card2.ref}
            className={`feature-card reveal reveal-delay-1 ${card2.isVisible ? 'reveal-visible' : ''}`}
          >
            <div className="feature-icon">02</div>
            <h3>Rendimiento</h3>
            <p>
              Sitios rápidos, optimizados y preparados para una carga eficiente en
              desktop y mobile.
            </p>
          </article>

          <article
            ref={card3.ref}
            className={`feature-card reveal reveal-delay-2 ${card3.isVisible ? 'reveal-visible' : ''}`}
          >
            <div className="feature-icon">03</div>
            <h3>Resultados</h3>
            <p>
              Desarrollo orientado a presencia digital real, conversión y
              presentación profesional.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
