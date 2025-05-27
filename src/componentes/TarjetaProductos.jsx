import React from 'react';

function TarjetaProductos({ producto }) {
  const handleContact = () => {
    const contactSection = document.getElementById('contacto'); // Locate the contact section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the contact section
    }
    document.getElementById('producto').value = producto.nombre; // Set the product name in the form
    document.getElementById('producto').disabled = true; // Disable the input field
  };

  return (
    <div className="col">
      <div className="card h-100">
        <div id={`carousel-${producto.id}`} className="carousel slide p-0" data-bs-ride="carousel" style={{ width: '100%', height: '200px' }}>
          <div className="carousel-inner" style={{ height: '100%' }}>
            {producto.imgs &&
              producto.imgs.map((img, imgIndex) => (
                <div className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`} key={imgIndex}>
                  <img src={img} className="d-block w-100" alt={`Imagen ${imgIndex + 1}`} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
              ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${producto.id}`} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${producto.id}`} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body" style={{ position: 'relative' }}>
          <h5 className="card-title" style={{ textAlign: 'justify' }}>{producto.nombre}</h5>
          <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '100px', textAlign: 'justify' }}>
            {producto.descripcion}
          </p>
          <button className="btn btn-primary" style={{ position: 'absolute', bottom: '-20px', right: '-20px' }} onClick={handleContact}>
            Contactanos
          </button>
        </div>
      </div>
    </div>
  );
}

export default TarjetaProductos;
