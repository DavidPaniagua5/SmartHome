import ledModelo from "../modelos/led.modelo.js";
import formatearDatosLed from "../utilidades/formateoDatosLed.js";


//Metogo get para traer de MongoDB todas los datos de los leds
export const getDatosLed = async (req, res) => {
    try {
        
        const datosLed = await ledModelo.find({}, "name room description type state timestamp");

        if (!datosLed) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosLed = formatearDatosLed(datosLed)

        return res.status(200).json(datosFormateadosLed)


    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}

//Metodo get para traer de MongoDB los datos de los leds por fecha y hora
export const getDatosLedFechaHora = async (req, res) => {
    
    const { desde, hasta } = req.query;
    
    try {
        
        const datosLed = await ledModelo.find({
            timestamp: { 
                $gte: new Date(desde), 
                $lte: new Date(hasta) 
            }
        })

        if (!datosLed) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosLed = formatearDatosLed(datosLed)

        return res.status(200).json(datosFormateadosLed)

    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}