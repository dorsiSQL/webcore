function Hero() {
  return (
    <section id="top" className="hero section hero-section">
      <div className="hero-overlay"></div>
      <div className="circuit circuit-1"></div>
      <div className="circuit circuit-2"></div>
      <div className="circuit circuit-3"></div>

      <div className="container hero-content">
        <span className="eyebrow">Desarrollo web moderno</span>

        <h1 className="hero-title">
          WebCore <span>Systems</span>
        </h1>

        <h2 className="hero-subtitle">Soluciones digitales a medida</h2>

        <p className="hero-description">
          Desarrollamos sitios web modernos, rápidos y funcionales para negocios
          y profesionales. Diseño enfocado en claridad, rendimiento y resultados.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver proyectos
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
