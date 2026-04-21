const projects = [
  {
    id: 1,
    name: 'Sitio Web Profesional',
    description:
      'Landing page moderna para servicios profesionales con diseño limpio, responsive y estructura enfocada en claridad visual y conversión.',
    technologies: ['React', 'Vite', 'CSS'],
    status: 'Demo',
    image: '/images/project1.svg',
  },
  {
    id: 2,
    name: 'Sistema de Gestión',
    description:
      'Panel básico para administración de clientes y servicios, pensado para mejorar organización, seguimiento y eficiencia operativa.',
    technologies: ['React', 'SQL'],
    status: 'En desarrollo',
    image: '/images/project2.svg',
  },
  {
    id: 3,
    name: 'Plataforma de Negocio',
    description:
      'Solución web orientada a optimizar procesos internos y gestión de datos, con una base estructurada para futuras ampliaciones.',
    technologies: ['SQL', 'MySQL'],
    status: 'Concepto',
    image: '/images/project3.svg',
  },
  {
    id: 4,
    name: 'Proyecto Comercial',
    description:
      'Sitio web personalizado para negocio local con enfoque en presencia digital, identidad visual consistente y mejor presentación online.',
    technologies: ['React', 'Vite'],
    status: 'Próximo',
    image: '/images/project4.svg',
  },
  {
    id: 5,
    name: 'Culo de Kira',
    description:
      'Sitio web personalizado para negocio local con enfoque en presencia digital, identidad visual consistente y mejor presentación online.',
    technologies: ['React', 'Vite'],
    status: 'Próximo',
    image: '/images/project4.svg',
  },
]

function Projects() {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Portfolio</span>
          <h2>Proyectos</h2>
          <p>
            Ejemplos de soluciones planteadas con una presentación profesional,
            coherente con la identidad de WebCore Systems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div
                className="project-media"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(10,10,10,.35), rgba(255,59,59,.08)), url(${project.image})`,
                }}
              >
                <span className={`status-badge status-${slugify(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="project-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href="#contact" className="project-link">
                  Consultar este tipo de proyecto
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
}

export default Projects
