import fanVentiladorModelo from "../modelos/fanVentilador.modelo.js";
import formatearDatosFanVentilador from "../utilidades/formateoDatosFanVentilador.js";


//Metogo get para traer de MongoDB todas las lecturas del sensor de temperatura-humedad
export const getDatosFanVentilador = async (req, res) => {
    try {
        
        const datosFanVentilador = await fanVentiladorModelo.find({}, "room state timestamp");

        if (!datosFanVentilador) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosFanVentilador = formatearDatosFanVentilador(datosFanVentilador)

        return res.status(200).json(datosFormateadosFanVentilador)


    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}

//Metodo get para traer de MongoDB los datos del ventilador por fecha y hora
export const getDatosFanVentiladorFechaHora = async (req, res) => {
    
    const { desde, hasta } = req.query;
    
    try {
        
        const datosFanVentilador = await fanVentiladorModelo.find({
            timestamp: { 
                $gte: new Date(desde), 
                $lte: new Date(hasta) 
            }
        })

        if (!datosFanVentilador) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosFanVentilador = formatearDatosFanVentilador(datosFanVentilador)

        return res.status(200).json(datosFormateadosFanVentilador)

    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}