import formatearFecha from "./formateoFecha.js";

function formatearDatosSensorProximidad (lecturasProximidad) {
    const datosFormateados = lecturasProximidad.map(item => {
        const fecha = new Date(item.timestamp);

        return {
            distance: item.distance,
            is_near: item.is_near,
            fecha: formatearFecha(fecha), // Formato dd/mm/yyyy
            hora: fecha.toTimeString().split(" ")[0] // hh:mm:ss
        }
    })

    return datosFormateados
}

export default formatearDatosSensorProximidad