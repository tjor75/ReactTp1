import './style.css';

export default function Cita({ cita, setCitas }) {
    const eliminarCita = () => {
        if (confirm('¿Deseas realizar esto?'))
            setCitas(prev => {
                const nuevo = prev.filter(laCita => laCita !== cita);
                localStorage.setItem('citas', JSON.stringify(nuevo));
                return nuevo;
            })
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