import formatearFecha from "./formateoFecha.js";

function formatearDatosFanVentilador (datosFanVentilador) {
    const datosFormateados = datosFanVentilador.map(item => {
        const fecha = new Date(item.timestamp);

        return {
            room: item.room,
            state: item.state,
            fecha: formatearFecha(fecha), // Formato dd/mm/yyyy
            hora: fecha.toTimeString().split(" ")[0] // hh:mm:ss
        }
    })

    return datosFormateados
}

export default formatearDatosFanVentilador