import './style.css';

export default function Cita({ cita, setCitas }) { //({ mascota, propietario, fecha, hora, sintomas, setCitas }) {
    const eliminarCita = () => {
        if (confirm('¿Deseas realizar esto?'))
            setCitas(prev => prev.filter(laCita => laCita !== cita))
    };

    return (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button className="button elimnar u-full-width" onClick={eliminarCita}>Eliminar ×</button>
        </div>
    );
};