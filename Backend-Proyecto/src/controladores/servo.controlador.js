import servoModelo from "../modelos/servo.modelo.js";
import formatearDatosServo from "../utilidades/formateoDatosServo.js";


//Metogo get para traer de MongoDB todas las lecturas del sensor de temperatura-humedad
export const getDatosServo = async (req, res) => {
    try {
        
        const datosServo = await servoModelo.find({}, "room type temperature timestamp");

        if (!datosServo) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosServo = formatearDatosServo(datosServo)

        return res.status(200).json(datosFormateadosServo)


    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}

//Metodo get para traer de MongoDB los datos del ventilador por fecha y hora
export const getDatosServoFechaHora = async (req, res) => {
    
    const { desde, hasta } = req.query;
    
    try {
        
        const datosServo = await servoModelo.find({
            timestamp: { 
                $gte: new Date(desde), 
                $lte: new Date(hasta) 
            }
        })

        if (!datosServo) {
            return res.status(404).json({ mensaje: "No se encontraron las lecturas"})
        }

        const datosFormateadosServo = formatearDatosServo(datosServo)

        return res.status(200).json(datosFormateadosServo)

    } catch (error) {
        return res.status(500).json({ message: "Algo ocurrió mal en el servidor" });
    }
}