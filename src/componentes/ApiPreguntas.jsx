import {Box, Typography,CircularProgress} from '@mui/material';
import {use, useEffect, useState} from 'react';

const API_FAQ = 'https://www.clinicatecnologica.cl/ipss/antiguedadesSthandier/api/v1/faq/';

function ApiPreguntas(){
    
    const [dataFaq, setDataFaq] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const headers = { Authorization: 'Bearer ipss.get' };
    useEffect(() => {
        const fetchData = async () => {
            try {                
                const responseServices = await fetch('https://cors-anywhere.herokuapp.com/'+API_FAQ, { headers });     
                //console.log("URL de la API:", 'https://cors-anywhere.herokuapp.com/'+API_FAQ); // Imprime la URL de la API para depuración           
                if (!responseServices.ok ) {
                    throw new Error('Error fetching data');                }                
                const dataFaq = await responseServices.json();
                //console.log(dataFaq);
                setDataFaq(dataFaq);
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
    <div className="accordion" id="faqAccordion">
      {dataFaq && dataFaq.data && dataFaq.data.map((item, index) => ( // Verifica que dataFaq.data sea un array
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button 
              className="accordion-button" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target={`#collapse${index}`} 
              aria-expanded="true" 
              aria-controls={`collapse${index}`}
            >
              {item.titulo} {/* Muestra el título */}
            </button>
          </h2>
          <div 
            id={`collapse${index}`} 
            className="accordion-collapse collapse" 
            aria-labelledby={`heading${index}`} 
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body" style={{ textAlign: 'left' }}>
              {item.respuesta} {/* Muestra la respuesta */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ApiPreguntas;