import formatearFecha from "./formateoFecha.js";

function formatearDatosBuzzer (datosBuzzer) {
    const datosFormateados = datosBuzzer.map(item => {
        const fecha = new Date(item.timestamp);

        return {
            room: item.room,
            type: item.type,
            temperature: item.temperature,
            fecha: formatearFecha(fecha), // Formato dd/mm/yyyy
            hora: fecha.toTimeString().split(" ")[0] // hh:mm:ss
        }
    })

    return datosFormateados
}

export default formatearDatosBuzzer