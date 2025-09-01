import clienteMqtt from "../mqtt.js";

export const postAccionServo = async (req, res) => {

    try {
        clienteMqtt.publish('/entrance', 'SERVO:ON');
        console.log('Recibida solicitud para encender el servo:', req.body)
        return res.send("Encendido")

    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ mensaje: `${error}`})
    }
}