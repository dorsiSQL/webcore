const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
  Herramientas: ['Git', 'GitHub', 'Netlify', 'Vercel'],
  'Base de datos': ['SQL', 'MySQL', 'PostgreSQL'],
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">Stack</span>
          <h2>Skills</h2>
          <p>
            Tecnologías y herramientas utilizadas para construir soluciones web
            modernas, ordenadas y escalables.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <article key={category} className="skill-card">
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
