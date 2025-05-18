import Cita from '../UI/Cita';
import './style.css';

export default function Listado({ citas, setCitas }) {
    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita => (
                <Cita
                    mascota={cita.mascota}
                    propietario={cita.propietario}
                    fecha={cita.fecha}
                    hora={cita.hora}
                    sintomas={cita.sintomas}
                />
            ))}
        </div>
    );
}