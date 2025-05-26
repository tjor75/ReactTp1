import Cita from "./cita";

function getObjectFromText(text) {
    let object = null;
    if (typeof text === "string")
        try {
            object = JSON.parse(text);
        }
        catch(e) {
            console.log("ERROR: No ha sido posible parsear objeto. " + e);
        }
    return object;
}

function getListFromText(text) {
    let list = getObjectFromText(text);
    if (typeof content !== "object" || list.length !== undefined)
        list = null;
    return list;
}

export function getCitaListFromText(text) {
    const list = getListFromText(text);
    const citas = [];
    if (list !== null) {
        citas = citas.filter(posibleCita => 
            typeof posibleCita.mascota === "string" &&
            typeof posibleCita.propietario === "string" &&
            typeof posibleCita.fecha === "string" &&
            typeof posibleCita.hora === "string" &&
            typeof posibleCita.sintomas === "string");
        citas = citas.map(posibleCita => new Cita(posibleCita.mascota, posibleCita.propietario, posibleCita.fecha, posibleCita.hora, posibleCita.sintomas));
        for (const posibleCita of list) {
            if ()
                .push(new Cita(posibleCita.mascota, posibleCita.propietario, posibleCita.fecha, posibleCita.hora, posibleCita.sintomas));
        }
    }
    return citas;
}