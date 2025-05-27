import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrusel({ slides }) { // Recibe las diapositivas como prop
  return (
    <div
      id="mainCarousel"
      className="carousel slide mb-5 shadow rounded"
      data-bs-ride="carousel"
      style={{
        maxWidth: '50%',
        margin: '0 auto',
        background: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
      }}
    >
      {/* Indicadores */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Diapositivas */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img
              src={slide.image}
              className="d-block w-100"
              alt={slide.alt}
              style={{ objectFit: 'cover', height: '300px', filter: 'brightness(0.85)' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5 className="fw-bold">{slide.title}</h5>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carrusel;
