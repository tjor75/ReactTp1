import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import './App.css';

const ITEM_CITAS = 'citas';

function App() {
  const [citas, setCitas] = useState([]);
  
  useEffect(() => {
    const citasGuardadas = localStorage.getItem(ITEM_CITAS);
    if (citasGuardadas.length === 0) {
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className='container'>
        <div className='row'>
          <Formulario setCitas={setCitas} />
          <Listado citas={citas} setCitas={setCitas} />
        </div>
      </div>
    </>
  )
}

export default App
