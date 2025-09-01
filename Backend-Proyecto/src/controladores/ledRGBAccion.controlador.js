import clienteMqtt from "../mqtt.js";

export const postLedRGBRojoEncender = async (req, res) => {

    try {
        clienteMqtt.publish('/ilumination', 'LEDRGB:RED');
        console.log('Recibida solicitud para encender el led en rojo:', req.body)
        return res.send("Encendido")
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ mensaje: `${error}`})
    }
}

export const postLedRGBAzulEncender = async (req, res) => {

    try {
        clienteMqtt.publish('/ilumination', 'LEDRGB:BLUE');
        console.log('Recibida solicitud para encender el led en azul:', req.body)
        return res.send("Encendido")
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ mensaje: `${error}`})
    }
}

export const postLedRGBVerdeEncender = async (req, res) => {

    try {
        clienteMqtt.publish('/ilumination', 'LEDRGB:GREEN');
        console.log('Recibida solicitud para encender el led en azul:', req.body)
        return res.send("Encendido")
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ mensaje: `${error}`})
    }
}

export const postLedRGBMagentaEncender = async (req, res) => {

    try {
        clienteMqtt.publish('/ilumination', 'LEDRGB:MAGENTA');
        console.log('Recibida solicitud para encender el led en magenta:', req.body)
        return res.send("Encendido")
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ mensaje: `${error}`})
    }
}

export const postLedRGBCyanEncender = async (req, res) => {

    try {
        clienteMqtt.publish('/ilumination', 'LEDRGB:CYAN');
        console.log('Recibida solicitud para encender el led en cyan:', req.body)
        return res.send("Encendido")
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ mensaje: `${error}`})
    }
}

export const postLedRGBAmarilloEncender = async (req, res) => {

    try {
        clienteMqtt.publish('/ilumination', 'LEDRGB:YELLOW');
        console.log('Recibida solicitud para encender el led en amarillo:', req.body)
        return res.send("Encendido")
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ mensaje: `${error}`})
    }
}

export const postLedRGBBlancoEncender = async (req, res) => {

    try {
        clienteMqtt.publish('/ilumination', 'LEDRGB:WHITE');
        console.log('Recibida solicitud para encender el led en blanco:', req.body)
        return res.send("Encendido")
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ mensaje: `${error}`})
    }
}
export const postLedRGBApagar = async (req, res) => {

    try {
        clienteMqtt.publish('/ilumination', 'LEDRGB:OFF');
        console.log('Recibida solicitud para apagar el led rgb:', req.body)
        return res.send("Apagado")
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ mensaje: `${error}`})
    }
}