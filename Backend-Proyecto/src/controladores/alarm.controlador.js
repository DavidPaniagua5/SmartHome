import clienteMqtt from "../mqtt.js";

export const postAlarmActive = async (req, res) => {
    try{ 
        clienteMqtt.publish('/alarm', 'ALARM:ON')
        return res.status(200).json({mensaje: "ALARM:ON"})
    }catch(error){
        console.error('Error conectando con el ventilador:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}

export const postAlarmInactive = async (req, res) => {
    try{ 
        clienteMqtt.publish('/alarm', 'ALARM:OFF')
        return res.status(200).json({mensaje: "ALARM:OFF"})
    }catch(error){
        console.error('Error conectando con el ventilador:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}