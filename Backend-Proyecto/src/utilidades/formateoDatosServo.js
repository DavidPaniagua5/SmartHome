import formatearFecha from "./formateoFecha.js";

function formatearDatosServo (datosServo) {
    const datosFormateados = datosServo.map(item => {
        const fecha = new Date(item.timestamp);

        return {
            room: item.room,
            type: item.type,
            fecha: formatearFecha(fecha), // Formato dd/mm/yyyy
            hora: fecha.toTimeString().split(" ")[0] // hh:mm:ss
        }
    })

    return datosFormateados
}

export default formatearDatosServo