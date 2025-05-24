import React from 'react'
import Carrusel from './Carrusel'
import Formulario from './Formulario'

function Banner() {
  return (
    <div className="container my-5" style={{ padding: 0 }}>
      <div
        id="inicio"
        className="box"
        style={{
          minHeight: '100vh',
          padding: '60px 20px',
          background: '#f5f5f5',
          textAlign: 'center',
          borderRadius: '12px',
          //marginTop: '110px' // baja el primer container para que no se oculte el título
        }}
      >
        <h1>Bienvenido a Antigüedades Sthandier</h1>

        <Carrusel />
        
      </div>
      <div
        id="sobre-nosotros"
        className="box"
        style={{
          minHeight: '100vh',
          padding: '60px 20px',
          background: '#fff',
          textAlign: 'center',
          borderRadius: '12px',
          //marginTop: '110px' // baja las siguientes secciones también
        }}
      >
        <h2>Sobre Nosotros - Quienes somos </h2>
        <p></p>
      </div>
       <div
        id="productos"
        className="box"
        style={{
          minHeight: '100vh',
          padding: '60px 20px',
          background: '#fff',
          textAlign: 'center',
          borderRadius: '12px',
          //marginTop: '110px' // baja las siguientes secciones también
        }}
      >
        <h2>Nuestros Productos </h2>
        <p></p>
      </div>

         <div
        id="preguntas-frecuentes"
        className="box"
        style={{
          minHeight: '100vh',
          padding: '60px 20px',
          background: '#fff',
          textAlign: 'center',
          borderRadius: '12px',
          //marginTop: '110px' // baja las siguientes secciones también
        }}
      >
        <h2>Preguntas frecuentes </h2>
        <p></p>
      </div>

      <div
        id="contacto"
        className="box"
        style={{
          minHeight: '100vh',
          padding: '60px 20px',
          background: '#e0e7ff',
          textAlign: 'center',
          borderRadius: '12px',
          marginTop: '110px' // baja la última sección
        }}
      >
        <h2>Contactanos</h2>
       
        <Formulario />
      </div>
    </div>
  )
}

export default Banner
