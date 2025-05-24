import React from 'react'

function Carrusel() {
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
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://th.bing.com/th/id/OIP.aQeuCWr4sS7umoItrhA6mQHaEy?rs=1&pid=ImgDetMain"
            className="d-block w-100"
            alt="Primera"
            style={{ objectFit: 'cover', height: '300px', filter: 'brightness(0.85)' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5 className="fw-bold">Primera Imagen</h5>
            <p>Descripción de la primera imagen.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://2.bp.blogspot.com/-9JiPFc3n9Hw/U_ekBAgaiMI/AAAAAAACR5c/qa8cABmAnUM/s1600/arbol%2Bsolitario%2Ben%2Blos%2Bverdes%2Bprados.jpg"
            className="d-block w-100"
            alt="Segunda"
            style={{ objectFit: 'cover', height: '300px', filter: 'brightness(0.85)' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5 className="fw-bold">Segunda Imagen</h5>
            <p>Descripción de la segunda imagen.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://3.bp.blogspot.com/-DX9-ZpjN904/U_emMocc4uI/AAAAAAACR70/ll9TwkTijL4/s1600/saint-michael-church-brixen-1920x1200-wallpaper.jpg"
            className="d-block w-100"
            alt="Tercera"
            style={{ objectFit: 'cover', height: '300px', filter: 'brightness(0.85)' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5 className="fw-bold">Tercera Imagen</h5>
            <p>Descripción de la tercera imagen.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  )
}

export default Carrusel
