# React + Vite

Este proyecto proporciona una configuración mínima para que React funcione con Vite, incluyendo HMR y algunas reglas de ESLint.

Actualmente, hay dos plugins oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) utiliza [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) utiliza [SWC](https://swc.rs/) para Fast Refresh.

## Expansión de la configuración de ESLint

Si estás desarrollando una aplicación de producción, recomendamos usar TypeScript con reglas de lint conscientes de tipos habilitadas. Consulta la [plantilla TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para obtener información sobre cómo integrar TypeScript y [`typescript-eslint`](https://typescript-eslint.io) en tu proyecto.

## Estructura del proyecto

La estructura del proyecto es la siguiente:

```
Evaluacion3/
├── public/                        # Archivos estáticos
├── src/                           # Código fuente
│   ├── componentes/               # Componentes de React
│   │   ├── ApiProductos.jsx       # Componente para consumir y mostrar 
│   │   ├── ApiSecciones.jsx       # Componente para consumir y mostrar 
│   │   ├── ApiPreguntas.jsx       # Componente para mostrar preguntas 
│   │   ├── Banner.jsx             # Componente principal que organiza las Secciones
│   │   ├── Carrusel.jsx           # Componente para mostrar un carrusel de Imagenes
│   │   ├── Footer.jsx             # Componente para mostrar Pie de paginas 
│   │   ├── Formulario.jsx         # Componente para el formulario de contacto
│   │   ├── Header.jsx             # Componente para mostrar Menu 
│   │   ├── TarjetaProductos.jsx   # Componente para mostrar tarjetas 
│   ├── Imagenes/           # Imágenes utilizadas en el proyecto
│── App.jsx             # Componente principal de la aplicación
│── main.jsx            # Punto de entrada para React
├── .gitignore              # Archivo para ignorar archivos en Git
├── package.json            # Dependencias y scripts del proyecto
├── README.md               # Documentación del proyecto
├── vite.config.js          # Configuración de Vite
```

Esta estructura organiza el proyecto en directorios lógicos para una mejor mantenibilidad.

## Componentes creados

A continuación, se detallan los componentes creados en el proyecto junto con ejemplos de su código:

### `ApiProductos.jsx`
Este componente se encarga de consumir la API de productos y mostrar una lista de tarjetas con los datos obtenidos. Cada tarjeta incluye un carrusel de imágenes, el nombre del producto, su descripción y un botón para redirigir a la sección de contacto con el producto seleccionado.



import { useEffect, useState } from 'react';
import TarjetaProductos from './TarjetaProductos';
function ApiProductos() {
  const [dataProductos, setDataProductos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        if (!response.ok) throw new Error('Error fetching data');
        const data = await response.json();
        setDataProductos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="container">
      <div className="row">
        {dataProductos.map((item, index) => (
          <TarjetaProductos key={index} producto={item} />
        ))}
      </div>
    </div>
  );
}
export default ApiProductos;



### `ApiSecciones.jsx`
Este componente consume la API de "Sobre Nosotros" y muestra información como la misión y visión de la empresa. También incluye imágenes representativas.


import React, { useEffect, useState } from 'react';
function ApiSecciones() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/about-us');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <h2>Misión y Visión</h2>
      <p>{data?.description}</p>
      <img src={data?.image} alt="Sobre Nosotros" />
    </div>
  );
}
export default ApiSecciones;


### `Banner.jsx`
Este componente organiza las diferentes secciones del sitio web, como el carrusel de bienvenida, la sección de productos, preguntas frecuentes y el formulario de contacto.

import React from 'react';
import ApiProductos from './ApiProductos';
import ApiSecciones from './ApiSecciones';
import Formulario from './Formulario';
function Banner() {
  return (
    <div>
      <section id="about-us">
        <ApiSecciones />
      </section>
      <section id="products">
        <ApiProductos />
      </section>
      <section id="contact">
        <Formulario />
      </section>
    </div>
  );
}
export default Banner;


### `Formulario.jsx`
Este componente muestra un formulario de contacto con campos como nombre, correo electrónico, producto y un comentario.

import React, { useState } from 'react';
function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    producto: '',
    comentario: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input type="email" name="email" placeholder="Correo" onChange={handleChange} />
      <input type="text" name="producto" placeholder="Producto" value={formData.producto} readOnly />
      <textarea name="comentario" placeholder="Comentario" onChange={handleChange}></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
}
export default Formulario;


### `TarjetaProductos.jsx`
Este componente representa una tarjeta individual para cada producto.

import React from 'react';
function TarjetaProductos({ producto }) {
  const handleContact = () => {
    document.getElementById('producto').value = producto.nombre;
    document.getElementById('producto').disabled = true;
  };
  return (
    <div className="card">
      <img src={producto.image} alt={producto.nombre} />
      <h5>{producto.nombre}</h5>
      <p>{producto.descripcion}</p>
      <button onClick={handleContact}>Contactar</button>
    </div>
  );
}
export default TarjetaProductos;


----------------------------------------------------------------------------

## Instrucciones de instalación

Sigue los pasos a continuación para instalar y ejecutar el proyecto:

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Evaluacion3
   ```

2. **Instalar dependencias**:
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, ejecuta:
   ```bash
   npm install
   ```

3. **Ejecutar el proyecto**:
   Inicia el servidor de desarrollo con:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   Abre tu navegador y ve a:
   ```
   http://localhost:5173
   ```

5. **Construir para producción**:
   Si deseas construir el proyecto para producción, ejecuta:
   ```bash
   npm run build
   ```

6. **Previsualizar la construcción**:
   Para previsualizar la construcción de producción, ejecuta:
   ```bash
   npm run preview
   ```

¡Listo! Ahora puedes trabajar en tu proyecto React con Vite.
