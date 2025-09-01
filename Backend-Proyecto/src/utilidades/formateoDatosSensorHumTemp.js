import formatearFecha from "./formateoFecha.js";

function formatearDatosSensorHumTemp (lecturasHumTemp) {
    const datosFormateados = lecturasHumTemp.map(item => {
        const fecha = new Date(item.timestamp);

        return {
            temperature: item.temperature,
            humidity: item.humidity,
            fecha: formatearFecha(fecha), // Formato dd/mm/yyyy
            hora: fecha.toTimeString().split(" ")[0] // hh:mm:ss
        }
    })

    return datosFormateados
}

export default formatearDatosSensorHumTemp