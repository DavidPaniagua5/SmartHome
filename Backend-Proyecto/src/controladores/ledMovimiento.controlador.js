import ledMovimientoModelo from "../modelos/ledMovimiento.modelo.js";
import formatearDatosLedMovimiento from "../utilidades/formateoDatosLedMovimiento.js";


//Metogo get para traer de MongoDB todas las lecturas del sensor de temperatura-humedad
export const getDatosLedMovimiento = async (req, res) => {
    try {
        
        const datosLedMovimiento = await ledMovimientoModelo.find({}, "room type mov_detected timestamp");

        if (!datosLedMovimiento) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosLedMovimiento = formatearDatosLedMovimiento(datosLedMovimiento)

        return res.status(200).json(datosFormateadosLedMovimiento)


    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}

//Metodo get para traer de MongoDB los datos del ventilador por fecha y hora
export const getDatosLedMovimientoFechaHora = async (req, res) => {
    
    const { desde, hasta } = req.query;
    
    try {
        
        const datosLedMovimiento = await ledMovimientoModelo.find({
            timestamp: { 
                $gte: new Date(desde), 
                $lte: new Date(hasta) 
            }
        })

        if (!datosLedMovimiento) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosLedMovimiento = formatearDatosLedMovimiento(datosLedMovimiento)

        return res.status(200).json(datosFormateadosLedMovimiento)

    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}