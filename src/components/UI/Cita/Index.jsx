import { obtenerYYYYMMDD, obtenerHora } from '../../../utils/fecha';
import './style.css';

export default function Cita({ mascota, duenio, fechaHora, sintomas }) {
    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{duenio}</span></p>
            <p>Fecha: <span>{obtenerYYYYMMDD(fechaHora)}</span></p>
            <p>Hora: <span>{obtenerHora(fechaHora)}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    );
};