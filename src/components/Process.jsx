function Process() {
  const steps = [
    {
      number: '01',
      title: 'Análisis',
      description:
        'Entiendo el negocio, los objetivos y el público para definir una solución clara y efectiva.',
    },
    {
      number: '02',
      title: 'Diseño',
      description:
        'Defino la estructura, experiencia de usuario y estética visual alineada a la marca.',
    },
    {
      number: '03',
      title: 'Desarrollo',
      description:
        'Construyo el sitio con tecnologías modernas, optimizado para rendimiento y responsive.',
    },
    {
      number: '04',
      title: 'Entrega',
      description:
        'Publicación final, ajustes y entrega lista para uso real.',
    },
  ]

  return (
    <section id="process" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Proceso</span>
          <h2>Cómo trabajo</h2>
          <p>
            Un enfoque estructurado para lograr resultados claros, funcionales y
            alineados a cada proyecto.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.number} className="process-card">
              <div className="process-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process