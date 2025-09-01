import formatearFecha from "./formateoFecha.js";

function formatearDatosLedMovimiento (datosLedMovimiento) {
    const datosFormateados = datosLedMovimiento.map(item => {
        const fecha = new Date(item.timestamp);

        return {
            room: item.room,
            type: item.type,
            mov_detected: item.mov_detected,
            fecha: formatearFecha(fecha), // Formato dd/mm/yyyy
            hora: fecha.toTimeString().split(" ")[0] // hh:mm:ss
        }
    })

    return datosFormateados
}

export default formatearDatosLedMovimiento