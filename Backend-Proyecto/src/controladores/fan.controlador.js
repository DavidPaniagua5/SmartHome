import clienteMqtt from "../mqtt.js";

export const postFanActive = async (req, res) => {
    try{ 
        clienteMqtt.publish('/ventilation', 'FAN:ON')
        return res.status(200).json({mensaje: "FAN:ON"})
    }catch(error){
        console.error('Error conectando con el ventilador:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}

export const postFanInactive = async (req, res) => {
    try{ 
        clienteMqtt.publish('/ventilation', 'FAN:OFF')
        return res.status(200).json({mensaje: "FAN:OFF"})
    }catch(error){
        console.error('Error conectando con el ventilador:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}