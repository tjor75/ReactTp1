import Formulario from './components/Formulario'
import Listado from './components/Listado'
import './App.css'

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <Formulario />
          <Listado />
        </div>
      </div>
    </>
  )
}

export default App
