import { useState } from 'react';
import Cita from '../../utils/Cita';
import './style.css';

export default function Formulario({ setCitas }) {
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    const agregarCita = (e) => {
        e.preventDefault();
        setCitas(prev => [...prev, new Cita(mascota.value, propietario.value, fecha.target.value, hora.target.value, sintomas.value)]);
        //if (mascota !== '' || propietario !== '' || fecha !== '' || hora >)
        //setCitas([])
    };

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit={agregarCita}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={mascota.value} onChange={setMascota} />
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={propietario.value} onChange={setPropietario} />
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" value={fecha.value} onChange={setFecha} />
                <label>hora</label>
                <input type="time" name="hora" className="u-full-width" value={hora.value} onChange={setHora} />
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" value={sintomas.value} onChange={setSintomas} />
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    );
};