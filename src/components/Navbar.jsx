import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container navbar">
        <a href="#top" className="brand-text" onClick={handleLinkClick}>
          <span>WebCore</span> Systems
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#about" onClick={handleLinkClick}>Sobre mí</a>
          <a href="#projects" onClick={handleLinkClick}>Proyectos</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#services" onClick={handleLinkClick}>Servicios</a>
          <a href="#process" onClick={handleLinkClick}>Proceso</a>
          <a href="#contact" onClick={handleLinkClick}>Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar