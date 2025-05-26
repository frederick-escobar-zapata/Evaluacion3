import React, { useState, useEffect } from 'react';

function ApiSecciones({ section }) { // Recibe la sección como prop
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
      <div className="row">
        {data && data.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-100" >
              <div className="card-body" style={{ display: 'flex', flexDirection: 'column', padding: '2px', maxHeight: '348px' }}> 
                <h5 className="card-title" style={{ top: '0', fontSize: '14px' }}>{item.tipo}</h5> {/* Tamaño de letra ajustado */}
                <p className="card-text" style={{ textAlign: 'justify', flexGrow: '1', overflow: 'hidden', marginBottom: '5px', fontSize: '14px' }}>{item.texto}</p> {/* Tamaño de letra ajustado */}
                <a href="#" className="btn btn-link p-0" style={{ fontSize: '14px' }}>Seguir leyendo</a> {/* Tamaño de letra ajustado */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiSecciones;