import buzzerModelo from "../modelos/buzzer.modelo.js";
import formatearDatosBuzzer from "../utilidades/formateoDatosBuzzer.js";


//Metogo get para traer de MongoDB todas las lecturas del sensor de temperatura-humedad
export const getDatosBuzzer = async (req, res) => {
    try {
        
        const datosBuzzer = await buzzerModelo.find({}, "room type temperature timestamp");

        if (!datosBuzzer) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosBuzzer = formatearDatosBuzzer(datosBuzzer)

        return res.status(200).json(datosFormateadosBuzzer)


    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}

//Metodo get para traer de MongoDB los datos del ventilador por fecha y hora
export const getDatosBuzzerFechaHora = async (req, res) => {
    
    const { desde, hasta } = req.query;
    
    try {
        
        const datosBuzzer = await buzzerModelo.find({
            timestamp: { 
                $gte: new Date(desde), 
                $lte: new Date(hasta) 
            }
        })

        if (!datosBuzzer) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosBuzzer = formatearDatosBuzzer(datosBuzzer)

        return res.status(200).json(datosFormateadosBuzzer)

    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}