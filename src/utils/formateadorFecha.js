function agregarCero(num) {
    let numString = num.toString();
    if (numString.length === 1)
        numString = "0" + num;
    return numString;
}

export function obtenerYYYYMMDD(fechaHora) {
    return `${fechaHora.getFullYear()}-${agregarCero(fechaHora.getMonth())}-${agregarCero(fechaHora.getDay())}`
}

export function obtenerHora(fechaHora) {
    return `${agregarCero(fechaHora.getHours())}:${agregarCero(fechaHora.getMinutes())}`
}