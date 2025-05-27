import {Box, Typography,CircularProgress} from '@mui/material';
import {use, useEffect, useState} from 'react';

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
    
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            padding: 1, 
            backgroundColor: '#f0f0f0', 
            borderRadius: 2, 
            boxShadow: 3, 
            maxHeight: '60vh',
          }}
        >
          <Box 
            sx={{ 
              flex: 1, 
              padding: 1 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Mision-Vision
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
              {dataServices.data}
            </Typography>
          </Box>
          <Box 
            sx={{ 
              flex: 1, 
              padding: 2, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            <img 
              src="src\Imagenes\Cristaleria\5.jpg" 
              alt="Imagen representativa" 
              style={{ maxHeight:'90%' ,maxWidth: '100%', borderRadius: '8px' }} 
            />
            <img 
              src="src\Imagenes\Cristaleria\6.jpg" 
              alt="Imagen representativa" 
              style={{ maxHeight:'90%' ,maxWidth: '100%', borderRadius: '8px' }} 
            />
          </Box>
        </Box>
    
    
  );
}
export default ApiSecciones;