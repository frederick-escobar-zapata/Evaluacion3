import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrusel() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const images = import.meta.glob('/src/imagenes/img/*.{jpg,png,jpeg}');
      const slideData = Object.keys(images).map((path, index) => ({
        image: path,
        alt: `Imagen ${index + 1}`,
        title: `Título ${index + 1}`,
        description: `Descripción de la imagen ${index + 1}`
      }));
      setSlides(slideData);
    };
    importImages();
  }, []);

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
              alt={`Imagen del carrusel ${index + 1}: ${slide.alt}`}
              style={{ objectFit: 'cover', height: '300px', filter: 'brightness(0.85)' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              
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
