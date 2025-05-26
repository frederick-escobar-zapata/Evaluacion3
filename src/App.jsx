import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componentes/Header'
import Banner from './componentes/Banner'
import Footer from './componentes/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Footer />
      {/* ...aquí puedes agregar el resto del contenido... */}
    </>
  )
}

export default App
