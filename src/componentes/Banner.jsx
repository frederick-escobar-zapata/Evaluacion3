import React from 'react'
import Carrusel from './Carrusel'
import Formulario from './Formulario'
import ApiSecciones from './ApiSecciones'
import ApiPreguntas from './ApiPreguntas'


function Banner() {
  return (
    <div className="container-fluid my-5" style={{ padding: 0 }}>
      <div
        id="inicio"
        className="box"
        style={{
          minHeight: '100vh',
          width: '100%',
          padding: '60px 20px',
          background: '#e0e7ff',
          textAlign: 'center',
          borderRadius: '12px',
          //marginTop: '110px' // baja el primer container para que no se oculte el título
        }}
      >
        <h2>Bienvenido a Antigüedades Sthandier</h2>

        <Carrusel />
        
      </div>
      <div
        id="sobre-nosotros"
        className="box"
        style={{
          minHeight: '100vh',
          width: '100%',
          padding: '60px 20px',
          background: '#adc0ff',
          textAlign: 'center',
          borderRadius: '12px',
        }}
      >
        <h2>Sobre Nosotros - Quiénes somos</h2>
        <ApiSecciones section="sobre-nosotros" /> {/* Pasa el nombre de la sección */}
      </div>
      <div
        id="productos"
        className="box"
        style={{
          minHeight: '100vh',
          width: '100%',
          padding: '60px 20px',
          background: '#e0e7ff',
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
          width: '100%',
          padding: '60px 20px',
          background: '#adc0ff',
          textAlign: 'center',
          borderRadius: '12px',
        }}
      >
        <h2>Preguntas frecuentes</h2>
        <ApiPreguntas section="preguntas-frecuentes" /> {/* Pasa el nombre de la sección */}
      </div>

      <div
        id="contacto"
        className="box"
        style={{
          minHeight: '100vh',
          width: '100%',
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
