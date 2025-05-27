import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TarjetaProductos from './TarjetaProductos'; // Import TarjetaProductos

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
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {dataProductos.data &&
          dataProductos.data.productos &&
          dataProductos.data.productos.map((item, index) => (
            <TarjetaProductos key={index} producto={item} /> // Pass product data to TarjetaProductos
          ))}
      </div>
    </div>
  );
}

export default ApiProductos;