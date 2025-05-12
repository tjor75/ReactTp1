import Cita from '../UI/Cita';
import './style.css';

export default function Listado({ citas, setCitas }) {
    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            <Cita nombre="Nina" duenio="Martin" fechaHora={new Date("2021-08-05 08:20")} sintomas="Le duele la pierna" />
            <Cita nombre="Sifon" duenio="Flecha" fechaHora={new Date("2023-08-05 09:24")} sintomas="Duerme mucho" />
            <Cita nombre="Floki" duenio="Ari" fechaHora={new Date("2023-08-05 16:15")} sintomas="No está comiendo" />
        </div>
    );
}