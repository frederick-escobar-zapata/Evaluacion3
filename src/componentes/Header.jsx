import React from 'react';

function Header() {
  const cerrar = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        width: '100%',
        margin: 0,
        left: 0,
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        overflowX: 'hidden',
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#inicio">Antigüedades Sthandier</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#inicio" onClick={cerrar}>Inicio</a>
            </li>
            <div className="d-none d-lg-block" style={{ borderLeft: '2px solid blue', height: '1.5rem', margin: '10px auto 0' }}></div>
            <li className="nav-item">
              <a className="nav-link" href="#sobre-nosotros" onClick={cerrar}>Quienes Somos</a>
            </li>
            <div className="d-none d-lg-block" style={{ borderLeft: '2px solid blue', height: '1.5rem', margin: '10px auto 0' }}></div>
            <li className="nav-item">
              <a className="nav-link" href="#productos" onClick={cerrar}>Productos</a>
            </li>
            <div className="d-none d-lg-block" style={{ borderLeft: '2px solid blue', height: '1.5rem', margin: '10px auto 0' }}></div>
            <li className="nav-item">
              <a className="nav-link" href="#preguntas-frecuentes" onClick={cerrar}>Preguntas frecuentes</a>
            </li>
            <div className="d-none d-lg-block" style={{ borderLeft: '2px solid blue', height: '1.5rem', margin: '10px auto 0' }}></div>
            <li className="nav-item">
              <a className="nav-link" href="#contacto" onClick={cerrar}>Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;