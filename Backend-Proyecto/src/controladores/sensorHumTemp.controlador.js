import sensorHumTempModelo from "../modelos/sensorHumTemp.modelo.js";
import formatearDatosSensorHumTemp from "../utilidades/formateoDatosSensorHumTemp.js";


//Metogo get para traer de MongoDB todas las lecturas del sensor de temperatura-humedad
export const getLecturasHumTemp = async (req, res) => {
    try {
        
        const lecturasHumTemp = await sensorHumTempModelo.find({}, "temperature humidity timestamp");

        if (!lecturasHumTemp) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosLecturasHumTemp = formatearDatosSensorHumTemp(lecturasHumTemp)

        return res.status(200).json(datosFormateadosLecturasHumTemp)


    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}

//Metodo get para traer de MongoDB las lecturas del sensor filtrando por fecha y hora
export const getLecturasHumTempFechaHora = async (req, res) => {
    
    const { desde, hasta } = req.query;
    
    try {
        
        const lecturasHumTemp = await sensorHumTempModelo.find({
            timestamp: { 
                $gte: new Date(desde), 
                $lte: new Date(hasta) 
            }
        })

        if (!lecturasHumTemp) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosLecturasHumTemp = formatearDatosSensorHumTemp(lecturasHumTemp)

        return res.status(200).json(datosFormateadosLecturasHumTemp)

    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}