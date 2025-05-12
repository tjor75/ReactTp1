import { useState } from 'react';
import './style.css';

export default function Formulario({ setCitas }) {
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    const agregarCita = () => {
        console.log(hora, fecha);
        //if (mascota !== '' || propietario !== '' || fecha !== '' || hora >)
        //setCitas([])
    };

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={mascota.value} onChange={setMascota} />
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={propietario} onChange={setPropietario} />
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={setFecha} />
                <label>hora</label>
                <input type="time" name="hora" className="u-full-width" value={hora} onChange={setHora} />
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={setSintomas} />
                <button type="submit" className="u-full-width button-primary" onClick={agregarCita}>Agregar Cita</button>
            </form>
        </div>
    );
};