import clienteMqtt from "../mqtt.js";

export const postWaterPumpActive = async (req, res) => {
    try{ 
        clienteMqtt.publish('/irrigation', 'WATERPUMP:ON')
        return res.status(200).json({mensaje: "WATERPUMP:ON"})
    }catch(error){
        console.error('Error conectando con el ventilador:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}

export const postWaterPumpInactive = async (req, res) => {
    try{ 
        clienteMqtt.publish('/irrigation', 'WATERPUMP:OFF')
        return res.status(200).json({mensaje: "WATERPUMP:OFF"})
    }catch(error){
        console.error('Error conectando con el ventilador:', error)
        res.status(500).json({ mensaje: "Algo ocurrió mal en el servidor"})
    }
}