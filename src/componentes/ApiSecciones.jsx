import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_SERVICES = 'https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/about-us/';

function ApiSecciones(){
    
    const [dataServices, setDataServices] = useState(null);
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
                const dataServices = await responseServices.json();
                //console.log(dataServices);
                setDataServices(dataServices);
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
    <div 
      className="row p-3 bg-light rounded shadow" 
      style={{ height: '80vh', overflow: 'hidden' }}
    >
      {/* Section for text from the API */}
      <div className="col-12 col-md-6 p-3">
        <h6 className="mb-3 text-center">Misión y Visión</h6>
        <p className="text-justify" style={{ textAlign: 'justify' }}>
          {dataServices.data}
        </p>
      </div>

      {/* Section for images */}
      <div 
        className="col-12 col-md-6 p-3 d-flex justify-content-center align-items-center" 
        style={{ marginTop: '-50px' }}
      >
        <img 
          src="src\Imagenes\Cristaleria\5.jpg" 
s          alt="Cristalería imagen 5 representativa" 
          className="img-fluid rounded me-2" 
          style={{ maxHeight: '60%', maxWidth: '45%' }}
        />
        <img 
          src="src\Imagenes\Cristaleria\6.jpg" 
          alt="Cristalería imagen 6 representativa" 
          className="img-fluid rounded" 
          style={{ maxHeight: '60%', maxWidth: '45%' }}
        />
      </div>
    </div>
  );
}

export default ApiSecciones;