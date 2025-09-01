import sensorProximidadModelo from "../modelos/sensorProximidad.modelo.js";
import formatearDatosSensorProximidad from "../utilidades/formateoDatosSensorProximidad.js";

//Metodo get para traer de MongoDB todas las lecturas del sensor de proximidad
export const getLecturasProximidad = async (req, res) => {
    try {
        
        const lecturasProximidad = await sensorProximidadModelo.find({}, "distance is_near timestamp")

        if (!lecturasProximidad) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosLecturasProximidad = formatearDatosSensorProximidad(lecturasProximidad)

        return res.status(200).json(datosFormateadosLecturasProximidad)


    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}

//Metodo get para traer de MongoDB las lecturas del sensor filtrando por fecha y hora
export const getLecturasProximidadFechaHora = async (req, res) => {
    
    const { desde, hasta } = req.query;
    
    try {
        
        const lecturasProximidad = await sensorProximidadModelo.find({
            timestamp: { 
                $gte: new Date(desde), 
                $lte: new Date(hasta) 
            }
        })

        if (!lecturasProximidad) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosLecturasProximidad = formatearDatosSensorProximidad(lecturasProximidad)

        return res.status(200).json(datosFormateadosLecturasProximidad)

    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}