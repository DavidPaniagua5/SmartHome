import formatearFecha from "./formateoFecha.js";

function formatearDatosLed (datosLed) {
    const datosFormateados = datosLed.map(item => {
        const fecha = new Date(item.timestamp);

        return {
            name: item.name,
            room: item.room,
            description: item.description,
            type: item.type,
            state: item.state,
            fecha: formatearFecha(fecha), // Formato dd/mm/yyyy
            hora: fecha.toTimeString().split(" ")[0] // hh:mm:ss
        }
    })

    return datosFormateados
}

export default formatearDatosLed