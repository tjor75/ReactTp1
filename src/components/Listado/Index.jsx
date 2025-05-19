import Cita from '../UI/Cita';
import './style.css';

export default function Listado({ citas, setCitas }) {
    let i = 0;
    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita => {
                i++;
                return <Cita
                    key={'cita' + i}
                    cita={cita}
                    setCitas={setCitas}
                />
            })}
        </div>
    );
}