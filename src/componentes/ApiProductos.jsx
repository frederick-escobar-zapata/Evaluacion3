import {Box, Typography,CircularProgress} from '@mui/material';
import {use, useEffect, useState} from 'react';

const API_SERVICES = 'https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/products-services/';

function ApiProductos(){
    
    const [dataProductos, setDataProductos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const headers = { Authorization: 'Bearer ipss.get' };
    useEffect(() => {
        const fetchData = async () => {
            try {                
                const responseServices = await fetch('https://cors-anywhere.herokuapp.com/'+API_SERVICES, { headers });     
                //console.log("URL de la API:", 'https://cors-anywhere.herokuapp.com/'+API_SERVICES); // Imprime la URL de la API para depuración           
                if (!responseServices.ok ) {
                    throw new Error('Error fetching data');                }                
                const dataProductos = await responseServices.json();
                //console.log(dataServices);
                setDataProductos(dataProductos);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }
    , []);
    if (loading) {
    return <div>Cargando...</div>; // Mostrar mensaje de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Mostrar mensaje de error
  }

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"> {/* Adjusted for responsiveness */}
        {dataProductos.data && dataProductos.data.productos && dataProductos.data.productos.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100"> {/* Removed fixed height for better responsiveness */}
              <div id={`carousel-${index}`} className="carousel slide p-0" data-bs-ride="carousel" style={{ width: '100%', height: '200px' }}> {/* Responsive carousel */}
                <div className="carousel-inner" style={{ height: '100%' }}>
                  {item.imgs && item.imgs.map((img, imgIndex) => (
                    <div 
                      className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`} 
                      key={imgIndex}
                    >
                      <img 
                        src={img} 
                        className="d-block w-100" 
                        alt={`Imagen ${imgIndex + 1}`} 
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                  ))}
                </div>
                <button 
                  className="carousel-control-prev" 
                  type="button" 
                  data-bs-target={`#carousel-${index}`} 
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button 
                  className="carousel-control-next" 
                  type="button" 
                  data-bs-target={`#carousel-${index}`} 
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body" style={{ position: 'relative' }}>
                <h5 className="card-title" style={{ textAlign: 'justify' }}>{item.nombre}</h5>
                <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxHeight: '100px', textAlign: 'justify' }}>
                  {item.descripcion}
                </p>
                <button 
                  className="btn btn-primary" 
                  style={{ position: 'absolute', bottom: '-20px', right: '-20px' }}
                  onClick={() => {
                    const contactSection = document.getElementById('contacto'); // Locate the contact section
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the contact section
                    }
                    console.log('Producto seleccionado:', item.nombre); // 
                    // 
                    // Capture and log the product name
                    document.getElementById('producto').value = item.nombre;
                    document.getElementById('producto').disabled = true; // 
                    //document.getElementById('nombre').focus(); // Focus on the name input field
                    
                    //Disable the input field
                  }}
                >
                  Escribemos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ApiProductos;