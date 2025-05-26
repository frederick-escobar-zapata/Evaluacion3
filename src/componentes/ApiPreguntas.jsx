import React, { useState, useEffect } from 'react';

function ApiPreguntas({ section }) { // Recibe la sección como prop
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const API_URL = `http://localhost/Evaluacion3/?section=${section}`; // URL de la API con el parámetro de sección

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const text = await response.text(); // Obtén la respuesta como texto
        
        //console.log("Respuesta completa:", text); // Imprime la respuesta para depuración

        const result = JSON.parse(text); // Intenta convertir el texto a JSON
        setData(result.Informacion); // Guardar la propiedad "Informacion" en el estado
      } catch (error) {
        setError(error.message); // Guardar el mensaje de error en el estado
      } finally {
        setLoading(false); // Finalizar el estado de carga
      }
    };

    fetchData();
  }, [API_URL]); // Vuelve a ejecutar si cambia la URL

  if (loading) {
    return <div>Cargando...</div>; // Mostrar mensaje de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Mostrar mensaje de error
  }

  return (
    <div className="container mt-3">
      <div className="accordion" id="accordionExample">
        {data && data.map((item, index) => (
          <div key={item.id} className="accordion-item">
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
              >
                {item.pregunta}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{ textAlign: 'justify' }} // Texto justificado
              >
                {item.respuesta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiPreguntas;