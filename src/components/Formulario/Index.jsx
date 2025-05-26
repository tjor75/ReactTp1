import { useState } from 'react';
import './style.css';

export default function Formulario({ setCitas }) {
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    const agregarCita = ev => {
        ev.preventDefault();

        if (mascota !== '' && propietario !== '' && fecha !== '' && hora !== '' && sintomas !== '') {
            if (confirm('¿Deseas realizar esto?')) {
                setCitas(prev => {
                    const nuevo = [{mascota, propietario, fecha, hora, sintomas}, ...prev]
                    localStorage.setItem('citas', JSON.stringify(nuevo));
                    return nuevo;
                });
                setMascota('');
                setPropietario('');
                setFecha('');
                setHora('');
                setSintomas('');
            }
        } else {
            alert('Faltan completar campos')
        }
    };

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit={agregarCita}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={ev => setMascota(ev.target.value)} />
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={propietario} onChange={ev => setPropietario(ev.target.value)} />
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={ev => setFecha(ev.target.value)} />
                <label>hora</label>
                <input type="time" name="hora" className="u-full-width" value={hora} onChange={ev => setHora(ev.target.value)} />
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={ev => setSintomas(ev.target.value)} />
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    );
};